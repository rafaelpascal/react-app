import React from 'react'

const Navbar = () => {
    return(
    <nav className="navbar navbar-expand-lg">
        <div cllassName="container">
            <a className="navbar-brand" href="./"><img src={} width="auto" height="20" />
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="cart.html">Cart </a></li>
                    <li><a href="add.html">Add Product</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="signup.html">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
 export default Navbar
