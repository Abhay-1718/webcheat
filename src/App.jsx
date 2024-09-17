import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthRoute from './AuthRoute'; 
import Auth from './components/login/Auth'; 
import WebFront from './WebFront'; 
import { Html, Css, Tailwind, Bootstrap } from './webcomp/Basic-Web/index'
import {React, Angular, Flask, Vue, SpringBoot, Django, Express } from './webcomp/Frameworks/index'
import { Java, Ts, Js, Kotlin, Rust, Go , Php, Python } from './webcomp/Lang/index';


function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the authentication page */}
        <Route path="/" element={<AuthRoute element={<Auth />} />} />
        
        {/* Protected route for authenticated users */}
        <Route path="/WebFront" element={<WebFront />} />

        {/* Routes for the  web components */}
        <Route path="/html" element={<Html />} />
        <Route path="/Css" element={<Css />} />
        <Route path="/Tailwind" element={<Tailwind />} />
        <Route path="/Bootstrap" element={<Bootstrap />} />
        
        {/* routes for the framework */}
        <Route path="/React" element={<React />} />
        <Route path="/Angular" element={<Angular />} />
        <Route path="/Flask" element={<Flask />} />
        <Route path="/SpringBoot" element={<SpringBoot />} />
        <Route path="/Vue" element={<Vue />} />
        <Route path="/Django" element={<Django />} />
        <Route path="/Express" element={<Express />} />
      
       
        
        {/* routes for the lang */}
        <Route path='/Java' element={<Java />} />
        <Route path='/Python' element={<Python />} />
        <Route path='/Php' element={<Php />} />
        <Route path='/Kotlin' element={<Kotlin />} />
        <Route path='/Go' element={<Go />} />
        <Route path='/Rust' element={<Rust />} />
        <Route path='/Js' element={<Js />} />
        <Route path='/Ts' element={<Ts />} />
       


        
        {/* Default redirect if accessing an undefined route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
