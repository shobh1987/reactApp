import React from "react";
import Sdata from "./../common/Sdata";
import Card from './Cards'


const App = () =>
(
    <>
        <h1 className="heading_style">List of Hotstar Web Series in 2020</h1>
        { Sdata.map((val, row) => {
            return (
                <Card
                    key={row}
                    imgsrc={val.imgsrc}
                    links={val.links}
                    name={val.name}
                    title={val.title}
                    rowid={row}
                />
            )
        })
        }  
    </>
);


export default App;