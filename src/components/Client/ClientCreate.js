import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ClientCreate = () => {

  //define state
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  //define state validation
  const [validation, setValidation] = useState([]);

  const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};


  //define navigate
  const navigate = useNavigate();

  const storeData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    //append data to formData
    formData.append('title', title);
    formData.append('image', image);

    // send data to server
    axios
    .post('http://127.0.0.1:8000/api/v1/cms/clients', formData)
    .then((data) => {
      swal('Success', 'Create Data Successfully', 'success');
      navigate('/client');
    })
    .catch((response) => {
      setValidation(response.response.data.data);

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
                <span><i className="bi bi-table me-2"></i></span> Client Create
                <Link to='/client' className="btn btn-success float-end">
                  Back
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={storeData}>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control has-validation" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
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
                    <input type="file" className="form-control" name="image" onChange={changeHandler} placeholder="Image"/>
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

export default ClientCreate;