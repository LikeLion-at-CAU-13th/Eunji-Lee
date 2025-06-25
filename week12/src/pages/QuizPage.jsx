import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getQuestions } from '../api/api';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error('문제 불러오기 실패:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleSelect = (answer) => {
    const newAnswers = [...userAnswers, { id: questions[current].id, answer }];
    setUserAnswers(newAnswers);

    if (current + 1 >= questions.length) {
      navigate('/result', { state: { userAnswers: newAnswers } });
    } else {
      setCurrent(current + 1);
    }
  };

  if (questions.length === 0) return <div>문제를 불러오는 중...</div>;

  const q = questions[current];

  return (
    <Container>
      <Title>Q{current + 1}. {q.question}</Title>
      <AnswerList key={`question-${current}`}>
        {q.answers.map((a, i) => (
            <AnswerBtn key={i} onClick={() => handleSelect(a)}>
                {a}
            </AnswerBtn>
        ))}
        </AnswerList>
    </Container>
  );
};

export default QuizPage;

const Container = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AnswerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const AnswerBtn = styled.button`
  padding: 15px 30px;
  background-color: #ffffff;
  color: #333333;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;