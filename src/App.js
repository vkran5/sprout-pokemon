import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavbarComponent";
import LandingPage from "./Pages/LandingPage";
import { COOKIE_EXP, API_URL } from "./helper";
import Cookies from "js-cookie";
import axios from "axios";

function App() {

  let token = Cookies.get('postyLog');

  const keepLogin = async () => {
    try {
      if (token) {
        let resUser = await axios.get(API_URL + '/auth/keep_login', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (resUser.data.success) {
          Cookies.set('postyLog', resUser.data.token, { expires: COOKIE_EXP });
          console.log(resUser.data.user);
          delete resUser.data.token
        }
      }

    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   keepLogin();
  // }, [])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
