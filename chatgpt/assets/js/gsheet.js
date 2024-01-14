const scriptURL = 'https://script.google.com/macros/s/AKfycbzIcQ4Ou4zOppE05-mFuVvm-bH0F1_rt_fszzlCcBeycO7auqG58TfQlNowO4rQgzsOdw/exec'

const form = document.forms['lp-data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //.then(response => alert("Terima Kasih" ))
  //.then(() => { window.location.reload(); })
  .catch(error => console.error('Masukan Data Kamu dulu yah!', error.message)) })


//function towa() {
  // window.location.href="https://api.whatsapp.com/send?phone=6281220221029&text=Hello%20Diksian,%20saya%20ingin%20Prompt%20ChatGPTnya%20yah!"; }

   function towa() {
    var fname = document.forms['lp-data']['fname'].value;
    var wnumber = document.forms['lp-data']['wnumber'].value;
    var userig = document.forms['lp-data']['userig'].value;

    if (fname === "" || wnumber === "" || userig === "") {
        alert("Mohon isi Nama & No Whatsapp Kamu.");
    } else {
        // Semua field telah diisi, maka arahkan pengguna ke WhatsApp
        var whatsappLink = "https://api.whatsapp.com/send?phone=6281220221029&text=Hello%20Diksian,%20saya%20ingin%20Prompt%20ChatGPTnya%20yah!";
        window.location.href = whatsappLink;
    }
}
