import { useState } from 'react'

export default function TransactionForm({ setTransactions, setBalance, balance }){
    const [inputs, setInputs] = useState({reason: '', sum: 0});

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
      }   

    function handleSubmit(e){
        e.preventDefault();

        const sum = parseFloat(inputs.sum)
        setBalance(balance + sum);    
        
        const newTransaction = {reason: inputs.reason, sum: sum};
        setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
        setInputs({reason: '', sum: 0})
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Description:</label>
            <input 
                type="text" 
                name='reason' 
                value={inputs.reason} 
                onChange={handleChange} 
                placeholder="Reason"/>
            <label htmlFor="sum">Sum:</label>
            <input 
                type="text" 
                name='sum' 
                value={inputs.sum} 
                onChange={handleChange} 
                placeholder="sum"/>
            <button>Add Transaction</button>
            
        </form>
    )

}

