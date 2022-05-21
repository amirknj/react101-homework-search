import React, {useState} from 'react'

const SearchUser = props => { 
        
    const searchHandler = event =>{
        
        props.searchHandler(event.target.value)
    }

    return (
        <input type="text" onKeyUp={searchHandler} placeholder="search..." className='search'/>
    )
}

export default SearchUser