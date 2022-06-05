import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import swal from 'sweetalert';

const TestimonialUpdate = () => {

  // define id
  const {id} = useParams();

  //define state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [detail, setDetail] = useState({});

  //define state validation
  const [validation, setValidation] = useState([]);

  useEffect(() => {
    axios
    .get(`http://127.0.0.1:8000/api/v1/cms/testimonials/${id}`)
    .then((res) => {
      setName(res.data.data.name);
      setDescription(res.data.data.description);
      setDetail(res.data.data);
    })
    .catch((error) => {
      setValidation(error.response.data.data);
    })
  }, [id]);

  //define navigate
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    //append data to formData
    formData.append('_method', 'PATCH');
    formData.append('name', name);
    formData.append('description', description);

    // send data to server
    axios
    .post(`http://127.0.0.1:8000/api/v1/cms/testimonials/${id}`, formData)
    .then((res) => {
      swal('Success', 'Update Data Successfully', 'success');
      navigate('/testimonial');
    })
    .catch((error) => {
      setValidation(error.response.data.data);
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
                <span><i className="bi bi-table me-2"></i></span> testimonial Create
                <Link to='/testimonial' className="btn btn-success float-end">
                  Back
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label>name</label>
                    <input type="text" className="form-control has-validation" defaultValue={detail.name} onChange={(e) => setName(e.target.value)} name="name" placeholder="name"/>
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
                    <label>description</label>
                    <input type="text" className="form-control has-validation" defaultValue={detail.description} onChange={(e) => setDescription(e.target.value)} name="description" placeholder="Description"/>
                    {
                      validation.description && (
                        <div className="alert alert-danger" style={{ marginTop:'5px' }}>
                          {validation.description[0]}<br/>
                        </div>
                      )
                    }
                    <br />
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

export default TestimonialUpdate;