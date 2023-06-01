"use strict";

const imgIcon = document.getElementById("mode-icon");
const logos = document.getElementsByClassName("social-media-logo");

imgIcon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    for (let i = 0; i < logos.length; i++) {
      const logo = logos[i];
      const originalSrc = logo.getAttribute("src");
      const fileExtensiion = originalSrc.split(".").pop();
      const newSrc = originalSrc.replace(
        `.${fileExtensiion}`,
        `-white.${fileExtensiion}`
      );
      logo.setAttribute("src", newSrc);
    }
  } else {
    for (let i = 0; i < logos.length; i++) {
      const logo = logos[i];
      const originalSrc = logo.getAttribute("src");
      const fileExtensiion = originalSrc.split(".").pop();
      const newSrc = originalSrc.replace(
        `-white.${fileExtensiion}`,
        `.${fileExtensiion}`
      );
      logo.setAttribute("src", newSrc);
    }
  }
};