export const exerciseOptions = {
	method: "GET",
	headers: {
	  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	  "X-RapidAPI-Key": "0332dc0bfdmsh2ad7199d22f2a1bp12d761jsn00c9837ef25e"
	}
  };

  export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
	},
  };

  export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();
  
	return data;
  };
