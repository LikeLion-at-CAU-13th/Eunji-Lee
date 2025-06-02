import styled from 'styled-components';
import { getPerPage } from '../apis/userlist';

const PageSelection = ({offset, limit, total, setOffset}) => {
    const totalPages = Math.ceil(total/limit);
    
    const handleClick = async(pageIndex) => {
        const newOffset = (pageIndex - 1) * limit;
        setOffset(newOffset);
    };

    const currentPage = Math.floor(offset/limit) + 1;

    return (
        <SelectionLayout>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PageBox
                key={page}
                $active={page===currentPage}
                onClick={() => handleClick(page)}>
                    {page}
                </PageBox>
            ))}
        </SelectionLayout>
    );
};

export default PageSelection;

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
    &:hover{
        cursor: pointer;
        color: white;
    }
`