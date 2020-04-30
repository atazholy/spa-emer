import React from 'react';
import Header from './components/header'
import Login from './components/login'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="container-fluid position-relative">
      <Header />
      <Login />

      <Footer />
    </div>
  );
}

export default App;
