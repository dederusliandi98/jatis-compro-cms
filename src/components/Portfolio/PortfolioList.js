import { Link } from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import swal from 'sweetalert';
import { Button } from 'react-bootstrap-buttons';

const PortfolioList = () => {
  
  const [portfolios, setPortfolios] = useState([])

    useEffect(()=>{
        fetchPortfolios() 
    },[])

    const fetchPortfolios = async () => {
      await axios.get(`http://127.0.0.1:8000/api/v1/cms/portfolios`).then(({data})=>{
        setPortfolios(data.data)
      })
    }

    const deletePortfolio = async (id) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`http://127.0.0.1:8000/api/v1/cms/portfolios/${id}`).then(({data})=>{
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
              fetchPortfolios()
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
                <span><i className="bi bi-table me-2"></i></span> Portfolio List

                <Link to='/portfolio/create' className="btn btn-primary float-end">
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
                        <th>Image</th>
                        <th>Created By</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      portfolios.length > 0 && (
                        portfolios.map((row, key)=>(
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{row.title}</td>
                            <td><img src={row.image} alt="" width="72px"/></td>
                            <td>{row.user.name}</td>
                            <td>
                              <Link to={`/portfolio/${row.id}/edit`} className="btn btn-warning" style={{margin:'2px'}}>
                                Edit
                              </Link>
    
                              <Button variant="danger" onClick={()=>deletePortfolio(row.id)} className="btn btn-danger" style={{margin:'2px'}}>
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
                        <th>Title</th>
                        <th>Image</th>
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

export default PortfolioList;