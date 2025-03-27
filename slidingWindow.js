const countVowels = (str, k) => {
    let start = 0;
    let end = 0;
    let maxWindowSize = k;
    let max = 0;
    let currentVowelNumber = 0;
    let vowels = /[aeoiu]/;
    while ( end < str.length ) {
        if (maxWindowSize !== end - start + 1) { 
            if (vowels.test(str[end])) currentVowelNumber++;
            end++;
        } else {
            max = Math.max(max,currentVowelNumber);
            start++;
            end++;
            if (vowels.test(str[start - 1])) currentVowelNumber--;
            if (vowels.test(str[end])) currentVowelNumber++;
        }
    }
    return max;
}