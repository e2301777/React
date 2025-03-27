import Transaction from './Transaction.jsx'

export default function TransactionList({ setTransactions, transactions, setBalance, balance }){
    
    function removeTransaction(indexToRemove){
        const transactionToRemove = transactions[indexToRemove];
        setBalance(balance - transactionToRemove.sum);
        setTransactions(transactions.filter((_, index) => index !== indexToRemove));
    }

    return(
        <>
            <h2>Transactions</h2>
            <ul id="transaction-list">
                {transactions.map((transaction, index) => (
                    <Transaction 
                        key = {index}
                        reason = {transaction.reason}
                        sum = {transaction.sum}
                        onRemove = {() => removeTransaction(index)}/>
                ))}
                
            </ul>
        </>
    )

}