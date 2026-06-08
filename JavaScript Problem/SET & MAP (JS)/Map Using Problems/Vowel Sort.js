function vowelSort(arr) {
    // Set of vowels for O(1) lookups (handles both lower and uppercase)
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    // Use spread operator to avoid mutating the original input array
    return [...arr].sort((a, b) => {
        const aStartsVowel = vowels.has(a[0]);
        const bStartsVowel = vowels.has(b[0]);
        
        // Condition 1: One starts with a vowel and the other doesn't
        if (aStartsVowel && !bStartsVowel) return -1; // 'a' comes first
        if (!aStartsVowel && bStartsVowel) return 1;  // 'b' comes first
        
        // Condition 2: Both start with a vowel OR both start with a consonant
        // Fall back to standard alphabetical (lexicographic) sorting
        return a.localeCompare(b);
    });
}

console.log(vowelSort(["godly", "inder", "ploma" , "sxewqa"]));