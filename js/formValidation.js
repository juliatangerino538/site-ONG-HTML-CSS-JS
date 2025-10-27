export function validarFormulario() {
  console.log("✅ Validação personalizada carregada!");

  document.addEventListener("submit", function (event) {
    const form = event.target.closest(".form-cadastro");
    if (!form) return;

    event.preventDefault(); // impede o envio automático
    let valido = true;

    form.querySelectorAll("input[required], textarea[required]").forEach(campo => {
      const erroAntigo = campo.nextElementSibling;
      if (erroAntigo?.classList.contains("error-msg")) erroAntigo.remove();

      if (!campo.value.trim()) {
        mostrarErro(campo, "Este campo é obrigatório");
        valido = false;
      } else if (
        campo.type === "email" &&
        !/^[\w._%+-]+@(hotmail|gmail|outlook|yahoo)\.[a-z]{2,}$/.test(campo.value)
      ) {
        mostrarErro(campo, "Digite um e-mail válido");
        valido = false;
      } else {
        campo.classList.remove("error");
      }
    });

    if (valido) {
      alert("✅ Cadastro enviado com sucesso!");
      form.reset();
    }
  });

  function mostrarErro(campo, mensagem) {
    campo.classList.add("error");
    const span = document.createElement("span");
    span.classList.add("error-msg");
    span.textContent = mensagem;
    campo.insertAdjacentElement("afterend", span);
  }
}



