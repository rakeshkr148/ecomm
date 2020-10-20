import React from 'react';

const Home = (props) => {
    return (
        <div>
            <h1>E-Commerce</h1>
            <div className="cart-wrapper">
                <div className="item">
                    <img src="images/iphone-11.jpeg" alt="" />
                </div>
                <div className="text-wrapper item">
                    iphone-11 <br />
                    Rs. 89,999
                </div>
                <div className="btn-wrapper">
                    <button
                        onClick={() => { props.addToCartHandler({ price: 89999, name: 'iphone-11' }) }}>
                        Add To Cart
                    </button>
                </div>
                <div className="item">
                    <img src="images/OnePlus Nord.jpg" alt="" />
                </div>
                <div className="text-wrapper item">
                    OnePlus Nord <br />
                    Rs. 27,999
                </div>
                <div className="btn-wrapper">
                    <button
                        onClick={() => { props.addToCartHandler({ price: 27999, name: 'OnePlus Nord' }) }}>
                        Add To Cart
                    </button>
                </div>
                <div className="item">
                    <img src="images/Samsung Galaxy S20+.jpeg" alt="" />
                </div>
                <div className="text-wrapper item">
                    Samsung Galaxy S20+ <br />
                    Rs. 49,999
                </div>
                <div className="btn-wrapper">
                    <button
                        onClick={() => { props.addToCartHandler({ price: 49999, name: 'Samsung Galaxy S20+' }) }}>
                        Add To Cart
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Home;