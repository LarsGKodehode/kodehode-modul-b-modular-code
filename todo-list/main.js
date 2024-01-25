/**
 * The main.js file is where we will coordinate the various
 * pieces of functionality of our application
 */

import { createNewTodo, getAllTodoes } from "./todoAPI.js";
import { createTodoElement } from './createTodoElement.js'

// Read user input
const userInput = document.querySelector("#text-input")
const addButton = document.querySelector("#add-task")

addButton.addEventListener("click", () => {
  // # 1. Read text input
  const title = userInput.value

  // # 2. Validate input
  if (title === "") {
    // If the input is empty return
    return
  }

  // # 3. Create new todo
  createNewTodo(title)

  // # 4. Update the DOM
  updateDisplay()

  // # 5. Clear the input field
  userInput.value = ""
})

// Updating the DOM
const taskList = document.querySelector("#display")

/**
 * A function for updating the DOM to
 * reflect the information stored in our
 * Todo List
 */
function updateDisplay() {
  // Get the updated list of all todoes
  const allTodoes = getAllTodoes()

  // Clear out the previous elements
  taskList.innerHTML = ""

  // Go trough the list of all todoes and
  for (const todo of allTodoes) {
    // Create a new HTML element
    const newElement = createTodoElement(todo)
    // Insert the new element into the DOM
    taskList.appendChild(newElement)
  }
}
