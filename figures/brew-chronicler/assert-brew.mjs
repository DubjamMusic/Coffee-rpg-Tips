const expected = 8.088;
const density = (8.0 * 7.9 * 8.2 * 8.1) ** 0.25;
if (Math.abs(density - expected) > 0.01) throw new Error('density mismatch');
console.log('ok brew-chronicler density=' + density.toFixed(3));
