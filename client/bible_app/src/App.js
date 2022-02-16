import NavigationBar from "./components/NavigationBar";
import Bible from "./renderApp/Bible";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';






// this functional component will render the app
export default function App(props) {
  return (
    <Router>
      <NavigationBar />
      <Routes>
     
      <Route path = '/' element = {<Bible />}/ >
    </Routes>
    <Footer/>
    </Router>

  );
}
