import React from 'react';


function Greeting()
{
    

let currentDate = new Date();  //(2020, 12, 21, 8);

currentDate = currentDate.getHours();

let wishLabel = "Good Morning";
const cssStyle ={};

if(currentDate >= 1 && currentDate < 12)
{ 
  wishLabel = "Good Morning";
  cssStyle.color = "Green";
}
else if(currentDate >= 12 && currentDate < 16)
{
  wishLabel = "Good Afternoon";
  cssStyle.color= "Red";
}
else if(currentDate >= 16 && currentDate < 19)
{
  wishLabel = "Good Evening";
  cssStyle.color= "Orange";
}
else
{
wishLabel = "Good Night";
cssStyle.color= "Black";
}

    return  <h1 >Hello Sir, <span style={cssStyle}>{wishLabel}</span></h1>
}

export default Greeting;
