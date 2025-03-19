import { useState } from 'react'
import Header from './components/Header.jsx'
import TransactionForm from './components/TransactionForm.jsx'
import TransactionList from './components/TransactionList.jsx'

import './App.css'
import './index.css'

const TRANSACTIONS = [1]

function App() {
    const [balance, setBalance] = useState(200)



    return (
        <div className='container'>
            <Header balance={balance}/>
            <TransactionForm/>
            {TRANSACTIONS.length !== 0 && <TransactionList/>}
            
        </div>
      )
}

export default App
