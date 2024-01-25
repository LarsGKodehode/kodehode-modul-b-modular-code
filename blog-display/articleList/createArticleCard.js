const template = `
<article class="article-card">
  <h2></h2>

  <p></p>

  <ul>
    <li>Physics</li>
    <li>Hobby</li>
  </ul>
</article>
`

export function createArticleCard(articleData) {
  const articleCard = document.createElement("li")

  articleCard.innerHTML = template

  const title = articleCard.querySelector("h2")
  title.textContent = articleData.title

  const body = articleCard.querySelector("p")
  body.textContent = articleData.body

  return articleCard
}
