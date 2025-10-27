import { templates } from "./templates.js";

export function iniciarSPA() {
  const links = document.querySelectorAll("nav ul li a");
  const main = document.querySelector("main");

  
  links.forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href");
      if (href.endsWith(".html")) {
        event.preventDefault();
        carregarPagina(href);
      }
    });
  });

  async function carregarPagina(pagina) {
   
    if (templates[pagina]) {
      main.innerHTML = templates[pagina];
    } else {
      const response = await fetch(pagina);
      const html = await response.text();
      main.innerHTML = extrairMain(html);
    }
    window.scrollTo(0, 0);
  }

  function extrairMain(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.querySelector("main").innerHTML;
  }
}
