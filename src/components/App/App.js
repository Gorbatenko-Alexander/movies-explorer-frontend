import "./App.css";
import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {mainApi} from "../../utils/MainApi";
import {auth} from "../../utils/Auth";

import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import AllMovies from "../AllMovies/AllMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoPopup from "../infoPopup/infoPopup";

function App() {
  const [currentUser, setCurrentUser] = React.useState({loggedIn: !!localStorage.getItem('jwt')});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [infoText, setInfoText] = React.useState('');

  const navigate = useNavigate();

  const authenticate = () => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      mainApi.headers.authorization = '';
      setCurrentUser({});
      return Promise.resolve();
    }
    return auth.checkToken(jwt)
      .then((res) => {
        mainApi.headers.authorization = 'Bearer ' + jwt;
        setCurrentUser({loggedIn: true, ...res});
      })
      .then(() => {
        return mainApi.getMovies()
          .then((res) => {
            setSavedMovies(res.toReversed());
          });
      })
      .catch((err) => {
        setInfoText(err);
        localStorage.removeItem('jwt');
        setCurrentUser({});
      });
  }

  const handleLogin = (password, email, setIsDisabled) => {
    return auth.login(password, email)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        return authenticate()
          .then(() => {
            setIsDisabled(false);
            navigate('/movies');
          })
      })
      .catch((err) => {
        setIsDisabled(false);
        setInfoText(err);
      });
  }

  const handleRegister = (name, password, email, setIsDisabled) => {
    auth.register(name, password, email)
      .then(() => {
        return handleLogin(password, email, setIsDisabled);
      })
      .then(() => {
        setInfoText('Успешная регистрация');
      })
      .catch((err) => {
        setIsDisabled(false);
        setInfoText(err);
      });
  }

  const handleEdit = (userInfo) => {
    return mainApi.changeUserInfo(userInfo)
      .then((res) => {
        setCurrentUser({loggedIn: true, ...res});
        setInfoText('Данные успешно изменены');
      })
      .catch((err) => {
        setInfoText(err);
      });
  }

  const handleLike = (movie) => {
    mainApi.addMovie(movie)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => {
        setInfoText(err);
      });
  }

  const handleUnlike = (movieId) => {
    const movie = savedMovies.find((movie) => movie.movieId === movieId)

    mainApi.deleteMovie(!!movie && movie._id)
      .then((res) => {
        setSavedMovies([...savedMovies].filter((m) => !(m.movieId === res.movieId)));
      })
      .catch((err) => {
        setInfoText(err);
      });
  }

  const handleLogout = () => {
    localStorage.clear();
    authenticate()
      .catch((err) => {
        setInfoText(err);
      });
  }

  React.useEffect(() => {
    authenticate()
      .catch((err) => {
        setInfoText(err);
      });
  }, []);

  React.useEffect(() => {
    if (infoText === '') document.body.style.overflow = ""
    else document.body.style.overflow = "hidden";
  }, [infoText]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Login handleLogin={handleLogin} />} />
          <Route path='/signup' element={<Register handleRegister={handleRegister} />} />
          <Route path='/movies' element={
            <ProtectedRoute isLoggedIn={currentUser.loggedIn}>
              <AllMovies handleLike={handleLike} handleUnlike={handleUnlike} savedMovies={savedMovies} />
            </ProtectedRoute>
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute isLoggedIn={currentUser.loggedIn}>
              <SavedMovies handleUnlike={handleUnlike} savedMovies={savedMovies} />
            </ProtectedRoute>
          } />
          <Route path='/profile' element={
            <ProtectedRoute isLoggedIn={currentUser.loggedIn}>
              <Profile handleEdit={handleEdit} handleLogout={handleLogout}/>
            </ProtectedRoute>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <InfoPopup isOpened={(infoText !== '')} text={infoText} onClose={() => {setInfoText('')}} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
