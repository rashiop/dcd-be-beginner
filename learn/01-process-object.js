// TODO 1 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
// TODO 2 : Isi dengan nilai index ke-2 dari process.argv.
// TODO 3 : Isi dengan nilai NODE_ENV dari process.env.
// TODO 4 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
// Setelah mengerjakan seluruh TODO, eksekusi berkas JavaScript dengan perintah:

const initialMemoryUsage = process.memoryUsage().heapUsed
const yourName = process.argv[2]
const environment = process.env.NODE_ENV

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed

console.log(`Hai, ${yourName}`)
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`)
