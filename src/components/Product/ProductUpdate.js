import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate,useParams } from 'react-router-dom';
import swal from 'sweetalert';

const ProductUpdate = () => {

  // define id
  const {id} = useParams();

  //define state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState();
  const [detail, setDetail] = useState({});

  //define state validation
  const [validation, setValidation] = useState([]);

  useEffect(() => {
    axios
    .get(`http://127.0.0.1:8000/api/v1/cms/products/${id}`)
    .then((res) => {
      setTitle(res.data.data.title);
      setDescription(res.data.data.description);
      setDetail(res.data.data);
    })

    .catch((error) => {
      setValidation(error.response.data.data);
    })
  }, [id]);

  const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};


  //define navigate
  const navigate = useNavigate();

  const storeData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    //append data to formData
    formData.append('_method', 'PATCH');
    formData.append('title', title);
    formData.append('image', image);
    formData.append('description', description);

    // send data to server
    axios
    .post(`http://127.0.0.1:8000/api/v1/cms/products/${id}`, formData)
    .then((response) => {
      swal('Success', 'Update Data Successfully', 'success');
      navigate('/product');
    })
    .catch((response) => {
      if(response.status===422){
        setValidation(response.response.data.data);
      }else{
        console.log(response);
      }
    })
  }

  return (
    <main className="mt-5 pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h4>Dashboard</h4>
          </div>
          <hr />

        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="card">
              <div className="card-header">
                <span><i className="bi bi-table me-2"></i></span> Product Create
                <Link to='/product' className="btn btn-success float-end">
                  Back
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={storeData}>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control has-validation" defaultValue={detail.title} onChange={(e) => setTitle(e.target.value)} name="title" placeholder="name"/>
                    {
                      validation.title && (
                        <div className="alert alert-danger" style={{ marginTop:'5px' }}>
                          {validation.title[0]}<br/>
                        </div>
                      )
                    }
                    <br />
                    
                  </div>
                  <div className="form-group">
                    <label>Image</label>
                    <input type="file" className="form-control" onChange={changeHandler} placeholder="Image"/>
                    {
                      validation.image && (
                        <div className="alert alert-danger" style={{ marginTop:'5px' }}>
                          {validation.image[0]}<br/>
                        </div>
                      )
                    }
                    <br />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control has-validation" defaultValue={detail.description} onChange={(e) => setDescription(e.target.value)} name="Description" placeholder="name"/>
                    {
                      validation.description && (
                        <div className="alert alert-danger" style={{ marginTop:'5px' }}>
                          {validation.description[0]}<br/>
                        </div>
                      )
                    }
                    <br />
                    
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                  </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductUpdate;