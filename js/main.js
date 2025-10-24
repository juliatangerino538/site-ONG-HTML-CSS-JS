document.addEventListener("DOMContentLoaded", () => {
  iniciarSPA(); 
  validarFormulario();
});

function iniciarSPA() {
  console.log("SPA iniciada!");
}

function validarFormulario() {
  console.log("Validação iniciada!");

  const form = document.querySelector(".form-cadastro");
  if (!form) {
    console.warn("⚠️ Nenhum formulário encontrado!");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const campos = form.querySelectorAll("input[required], textarea[required]");
    let valido = true;

    campos.forEach(campo => {
      campo.classList.remove("error");
      if (!campo.value.trim()) {
        campo.classList.add("error");
        valido = false;
      }
    });

    if (!valido) {
      alert("⚠️ Preencha todos os campos obrigatórios!");
    } else {
      alert("✅ Cadastro enviado com sucesso!");
      form.reset();
    }
  });
}

