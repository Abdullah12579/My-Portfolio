let themeBtn =  document.querySelector ("#themeBtn");
let body = document.querySelector ("#light");
let fileNames = document.querySelector (".fileNames");
let fileKeNaam = document.querySelector (".fileKeNaam");

themeBtn.addEventListener ("click", () => {
    if (body.id == "light") {
        body.id = "dark";
        fileNames.classList.remove ("fileNames");
        fileNames.classList.add ("fileKeNaam");
    } else if (body.id == "dark") {
        body.id = "light";
        fileNames.classList.remove ("fileKeNaam");
        fileNames.classlist.add ("fileNames");
    };
});