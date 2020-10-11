let warna = ["biru","merah","kuning","hijau"];
let dataBukuTambahan = {
    penulis : "John Doe",
    tahunTerbit : 2020
};
let buku = {
    nama: "pemograman dasar",
    jumlahHalaman : 172,
    warnaSampul : ["hitam"]
};

let gabungWarna = [...buku.warnaSampul, ...warna, dataBukuTambahan];
console.log(gabungWarna);