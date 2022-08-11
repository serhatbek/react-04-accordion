import './App.scss';

import { useState } from 'react';
import data from './data';
import Faq from './components/Faq/Faq';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>FAQ About Login</h3>
        <Faq questions={questions} />
      </div>
    </main>
  );
}

export default App;
