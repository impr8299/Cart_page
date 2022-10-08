import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Carts from './Carts';
import './Carts.css'


const Cart = () => {
  const [update, setupdate] = useState()
  const [totalPr, setTotalPr] = useState();
  const [res, setres] = useState([]);

  async function getData() {
    try {
      const response = await axios.get('http://localhost:3004/data');
      setres(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const onIncrease = (data) => {
    console.log("clicked");
    var index = res.indexOf(data);
    console.log(index);
    res[index].quantity += 1;
    setupdate(res[index].quantity)


  }

  const onDecrease = (data) => {
    console.log("clicked");
    var index = res.indexOf(data);
    console.log(index);
    if (res[index].quantity > 0)
      res[index].quantity -= 1;
    setupdate(res[index].quantity)
  }



  const total_cart = () => {
    const initialValue = 0;
    const total = res.reduce((accumulator, current) => accumulator + (current.price * current.quantity), initialValue)
    setTotalPr(total)
    console.log(total)
  }

  useEffect(() => {
    total_cart()
  }, [update]);

  return (

    <>
      <div className="cart-items">
        <div className="cart-items-container">
          {res.map((value) => {
            return (
              <Carts
                value={value}
                increasehandler={onIncrease}
                decresehandler={onDecrease}
              />
            )
          })}
        </div>
      </div>
      <div className="card-total">
        <h3>
          Cart Total : <span>{totalPr}</span>
        </h3>
      </div>
    </>
  )
}

export default Cart;