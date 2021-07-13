import React from 'react';
// import ReactDOM from 'react-dom';
import Cards from './CardsMM';
import MMdata from './MMdata';
import Header from '../Header/Header'

function mmcard(val) {
    return (
        
        <Cards
        imgsrc={val.imgsrc}
        tittle={val.tittle}
        text={val.text}
        link = {val.link}
        />
    )
}







function MarvelMovie() {
    return (
        <>
            <Header />
            <h1 className = "Heading">Top 5 Marvel Movie Show</h1>
            {MMdata.map(mmcard)}
        </>
    )
}
export default MarvelMovie;