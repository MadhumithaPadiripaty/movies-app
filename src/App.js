import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import WatchList from './Components/WatchList';
import { useEffect,useState } from 'react';

function App(){
  let [watchlist,setWatchlist]=useState([])
  let [pageno,setpage]=useState(1)
    
  let Handleprev=()=>{
      if (pageno>1){
          setpage(pageno-1)
      }
  }
  let Handlenext=()=>{
      setpage(pageno+1)
  }
  useEffect(()=>{
    let movieformlocalstorage=localStorage.getItem("movies-app")
    if (!movieformlocalstorage){
        return
    }
    setWatchlist(JSON.parse(movieformlocalstorage))
  },[]) //this help web to remember it past event
      

  let handlewatchlist=(movieObj)=>{
      // watchlist.push(movieID) it will not because it has no reference and 
      // in react reference is need for updation
      let newWatchlist=[...watchlist,movieObj]
      localStorage.setItem("movies-app",JSON.stringify(newWatchlist))
      setWatchlist(newWatchlist)
  }
  let handlewatchlistremove=(movieObj)=>{
      let filterwatchlist= watchlist.filter((movies)=>{
          return movies.id !=movieObj.id;
      })
      localStorage.setItem("movies-app",JSON.stringify(filterwatchlist))
      setWatchlist(filterwatchlist)
  }
    
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Movies watchlist={watchlist}
                    pageno={pageno}
                    Handleprev={Handleprev}
                    Handlenext={Handlenext}
                    setWatchlist={setWatchlist}
                    handlewatchlist={handlewatchlist}
                    handlewatchlistremove={handlewatchlistremove}/>
          </>
        }>
        </Route>
        <Route path="/watchlist" element={
          <WatchList watchlist={watchlist}
                    setWatchlist={setWatchlist}
                    handlewatchlistremove={handlewatchlistremove}/>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
