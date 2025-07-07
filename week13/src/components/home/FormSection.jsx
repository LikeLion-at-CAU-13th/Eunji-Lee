import React, { useContext } from 'react'
import { Button, Wrapper } from '../layout/common'
import Form from './Form'
import { ThemeColorContext } from '../../context/context';
import { useSetRecoilState } from 'recoil';
import { isSubmittedAtom } from '../../recoil/atom';
import { useModal } from '../../context/ModalContext';

const FormSection = () => {
  const mode = useContext(ThemeColorContext);
  const setIsSubmitted = useSetRecoilState(isSubmittedAtom);
  const { setIsOpen } = useModal();

  const handleBtn = () => {
    setIsSubmitted(true);
    setIsOpen(true);
  };

  return (
    <Wrapper>
        <Form type="text" inputType="이름" />
        <Form type="email" inputType="이메일" />
        <Form type="date" inputType="생일" />
        <Button mode={mode.button} onClick={handleBtn}>
            제출
        </Button>
    </Wrapper>
  )
}

export default FormSection