import axios from "axios"
import { useEffect, useState } from "react"

export default function Banner(){
    let [detail,setdetail]=useState({undefined})

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c7f97428bdbecd0b63ef86eb5063f820')
        .then(function(res){
            let data=res.data.results[0]
            setdetail(data)
        })
    },[])
    if (detail===undefined){
        return;
    }
    return(
        // inline styling takes object ex style={{properties need}}
        // md(@media) and sm is for small screen auto adjectment

        <div className="  md:h-[70vh]  bg-center bg-cover flex  items-end " 
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${detail.poster_path})`}}>
            <div className="text-xl text-white bg-slate-800/90 w-full p-2 text-center ">
                {detail.title}
                {/* {detail.poster_path} */}
            </div>
        </div>
    )
}