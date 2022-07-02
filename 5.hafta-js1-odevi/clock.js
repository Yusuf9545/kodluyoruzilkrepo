document.getElementById("myName").innerHTML = prompt("Adınızı giriniz.").trim();

function showTime() {
    let date = new Date();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let clock = document.getElementById('myClock');
    clock.innerHTML = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)} ${days[date.getUTCDay()]}`
    setTimeout(showTime, 1); // setTimeOut fonksiyonu kullanırken iki parametre kullanılır.
    // Birinci parametre çalışması istenen fonksiyonu, ikinci parametre ise ne kadar süre
    // sonra çalışması istendiğini ifade eder.
}
showTime();