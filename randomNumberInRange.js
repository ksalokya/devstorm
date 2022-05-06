function randomNumberInRange(a, b) {
    return (a + Math.floor(Math.random() * (b - a + 1)));
}

module.exports = randomNumberInRange