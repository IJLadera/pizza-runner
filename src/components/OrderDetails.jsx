import React from 'react';
import '../css/orderdetails.css';

function OrderDetails() {
  return (
    <div className='order-table-container'>
      <h2>Order Details</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Pizza Type</th>
            <th>Number of Toppings</th>
            <th>Order Date & Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pepperoni</td>
            <td>3</td>
            <td>2023-06-22 10:30 AM</td>
          </tr>
          <tr>
            <td>Margherita</td>
            <td>2</td>
            <td>2023-06-23 05:15 PM</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetails;
