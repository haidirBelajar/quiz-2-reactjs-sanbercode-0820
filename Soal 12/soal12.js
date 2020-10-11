class BangunDatar {
    constructor(name){
        this.name = name;
        this.sisi = sisi;
        this.jari = jari;
    }

    get bangunName (){
        return this.name
    }
    set bangunName (x){
        return this.name = x;
    }

    get sisiPersegi(){  
        return sisi ;
    }
    set sisiPersegi(x){
        return  x;
    }
    get jariLingkaran(){
        return jari;
    }
    set jariLingkaran(x){
        return x;
    }
   
}

class Persegi extends BangunDatar {
    constructor(name){
        super(name);
    }
    LuasPersegi(x){
        return sisi * x ;
    }
    KelilingPersegi(x){
        return 4 * x;
    }
}

var persegiCoy = new Persegi("lololo")
persegiCoy.LuasPersegi(4);
persegiCoy.KelilingPersegi(4);
console.log(persegiCoy);

class Lingkaran extends BangunDatar {
    constructor(name,jarijari){ 
        super(name);
        this._jarijari = jarijari;
    }
    LuasLingkaran(x){
        return 3.14 * x;
    }
    kllLingkaran(x) {
        return 2 * 3.14 * x;
    }
}

var bunder = new Lingkaran ("bunder");
bunder.LuasLingkaran(7);
bunder.kllLingkaran(7);
console.log(bunder);