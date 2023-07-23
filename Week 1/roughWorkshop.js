const todos = [
  {
    title: "First Todo",
    status: "todo",
    image: null,
    $id: "64914611f04d0025de9c",
    $createdAt: "2023-06-20T06:24:17.984+00:00",
  },

  {
    title: "Second Todos",
    status: "done",
    image: "Walk a soon",
    $id: "6499bff1cddc6d3f082d",
    $createdAt: "2023-06-26T16:42:25.843+00:00",
  },

  {
    title: "Third Todos",
    status: "done",
    image: "Hey",
    $id: "6499c03103308181b6ff",
    $createdAt: "2023-06-26T16:43:29.013+00:00",
  },
];
//const cutTodos = todos.slice(1,)
const spliceTodos = todos.splice(0, 3, )
//console.log(cutTodos)
console.log(spliceTodos)

console.log(todos)

function getTodosGroupedByColumn() {
  const columns = todos.reduce((acc, todo) => {
   console.log(acc)
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: [],
      });
    }
    console.log(acc)
    acc.get(todo.status).todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      //   ...(todo.image && { Image: JSON.parse(todo.image) }),
    });
console.log(acc)
    return acc;
  }, new Map());
}

getTodosGroupedByColumn()