import React from 'react';
import './GifGridItem.css';
import PropTypes from 'prop-types';
export const GifGridItem = ({url,title}) => {

  return (
    <>
      <div className='card animate__animated animate__flash'>
        <h4 className='h4-back'>{title}</h4>
        <img src={url} alt={title} height="100%" width="100%" />
      </div>
    </>
    
  )
}

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
