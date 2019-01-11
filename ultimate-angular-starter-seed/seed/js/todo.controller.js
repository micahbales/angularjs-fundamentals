function TodoController(TodoService) {
  var ctrl = this;
  ctrl.newTodo = '';
  ctrl.list = [];

  function getTodos() {
    TodoService
      .retrieve()
      .then(function (response) {
        ctrl.list = response;
      })
  }

  this.addTodo = function () {
    this.list.push({
      title: this.newTodo,
      completed: false,
    });

    this.newTodo='';
  };

  this.removeTodo = function (itemIndex) {
    this.list.splice(itemIndex, 1);
  };
  this.onFocus = function () {
    console.log('Focus!');
  };

  this.onBlur = function () {
    console.log('Blur');
  };

  this.onChange = function () {
    console.log(this.newTitle);
  };

  this.getRemaining = function () {
    return this.list.filter((todo) => {
      return !todo.completed;
    });
  };

  this.getCurrentTimestamp = function () {
    return new Date().getTime();
  }

  getTodos();
}

angular
  .module('app')
  .controller('TodoController', TodoController);
