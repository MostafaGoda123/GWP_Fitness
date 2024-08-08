
export const url = `https://exercisedb.p.rapidapi.com`
export const exerciseOptions = {
   method: 'GET',
   headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
   },
};
export const youtubeSearchOptions = {
   method: 'GET',
   headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
   }
};

export const fetchData = async ( url , options ) => {
   let response = await fetch(url , options);
   let data = await response.json();
   return data ;
}