import React from 'react';
// import ReactDOM from 'react-dom';
import Cards from './CardsP';
import Pdata from './Pdata';
import Header from '../Header/Header'

function pcard(val) {
    return (
        
        <Cards
        imgsrc={val.imgsrc}
        tittle={val.tittle}
        text={val.text}
        link = {val.link}
        />
    )
}







function Prime() {
    return (
        <>
            <Header />
            <h1 className = "Heading">Top 5 Amazon Prime Show</h1>
            {Pdata.map(pcard)}
        </>
    )
}
export default Prime;