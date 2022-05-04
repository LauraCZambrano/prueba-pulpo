import app from './app.js';

async function main() {
    await app.listen(8000);
    console.log(`Server listen on port ${8000}`)
}

main();