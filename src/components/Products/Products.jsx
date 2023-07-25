import React,{useState} from 'react'
import css from './Product.module.css'
import Plane from '../../assets/plane.png';
import {ProductsData} from "../../data/products";
import{useAutoAnimate} from '@formkit/auto-animate/react'


const Products = () => {
    const[parent]=useAutoAnimate()
    const[MenuProducts,setMenuProducts]=useState(ProductsData);

    const filter=(type)=>{
        setMenuProducts(ProductsData.filter((product) =>product.type===type))
    }

  return (
    <div className={css.container}>
     <img arc={Plane}   alt="" />
     <h1>Our Featured Products</h1>

     <div className={css.products}>
        <ul className={css.menu}>
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin Care</li>
            <li onClick={()=>filter("conditioners")}>Conditioners</li>
            <li onClick={()=>filter("foundation")}>Foundations</li>
        </ul>
        <div className={css.List} ref={parent}>
 {
    MenuProducts.map((product,i) =>(
        <div className={css.Product}>
            <div className="Left-s">
                <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                    
                </div>
                <span>{product.price}$</span>
                <div>Shop Now </div>
            </div>
            <img src={product.img} alt="" className='img-p' />
        </div>
    ))
 }
        </div>
     </div>
    </div>
  );

};
export default Products
