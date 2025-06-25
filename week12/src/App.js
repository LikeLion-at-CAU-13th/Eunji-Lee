import React from 'react'
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import QuizResult from './pages/QuizResult';
import "./App.css";

const App = () => {
  return (
    <AppDom>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<QuizPage/>}/>
        <Route path='/result' element={<QuizResult/>} />
      </Routes>
    </AppDom>
  )
}

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;