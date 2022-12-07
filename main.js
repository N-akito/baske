let button = document.querySelector("button");

button.addEventListener('click', function() {
    let el = document.querySelector("div");
    this.textContent = "clickされました";
});