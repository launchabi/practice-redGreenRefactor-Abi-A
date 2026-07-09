
function countVowels(input){ // "adieu"
    let count = 0;

    let vowels = ["a", "e", "i", "o", "u"];
    for(const char of input){
        if(vowels.includes(char)){
            count += 1;
        }
    }

    return count;
}

module.exports = { countVowels }