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

  ctrl.addTodo = function () {
    if (!ctrl.newTodo) return;

    TodoService
      .create({
        title: ctrl.newTodo,
        completed: false,
      })
      .then(function (response) {
        ctrl.list.unshift(response);
        ctrl.newTodo = '';
      });

    ctrl.newTodo='';
  };

  ctrl.updateTodo = function (item) {
    console.log(item);
    if (!item.title) {
      ctrl.removeTodo(item);
      return;
    }

    TodoService
      .update(item);
  };

  ctrl.removeTodo = function (itemToRemove) {
    TodoService
      .remove(itemToRemove)
      .then(function (response) {
        ctrl.list = ctrl.list.filter(function (item) {
          return item.id !== itemToRemove.id;
        });
      });
  };

  ctrl.toggleState = function (item) {
    TodoService
      .update(item)
      .then(function () {

      }, function () {
        item.completed = !item.completed;
    });
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
  };

  getTodos();
}

angular
  .module('app')
  .controller('TodoController', TodoController);
