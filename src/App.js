import React,{useState} from 'react';
import './App.css'
import AddUser from './components/Users/AddUser';
import SearchUser from './components/Users/SearchUser';
import UsersList from './components/Users/UsersList';
import data from "./components/Users/UsersFile.json"

function App() {

  const [filteredList, setUsersList] = useState(data)
  // const [filteredList, setUsersList] = useState([])
  const [error, setError] = useState('')

  const addUserHandler = (email,age) =>{
      //validation
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      if(email.trim().length === 0 || age.trim().length === 0) {
        setError({
          title: 'Invalid Inputs',
          message: 'Please Enter a valid email and age.'
        })
        return
      }
      if (!email.match(validRegex)){
        setError({
          title: 'Invalid Email',
          message: 'Please Enter a valid email.'
        })
        return
      }
      if(+age < 1) {
        setError({
          title: 'Invalid Age',
          message: 'Please enter a valid age'
        })
        return
      }
      // userList.some(user => user.email === email)
      if(data.find(user => user.email === email)) {
        setError({
          title: 'Duplicate Email',
          message: 'Email address must be unic.'
        })
        return
      }

      // setUsersList((prevList)=>([...filteredList,{email,age,id:Math.random().toString()}]))
      // setUsersList([...data,{email,age,id:Math.random().toString()}])
      data = [...data,{email,age,id:Math.random().toString()}]
  }

  const searchEmailHandler = query => {
      if(query){
        const filterList =  data.filter(item => item.email.includes(query))
        setUsersList(filterList)
      }else{
        setUsersList([...data])
      }
    }
 
  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <SearchUser searchHandler={searchEmailHandler}/>
      <UsersList users={filteredList}/>
    </div>
  )
}

export default App;
