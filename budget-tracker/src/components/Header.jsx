export default function Header({ balance }){
    return(
        <>
            <h1>Budget Tracker</h1>
            <div className="balance-box">
                <h3 >Saldo</h3>
                <p id="balance">{balance} €</p>
            </div>
        </>
    )

}