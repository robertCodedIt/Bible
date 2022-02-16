import NavigationBar from "./components/NavigationBar";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';






// this functional component will render the app
export default function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
      <Route path='/' element = {<Layout/>}/ >
      <Route path = '/footer' element = {<Footer/>}/ >
    </Routes>
    </Router>

  );
}
function Layout() {
  return (
    <div>
      
      
      <nav>
        <Link to="invoices">Invoices</Link> |{" "}
        <Link to="dashboard">Dashboard</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
