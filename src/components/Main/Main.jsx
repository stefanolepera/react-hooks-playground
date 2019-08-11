import React, { useState, useEffect } from 'react';
import {
    MainWrapper,
    Button,
    WebsiteWrapper,
    UserWrapper,
    UserAttribute
} from './Main.style';
import { Spinner } from '../';
import fetchData from '../../services/APIService';

const Main = () => {
    const [userId, setUserId] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const [isDotCom, setIsDotCom] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchData(userId)
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(() => setUserId(1));
    }, [userId]);

    useEffect(() => {
        if (Object.values(data).length > 0) {
            const dotCom = Object.values(data).filter(
                value => value.indexOf && value.indexOf('.com') !== -1
            );
            setIsDotCom(dotCom.length > 0);
        }
    }, [data]);

    const setNewUserId = () => {
        setUserId(prevState => setUserId(prevState + 1));
    };

    return (
        <MainWrapper>
            <h2>EX6_useEffect_advanced_solution</h2>
            <Button onClick={setNewUserId}>GET THE NEXT USER</Button>
            <WebsiteWrapper>{`has .com website: ${isDotCom}`}</WebsiteWrapper>
            {isLoading ? (
                <Spinner />
            ) : (
                <UserWrapper>
                    {Object.keys(data)
                        .filter(
                            element =>
                                element !== 'address' && element !== 'company'
                        )
                        .map(element => (
                            <UserAttribute key={element}>
                                {`${element}: ${data[element]}`}
                            </UserAttribute>
                        ))}
                </UserWrapper>
            )}
        </MainWrapper>
    );
};

export default Main;
