
import React from 'react';
import './style.css';

function Cards(props) {
    return (
        <>
            
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="#" />
                    <div className="card-tittle">
                        <span className="card-property">{props.text}</span>
                    </div>
                    <h3 className="card-info">{props.tittle}</h3>
                    <a className = "button" href={props.link}>
                        <button className = "btnspe">Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    );
}
export default Cards;