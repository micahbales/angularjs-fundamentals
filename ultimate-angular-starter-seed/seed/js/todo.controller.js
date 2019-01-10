function TodoController() {
  this.newTodo = '';
  this.list = [{
    title: 'First todo item',
    completed: true,
    rating: 5,
    category: 'Personal',
  },
  {
    title: 'Number 2',
    completed: false,
    rating: 2,
    category: 'Work',
  },
  {
    title: '#3 FTW!',
    completed: false,
    rating: 4,
    category: 'Weekend',
  },
  {
    title: 'And now for something completely different',
    completed: false,
    rating: 1,
    category: 'My WeIrDo CaTeGoRy',
  }];

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
}

angular
  .module('app')
  .controller('TodoController', TodoController);
