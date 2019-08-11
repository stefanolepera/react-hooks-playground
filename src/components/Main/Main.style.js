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
    margin-bottom: 20px;
    cursor: pointer;
    :hover {
        background-color: grey;
    }
`;

export const WebsiteWrapper = styled.div`
    margin-bottom: 20px;
    font-style: italic;
    color: #ccc;
`;

export const UserWrapper = styled.div`
    text-align: center;
`;

export const UserAttribute = styled.p`
    margin: 2px;
`;
