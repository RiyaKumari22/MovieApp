
import React, { useContext, useEffect, useState } from 'react'

const API_URL=`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
const AppContext=React.createContext()
const AppProvider=({children})=>{
  const [isLoading,setIsLoaing]=useState(true)
  const [movie,setMovie]=useState([])
  const [isError,setisError]=useState({show:"false",msg:""})
const[query,setQuery]=useState("titanic")
  const getMovies=async (url)=>{
    try {
      const res=await fetch(url)
      const data=await res.json();
      console.log(data);
      if(data.Response==="True"){
        setIsLoaing(false)
        setMovie(data.Search)

      }else{
        setisError({
          show:true,
          msg:data.Error
        })
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
   let timeout= setTimeout(()=>{
      getMovies(`${API_URL}&s=${query}`)
    },800)
    return ()=>clearTimeout(timeout)
  },[query])

return<AppContext.Provider value={{movie,isLoading,isError,query,setQuery}}>
  {children}
</AppContext.Provider>
}
const useGlobalContext=()=>{
  return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}
function context() {
  return (
    <div>
    </div>
  )
}

export default context
