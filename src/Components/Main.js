import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main=()=> {
    const [search, setSearch]=useState("");
    const[bookData, setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCMTJn9LWbLXlTF12vj9zRbuVKNyTrKiD8' + '&maxResults=40').then(res=>setData(res.data.items)).catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Update Your Future <br /> This is our Library</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>

                        <button type="button" class="btn btn-primary">Go</button>


                    </div>
                    <img src="./images/book-icon.png" />
                </div>

            </div>
                <div class="container">
                    {
                        <Card book={bookData}/>

                    }
                    
                   
                </div>
        </>
    )
}

export default Main;