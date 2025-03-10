export default function ThemeToggle({children, isSelected, onClick}){
    return(
        <div className="general">
            <h3>Theme toggle</h3>

            <button isSelected={isSelected ? 'dark' : light}onClick={onClick}>
                {children}

            </button>
        </div>
    ) 
    
        
}