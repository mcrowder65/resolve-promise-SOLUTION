Welcome back! I hope you enjoyed the exercise and were able to solve it.

OK let's first solve the first requirement.

We need to write a function called `getDogNames` that takes in the result of `utilities.getDogBreeds()` and returns all of the names of the dogs

```js
function getDogNames(dogBreeds) {
  return dogBreeds.map(dogBreed => dogBreed.name)
}

utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(console.log)
```

OK and if we turn our attention to the terminal, you can see that we're outputting the dog breed names and not
the id's anymore

Let's implement the next function.
we need to write a function called `getDogBreed` which takes dogNames and breed, and returns the single breed found

```js
function getDogNames(dogBreeds) {
  return dogBreeds.map(dogBreed => dogBreed.name)
}

function getDogBreed(dogNames, breed) {
  return dogNames.find(dogName => dogName === breed)
}

utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(function(dogNames) {
    return getDogBreed(dogNames, "Golden Retriever")
  })
  .then(console.log)
```

And then if the dog name isn't found, then we can just return "Not Found" instead.

Let's implement that.

We can just || the dogNames.find clause to "Not Found", and it will fallback to "Not Found" when that returns undefined

```js
|| "Not Found"
```

Then if we change `Golden Retriever` to be just `Retriever`, it outputs `Not Found` on the terminal.

Cool, let's change it back to `Golden Retriever`

There's something I don't quite like about this solution, can you think of a way to cleanup `getDogBreed`?

I don't like how we have the mix of declared inline functions and not inline functions.

Since we know that "Golden Retriever" is a variable that won't change, we can make `getDogBreed` return a function instead

Let's implement that change.

```js
function getDogBreed(breed) {
  return function(dogNames) {
    return dogNames.find(dogName => dogName === breed) || "Not Found"
  }
}
```

Now, we can just call getDogBreed with Golden Retriever and it will return a function that accepts the resolved value
of our promise

```js
.then(getDogBreed("Golden Retriever"))
```

Great! Here is the solution for this exercise!

Did you notice how we called `.then` 3 times here?

Each time another promise is returned, from a function executing, you need to resolve that promise
with `.then`, this is called promise chaining! Good job!
