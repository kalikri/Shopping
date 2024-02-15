import list from "../data";
import Card from "./Card";
import '../styles/shopstop.css';

export default function Shopstop({handleClick}){
   
    return(
        <section>
{list.map((item)=><Card key={item.id} item={item} handleClick={handleClick}/>)
}
        </section>
    )
}
//handleClick={handleClick}