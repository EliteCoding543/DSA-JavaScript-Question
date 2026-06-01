function isAnagram(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let map = new Map();

    // Step 1: Count frequency of s
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Step 2: Reduce frequency using t
    for (let char of t) {

        if (!map.has(char)) {
            return false;
        }

        map.set(char, map.get(char) - 1);

        if (map.get(char) < 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("listen", "silent"));