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
    
            <div class="cont">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <h1 class="text-center">Find Your Book</h1>
                    </div>
                </div>

            </div>
            <div class="cont">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div className="search">
                            <input type="text" placeholder="Enter Your Book Name and &#9166;" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} />
                        </div>
                    </div>
                </div>

            </div>
            <div class="cont">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <h6 class="text-center">This is <span className="OUR">OUR</span> Library</h6>

                    </div>

                </div>

            </div>
            <div class="cont">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4">
                        <img className="logo" src="./images/book-icon.png" />
                    </div>

                </div>

            </div>
            <div class="container">
                {
                    <Card book={currentPosts} />
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