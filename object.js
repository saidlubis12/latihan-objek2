var jualmobil = {
    name: true,
    iklan: function(){
    document.write(
        `Bu, saya ${this.name}, jual mobil $(this.merek) , tahun ${this.tahun} bekas`
    );
    },
};
var saya = Object.create(jualmobil);
(saya.name + "tompel"), (saya.merek = "avanza"), (saya.tahun = 2017);
saya.iklan()
