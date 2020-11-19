import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'
import './App.css'


function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)


// ComponentDidMount é segundo parametro = []
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {setRobots(users)});
}, [])

    const onSearchChange = (event) => {
       setSearchfield( event.target.value)        
    }

       
    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        if(robots.length === 0) {
            return <h1>Loading...</h1>
        } 
        
        else {
        return(
            <div className='tc'>
                 <h1 className='f1'>RoboFriends</h1>
                 <button onClick={() => setCount(count+1)}>Click Me!</button>
                 <SearchBox searchChange={onSearchChange}/>
                 <Scroll>
                     <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundry>
                 </Scroll>
            </div>
        );
        }
    }
    

export default App;