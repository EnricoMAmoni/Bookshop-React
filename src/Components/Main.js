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

    // PROVA LIVE SEARCH

    const handlesearch=(event)=>{
        const getSearch= event.target.value; 
        if(getSearch.length > 0)
        {     
         const searchdata= bookData.filter( (item)=> item.first_name.toLowerCase().includes(getSearch));
         setData(searchdata);
        } else {
          setData(bookData);
        }
        setSearch(getSearch);
      }

    // FINE PROVA LIVE SEARCH

    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Update Your Future <br /> This is <span className="OUR">OUR</span> Library</h1>
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