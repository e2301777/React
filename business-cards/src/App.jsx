import BusinessCard from "./components/BusinessCard"
import SearchBar from "./components/SearchBar"
import './index.css'
import { STAFF } from './staff.js'
import { useState } from 'react'

function App() {
    const [hiddenStatus, changeHidden] = useState('hide')

    function showHide(hidden) {
        changeHidden(hidden)
    }

    return (
        <div>
            <div>
                {/* Other components or content */}
            </div>
            <SearchBar isHidden={hiddenStatus} onClick={() => showHide(hiddenStatus === 'show' ? 'hide' : 'show')} />
            <BusinessCard isHidden={hiddenStatus} {...STAFF[0]} />
            <BusinessCard isHidden={hiddenStatus} {...STAFF[1]} />
            <BusinessCard isHidden={hiddenStatus} {...STAFF[2]} />
        </div>
    )
}

export default App
