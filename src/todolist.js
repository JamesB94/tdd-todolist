// Create a todo item that has an ID, text description, and starts off incomplete
// Get all todo items
// Set a todo completed by its ID
// Get only todo items that are incomplete
// Get only todo items that are complete
// Search and return a todo item by its ID, or return a message saying it doesn’t exist
// Remove a todo item by its ID

class ToDoList {
  constructor() {
    this.toDOArray = []
  }

  create(text) {
    const newObj = {
      id: this.toDOArray.length + 1,
      text: text,
      status: 'incomplete'
    }
    this.toDOArray.push(newObj)
    console.log(newObj)
    return newObj
  }

  getAll() {
    console.log('this is getAll', this.toDOArray)
    return this.toDOArray
  }

  setToComplete(id) {
    let tobe = {}
    this.toDOArray.forEach((i) => {
      if (i.id === id) {
        i.status = 'complete'
        // console.log(i)
        // console.log('type', typeof i)
        tobe = i
      }
    })
    return tobe
    //console.log('here is tobe', tobe)
  }

  getIncompleteItems() {
    let toBe2 = {}
    this.toDOArray.forEach((i) => {
      if (i.status === 'incomplete') {
        console.log(i)
        toBe2 = i
      }
    })
    return toBe2
  }

  getCompleteItems() {
    let toBe3 = {}
    this.toDOArray.forEach((i) => {
      if (i.status === 'complete') {
        console.log(i)
        toBe3 = i
      }
    })
    return toBe3
  }

  searchById(id) {
    let newObj = {}
    this.toDOArray.forEach((i) => {
      if (i.id === id) {
        newObj = i
      }
    })
    if (Object.keys(newObj).length === 0) {
      console.log('does not exist')
      return 'does not exist'
    } else {
      console.log(newObj)
      return newObj
    }
  }

  removeById(id) {
    for (let i = 0; i < this.toDOArray.length; i++) {
      if (this.toDOArray[i].id === id) {
        this.toDOArray.splice(i, 1)
      }
    }
    console.log(this.toDOArray)
  }
}

module.exports = ToDoList

const newToDo = new ToDoList()
newToDo.create('Task 1')
newToDo.create('Task 2')
let test = newToDo.setToComplete(1)
console.log('here is test', test)
// newToDo.removeById(2)
