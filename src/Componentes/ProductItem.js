const ProductItem = ({data,addToCart}) =>{
let {id, name ,price}=data
    return <div className="PT">

    <h4>{name}</h4>
    <h5>${price}</h5>
    <button onClick= {()=>addToCart(id)}>Agregar</button>

    </div>
};
export default ProductItem