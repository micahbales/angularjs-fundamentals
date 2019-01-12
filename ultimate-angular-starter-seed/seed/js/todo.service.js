function TodoService($http) {

  const API = 'https://jsonplaceholder.typicode.com/todos/';

  function create(newTodo) {
    return $http.post(API, newTodo)
      .then(function (response) {
        return response.data;
      });
  }
  function retrieve() {
    return $http.get(API)
      .then(function (response) {
        return response.data.splice(0, 10);
      });
  }
  function update(todo) {
    return $http.put(API + todo.id)
      .then(function (response) {
        return response.data;
      })
  }
  function remove(todo) {
    return $http.delete(API + todo.id)
      .then(function (response) {
        return response.data;
      })
  }

  return {
    create: create,
    retrieve: retrieve,
    update: update,
    remove: remove,
  }
}

angular
  .module('app')
  .factory('TodoService', TodoService);
