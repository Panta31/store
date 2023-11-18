import React from 'react';
import './Components.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function HomeCategory(props) {
    const {image,description, title, routeName}=props;

  return (
    <div className='categs'>
        <Link to={`/Categori/${routeName}`}>
            <img src={image}  /> 
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    </div>
  )
}

export default HomeCategory