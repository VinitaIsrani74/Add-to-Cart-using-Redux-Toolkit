import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "./store/cartSlice";
const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const apiCall = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const result = await data.json();
      setProducts(result);
    };
    apiCall();
  },[]);


  const addToCart = (product) =>{
    //dispatch an add event
dispatch(add(product))
  }

  const cards = products.map((product) => (
    <div style={{margin:"20px", width: "18rem"}}>
      <Card style={{width: "18rem", height: "25rem", boxShadow: "1px 2px 5px black" , position: "relative"}}>
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width: "180px", height: "210px", paddingTop: "15px"}}/>
       
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          INR: {product.price}
          </Card.Text>
          <Button variant="primary" onClick={() => addToCart(product)} style={{position: "absolute", bottom: "0px", left: "0px" , width: "100%", boxShadow:"1px 1px 1px rgb(89, 85, 85)", backgroundColor: "rgb(89, 85, 85)"}}>Add To Cart</Button>
        </Card.Body>
        </div>
      </Card>
    </div>
  ));
 


  return (
    <div style={{marginTop: "2rem" , display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 className="heading" style={{fontSize: "2rem"}}>Product Dashboard</h1>
      <div className="row" style={{width: "100%" , display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>{cards}</div>
    </div>
  );
};

export default Product;
