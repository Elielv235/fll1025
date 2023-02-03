import React from 'react';
const people =  props => {
    console.log(props)
    return (
        <div className="photo">
            <img src={require(`../../public/images/people/${props.number}.jpeg`)} alt={props.alt}/>
        </div>
    )
    }
export default people;