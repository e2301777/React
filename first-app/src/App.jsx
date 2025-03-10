import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import TabButton from './components/TabButton.jsx'



function App() {
    const [selectedTopic, setSelectedTopic] = useState()
    const [count, setCount] = useState(0)

    let tabContent = 'Click button to start'
    function handleClick(clickedButton){
        setSelectedTopic(clickedButton);
        //console.log(selectedTopic);
        
}

  return (
    <>
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <section id='core-concepts'>
            <h2>Core concepts</h2>
            <ul>
                <CoreConcepts 
                    title="Components"
                    description="The core UI building blocks."
                    image={reactLogo}
                />
                <CoreConcepts 
                    title="Props"
                    description="React props lol."
                    image={reactLogo}
                />
                <CoreConcepts 
                    title="Something else"
                    description="More react stuff."
                    image={reactLogo}
                />
                <CoreConcepts 
                    title="Extras"
                    description="Extra building blocks."
                    image={reactLogo}
                />
            </ul>

        </section>
        <section id="example">
            <h2>Examples</h2>
            <menu>
                <TabButton onClick={() => handleClick('components')}>Components</TabButton>
                <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton onClick={() => handleClick('props')}>Props</TabButton>
                <TabButton onClick={() => handleClick('state')}>State</TabButton>
            </menu>
            {selectedTopic}
        </section>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
