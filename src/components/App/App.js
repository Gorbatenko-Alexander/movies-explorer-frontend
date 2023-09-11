import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import { moviesArray, savedMoviesArray } from "../../utils/moviesArray"

function App() {
  const [size, setSize] = React.useState(document.documentElement.clientWidth);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(document.documentElement.clientWidth);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies cards={moviesArray} size={size} />} />
        <Route path='/saved-movies' element={<Movies cards={savedMoviesArray} size={size} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
