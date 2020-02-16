import React from 'react';
import './cal.css';

// const al = (u) => {
//     console.log('GGGG')
//     document.getElementById('1').addEventListener("click", function(){ alert("Hello World!"); }); 

// }




class Cal extends React.Component {

    render() {
        var d = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,30,31]
        return(
            <div className="calender-parent">
                <div className="date-names">
                    <p>MON</p>
                    <p>TUE</p>
                    <p>WED</p>
                    <p>THU</p>
                    <p>FRI</p>
                    <p>SAT</p>
                    <p>SUN</p>
                </div>
                {d.map(function(name, index){

                    
                    return (
                        <div key={index} id={name}  className="date-container"
                        onClick={function(){
                            console.log(name + ' Was Pressed')
                            var idz = name+'p';
                            document.getElementById(idz).classList.add("c-day");
                        }}>
                            <p id={name+'p'} className="uc-day">{name}</p>
                        </div>)
                })}
            </div>
        )
    }
}
  
  export default Cal;



