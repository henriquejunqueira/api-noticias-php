fetch('./api/api.php') // Certifique-se de que o caminho está correto
  .then((response) => {
    if (!response.ok) {
      throw new Error('Erro na requisição da API');
    }
    return response.json(); // Converte a resposta para JSON
  })
  .then((data) => {
    if (data && Array.isArray(data)) {
      // Verifica se data é um array
      const container = document.getElementById('news-container');
      data.forEach((article) => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
          <img src="${article.image || 'placeholder.jpg'}" alt="Notícia">
          <h3>${article.title}</h3>
          <p>${article.description || 'Sem descrição disponível.'}</p>
          <a href="${article.url}" target="_blank">Leia mais</a>
        `;
        container.appendChild(card);
      });
    } else {
      console.error('Dados inválidos ou estrutura inesperada:', data);
    }
  })
  .catch((error) => console.error('Erro ao buscar notícias:', error));
