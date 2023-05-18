export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "0dc13c68cbmshfef3ebbf007320bp189553jsn900a0a651b20",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0dc13c68cbmshfef3ebbf007320bp189553jsn900a0a651b20',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options)=>{
  const res = await fetch(url, options)  
  const data= await res.json()
  return data
}