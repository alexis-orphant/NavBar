const btn = document.querySelector(".btn-hamburguesa");
const links = document.querySelector(".links");
const mobile = document.querySelector("#mobile");
const btnModo = document.querySelector("#modo")
const header = document.querySelector("#header")

btn.addEventListener("click", () => {

// comprobamos el nombre de la clase y al hacer click se cambia
    // if(mobile.className === "hidden"){
    //     mobile.className =(
    //         "absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center"
    //     )}
    // else{
    //         mobile.className = ("hidden")
    //     }

    // lo mismo de arriva pero con el operador ternario
        mobile.className === "hidden"
            ? (mobile.className = `absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center text-2xl`)
            : (mobile.className = "hidden");

            console.log(mobile.className);
});

btnModo.addEventListener("click", () => {
    header.classList.toggle("light-mode");
    if (header.classList.contains("light-mode")) {
        btnModo.innerText = "dark";
    } else {
        btnModo.innerText = "light";
    }

    btnModo.classList.toggle("colorBtnLinght");

})