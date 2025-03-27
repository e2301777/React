export default function Transaction({ reason, sum, onRemove }){
    return(
        <li className="income">
            {reason}
            {sum}
            <button onClick={onRemove}>Poista</button>
        </li>
    )

}