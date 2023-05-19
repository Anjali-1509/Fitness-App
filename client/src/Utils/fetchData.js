export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "f6580a9334msh95774069eaabd85p1e46aajsn8e1f3f3a10a6",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f6580a9334msh95774069eaabd85p1e46aajsn8e1f3f3a10a6',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options)=>{
  const res = await fetch(url, options)  
  const data= await res.json()
  return data
}