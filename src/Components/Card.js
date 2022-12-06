import react from "react";
const Card = ({ book }) => {
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    // let amount=item.salesInfo.listPrice && item.salesInfo.listPrice.amount;
                    if(thumbnail!= undefined){

                        return (
                            <>
                            <div className="card">
                                <img src={thumbnail} />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">Not For Sale</p>
                                </div>
                            </div>
                            </>
                        )
                    }
                })
            }




        </>
    )
}

export default Card;