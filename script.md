Welcome back! I hope you enjoyed the exercise and you were able to solve it.

Let's solve the exercise

```js
utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(console.log)
```

Great, I hope that wasn't too bad.

If you noticed here, we actually have `.then` called twice here. This is called promise chaining.

Since getDogNames is returned in a promise resolution callback, in order to get the resulting value of that result,
we have to call .then on that result in order to log it properly.

We'll go more into depth about promise chaining in the next video, I'll see you there
