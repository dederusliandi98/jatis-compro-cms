const Home = () => {
  return (
    <main className="mt-5 pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h4>Dashboard</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card bg-primary text-white h-100">
              <div className="card-body py-5">Total Inbox - 1280</div>
              <div className="card-footer d-flex">
                View Details
                <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-warning text-dark h-100">
              <div className="card-body py-5">Total Product - 80</div>
              <div className="card-footer d-flex">
                View Details
                <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white h-100">
              <div className="card-body py-5">Total Portfolio - 90</div>
              <div className="card-footer d-flex">
                View Details
                <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-danger text-white h-100">
              <div className="card-body py-5">Total Client - 1980</div>
              <div className="card-footer d-flex">
                View Details
                <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card h-100">
              <div className="card-header">
                <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                Area Chart Example
              </div>
              <div className="card-body">
                <canvas className="chart" width="400" height="200"></canvas>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card h-100">
              <div className="card-header">
                <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                Area Chart Example
              </div>
              <div className="card-body">
                <canvas className="chart" width="400" height="200"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="card">
              <div className="card-header">
                <span><i className="bi bi-table me-2"></i></span> Data Table
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    id="example"
                    className="table table-striped data-table"
                    style={{width: '100%'}}
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                      </tr>
                      <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                      </tr>
                      <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                      </tr>
                      <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012/03/29</td>
                        <td>$433,060</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
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

export default Home;