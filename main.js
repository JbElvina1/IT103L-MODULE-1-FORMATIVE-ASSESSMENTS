document.querySelector("#button").addEventListener("click", function () {
    let text = document.querySelector("#f1").value;

    text = text.trim().replaceAll(" ", "");

    document.querySelector("#f1Output").textContent = text;
});
