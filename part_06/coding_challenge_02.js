"use strict";

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("h1").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
