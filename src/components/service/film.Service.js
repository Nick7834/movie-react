import axios from "axios";

const api_key = '65f680c3-161e-4706-8c05-dc556e90d4e8';
const api_key_filmID = 'd274e56f-f086-481e-a722-29f85fa01baf';
const api__poster = '074dcdf3-a07d-4846-bc97-01580169ed46';
const api__budget = 'c75d1e4d-95e5-4645-b559-d15c7f3cdccd8';
const api__video = '155416e2-c185-471b-bfac-31b307eceb29';
const api__simiFilms = '2405b419-17bc-4d42-8bbe-7ce7787a6296';
const api_search = '9abd2e64-5765-4d27-a4c8-3511edefda07';
 
export const FilmService = {

    // films data
    
    async getFilms(url) {
        const resp = await axios.get(url, {
            headers: {
                'X-API-KEY': api_key,
                'Content-Type': 'application/json',
            },
          });

        return resp.data
    },

    // film page data

    async getFilmPages(url) {
      const resp = await axios.get(url, {
            headers: {
                'X-API-KEY': api_key_filmID,
                'Content-Type': 'application/json',
            },
          });

          return resp.data;
    },

    async getPosters(url) {
        const resp = await axios.get(url, {
            headers: {
                'X-API-KEY': api__video,
                'Content-Type': 'application/json',
            },
          });

          return resp.data;
    },

    async getVideos(url) {
        const resp = await axios.get(url, {
            headers: {
                'X-API-KEY': api__poster,
                'Content-Type': 'application/json',
            },
          });

          return resp.data;
    },

    async getBudget(url) {
        const resp = await axios.get(url, {
            headers: {
                'X-API-KEY': api__budget,
                'Content-Type': 'application/json',
            },
          });

          return resp.data;
    },

    async getSimis(url) {
        const resp = await axios.get(url, {
            headers: {
                'X-API-KEY': api__simiFilms,
                'Content-Type': 'application/json',
            },
          });

          return resp.data;
    },

    // seach

    async getSearch(url) {
        const resp = await axios.get(url, {
            headers: {
                'X-API-KEY': api_search,
                'Content-Type': 'application/json',
            },
          });

          return resp.data;
    }

}