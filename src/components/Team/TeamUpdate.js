import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate,useParams } from 'react-router-dom';
import swal from 'sweetalert';

const TeamUpdate = () => {

  // define id
  const {id} = useParams();


  //define state
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState();
  const [detail, setDetail] = useState({});

  //define state validation
  const [validation, setValidation] = useState([]);

  useEffect(() => {
    axios
    .get(`http://127.0.0.1:8000/api/v1/cms/teams/${id}`)
    .then((res) => {
      setName(res.data.data.name);
      setPosition(res.data.data.position);
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
    formData.append('name', name);
    formData.append('image', image);
    formData.append('position', position);

    // send data to server
    axios
    .post(`http://127.0.0.1:8000/api/v1/cms/teams/${id}`, formData)
    .then((response) => {
      swal('Success', 'Update Data Successfully', 'success');
      console.log('berhasil');

      navigate('/team');
    })
    .catch((error) => {
      console.log('ada');
      console.log(error);
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
                <span><i className="bi bi-table me-2"></i></span> team Create
                <Link to='/team' className="btn btn-success float-end">
                  Back
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={storeData}>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control has-validation" defaultValue={detail.name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name"/>
                    {
                      validation.name && (
                        <div className="alert alert-danger" style={{ marginTop:'5px' }}>
                          {validation.name[0]}<br/>
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
                    <label>Position</label>
                    <input type="text" className="form-control has-validation" defaultValue={detail.position} onChange={(e) => setPosition(e.target.value)} name="position" placeholder="Position"/>
                    {
                      validation.name && (
                        <div className="alert alert-danger" style={{ marginTop:'5px' }}>
                          {validation.name[0]}<br/>
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

export default TeamUpdate;