export const exerciseOptions = {
	method: "GET",
	headers: {
	  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	  "X-RapidAPI-Key": " 
	  // For safety we have put our API key inside env folder"
	}
  };

  export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  
	},
  };

  export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();
  
	return data;
  };
