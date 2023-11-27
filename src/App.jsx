import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {

  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect (selectedButton) {
    setSelectedTopic(selectedButton) 
    console.log(selectedButton)
}

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
           title={CORE_CONCEPTS[0].title}
           description={CORE_CONCEPTS[0].description}
           image={CORE_CONCEPTS[0].image}
           />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
    
        </ul>
      
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>

          </menu>
          {selectedTopic}

        </section>
      </main>
    </div>
  );
}

export default App;
