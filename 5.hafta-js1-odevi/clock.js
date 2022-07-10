document.getElementById("myName").innerHTML = prompt("Adınızı giriniz.").trim();

function showTime() {
    let date = new Date().toLocaleString('tr-TR');
    document.getElementById('myClock').innerHTML = date;
    setTimeout(showTime, 1000); // setTimeOut fonksiyonu kullanırken iki parametre kullanılır.
    // Birinci parametre çalışması istenen fonksiyonu, ikinci parametre ise ne kadar süre
    // sonra çalışması istendiğini ifade eder.
}
showTime();