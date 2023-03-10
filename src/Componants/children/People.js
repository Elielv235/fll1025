import {useState} from 'react';
const People =  props => {
  
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
        console.log(active)
      };

    return (
        <div className="photo">
            <div className='gapbetween'></div>
            
            <a onClick={handleClick}>
            
            <img style={{filter: active ? 'blur(8px)' : ''}} src={require(`../../../public/images/people/${props.number}.jpeg`)} alt={props.alt}/>
            <h2 className='nameonphoto'>{active ? `${props.text}` : `${props.name}`}</h2>
            </a>
        </div>
    )
    }
export default People;
