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
  let words = getTokens(text);
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
