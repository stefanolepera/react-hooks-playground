## React Hooks Playground - EX3_useState_advanced_solution

In order to update the `count` state after 1 second we have to use the `setTimeout()`.<br>
Lets go over the basic implementation:<br>

```javascript
setTimeout(() => setCount(count + 1), 1000);
```

If we use the basic approach of the first exercise, we encounter an unwanted behaviour: everything works fine if we click the INCREASE and DECREASE buttons slowly but what if we click those buttons quickly? Like 3 times in 1 second?<br>
The result is `count` gets updated only once and not 3 times like we expect.<br>
The reason for this is when `setTimeout()` is scheduled it's using the value of `count` at the time it was scheduled. It's relying on a closure to access count asynchronously. When the component re-renders a new closure is created but that doesn't change the value that was initially closed over.<br>

Correct implementation:<br>

```javascript
setTimeout(() => setCount(prevState => prevState + 1), 1000);
```

Providing a callback when using the function returned from `useState` let the hook to use the correct value of `count` at the time it was invoked and not the current one.<br>

The second part of the problem was to add and remove elements from the items array.<br>
You migth have tried the following naive solution:

```javascript
// add item
setItems(items.push(Math.round(Math.random() * 100)));
// remove item
setItems(items.pop());
```

If you did so, you should have encountered a run time error.<br>
The reason being `items` is constant and its value is set only during the first render. If we want to "change" its value later on we have to do that in a functional way:

```javascript
// add item
setItems(prevState => [...prevState, Math.round(Math.random() * 100)]);
// remove item
setItems(prevState => [...prevState.slice(0, items.length - 1)]);
```
