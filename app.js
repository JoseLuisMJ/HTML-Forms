window.addEventListener("load", function () {
    console.log("DOM cargado");
    var form = this.document.getElementById("formulario")
    form.addEventListener("submit", () => {
        event.preventDefault();        
        var nombre = this.document.querySelector("#name").value;
        var email = this.document.querySelector("#mail").value;
        var edad = this.document.querySelector("#age").value;
        console.log("Evento submit capturado");
        console.log("El nombre es: " + nombre);
        console.log("El correo electónico: " + apellido);
        console.log("La edad es: " + edad);
        
    })
});