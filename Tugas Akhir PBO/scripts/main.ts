class Pesanan{
    public arrayPesanan : Array<any>;
    public totalHargaFinal : number;
    private pembayaran : number;
    private kembalian : number;

    constructor(){
        this.arrayPesanan = []
    }

    hitungHargaFinal(){
        let total = 0
        for(let i=0;i<this.arrayPesanan.length;i++){
            total += this.arrayPesanan[i].hargaSemua
        }
        this.totalHargaFinal = total;
    }

    tampil(){
        this.hitungHargaFinal();
        let teks = ''
        for(let i = 0; i<this.arrayPesanan.length;i++){
            teks += `<tr><th>${i+1}</th>
                    <td>${this.arrayPesanan[i].namaIkan}</td>
                    <td>${this.arrayPesanan[i].qtyHasil}</td>
                    <td>${this.arrayPesanan[i].hargaSemua}</td>`;
        };
        document.getElementById('tabelHasil').innerHTML=teks;
        (<HTMLInputElement>document.getElementById('totalSemua')).value = this.totalHargaFinal.toString();
    }

    hitungKembalian(){
        this.pembayaran = parseInt((<HTMLInputElement>document.getElementById("bayar")).value)
        this.kembalian = this.pembayaran - this.totalHargaFinal;
        (<HTMLInputElement>document.getElementById("kembalian")).value = this.kembalian.toString();
    }

}

let pesananBibit = new Pesanan()

class Ikan {
    
    public namaIkan : string;
    public stokIkan : number;
    public harga    : number;
    public totalHarga : number;
    public jumlahBibit : number
    public idHtml : string;
    public idHtmlHarga : string;
    public idTampilTotalHarga : string;
    public idHtmlStok : string;
    public arrayQty : Array<any>;
    public qtyHasil : number;
    public arrayHarga : Array<any>;
    public hargaSemua : number;

    constructor(namaIkan, stokIkan, harga, idHtml, idHtmlHarga, idTampilTotalHarga,idHtmlStok) {

        this.namaIkan = namaIkan;
        this.stokIkan = stokIkan;
        this.harga    = harga;
        this.idHtml   = idHtml;
        this.idHtmlHarga = idHtmlHarga
        this.idTampilTotalHarga = idTampilTotalHarga
        this.idHtmlStok = idHtmlStok
        this.arrayQty = []
        this.arrayHarga = []
    }

    ambilNilai() {
        let nilai = parseInt((<HTMLInputElement>document.getElementById(this.idHtml)).value);
        this.jumlahBibit = nilai
        this.arrayQty.push(this.jumlahBibit);
        this.hitungQtyHasil();
        if(nilai > 0){
            this.stokIkan = this.stokIkan - this.jumlahBibit
            for(let i = -1;i<pesananBibit.arrayPesanan.length;i++){
                if(pesananBibit.arrayPesanan.indexOf(this) === -1){
                    pesananBibit.arrayPesanan.push(this)
                }
            }
            
        }
    }

    hitungQtyHasil(){
        let total = 0
        for(let i=0;i<this.arrayQty.length;i++){
            total += this.arrayQty[i]
        }
        this.qtyHasil = total;
    }

    tampilOnload(){
        document.getElementById(this.idHtmlHarga).innerHTML = this.harga.toString();
        (<HTMLInputElement>document.getElementById(this.idHtmlStok)).value = this.stokIkan.toString();
    }

    hitungTotalHarga(){
        this.ambilNilai();
        let totalHarga = this.jumlahBibit * this.harga;
        this.totalHarga = totalHarga;
        this.arrayHarga.push(this.totalHarga);
        let total = 0
        for(let i=0;i<this.arrayHarga.length;i++){
            total += this.arrayHarga[i]
        }
        this.hargaSemua = total;
    }

    tampil(){
        this.hitungTotalHarga();
        (<HTMLInputElement>document.getElementById(this.idTampilTotalHarga)).value = this.totalHarga.toString();
        (<HTMLInputElement>document.getElementById(this.idHtmlStok)).value = this.stokIkan.toString();
    }
}

class Pembeli{
    private nama : string;
    private alamat : string;
    private idHtmlNama : string;
    private idHtmlAlamat : string;
    constructor(idHtmlNama, idHtmlAlamat){
        this.idHtmlNama = idHtmlNama;
        this.idHtmlAlamat = idHtmlAlamat;
    }
    tampil(){
        this.nama = (<HTMLInputElement>document.getElementById(this.idHtmlNama)).value;
        this.alamat = (<HTMLInputElement>document.getElementById(this.idHtmlAlamat)).value;
        document.getElementById("namaOutput").innerHTML = this.nama;
        document.getElementById("alamatOutput").innerHTML = this.alamat;
    }
}

let nilaHitam = new Ikan('Ikan Nila Hitam', 90000, 200, 'jumlahNilaHitam', 'htmlHargaNilaHitam', 'hargaNilaHitam', 'stokNilaHitam')
let nilaMerah = new Ikan('Ikan Nila Merah', 30000, 150, 'jumlahNilaMerah', 'htmlHargaNilaMerah', 'hargaNilaMerah', 'stokNilaMerah')
let nilaGesit = new Ikan('Ikan Nila Gesit', 100000, 250, 'jumlahNilaGesit', 'htmlHargaNilaGesit', 'hargaNilaGesit', 'stokNilaGesit')
let leleMutiara = new Ikan('Ikan Lele Mutiara', 200000, 200, 'jumlahLeleMutiara', 'htmlHargaLeleMutiara', 'hargaLeleMutiara', 'stokLeleMutiara')
let lelePatin = new Ikan('Ikan Lele Patin', 30000, 300, 'jumlahLelePatin', 'htmlHargaLelePatin', 'hargaLelePatin', 'stokLelePatin')
let leleSangkuriang = new Ikan('Ikan Lele Sangkuriang', 10000, 400, 'jumlahLeleSangkuriang', 'htmlHargaLeleSangkuriang', 'hargaLeleMutiara', 'stokLeleSangkuriang')
let gurameBatu = new Ikan('Ikan Gurame Batu', 20000, 2000, 'jumlahGurameBatu', 'htmlHargaGurameBatu', 'hargaGurameBatu', 'stokGurameBatu')
let guramePadang = new Ikan('Ikan Gurame Padang', 5000, 5000, 'jumlahGuramePadang', 'htmlHargaGuramePadang', 'hargaGuramePadang', 'stokGuramePadang')
let gurameBaster = new Ikan('Ikan Gurame Baster', 3000, 8000, 'jumlahGurameBaster', 'htmlHargaGurameBaster', 'hargaGurameBaster', 'stokGurameBaster')
let customer = new Pembeli("namaInput", "alamatInput");

function onLoad(){
    nilaHitam.tampilOnload()
    nilaMerah.tampilOnload()
    nilaGesit.tampilOnload()
    leleMutiara.tampilOnload()
    lelePatin.tampilOnload()
    leleSangkuriang.tampilOnload()
    gurameBatu.tampilOnload()
    guramePadang.tampilOnload()
    gurameBaster.tampilOnload()
}

function pesanBibit(){
    nilaHitam.tampil()
    nilaMerah.tampil()
    nilaGesit.tampil()
    leleMutiara.tampil()
    lelePatin.tampil()
    leleSangkuriang.tampil()
    gurameBatu.tampil()
    guramePadang.tampil()
    gurameBaster.tampil()
    pesananBibit.tampil();
    customer.tampil();
}

function hitungPembayaran(){
    pesananBibit.hitungKembalian()
}