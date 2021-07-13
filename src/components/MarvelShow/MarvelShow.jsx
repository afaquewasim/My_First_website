import React from 'react';
// import ReactDOM from 'react-dom';
import Cards from './CardsMS';
import MSdata from './MSdata';
import Header from '../Header/Header'

function mscard(val) {
    return (
        
        <Cards
        imgsrc={val.imgsrc}
        tittle={val.tittle}
        text={val.text}
        link = {val.link}
        />
    )
}







function MarvelShow() {
    return (
        <>
            <Header />
            <h1 className = "Heading">Top 5 Marvel Show</h1>
            {MSdata.map(mscard)}
        </>
    )
}
export default MarvelShow;