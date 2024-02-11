
export default function Pagination({pageno,Handlenext,Handleprev}){
    return(
        <div className="flex justify-center ">
            <div onClick={Handleprev} className=" p-2 rounded-l-lg bg-gray-300 hover:scale-110 hover:bg-gray-500 hover:cursor-pointer "><i className="fa-solid fa-arrow-left"></i></div>
            <div className="p-2   font bold hover:scale-110 hover:bg-gray-500 hover:cursor-pointer ">{pageno}</div>
            <div onClick={Handlenext} className="p-2  rounded-r-lg  bg-gray-300 hover:scale-110 hover:bg-gray-500 hover:cursor-pointer "><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}