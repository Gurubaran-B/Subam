import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/UI_UX/Home/Home';
import Ios from './pages/UI_UX/Development/IosDevelopment';
import Android from './pages/UI_UX/Development/AndroidDevelopment';
import WebApp from './pages/UI_UX/Development/WebAppDevelopment';
import Quality from './pages/UI_UX/Development/Quality';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Mvp from './pages/UI_UX/Development/Mvp';
import Project from './pages/UI_UX/Development/Project';
import Tech from './pages/UI_UX/Development/Tech';
import Service from './pages/UI_UX/Development/Service';
import Careers from './pages/UI_UX/Development/Careers';
import Contact from './pages/UI_UX/Development/Contact';
import About from './pages/UI_UX/Development/AboutUs';

function App() {
  return (
    <div>
      <Router>
        <Header/>
          <div className="App">
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/iOS'> 
              <Ios />
            </Route>

            <Route exact path='/Android'>
              <Android />
            </Route>

            <Route exact path='/WebApp'>
              <WebApp />
            </Route>

            <Route exact path='/Quality'>
              <Quality />
            </Route>

            <Route exact path='/mvp'>
              <Mvp />
            </Route>

            <Route exact path='/ProjectManagement'>
              <Project/>
            </Route>

            <Route exact path='/Tech'>
              <Tech/>
            </Route> 

            <Route exact path='/Service'>
              <Service/>
            </Route> 

            <Route exact path='/Careers'>
              <Careers/>
            </Route>

            <Route exact path='/Contact'>
              <Contact/>
            </Route> 

            <Route exact path='/About'>
              <About/>
            </Route> 
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
