import { useState,useEffect } from "react";

const genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };


export default function WatchList(props){
    let [genrelist,setgenrelist]=useState(["All Genres"])
    let [currgenre,setcurrgenre]=useState("All Genres")
    let [search ,setsearch]=useState("")
    let handlesearch=(e)=>{
        setsearch(e.target.value)
    }
    useEffect(()=>{
        let temp =props.watchlist.map((index)=>{
          return genreids[index.genre_ids[0]];
        })
        temp = new Set(temp);
        setgenrelist(["All Genres",...temp]);
      },[props.watchlist])


    let handlegener=(genre)=>{
        setcurrgenre(genre)
    }
    let sortincrease=()=>{
        let sorted=props.watchlist.sort((movie1,movie2)=>{
            return movie1.vote_average - movie2.vote_average
        })
        props.setWatchlist([...sorted])
        }
    
    let sortdecrease=()=>{
        let sorted=props.watchlist.sort((movie1,movie2)=>{
            return movie2.vote_average - movie1.vote_average
        })
        props.setWatchlist([...sorted])
        }
    
    
    
    return(
        <>
    
        
        <div  className ="flex m-5 justify-center gap-3 flex-wrap ">
        {genrelist.map((genre)=>{
                return <div key={genre.value} onClick={()=>handlegener(genre)}
                className={currgenre===genre?"hover:cursor-pointer flex justify-center items-center w-[12rem] h-[3rem] rounded-xl bg-blue-600 text-white font-bold"
            :"hover:cursor-pointer flex justify-center items-center w-[9rem] h-[3rem] rounded-xl bg-gray-500 text-white font-bold"}>{genre}</div>
            })}
        </div>

        <div className="flex justify-center items-center">
            <input onChange={handlesearch} className="p-2 bg-gray-200 rounded-xl outline-none" type="text" placeholder="Search for movies"/>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-900 m-5 p-3">
            <table className="w-full text-center ">
                <thead className="bg-gray-100 border-b-2">
                   <tr>
                        <th>Name</th>
                        <th className="flex justify-center items-centerx">
                            <div onClick={sortincrease}><i className="fa-solid fa-arrow-up-long p-2"></i></div>
                           <div className=" p-2"> Rating</div>
                           <div onClick={sortdecrease}><i className="fa-solid fa-arrow-down-long p-2"></i></div>
                            </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                    </tr> 
                </thead>
                <tbody>
                {props.watchlist.filter((obj)=>{
                    if (currgenre==="All Genres"){
                        return true;
                    }else{
                        return genreids[obj.genre_ids[0]]===currgenre
                    }
                })
                .filter((obj1)=>{
                    return obj1.title.toLowerCase().includes(search.toLocaleLowerCase())
                })
                .map((index)=>{
                    
                    return<tr key={index.id} className="border-b-2">
                            
                            <td  className="flex items-center px-5 py-5  ">
                                <img className="h-[6rem] w-[10rem]" src={`https://image.tmdb.org/t/p/original/${index.poster_path }`} alt="" />
                                <div  className="pl-5 t">{index.title}</div>
                            </td>
                            <td >{index.vote_average}</td>
                            <td>{index.popularity}</td>
                            <td>{genreids[index.genre_ids[0]]}</td>
                            <td onClick={()=>props.handlewatchlistremove(index)} className="text-red-600">Delete</td>
                        </tr>
                    
                })}
                    
                </tbody>
            </table>
        </div>
        </>
    )
}