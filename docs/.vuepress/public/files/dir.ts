import V from 'http://localhost:8080/files/var.ts';
const dir = Deno.readDirSync(Deno.cwd());

console.log('V');
console.log(V);

for (let file of dir) {
    console.log(file);
}