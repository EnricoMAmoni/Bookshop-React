import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import Pagination from "./Pagination";

const Main=()=> {
    const [search, setSearch]=useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(5);
    const[bookData, setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCMTJn9LWbLXlTF12vj9zRbuVKNyTrKiD8').then(res=>setData(res.data.items)).catch(err=>console.log(err))
        }

      


    }
    const lastPostIndex = currentPage * booksPerPage;
    const fisrtPostIndex = lastPostIndex - booksPerPage;
    const currentPosts = bookData.slice(fisrtPostIndex, lastPostIndex);

    return(
        <>
    
            <div className="header">
                <div className="row1">
                    
                    <h1>Update Your Future <br /> This is <span className="OUR">OUR</span> Library</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name and &#9166;" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>

                       


                    </div>
                    <img src="./images/book-icon.png" />
                </div>

            </div>
                <div class="container">
                    {
                        <Card book={currentPosts}/>

                        
                    }
                    
                   
                </div>
                <Pagination totalBooks={bookData.length}
                booksPerPage={booksPerPage}
                setCurrentPage={setCurrentPage}
                />
        </>
    )
}

export default Main;