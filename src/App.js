import './App.scss';
import SingleFaq from './components/SingleFaq/SingleFaq';

import { useState } from 'react';
import data from './data';
// import Faq from './components/Faq/Faq';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>FAQ About Login</h3>
        {questions.map((question) => {
          return <SingleFaq key={question.id} {...question} />;
        })}
        {/* <Faq questions={questions} /> */}
      </div>
    </main>
  );
}

export default App;
