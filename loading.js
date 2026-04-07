window.addEventListener("load", function() {
  const loader = document.getElementById("loading");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.5s";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 3000); 
});