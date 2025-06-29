import React from 'react'
import { useModal } from '../context/ModalContext'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { birthAtom, emailAtom, isSubmittedAtom, userNameAtom } from '../recoil/atom';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
    const { isOpen, setIsOpen } = useModal();

    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const birth = useRecoilValue(birthAtom);

    const resetUserName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const resetBirth = useResetRecoilState(birthAtom);
    const resetIsSubmitted = useResetRecoilState(isSubmittedAtom);

    const navigate = useNavigate();

    if (!isOpen) return null;
    
    return (
    <div style={modalStyle}>
        <h2 style={{ textAlign: 'center' }}>입력한 정보를 확인하세요</h2>
        <p>이름: {userName}</p>
        <p>이메일: {email}</p>
        <p>생일: {birth}</p>

        <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={() => {
            setIsOpen(false);
            navigate('mypage');
        }}>확인</button>

        <button style={buttonStyle} onClick={() => {
            setIsOpen(false);
            resetUserName();
            resetEmail();
            resetBirth();
            resetIsSubmitted();
            navigate('/');
        }}>취소</button>
        </div>
    </div>
  );
};

export default Modal;

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  padding: '35px',
  background: 'white',
  border: '1px solid #ccc',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  minWidth: '300px',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
};

const buttonStyle = {
    background: '#000000',
    color: 'white',
    padding: '5px 10px',
    border: '1px solid black',
    borderRadius: '10px',
    cursor: 'pointer',
}