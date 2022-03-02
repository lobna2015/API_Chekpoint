import React,{useState, useEffect} from 'react'
import axios from 'axios'

const UserList = () => {

    const [data, setData] = useState([])

    useEffect(() => {

      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {setData(res.data)})
      .catch(err => {console.log(err)})
    
    }, [])
    

  return (
    <div>
        <h4>THERE IS A FETCHING LIST OF USER FROM jsonplaceholder API</h4>
        <h5>USING USEEFFECT HOOKS</h5>
<ul>
    {
    data.map(el => 
       <li>{el.title}</li> 
       )
       }
       <hr/>
</ul>
    </div>
  )
}

export default UserList