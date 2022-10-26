import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./Items.css";





const ListaProductos = () => {
    const {category} = useParams();
    const [disc, setDisc] = useState([]);

    

    useEffect(()=>{
        
        fetch("https://apigenerator.dronahq.com/api/S0cr36E5/data")
        .then((res) => res.json())
        .then((disc) => {
                
                category ? setDisc(disc.filter(item => item.category === category))
                :
                setDisc(disc)
                
        })
        

    }, [category])


    return (
        <div className="catalogo">
            {disc.length === 0 ?
            (<div>CCARGANDO</div>) :
            (<div>
                <h2>
                    {category}
                </h2>
                <ItemList lista={disc}/>
            </div>)}
        </div>
    )

}
    

    export default ListaProductos