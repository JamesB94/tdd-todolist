const ToDoList = require('../src/todolist.js')

describe('ToDoList', () => {
  it('create obj with 3 keys, id, text and status(starts incomplete)', () => {
    const newObj = new ToDoList()
    expect(newObj.create('task 1')).toEqual({
      id: 1,
      text: 'task 1',
      status: 'incomplete'
    })
  })

  it('Get all todo items)', () => {
    const newObj = new ToDoList()
    newObj.create('task 1')
    newObj.create('task 2')
    newObj.create('task 3')
    expect(newObj.getAll('task 1')).toEqual([
      {
        id: 1,
        text: 'task 1',
        status: 'incomplete'
      },
      {
        id: 2,
        text: 'task 2',
        status: 'incomplete'
      },
      {
        id: 3,
        text: 'task 3',
        status: 'incomplete'
      }
    ])
  })

  it('Set a todo completed by its ID', () => {
    const newObj = new ToDoList()
    newObj.create('task 1')
    expect(newObj.setToComplete(1)).toEqual({
      id: 1,
      text: 'task 1',
      status: 'complete'
    })
  })

  it('Get only todo items that are incomplete', () => {
    const newObj = new ToDoList()
    newObj.create('task 1')
    newObj.create('task 2')
    newObj.setToComplete(2)
    expect(newObj.getIncompleteItems(1)).toEqual({
      id: 1,
      text: 'task 1',
      status: 'incomplete'
    })
  })

  it('Get only todo items that are complete', () => {
    const newObj = new ToDoList()
    newObj.create('task 1')
    newObj.create('task 2')
    newObj.setToComplete(2)
    expect(newObj.getCompleteItems(1)).toEqual({
      id: 2,
      text: 'task 2',
      status: 'complete'
    })
  })

  it('Search and return a todo item by its ID', () => {
    const newObj = new ToDoList()
    newObj.create('task 1')
    newObj.create('task 2')
    expect(newObj.searchById(1)).toEqual({
      id: 1,
      text: 'task 1',
      status: 'incomplete'
    })
  })

  it('return a message saying it doesnt exist', () => {
    const newObj = new ToDoList()
    newObj.create('task 1')
    newObj.create('task 2')
    expect(newObj.searchById(3)).toEqual('does not exist')
  })

  it('Remove a todo item by its ID', () => {
    const newObj = new ToDoList()
    newObj.create('task 1')
    newObj.create('task 2')
    newObj.create('task 3')
    newObj.removeById(2)
    expect(newObj.getAll()).toEqual([
      {
        id: 1,
        text: 'task 1',
        status: 'incomplete'
      },
      {
        id: 3,
        text: 'task 3',
        status: 'incomplete'
      }
    ])
  })
})
