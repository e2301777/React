export default function TransactionForm(){
    return(
        <div className="form">
            <label htmlFor="description">Description:</label>
            <input type="text" placeholder="Reason"/>
            <label htmlFor="sum">Sum:</label>
            <input type="text" placeholder="sum"/>
            <button>Add Transaction</button>
        </div>
    )

}