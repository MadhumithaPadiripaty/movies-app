export default function Moviecard(props){

    function checkid(movieObj){
        
        for (let i=0;i<props.watchlist.length;i++){
            if (props.watchlist[i].id==movieObj.id){
                return true
            }
        }
        return false
    }

    return(
        <div className=" h-[30vh] w-[20vh] bg-center bg-cover 
        rounded-xl hover:scale-110 duration-300 flex-col justify-between
        hover:cursor-pointer flex items-end overflow-hidden" 
            style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.poster_path })`}}>

                {checkid(props.movieObj)?
                <div onClick={()=>props.handlewatchlistremove(props.movieObj)} className="bg-white p-0 m-2 hover:scale-150">&#10006; </div> :
                <dir onClick={()=>props.handlewatchlist(props.movieObj)} className="bg-white p-0 m-2 hover:scale-150">&#10133;</dir>}

                <div className=" text-white bg-slate-800/90 w-full  p-1 text-center ">
                    {props.name}
            </div>
        </div>
    )
}