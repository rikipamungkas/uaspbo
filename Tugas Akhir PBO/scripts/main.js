var Pesanan = /** @class */ (function () {
    function Pesanan() {
        this.arrayPesanan = [];
    }
    Pesanan.prototype.hitungHargaFinal = function () {
        var total = 0;
        for (var i = 0; i < this.arrayPesanan.length; i++) {
            total += this.arrayPesanan[i].hargaSemua;
        }
        this.totalHargaFinal = total;
    };
    Pesanan.prototype.tampil = function () {
        this.hitungHargaFinal();
        var teks = '';
        for (var i = 0; i < this.arrayPesanan.length; i++) {
            teks += "<tr><th>" + (i + 1) + "</th>\n                    <td>" + this.arrayPesanan[i].namaIkan + "</td>\n                    <td>" + this.arrayPesanan[i].qtyHasil + "</td>\n                    <td>" + this.arrayPesanan[i].hargaSemua + "</td>";
        }
        ;
        document.getElementById('tabelHasil').innerHTML = teks;
        document.getElementById('totalSemua').value = this.totalHargaFinal.toString();
    };
    Pesanan.prototype.hitungKembalian = function () {
        this.pembayaran = parseInt(document.getElementById("bayar").value);
        this.kembalian = this.pembayaran - this.totalHargaFinal;
        document.getElementById("kembalian").value = this.kembalian.toString();
    };
    return Pesanan;
}());
var pesananBibit = new Pesanan();
var Ikan = /** @class */ (function () {
    function Ikan(namaIkan, stokIkan, harga, idHtml, idHtmlHarga, idTampilTotalHarga, idHtmlStok) {
        this.namaIkan = namaIkan;
        this.stokIkan = stokIkan;
        this.harga = harga;
        this.idHtml = idHtml;
        this.idHtmlHarga = idHtmlHarga;
        this.idTampilTotalHarga = idTampilTotalHarga;
        this.idHtmlStok = idHtmlStok;
        this.arrayQty = [];
        this.arrayHarga = [];
    }
    Ikan.prototype.ambilNilai = function () {
        var nilai = parseInt(document.getElementById(this.idHtml).value);
        this.jumlahBibit = nilai;
        this.arrayQty.push(this.jumlahBibit);
        this.hitungQtyHasil();
        if (nilai > 0) {
            this.stokIkan = this.stokIkan - this.jumlahBibit;
            for (var i = -1; i < pesananBibit.arrayPesanan.length; i++) {
                if (pesananBibit.arrayPesanan.indexOf(this) === -1) {
                    pesananBibit.arrayPesanan.push(this);
                }
            }
        }
    };
    Ikan.prototype.hitungQtyHasil = function () {
        var total = 0;
        for (var i = 0; i < this.arrayQty.length; i++) {
            total += this.arrayQty[i];
        }
        this.qtyHasil = total;
    };
    Ikan.prototype.tampilOnload = function () {
        document.getElementById(this.idHtmlHarga).innerHTML = this.harga.toString();
        document.getElementById(this.idHtmlStok).value = this.stokIkan.toString();
    };
    Ikan.prototype.hitungTotalHarga = function () {
        this.ambilNilai();
        var totalHarga = this.jumlahBibit * this.harga;
        this.totalHarga = totalHarga;
        this.arrayHarga.push(this.totalHarga);
        var total = 0;
        for (var i = 0; i < this.arrayHarga.length; i++) {
            total += this.arrayHarga[i];
        }
        this.hargaSemua = total;
    };
    Ikan.prototype.tampil = function () {
        this.hitungTotalHarga();
        document.getElementById(this.idTampilTotalHarga).value = this.totalHarga.toString();
        document.getElementById(this.idHtmlStok).value = this.stokIkan.toString();
    };
    return Ikan;
}());
var Pembeli = /** @class */ (function () {
    function Pembeli(idHtmlNama, idHtmlAlamat) {
        this.idHtmlNama = idHtmlNama;
        this.idHtmlAlamat = idHtmlAlamat;
    }
    Pembeli.prototype.tampil = function () {
        this.nama = document.getElementById(this.idHtmlNama).value;
        this.alamat = document.getElementById(this.idHtmlAlamat).value;
        document.getElementById("namaOutput").innerHTML = this.nama;
        document.getElementById("alamatOutput").innerHTML = this.alamat;
    };
    return Pembeli;
}());
var nilaHitam = new Ikan('Ikan Nila Hitam', 90000, 200, 'jumlahNilaHitam', 'htmlHargaNilaHitam', 'hargaNilaHitam', 'stokNilaHitam');
var nilaMerah = new Ikan('Ikan Nila Merah', 30000, 150, 'jumlahNilaMerah', 'htmlHargaNilaMerah', 'hargaNilaMerah', 'stokNilaMerah');
var nilaGesit = new Ikan('Ikan Nila Gesit', 100000, 250, 'jumlahNilaGesit', 'htmlHargaNilaGesit', 'hargaNilaGesit', 'stokNilaGesit');
var leleMutiara = new Ikan('Ikan Lele Mutiara', 200000, 200, 'jumlahLeleMutiara', 'htmlHargaLeleMutiara', 'hargaLeleMutiara', 'stokLeleMutiara');
var lelePatin = new Ikan('Ikan Lele Patin', 30000, 300, 'jumlahLelePatin', 'htmlHargaLelePatin', 'hargaLelePatin', 'stokLelePatin');
var leleSangkuriang = new Ikan('Ikan Lele Sangkuriang', 10000, 400, 'jumlahLeleSangkuriang', 'htmlHargaLeleSangkuriang', 'hargaLeleMutiara', 'stokLeleSangkuriang');
var gurameBatu = new Ikan('Ikan Gurame Batu', 20000, 2000, 'jumlahGurameBatu', 'htmlHargaGurameBatu', 'hargaGurameBatu', 'stokGurameBatu');
var guramePadang = new Ikan('Ikan Gurame Padang', 5000, 5000, 'jumlahGuramePadang', 'htmlHargaGuramePadang', 'hargaGuramePadang', 'stokGuramePadang');
var gurameBaster = new Ikan('Ikan Gurame Baster', 3000, 8000, 'jumlahGurameBaster', 'htmlHargaGurameBaster', 'hargaGurameBaster', 'stokGurameBaster');
var customer = new Pembeli("namaInput", "alamatInput");
function onLoad() {
    nilaHitam.tampilOnload();
    nilaMerah.tampilOnload();
    nilaGesit.tampilOnload();
    leleMutiara.tampilOnload();
    lelePatin.tampilOnload();
    leleSangkuriang.tampilOnload();
    gurameBatu.tampilOnload();
    guramePadang.tampilOnload();
    gurameBaster.tampilOnload();
}
function pesanBibit() {
    nilaHitam.tampil();
    nilaMerah.tampil();
    nilaGesit.tampil();
    leleMutiara.tampil();
    lelePatin.tampil();
    leleSangkuriang.tampil();
    gurameBatu.tampil();
    guramePadang.tampil();
    gurameBaster.tampil();
    pesananBibit.tampil();
    customer.tampil();
}
function hitungPembayaran() {
    pesananBibit.hitungKembalian();
}
