function loadSaved() {}

function loadNew() {
  // TODO: Load new news articles from an external API or database
}

function filter(category) {
  const filteredArticles =
    category === "all"
      ? articles
      : articles.filter((a) => a.category === category);
  const articleList = document.querySelector("#articles");
  articleList.innerHTML = "";
  filteredArticles.forEach((a) => {
    const li = document.createElement("li");
    li.innerHTML = `${a.title} (${a.likes} likes) <button onclick="like(${a.id})">Like</button>`;
    articleList.appendChild(li);
  });
}

function like(articleId) {
  const article = articles.find((a) => a.id === articleId);
  article.likes++;
  filter(document.querySelector("select").value);
}
