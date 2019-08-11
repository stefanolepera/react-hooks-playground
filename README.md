## React Hooks Playground - EX6_useEffect_advanced_solution

In order solve this exercise, we need to implement the code for the first `useEffect` hook, fetching the data and handling the returned promise:<br>

```javascript
useEffect(() => {
    setIsLoading(true);
    fetchData(userId)
        .then(response => {
            setData(response.data);
            setIsLoading(false);
        })
        .catch(() => setUserId(1));
}, [userId]);
```

We set the `isLoading` state to true, so we can display the Spinner, then if the promise resolves we set the `data` with the response and `isLoading` to false, if we get and error we reset the `userId` to 1. This hook triggers every time `userId` changes.<br>
In the second `useEffet` hook we implement the code to check if the user website is `.com` and set `isDotCom` state accordingly. This hook triggers every time `data` changes.<br>

```javascript
useEffect(() => {
    if (Object.values(data).length > 0) {
        const dotCom = Object.values(data).filter(
            value => value.indexOf && value.indexOf('.com') !== -1
        );
        setIsDotCom(dotCom.length > 0);
    }
}, [data]);
```

In the `setNewUserId` function we simply increment by 1 `userId`.<br>

```javascript
const setNewUserId = () => {
    setUserId(prevState => setUserId(prevState + 1));
};
```

Lastly, the render method we add the logic to display the `Spinner` if the data is stil loading, otherwise we display the user data filtering out `address` and `company`.<br>

```javascript
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
```
