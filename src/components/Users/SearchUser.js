import React, {useState} from 'react'

const SearchUser = props => { 
    
    // const [query, setQuery] = useState("")  
        
    const searchHandler = event =>{
        // console.log(event.target.value)
        // setQuery(event.target.value)
        // props.searchHandler(query)
        // console.log(event.target.value);
        props.searchHandler(event.target.value)
    }

    return (
        <input type="text" onKeyUp={searchHandler} placeholder="search..." className='search'/>
    )
}

export default SearchUser