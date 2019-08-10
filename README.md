## React Hooks Playground - EX2_useState_intermediate_solution

Unlike the `setState` method found in class components, the `useState` hook does not automatically merge updated objects.<br>
If you only update the `fistName` key value you would lose the rest of the object key value pairs.<br>

```javascript
setCredentials({ firstName: 'Steve' });
```

In order to replicate this behavior we can combine the function updater with the object spread syntax: spreading the previous state and then just change the relevant key value pair<br>

```javascript
setCredentials(prevState => ({
    ...prevState,
    firstName: 'Steve'
}));
```
