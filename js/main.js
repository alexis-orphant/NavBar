const btn = document.querySelector(".btn-hamburguesa");
const links = document.querySelector(".links");
const mobile = document.querySelector("#mobile");

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
            ? (mobile.className ="absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-2xl")
            : (mobile.className = "hidden");

            console.log(mobile.className);
});
