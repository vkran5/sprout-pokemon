import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavbarComponent";
import NotFoundPage from "./Pages/404Page";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import PostDetails from "./Pages/PostDetailPage";
import ProfilePage from "./Pages/ProfilePage";
import { COOKIE_EXP, API_URL } from "./helper";
import Cookies from "js-cookie";
import axios from "axios";
import FurnitureLandingPage from "./Pages/FurnitureLandingPage";

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
  }

  useEffect(() => {
    keepLogin();
  }, [])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/error' element={<NotFoundPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/post_detail' element={<PostDetails />} />
        <Route path='/profile' element={<ProfilePage />} />


        <Route path='/home_furniture' element={<FurnitureLandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
