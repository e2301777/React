import Greeting from './components/Greeting.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import ToDoList from './components/ToDoList.jsx'
import { useState } from 'react'
import './ThemeToggle.css'
import './general.css'

const App = () => {

    const [selectedTheme, setTheme] = useState('light');
    

    function changeTheme(theme){
        setTheme(theme)
    }

    return(
        <div id='main' className={selectedTheme}>
            <div>
                <Greeting
                    greeting = "Hello "
                    name = "Ville!"
                />
            </div>

            <div>
                <ThemeToggle isSelected={selectedTheme} onClick={() => changeTheme(selectedTheme === 'light' ? 'dark' : 'light')}>Toggle</ThemeToggle> 
            </div>
            <div>
                <ToDoList/>
            </div>
        </div>
    )}
  
 
  export default App