import styled from 'styled-components';
import { filterType } from '../constants/filterType';
import { getGenderUser, getPerPage, getPartUser, getAllUsers } from '../apis/userlist';

const UserFilter = ({setFilter, setUserData, setOffset, filter}) => {
    const handleClick = async(type, param) => {
        if (type === "all") {
            const response = await getAllUsers();
            setUserData(response);
            setOffset(0);
        } else if (type === "gender") {
            const response = await getGenderUser(param);
            setUserData(response);
            setOffset(0);
        } else if (type === "part") {
            const response = await getPartUser(param);
            setUserData(response);
            setOffset(0);
        }
        setFilter(param);
    }
    return (
        <FilterLayout>
            {filterType.map((data, idx) =>
                <FilterBox key={idx} onClick={() => handleClick(data.type, data.param)}
                $active={filter==data.param || (data.type==="all" && filter==="all")}>
                    {data.title}
                </FilterBox>
            )}
        </FilterLayout>
    );
};

export default UserFilter;


const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div`
    display: flex;
    padding: 1rem 4rem 1rem 4rem;
    background-color: "#C9C9C9";
    border-radius: 1rem;
    font-size: 3rem;
    white-space: nowrap;
    color: ${({ $active }) => ($active ? 'white' : 'black')};
    &:hover{
        cursor: pointer;
        color: white;
    }
`