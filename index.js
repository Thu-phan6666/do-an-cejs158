async function loadHTML(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

loadHTML("header", "./layout/header/header.html");
loadHTML("footer", "./layout/footer/footer.html");
