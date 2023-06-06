function toCamelCase(str) {
    let words = str.split(' ');
    words = words.map(word => word[0].toUpperCase() + word.substr(1).toLowerCase());
    return words.join('');
}

export default toCamelCase;