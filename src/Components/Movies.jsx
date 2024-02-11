import { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios"
import Paginations from "./Paginations";

// import React from 'react';
// import React, { useRef } from 'react';


export default function Movies(props){
    let {pageno,Handleprev,Handlenext,watchlist,handlewatchlist,handlewatchlistremove}=props
    let [movie,setMovies]=useState([])

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=c7f97428bdbecd0b63ef86eb5063f820&page=${pageno}`)
        .then(function(res){
        setMovies(res.data.results)
        })
    },[pageno])    

    
    
    return(
        <div className="m-3">
            <div className="text-2xl font-bold text-center">
                Trending Movies
            </div>
            <div className="flex flex-wrap gap-5 justify-around pt-3">
                {movie.map((movieObj)=>{
                    return <Moviecard key={movieObj.id} 
                                        movieObj={movieObj}
                                        name={movieObj.title} 
                                        poster_path={movieObj.poster_path}
                                        watchlist={watchlist}
                                        handlewatchlist={handlewatchlist}
                                        handlewatchlistremove={handlewatchlistremove}
                                        genre_ids={movieObj.genre_ids}
                                       />
                })}
            </div>
            <Paginations pageno={pageno} Handlenext={Handlenext} Handleprev={Handleprev} />
        </div>
    )
}