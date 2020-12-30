import React from 'react';
import Heading from './Heading';
import Images from './Images';


// 1st ways we can create
function Cards(props) {
    return (
        <>
            <div className="cards" id={props.rowid} key="date">
                <div className="card">
                    <Images imgsrc={props.imgsrc} title={props.title} />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <Heading name={props.name} />
                        <a href={props.links} target="_blank" rel="noreferrer">
                            <button id={"btn_" + props.rowid}>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

// 2nd way using FAT ARROW function (Expression Function/Lemda function)
const Card = (props) => {
    return (
        <>
            <div className="cards" id={props.rowid} key="date">
                <div className="card">
                    <Images imgsrc={props.imgsrc} title={props.title} />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <Heading name={props.name} />
                        <a href={props.links} target="_blank" rel="noreferrer">
                            <button id={"btn_" + props.rowid}>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Card;