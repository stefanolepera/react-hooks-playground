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
    const [data, setData] = useState({});
    const [userId, setUserId] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isDotCom, setIsDotCom] = useState(false);

    useEffect(() => {
        // TODO add here the fetchData, handling the loading and the error.
        // If the API returns an error we have to reset the userId to 1
    });

    useEffect(() => {
        // TODO add here the check if the user has a .com website and
        // update the isDotCom state
    });

    const setNewUserId = () => {
        // TODO inscrease the userId by 1
    };

    return (
        <MainWrapper>
            <h2>EX6_useEffect_advanced</h2>
            <Button onClick={setNewUserId}>GET THE NEXT USER</Button>
            <WebsiteWrapper>{`has .com website:`}</WebsiteWrapper>
            {/* if the data is loading display the Spinner component, otherwise display the user data filtering out address and company */}
        </MainWrapper>
    );
};

export default Main;
