const sentence = 'hello there from lighthouse labs';
let delay = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50); 
}

setTimeout(() => {
  console.log();
}, delay);