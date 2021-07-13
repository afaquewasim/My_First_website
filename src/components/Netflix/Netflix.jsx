import React from 'react';
// import ReactDOM from 'react-dom';
import Cards from './CardsN';
import Ndata from './Ndata';
import Header from '../Header/Header'

function ncard(val) {
    return (
        
        <Cards
        imgsrc={val.imgsrc}
        tittle={val.tittle}
        text={val.text}
        link = {val.link}
        />
    )
}







function Netflix() {
    return (
        <>
            <Header />
            <h1 className = "Heading">Top 5 Netflix Show</h1>
            {Ndata.map(ncard)}
        </>
    )
}
export default Netflix;