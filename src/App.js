import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Layouts/Navigation';
import Sidebar from './components/Layouts/Sidebar';
import Home from './components/Layouts/Home';


// import client
import ClientList from './components/Client/ClientList';
import PortfolioList from './components/Portfolio/PortfolioList';
import ProductList from './components/Product/ProductList';
import TeamList from './components/Team/TeamList';
import TestimonialList from './components/Testimonial/TestimonialList';
import InformationEdit from './components/Information/InformationEdit';
import ContactList from './components/Contact/ContactList';
import ClientCreate from './components/Client/ClientCreate';
import PortfolioCreate from './components/Portfolio/PortfolioCreate';
import ProductCreate from './components/Product/ProductCreate';
import TestimonialCreate from './components/Testimonial/TestimonialCreate';
import TeamCreate from './components/Team/TeamCreate';
import TestimonialUpdate from './components/Testimonial/TestimonialUpdate';
import ClientUpdate from './components/Client/ClientUpdate';
import PortfolioUpdate from './components/Portfolio/PortfolioUpdate';
import ProductUpdate from './components/Product/ProductUpdate';
import TeamUpdate from './components/Team/TeamUpdate';

function App() {
  return (
    <div>
      <Navigation />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/client" element={<ClientList />}></Route>
        <Route path="/client/create" element={<ClientCreate />}></Route>
        <Route path="/client/:id/edit" element={<ClientUpdate />}></Route>

        <Route path="/contact" element={<ContactList />}></Route>

        <Route path="/portfolio" element={<PortfolioList />}></Route>
        <Route path="/portfolio/create" element={<PortfolioCreate />}></Route>
        <Route path="/portfolio/:id/edit" element={<PortfolioUpdate />}></Route>

        <Route path="/product" element={<ProductList />}></Route>
        <Route path="/product/create" element={<ProductCreate />}></Route>
        <Route path="/product/:id/edit" element={<ProductUpdate />}></Route>

        <Route path="/team" element={<TeamList />}></Route>
        <Route path="/team/create" element={<TeamCreate />}></Route>
        <Route path="/team/:id/edit" element={<TeamUpdate />}></Route>

        <Route path="/testimonial" element={<TestimonialList />}></Route>
        <Route path="/testimonial/create" element={<TestimonialCreate />}></Route>
        <Route path="/testimonial/:id/edit" element={<TestimonialUpdate />}></Route>

        <Route path="/information" element={<InformationEdit />}></Route>
    </Routes>
    </div>
  );
}

export default App;
