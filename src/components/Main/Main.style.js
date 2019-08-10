import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    border: 1px;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    color: #000;
    border-radius: 6px;
    width: 50%;
    cursor: pointer;

    :hover {
        background-color: grey;
    }
`;

export const List = styled.ul`
    text-align: left;
`;

export const ListItem = styled.li`
    font-style: italic;
`;