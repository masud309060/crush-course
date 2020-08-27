import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const enrollCourse = props.enroll;
    console.log(enrollCourse.title);

    const total = enrollCourse.reduce((total, fee) => 
        total + fee.price
    ,0);
    const grandTotal = Number(total.toFixed(2))
    
    return (
        <div class='cart-main'>
            <h3>Enroll Courses: {enrollCourse.length}</h3>
        {
            enrollCourse.map(data => 
            <div className="selected-course">
                <p>Course name: {data.title}</p>
                <p>Course fee: <span>${data.price}</span></p>
            </div>)
        }
        <h4>Total Course fee: {grandTotal}</h4>
        </div>

    );
};

export default Cart;