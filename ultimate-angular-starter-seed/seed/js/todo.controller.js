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
    ctrl.list.push({
      title: ctrl.newTodo,
      completed: false,
    });

    ctrl.newTodo='';
  };

  ctrl.updateTodo = function (itemToUpdate, index) {
    TodoService
      .update(itemToUpdate);
  };

  ctrl.removeTodo = function (itemToRemove, index) {
    TodoService
      .remove(itemToRemove)
      .then(function (response) {
        ctrl.list = ctrl.list.filter(function (item) {
          return item.id !== itemToRemove.id;
        });
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
