## React Hooks Playground - EX4_useEffect_basic_solution

The `useEffect` hook triggers after every completed render.<br>
Normally you would pass, as second parameter, an array of values that act as a reference for the hook: it will fire only when those values have changed.<br>
In this case we want the hook to fire only once, after the first render, so passing an empty array tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.<br>

```javascript
useEffect(() => {
    // some side effect here
}, []);
```
