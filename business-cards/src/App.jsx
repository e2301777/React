import BusinessCard from "./components/BusinessCard"
import './index.css'
import {STAFF} from './staff.js'


function App() {


  return (
    <div>
        <BusinessCard {...STAFF[0]}/>
        <BusinessCard {...STAFF[1]}/>
        <BusinessCard {...STAFF[2]}/>
    </div>
  )
}

export default App
