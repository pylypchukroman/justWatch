import axios from 'axios';
export { getServiceInfo };
export { getSeriesList };
export { getSerial };
export { getSeasonInfo };
export { getMostViewedShowsOfYear };
export { getPopularToday };
export { getMostViewedShowsOfGenre };

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: 'b30723d90054545e6fdab6d6887d20fb',
  language: 'en-US',
};

async function getServiceInfo(id) {
  const response = await axios
    .get(`/3/network/${id}`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
  return response;
}

async function getSeriesList(id, page) {
  const response = axios
    .get(`/3/discover/tv?&with_networks=${id}&page=${page}`)
    .then(res => res.data.results)
    .catch(error => {
      throw error;
    });
  return response;
}

async function getSerial(id) {
  const response = axios
    .get(`/3/tv/${id}`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
  return response;
}

async function getSeasonInfo(serialId, seasonNumber) {
  const response = axios
    .get(`/3/tv/${serialId}/season/${seasonNumber}`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
  return response;
}

async function getMostViewedShowsOfYear() {
  const response = axios
    .get(`/3/discover/tv?&sort_by=popularity.desc&with_networks=213`)
    .then(res => res.data.results)
    .catch(error => {
      throw error;
    });
  return response;
}

async function getPopularToday() {
  const response = axios
    .get(`/3/tv/popular`)
    .then(res => res.data.results)
    .catch(error => {
      throw error;
    });
  return response;
}

async function getMostViewedShowsOfGenre() {
  const response = axios
    .get(`/3/discover/movie?&sort_by=popularity.desc&with_genres=35`)
    .then(res => res.data.results)
    .catch(error => {
      throw error;
    });
  return response;
}
