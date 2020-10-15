import React from 'react';

const Home = (props) => {
    return (
        <div>
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="item">
                    <img src="images/iphone-11.jpeg" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        iphone
                        price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper">
                    <button
                        onClick={() => { props.addToCartHandler({ price: 1000, name: 'iphone-11' }) }}>
                        Add To Cart
                    </button>
                </div>
            
            </div>
        </div>
    );
};

export default Home;