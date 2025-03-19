export default function Transaction({ reason, sum }){
    return(
        <li className="income">
            {reason}
            {sum}
            <button>Poista</button>
        </li>
    )

}