const utilities = require("./utilities")

// Write a function called getDogNames that takes the result of `utilities.getDogBreeds()` as an argument and that returns an array of strings with the names of the dog breed
// Write a function called getDogBreed which takes dogNames and a breed, returns the the single breed found
// In the case where the breed isn't found, just return "Not Found"
//
// Lastly, output the breed if found, or just "Not Found"
// For our purposes, use "Golden Retriever" as the breed

function getDogNames(dogBreeds) {
  return dogBreeds.map(dogBreed => dogBreed.name)
}

function getDogBreed(breed) {
  return function(dogNames) {
    return dogNames.find(dogName => dogName === breed) || "Not Found"
  }
}

utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(getDogBreed("Golden Retriever"))
  .then(console.log)
