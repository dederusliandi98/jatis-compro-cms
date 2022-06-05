import { Link } from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import swal from 'sweetalert';
import { Button } from 'react-bootstrap-buttons';

const TestimonialList = () => {
  
  const [testimonials, setTestimonial] = useState([])

    useEffect(()=>{
        fetchTestimonials() 
    },[])

    const fetchTestimonials = async () => {
      await axios.get(`http://127.0.0.1:8000/api/v1/cms/testimonials`).then(({data})=>{
        setTestimonial(data.data)
      })
    }

    const deleteTeam = async (id) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`http://127.0.0.1:8000/api/v1/cms/testimonials/${id}`).then(({data})=>{
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
              fetchTestimonials()
            }).catch(({response:{data}})=>{
              swal("error!", {
                icon: "error",
              });
            })
        } else {
          swal("Your imaginary file is safe!");
          return;
        }
      });        
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
                <span><i className="bi bi-table me-2"></i></span> Testimonial List

                <Link to='/testimonial/create' className="btn btn-primary float-end">
                  Add Data
                </Link>

              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    id="example"
                    className="table table-striped"
                    style={{width: '100%'}}
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created By</th>
                        <th width="200px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      testimonials.length > 0 && (
                        testimonials.map((row, key)=>(
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{row.name}</td>
                            <td>{row.description}</td>
                            <td>{row.user.name}</td>
                            <td>
                              <Link to={`/team/${row.id}/edit`} className="btn btn-warning" style={{margin:'2px'}}>
                                Edit
                              </Link>
    
                              <Button variant="danger" onClick={()=>deleteTeam(row.id)} className="btn btn-danger" style={{margin:'2px'}}>
                                Delete
                              </Button>
                          </td>
                          </tr>
                        ))
                        )
                      }
                  </tbody>
                    <tfoot>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created By</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TestimonialList;