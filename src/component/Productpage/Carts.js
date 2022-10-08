import React from 'react';
import "./Carts.css"

const Carts = (props) => {
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={props.value.img} alt="img" />
                </div>

                <div className="title">
                    <h2>{props.value.title}</h2>
                    <p>{props.value.description}</p>
                </div>

                <div className="add-minus-quantity">
                    <i className="fa-solid fa-square-plus fa-2x" onClick={() => props.increasehandler(props.value)}></i>
                    <div className="number">{props.value.quantity}</div>
                    <i className="fa-sharp fa-solid fa-square-minus fa-2x" onClick={() => props.decresehandler(props.value)} ></i>
                </div>

                <div className="price">
                    <h3>{props.value.price}</h3>
                </div>
            </div>

        </>
    )
}

export default Carts;