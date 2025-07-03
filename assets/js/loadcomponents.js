function loadComponent(id, filePath) {
  fetch(filePath)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("header-placeholder", "../components/header.html");
loadComponent("footer-placeholder", "../components/footer.html");
