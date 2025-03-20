import { useState, useEffect } from 'react'

export default function TransactionForm(){


    const [inputs, setInputs] = useState({reason: '', sum: 0});
    const [TRANSACTIONS, setTransactions] = useState([]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
      }
      

    function handleSubmit(e){
        e.preventDefault();

        const newTransaction = {reason: inputs.reason, sum: inputs.sum};
        setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
        setInputs({reason: '', sum: 0})
    }

    useEffect(() => console.log(TRANSACTIONS), [TRANSACTIONS]);


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Description:</label>
            <input type="text" name='reason' value={inputs.reason} onChange={handleChange} placeholder="Reason"/>
            <label htmlFor="sum">Sum:</label>
            <input type="text" name='sum' value={inputs.sum} onChange={handleChange} placeholder="sum"/>
            <button>Add Transaction</button>
            
        </form>
    )

}

