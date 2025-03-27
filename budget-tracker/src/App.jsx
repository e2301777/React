import { useState } from 'react'
import Header from './components/Header.jsx'
import TransactionForm from './components/TransactionForm.jsx'
import TransactionList from './components/TransactionList.jsx'

import './App.css'
import './index.css'



function App() {
    const [balance, setBalance] = useState(50)
    const [transactions, setTransactions] = useState([]);



    return (
        <div className='container'>
            <Header balance={balance}/>
            <TransactionForm 
                setTransactions={setTransactions} 
                transactions={transactions} 
                setBalance={setBalance} 
                balance={balance}/>
            <TransactionList 
                setTransactions ={setTransactions}
                transactions={transactions}
                setBalance={setBalance} 
                balance={balance}/>

        </div>
      )
}

export default App
