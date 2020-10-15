import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <HeaderContainer />
            <HomeContainer />
        </div>
    );
};

export default App;