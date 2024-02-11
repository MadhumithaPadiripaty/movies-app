import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div className="flex iteam-center p-3 pb-0" >
            <img className="h-[60px]  " src="https://st4.depositphotos.com/1842549/20933/i/450/depositphotos_209333556-stock-photo-movie-icon-internet-button-white.jpg" alt="" />
            <Link to={"/"} className="text-2xl mx-5 pt-3 font-bold underline text-sky-600 hover:cursor-pointer">Movies</Link>
            <Link to={"/watchlist"} className="text-2xl mx-5 pt-3 font-bold underline text-sky-600 hover:cursor-pointer">WatchList</Link>
        </div>
        
        </>
    )
} 