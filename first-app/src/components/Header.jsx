import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'


export default function Header() {
    return(
        <header>
            <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

            <h1>Vite + React</h1>
        </header>
    )
}