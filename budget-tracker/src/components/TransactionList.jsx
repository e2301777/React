import Transaction from './Transaction.jsx'

export default function TransactionList(){
    return(
        <>
            <h2>Transactions</h2>
            <ul id="transaction-list">
                <Transaction reason={'just because'} sum={50}/>
            </ul>
        </>
    )

}