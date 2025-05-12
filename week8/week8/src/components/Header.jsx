import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <h2>
                Likelion 13th_FrontEnd Baby Lion 🦁
            </h2>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
    position: absolute;
    width: 97%;
    top: 20px;
    background-color: rgba(26, 126, 207, 0.6);
    border-radius: 30px;
    padding: 0px;
    color: #fffff0;
    text-align: center;
}`