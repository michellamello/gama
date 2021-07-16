import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.css';
import { faCartPlus,
         faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Offer() {
    let offer = localStorage.getItem('productsList');
    let items = JSON.parse(offer);

    let email = localStorage.getItem('email');

    return (
        <div class="container">
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="backButtonContainer">
                <Link to="/"><FontAwesomeIcon icon={faArrowLeft} size='2x' color='white'/></Link>
            </div>
            <div class="containerOffer">
                <h1 class="offerTitle">Seu e-mail {email} foi registrado. Aproveite seu desconto!</h1>
                <div class="products">
                    { items.map( item => {
                        return (
                            <div class="offer">
                                <h3 class="offerCategory">{(item.category).toUpperCase()}</h3>
                                <img class="offerImg" src={item.image} alt="Imagem da oferta"></img>
                                <h2 class="offerSubTitle">{item.title}</h2>
                                <h4 class="offerFrom"><s>DE: US$ {(item.price).toFixed(2)}</s></h4>
                                <h5 class="offerPrice">POR: US$ {(item.price * .75).toFixed(2)}</h5>
                                <button type="button" class="cartButton"><FontAwesomeIcon icon={faCartPlus} size='2x' color='white'/></button>
                            </div> 
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}