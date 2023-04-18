const args = process.argv.slice(2); // turns arguments to an array;
let sorted = args.sort((a, b) => a - b); // orders array from small -> large

const timer = function(sorted) {
  for (let i = 0; i < sorted.length; i++) {
    let numerical = parseInt(sorted[i]);

    if (numerical > 0) {
      setTimeout(() => {
        // process.stdout.write(`HERE-I-AM! `);
        process.stdout.write('\x07');
      }, numerical*1000)
    }
  }
};
// note: does NOT run if: no numbers provided, input is negative, input is not a number

timer(args);