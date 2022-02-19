import NavigationBar from "./components/NavigationBar";
import Bible from "./renderApp/Bible";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Forum from "./components/Forum";






// this functional component will render the app
export default function App(props) {
  
  return (
    <Router>
      <NavigationBar />
     
      <Routes>
     
      <Route path = '/' element = {<Bible/>}/ >
      <Route path = '/forum' element = {<Forum />}/ >
    </Routes>
    <Footer/>
    </Router>

  );
}
