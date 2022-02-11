import React from 'react'
import './Navbar.css';


import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar({ click }) {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar">
            {/*logo*/}
            <div className="navbar__logo">
                <h2>Shopping Cart</h2>
            </div>
            {/*links*/}
            <ul className="navbar__links">
                <li>
                    <Link to='/cart' className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlogo__badge">{getCartCount()}</span>

                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to='/userlogin'>
                <i className="far fa-user"></i>
                    </Link>
                </li>
            </ul>
            

            {/*hamburger menu*/}
            <div className='hamburger__menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
