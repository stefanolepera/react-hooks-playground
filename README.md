## React Hooks Playground - EX5_useEffect_intermediate_solution

In order to solve this exercise, we need to use multiple `useEffect`, which is always a good idea to separate concerns (Single Responsibility principle)<br>
In the first `useEffect` we add the listener for the `resize` event, while the second just update the document title.<br>
Couple of things to notice: we pass an empty array `[]` to the first `useEffect` so that runs only once, after the first render, but to the second one, we pass `[width]` so that hook will trigger every time the `width` value changes.<br>

```javascript
useEffect(() => {
    // this runs only once, after the first render
}, []);

useEffect(() => {
    // this runs every time the width value changes
}, [width]);
```

Both hooks return a clean up function, which runs before the component is removed from the UI to prevent memory leaks. That does the same job as `componentWillUnmount`<br>

```javascript
useEffect(() => {
    // we remove the listener when the component is removed from the UI
    return () => window.removeEventListener('resize', handleResize);
}, []);

useEffect(() => {
    // we reset the document title when the component is removed from the UI
    return () => (document.title = '');
}, [width]);
```
