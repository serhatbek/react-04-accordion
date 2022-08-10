import { createContext, useState, useContext } from 'react';

import data from '../../data';

const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState(data);

  const values = {
    questions,
    setQuestions,
  };

  return <QuestionsProvider value={values}>{children}</QuestionsProvider>;
};

export const useQuestions = () => useContext(QuestionsContext);
