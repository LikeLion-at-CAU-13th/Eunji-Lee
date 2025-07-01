import React, { useContext } from 'react'
import { Button, Title, Wrapper } from '../components/layout/common'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { birthAtom, emailAtom, isSubmittedAtom, userNameAtom } from '../recoil/atom'
import { ThemeColorContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

const MyPage = () => {
  const userName = useRecoilValue(userNameAtom);
  const mode = useContext(ThemeColorContext);

  const navigate = useNavigate();
  const resetUserName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetBirth = useResetRecoilState(birthAtom);
  const resetIsSubmitted = useResetRecoilState(isSubmittedAtom);

  const handleReset = () => {
    resetUserName();
    resetEmail();
    resetBirth();
    resetIsSubmitted();
    navigate('/');
  };
    
  return (
    <Wrapper>
      <Title>Welcome {userName}!</Title>
      <Button mode={mode.button} onClick={handleReset}>
        리셋
      </Button>
    </Wrapper>
  )
}

export default MyPage