/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Card = (props)=> {
 const { name , email , id} = props;
    return (
        <div className="bg-light-green dib br3  pa0 ma2 grow bw2 shadow-5 ">
           <img alt='robots'src={`https://robohash.org/${id}?200x200`} />
         <div>
            <h1>{name}</h1>
            <p> {email}</p>
         </div>
        </div>
    )
}
export default Card; 