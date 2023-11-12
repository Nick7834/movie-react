import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { FilmPage } from './Pages/FilmPage/FilmPage'
import { ScrollToTop } from './ScrollTop/ScrollTop'
import { Movie } from './Pages/Movie/Movie'
import { Tv } from './Pages/Tv/Tv'


export const Router = () => {
  return (
    <HashRouter>
      <ScrollToTop>
        <Routes>
              <Route element={<App />} path='/' />
              <Route element={<FilmPage />} path='/film/:id' />
              <Route element={<Movie />} path='/movie' />
              <Route element={<Tv />} path='/tv_show' />
              <Route path='*' element={<div>Not Found!</div>} />
        </Routes>
      </ScrollToTop>
    </HashRouter>
  )
}
