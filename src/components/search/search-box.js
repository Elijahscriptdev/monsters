import React from 'react'
import './style.css'

/**
* @author
* @function SearchBox
**/

const SearchBox = ({ placeholder, handleChange }) => {
  return(
    <input 
    className='search' 
    type='search' 
    placeholder={ placeholder } 
    onChange={ handleChange } 
    />
   )

 }

export default SearchBox