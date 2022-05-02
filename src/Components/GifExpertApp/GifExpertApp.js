import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid/GifGrid';

export const GifExpertApp = () => {

  const categoriasArr = ['Homero'];
  const [categorias, setCategoria] = useState(categoriasArr);
  const handleAdd = () => {
    // setCategoria(['p4',...categorias]);
    setCategoria(cat => [ 'p4',...cat]);
  }

  return (
    <>  
        <h2>GifExpertApp</h2>
        <AddCategory  setCategoria={ setCategoria } />
        <hr />
        <button onClick={ handleAdd }>Agregar</button>
          { 
            categorias.map((cat, index) => (
              <GifGrid key={index} cat={cat} />
            ))
          }
    </>
  )
}


