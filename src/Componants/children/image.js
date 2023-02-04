import React from 'react';
const Grid_Image =  props => {

    return (
        <div className="photo">
            <img src={require(`../../../public/images/${props.number}.jpeg`)} alt={props.alt}/>
        </div>
    )
    }
export default Grid_Image;
