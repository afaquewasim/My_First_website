import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home () {
    let currDate = new Date();
    currDate = currDate.getHours();
    let greeting = "";
    const cssStyle = { };
    
    if (currDate >= 1 && currDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "green";
    }
    else if (currDate >= 12 && currDate < 18) {
        greeting = "Good Afternoon";
        cssStyle.color = "orange";
    }
    else {
        greeting = "Good Evening"
        cssStyle.color = "white";
    }

    return (
        <>
            <Header />
            <div className="my">
                <h1 className="main_head">Hello Sir / Madam, <span className = "span"style={cssStyle}> {greeting}.</span></h1>
            </div>
            <div className="my1">
                <h3 className = "sub_head">Hope you are fine. </h3>
            </div>
            <h1 className = "main_con">
                Here You got 5 best show From Each Platform
            </h1>
            <div className="links-main">
                <h4 className = "surprise">Here is some things for you.</h4>
                <Link className = "mylinks" to = "/netflix">Netflix</Link> <br />
                <Link className = "mylinks" to = "/prime">Amazon Prime</Link> <br />
                <Link className = "mylinks" to = "/hotstar">Hotstar</Link> <br />
                <Link className = "mylinks" to = "/marvelmovie">Marvel Movie</Link> <br />
                <Link className = "mylinks" to = "/marvelshow">Marvel Show</Link>
            </div>
            <Footer />    
        </>
    )
}
export default Home;