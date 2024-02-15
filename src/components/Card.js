import '../styles/shopstop.css'
export default function Card({item,handleClick}){
    const{id,title,author,price,img}=item;
return(
    <div className="cards">
       <div className="image_box">
        <img src={img} alt=""/>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price-{price}$</p>
            <button onClick={()=>handleClick(item)}>Add to Cart</button>
        </div>

       </div>
    </div>
)
}