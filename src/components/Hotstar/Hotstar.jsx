import React from 'react';
// import ReactDOM from 'react-dom';
import Cards from './CardsH';
import Hdata from './Hdata';
import Header from '../Header/Header'

function hcard(val) {
    return (
        
        <Cards
        imgsrc={val.imgsrc}
        tittle={val.tittle}
        text={val.text}
        link = {val.link}
        />
    )
}







function Hotstar() {
    return (
        <>
            <Header />
            <h1 className = "Heading">Top 5 Hotstar Show</h1>
            {Hdata.map(hcard)}
        </>
    )
}
export default Hotstar;