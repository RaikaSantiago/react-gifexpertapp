import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategoria }) => {
  
  const [first, setfirst] = useState('');

  const handInputChange = (e) => {
      return setfirst(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if (first.trim().length > 0) {
        setCategoria(cat => [first,...cat ]);
        setfirst('');
      }
  }
  return (
    <form onSubmit={handleSubmit}>
        <h2>AddCategory</h2>
        <input  type="text" value={first} onChange={handInputChange} />
    </form>   
  )
}


AddCategory.propTypes = {
  setCategoria: PropTypes.func.isRequired
}

