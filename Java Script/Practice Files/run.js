// Filtering Numeric Arguments:
// Create a function that takes any number of arguments and returns an array of only the
// numeric arguments. Explain how the rest operator gathers the arguments and how to filter
// them using the typeof operator.

function countDataType(...Data) {
    const typeCounts = {};
    Data.forEach(Data => {
    const type = typeof Data;
    if (type in typeCounts) {
        if(typeCounts==number)
        typeCounts[type]++;
    } else {
        typeCounts[type] = 1;
    }
    });
    return typeCounts;
}
console.log(countDataType(1, 'hello', true, 42, 'world', false, {}));