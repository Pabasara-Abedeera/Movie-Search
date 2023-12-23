import { useEffect, useState } from "react";
import Card from "../Components/Card";
import '../App.css'
const API_URL='http://www.omdbapi.com?apikey=1f936947'
function Movies(){

    const [searchTerm,setSearchTerm]=useState('');
    const [movies, setMovies] =useState([]);

    useEffect(()=>{
       window.alert("search");
    },[]);

    const searchMovies=async (title)=>{ 
        const response=await fetch(`${API_URL}&s=${title}`) ;
        const data=await response.json(); 
        setMovies(data.Search);

    }


    return(
    <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e)=>{setSearchTerm(e.target.value)}}

                />
                <button 
                //onClick={()=>{searchMovies(searchTerm)}}
                onClick={()=>searchMovies(searchTerm)}
                >
                    GO</button>

            </div>
            {
                movies.length>0?(
                    <div>
                    {
                        
                        movies.map((movie)=>(
                            <Card Movie={movie}/>
                        ))
                    }
                    </div>
                ):(
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

        </div>)

}   


export default Movies;