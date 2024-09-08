/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    const [year, month, day] = date.split('-').map(Number);

    // Convert each component to its binary representation
    const yearBinary = year.toString(2);   // Convert year to binary
    const monthBinary = month.toString(2); // Convert month to binary
    const dayBinary = day.toString(2);     // Convert day to binary

    // Concatenate the binary strings with '-' as a separator
    return `${yearBinary}-${monthBinary}-${dayBinary}`;
};