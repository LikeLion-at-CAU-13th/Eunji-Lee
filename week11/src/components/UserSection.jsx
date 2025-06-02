import styled from 'styled-components';
import UserCard from './UserCard';
import PageSelection from './PageSelection';

const UserSection = ({filter, userData, offset, limit, setOffset}) => {
  const pagedData = userData.slice(offset, offset + limit);

    return (
        <UserSecLayout>
            <UserCardBox>
                {pagedData.map((data) => <UserCard key={data.id} data={data}/>)}
            </UserCardBox>
            {<PageSelection offset={offset} limit={limit} total={userData.length} setOffset={setOffset}/>}
        </UserSecLayout>
    );
};

export default UserSection;

const UserSecLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const UserCardBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`