import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from './store/cartSlice';


const Cart = () => {
  const products = useSelector(state => state.cart)
const dispatch = useDispatch()
const removeFromCart = (id) =>{
  //dispatch an action to remove item from cart
  dispatch(remove(id))
}

  const cards = products.map((product) => (
    <div style={{ margin:"20px", width: "50%"}}>
      <Card style={{ width: "100%", height: "25rem", boxShadow: "1px 2px 5px black" , position: "relative"}}>
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width: "180px", height: "210px", paddingTop: "15px"}}/>
       
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          INR: {product.price}
          </Card.Text>
          <Button variant="primary" onClick={() => removeFromCart(product.id)} style={{position: "absolute", bottom: "0px", left: "0px" , width: "100%", boxShadow:"1px 1px 1px rgb(89, 85, 85)", backgroundColor: "red"}}>Remove Item</Button>
        </Card.Body>
        </div>
      </Card>
    </div>
  ));

  return (
    
    <div style={{marginTop: "2rem" , display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>

  <div className="row" style={{width: "100%" , display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>{cards}</div>
</div>

  )
}

export default Cart