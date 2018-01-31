function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString
    .toLowerCase()
    .split(/[ ,!.";:-]+/)
    .filter(Boolean)
    .sort();
}

// Function accepts a block of text as an incoming parameter
// which is assumed to be a string.
// Return Value: Most Frequent Word as a String
function mostFrequentWord(text) {

  // First build an array of strings representing the individual
  // words in our incoming text
  let words = getTokens(text);

  // Now that we have our wordlist, we need to create a "dictionary" of 
  // word:count pairs. We'll use an object for this.
  let wordFrequencies = {};

  // To build our word count we're going to iterate over the word
  // array using a for-loop.
  for (let i = 0; i <= words.length; i++) {

    // We use the 'in' operator to check if an object already contains a key.
    if (words[i] in wordFrequencies) {

      // If it does we increment the value
      wordFrequencies[words[i]]++;
    } else {

      // Otherwise we add the new word to our object and set its initial value at 1
      wordFrequencies[words[i]] = 1;
    }
  }
  let currentMaxKey = Object.keys(wordFrequencies)[0];
  let currentMaxCount = wordFrequencies[currentMaxKey];

  for (let word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  return currentMaxKey;
}
