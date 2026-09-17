const buf = Buffer.allocUnsafe(50);

buf.write("Hello World");
console.log(buf);

console.log(buf.toString('utf-8'));