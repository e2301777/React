export default function ToDoList(){

    const toDoItems = ['Buy milk', 'Drink said milk', 'Throw up said milk', 'Go to bed'];

   return(
        <div className="general">
            <h3>To Do List:</h3>
            <div>
                {toDoItems.map((item) => <p>{item}</p>)}
            </div>
        </div>


   )
}