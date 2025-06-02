import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserFilter from '../components/UserFilter';
import UserSection from '../components/UserSection';
import { getAllUsers } from '../apis/userlist'; //전체 유저 요청 API

const UserInfo = () => {
    const [filter, setFilter] = useState("all");
    const [userData, setUserData] = useState([]); //전체 데이터 저장
    const [offset, setOffset] = useState(0); //현재 페이지의 시작 index
    const limit = 5; //페이지당 카드 수
    console.log(userData);

    useEffect(() => {
        const fetchData = async() => {
            const data = await getAllUsers(); //전체 유저 한 번에 받아옴
            setUserData(data);
        };
        fetchData();
    }, []);

    return (
        <MainLayout>
            <h1>🦁13기 아기사자 리스트🦁</h1>
            <ContentBox>
                <UserFilter setFilter={setFilter} setUserData={setUserData} setOffset={setOffset} filter={filter}/>
                <UserSection filter={filter} userData={userData} offset={offset} limit={limit} setOffset={setOffset}/>
            </ContentBox>
        </MainLayout>
    );
};

export default UserInfo;

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h1{
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 1rem;
    border : 5px solid #FF7710;
`