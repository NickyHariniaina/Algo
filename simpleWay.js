const countVowels = (str, k) => {
    let max = 0;
    let vowels = /[aeoiu]/;
    for (let i = 0; i < str.length - k; i++) {
        let vowelNumber = 0;
        for (let j = 0; j < i + k; j++) {
            if (vowels.test(str[j])) {
                vowelNumber++;
            }
        } 
        max = Math.max(max, vowelNumber);
    }
    return max;
}