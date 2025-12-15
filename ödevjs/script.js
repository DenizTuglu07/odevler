function hesapla(islem) {
    var s1 = Number(document.getElementById("sayi1").value);
       var s2 = Number(document.getElementById("sayi2").value);
    var sonuc = 0;
    var mesaj = "";

    if (islem === '+') {
       sonuc = s1 + s2;
       mesaj = "Toplam: " + sonuc;
    } else if (islem === '-') {
        sonuc = s1 - s2;
        mesaj = "Fark: " + sonuc;
    } else if (islem === '*') {
        sonuc = s1 * s2;
        mesaj = "Çarpım: " + sonuc;
    } else if (islem === '/') {
        if(s2 === 0) {
            mesaj = "0000000000000";
        } else {
            sonuc = s1 / s2;
            mesaj = "Bölüm: " + sonuc.toFixed(2);
        }
    }

        document.getElementById("sonucKutusu").innerText = mesaj;
    }

function sepetiHesapla() {
    var fiyatlar = document.getElementsByClassName("fiyat");
    var toplam = 0;

    for (var i = 0; i < fiyatlar.length; i++) {
        toplam += Number(fiyatlar[i].innerText);
    }

    var buton = document.getElementById("sepetButonu");
    buton.innerText = "Sepet Toplam Tutar: " + toplam + " TL";
    buton.style.backgroundColor = "#059669";
        }