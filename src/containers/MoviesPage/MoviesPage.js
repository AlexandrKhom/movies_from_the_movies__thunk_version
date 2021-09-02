import {useEffect} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import styles from "./MoviesPage.module.css";
import {Footer, Header, Hide, MovieInfo, MoviesList} from "../../components";
import {setMovies} from "../../redux";

export const MoviesPage = () => {
    const dispatch = useDispatch();
  const { search } = useLocation();

  const { genres, theme } = useSelector(({ genres: { genres }, theme: { theme } }) => ({ genres, theme }));

  useEffect(() => {
      dispatch(setMovies(search, genres));
  }, [genres, search]);

  return (
      <>
        <Hide/>
        <Header/>
      <div className={`${styles.movies_page} ${theme ? styles.dark : styles.white}`}>
        <Switch>
          <Route exact path="/movies/:id" component={MovieInfo}/>
          <Route path="/movies" component={MoviesList}/>
        </Switch>
      </div>
        <Footer/>
      </>
  );
}
