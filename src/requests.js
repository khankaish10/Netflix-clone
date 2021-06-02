const API_KEY = '4bb4a1281a37ea3ea49882f69adf501b'

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchHorrorOriginal: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    fetchComedyOriginal: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchActionOriginal: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
    fetchRomanceOriginal: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;