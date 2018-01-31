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
  for (let i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    } else {
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
