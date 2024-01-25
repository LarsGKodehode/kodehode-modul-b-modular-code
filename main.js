import { posts } from "./posts.js"
import { createArticleCard } from './createArticleCard.js'

// We want to create a HTML element for each of the posts
const articles = posts.articles

const articleList = document.querySelector("#article-list")

for (const article of articles) {
  const articleElement = createArticleCard(article)
  articleList.appendChild(articleElement)
}
