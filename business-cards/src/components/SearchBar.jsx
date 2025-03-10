export default function SearchBar({ isHidden, onClick }) {
    return (
        <div>
            <p onClick={onClick}><strong>Show email</strong></p>
            <input type="text" />
        </div>
    )
}