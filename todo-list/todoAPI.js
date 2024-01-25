/**
 * Inside this Module we collect all of our variables
 * and functions associated with our Todo List
 * 
 * For complex systems this might be further diveded
 * into submodules.
 * 
 * Before starting chopping things up though,
 * I advise you to think things through and
 * do some sketches
 */

// The list of all of our Todoes
const todoes = []

/**
 * A function for getting all of our Todoes
 */
export function getAllTodoes() {
  return todoes
}

/**
 * A function for adding a new todo item to
 * our list of todoes
 */
export function createNewTodo(title) {
  // Create our new Todo object
  const newTodo = {
    id: createUniqueId(),
    title: title,
    createdAt: new Date().toISOString(),
  }

  // Insert it into our list
  todoes.push(newTodo)
}

// Helper function

let currentId = 0

/**
 * A function for creating a new unique ID
 */
function createUniqueId() {
  const newId = currentId
  currentId++
  return newId
}
