/**
 * Generate random number in a given range of
 * a - b.
 *
 * @since 1.0.0
 * @category Function
 * @param {number1} Minimum range
 * @param {number2} Maximum range
 * @returns {number}
 */

function randomNumberInRange(a, b) {
    return (a + Math.floor(Math.random() * (b - a + 1)));
}

module.exports = randomNumberInRange