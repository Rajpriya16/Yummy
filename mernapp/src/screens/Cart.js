import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  console.log("Cart Data:", data); // Log the cart data to check contents

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3 text-danger'>The Cart is Empty!
            {console.log("Cart is empty")}
        </div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    
      dispatch({ type: "DROP" })
    }
  

    


  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td style={{ color: 'green' }}>{food.name}</td>
                <td style={{ color: 'green' }}>{food.qty}</td>
                <td style={{ color: 'green' }}>{food.size}</td>
                <td style={{ color: 'green' }}>{food.price}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2 text-success'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
        </div>
      </div>
    </div>
  );
}
