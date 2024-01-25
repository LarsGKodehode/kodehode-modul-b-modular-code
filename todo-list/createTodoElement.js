/**
 * The logic for creating a new HTML element
 * based on the provided input
 * 
 * See: "blog-display/articleList/createArticleCard.js"
 * for a more complex example
 */

/**
 * Takes a Todo object and creates the HTML for it
 */
export function createTodoElement(todo) {
  // Create the initial wrapper element
  const wrapper = document.createElement("li")

  // Configure that with the content you need
  wrapper.textContent = todo.title

  // Return the finished HTML Element
  return wrapper
}
