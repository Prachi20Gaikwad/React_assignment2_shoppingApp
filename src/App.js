import './App.css';
import Products from './components/Products';
import Product from './components/Product';
import Home from './components/Home';
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from './components/About';
import Contact from './components/Contact';
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState({});
  const [IsSignedIn, setIsSignedIn] = useState(false);

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    setIsSignedIn(true);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    setIsSignedIn(false);
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "1024960509808-6rqdknpet2odqdf16mu86tvh6folv7d4.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // google.accounts.id.prompt();
  }, []);



  return (

    <div className="App">
      {!IsSignedIn && (
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            margin: "auto",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            height: "100vh",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Sign In</h1>
          <div id="signInDiv"></div>
        </div>
      )}
      {IsSignedIn && (
        <div>
          <Navbar handleSignOut={handleSignOut} />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/products/:id" element={<Product />} />
          </Routes>
        </div>

      )
      };

    </div>
  );
};

export default App;
