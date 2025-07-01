import React from 'react'
import { useSetRecoilState } from 'recoil'
import { birthAtom, emailAtom, userNameAtom } from '../../recoil/atom'

const Form = ({ type, inputType }) => {
    const setUserName = useSetRecoilState(userNameAtom);
    const setEmail = useSetRecoilState(emailAtom);
    const setBirth = useSetRecoilState(birthAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if (inputType === '이름') {
            setUserName(value);
        } else if (inputType === '이메일') {
            setEmail(value);
        } else if (inputType === '생일') {
            setBirth(value);
        }
    };   

    return (
        <>
            <div>{inputType}</div>
            <input type={type} onChange={onChange}/>
        </>
    )
}

export default Form