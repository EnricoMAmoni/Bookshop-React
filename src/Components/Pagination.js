import React from 'react';

const Pagination = ({totalBooks, booksPerPage, setCurrentPage}) => {
    let pages = [];

    for (let i = 1; i<= Math.ceil(totalBooks/booksPerPage); i++){
        pages.push(i)
    }
    return (
        <div className='pagination'>
            {pages.map((page, index)=>{
                return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })}
        </div>
    )
}

export default Pagination;