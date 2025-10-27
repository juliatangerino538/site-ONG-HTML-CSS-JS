export const templates = {
  "index.html": `
    <section class="banner">
      <img src="imagens/cachorro-gato.webp" alt="Animais felizes">
      <h2>Amor e Cuidado aos Animais</h2>
      <a href="cadastro.html" class="btn">Quero Ajudar</a>
    </section>
    <section class="cta">
      <h3>Participe da nossa causa!</h3>
      <p>Seja voluntário ou faça uma doação e ajude a salvar vidas.</p>
    </section>
  `,

  "cadastro.html": `
    <h2 class="titulo-principal">Cadastro de Voluntário</h2>
    <form class="form-cadastro">
      <label>Nome Completo *</label>
      <input type="text" name="nome" required>

      <label>Email *</label>
      <input type="email" name="email" required>

      <label>CPF *</label>
      <input type="text" name="cpf" required>

      <label>Endereço *</label>
      <input type="text" name="endereco" required>

      <label>CEP *</label>
      <input type="text" name="cep" required>

      <label>Telefone</label>
      <input type="tel" name="telefone">

      <label>Mensagem</label>
      <textarea rows="4" name="mensagem"></textarea>

      <label>Você é:</label>
      <div class="radio-group">
        <input type="radio" id="voluntario" name="tipo" value="Voluntário" required>
        <label for="voluntario">Voluntário</label>
        <input type="radio" id="adotante" name="tipo" value="Adotante" required>
        <label for="adotante">Adotante</label>
      </div>

      <label>Você quer adotar:</label>
      <div class="radio-group">
        <input type="radio" id="cachorro" name="animal" value="Cachorro" required>
        <label for="cachorro">Cachorro</label>
        <input type="radio" id="gato" name="animal" value="Gato" required>
        <label for="gato">Gato</label>
      </div>

      <button type="submit" class="btn">Enviar Cadastro</button>
    </form>
  `
};