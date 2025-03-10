import BusinessCard from "./components/BusinessCard"
import SearchBar from "./components/SearchBar"
import './index.css'
import {STAFF} from './staff.js'
import {useState} from 'react'


function App() {
    const [hiddenStatus, changeHidden] = useState('hide')

    function showHide(hidden){
        changeHidden(hidden)
    }

  return (

    <div>
        <div>

        </div>
        <SearchBar />
        <BusinessCard isHidden={hiddenStatus} onClick={() => showHide(hiddenStatus === 'show' ? 'hide' : 'show')}{...STAFF[0]}/>
        <BusinessCard isHidden={hiddenStatus} onClick={() => showHide(hiddenStatus === 'show' ? 'hide' : 'show')}{...STAFF[1]}/>
        <BusinessCard isHidden={hiddenStatus} onClick={() => showHide(hiddenStatus === 'show' ? 'hide' : 'show')}{...STAFF[2]}/>
    </div>
    
  )
}

export default App
