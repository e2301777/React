export default function Transaction({ reason, sum, onRemove }){
    return(
        <li className={sum > 0 ? 'income' : 'expense'}>
            {reason}
            {sum}
            <button onClick={onRemove}>Poista</button>
        </li>
    )

}