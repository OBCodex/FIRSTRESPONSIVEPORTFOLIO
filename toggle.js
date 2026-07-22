const button = document.getElementById("themeToggle");

button.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        button.textContent = "🌞 Light Mode";
    }else{
        button.textContent = "🌙 Dark Mode";
    }

});