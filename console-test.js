console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s %d', 'world', 10);
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened
//     at [eval]:5:15
//     at Script.runInThisContext (node:vm:132:18)
//     at Object.runInThisContext (node:vm:309:38)
//     at node:internal/process/execution:77:19
//     at [eval]-wrapper:6:22
//     at evalScript (node:internal/process/execution:76:60)
//     at node:internal/main/eval_string:23:3

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr

// 문자열
// string A, string B 
console.log('A' + 'B');
console.log('%s%s', 'A', 'B');
const A = 'A';
const B = 'B';
console.log(`${1+1}${B}`);
