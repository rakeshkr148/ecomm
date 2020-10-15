import React from 'react';

const Header = (props) => {
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="images/ecart.png" alt="" />
            </div>
        </div>
    );
};

export default Header;