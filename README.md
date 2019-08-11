## React Hooks Playground - EX6_useEffect_advanced

To solve this exercise, implement the code for the `Main.jsx` component using tow `useEffect` hooks and add the following features:<br>
Use the provided `fetchData` method in `src/services/APIService.js` to fetch users from the jsonplaceholder website: bear in mind that `fetchData` returns a promise.<br>
The `fetchData` method accept one parameter, which is the number of the user to fetch data from.<br>
Display the user data, filtering out the `address` and `company` attributes.<br>
Display the `Spinner` component if the data is currently loading: the use of throttling in the DevTools might help to simulate a slower connection.<br>
Clicking the button should increase the `userId` by one and fetch the corrisponding user data: the API has a limit of 10 user, after that it will respond with an error,
when that happen we need to handle the error and reset the `userId` to 1.<br>
Additionaly we want to check, for every data change, if the website of the user ends in `.com` and display `true` or `false` in the `div` containing <i>has .com website:</i><br>
**Note: all the imports and a skeleton of the component is provided, feel free to change / rename some things if you feel to.**<br>
If you find yourself stuck or just want to double check your solution, please check out the [EX6_useEffect_advanced_solution](https://github.com/stefanolepera/react-hooks-playground/tree/EX6_useEffect_advanced_solution) branch.
