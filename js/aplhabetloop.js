function vowelsAndConsonants(s) {
    
    let len = s.length;
    const vowels = 'aeiou';
    let consonants = '';
    
    for (let i=0; i<len; i++) {
        if (vowels.includes(s[i])) console.log(s[i]);
        else consonants += s[i];
    }
    
    len = consonants.length;
    for (let i=0; i<len; i++) 
        console.log(consonants[i]);
}
vowelsAndConsonants('amhkjejvbibvjhobvu')