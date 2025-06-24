import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postAnswers, getResult } from '../api/api';

const QuizResult = () => {
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const userAnswers = location.state?.userAnswers;

  useEffect(() => {
    const fetchResult = async () => {
      if (!userAnswers || userAnswers.length !== 5) {
        setError('답안이 정확히 5개여야 합니다.');
        return;
      }

      try {
        const answerRes = await postAnswers(userAnswers);
        const correctCount = answerRes.results.filter(r => r.correct).length;
        setScore(correctCount);

        const resultRes = await getResult(correctCount);
        setMessage(resultRes.message);
      } catch (err) {
        setError('결과를 불러오는 데 실패했습니다.');
        console.error(err);
      }
    };

    fetchResult();
  }, [userAnswers]);

  if (error) {
    return (
      <Container>
        <ErrorText>{error}</ErrorText>
        <Button onClick={() => navigate('/')}>홈으로</Button>
      </Container>
    );
  }

  if (score === null) return <Container>결과를 불러오는 중...</Container>;

  return (
    <Container>
      <Title>Quiz 결과 💯</Title>
      <ScoreText>점수 | {score} / 5</ScoreText>
      <MessageText>{message}</MessageText>
      <Button onClick={() => navigate('/')}>처음으로</Button>
    </Container>
  );
};

export default QuizResult;

const Container = styled.div`
  padding: 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
`;

const ScoreText = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const MessageText = styled.div`
  font-size: 20px;
  color: #333;
`;

const ErrorText = styled.div`
  font-size: 18px;
  color: red;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #75b5f5;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #9ecfff;
  }

  &:active {
    background-color: #3d9dfd;
  }
`;