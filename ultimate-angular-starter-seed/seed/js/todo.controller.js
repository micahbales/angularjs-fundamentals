function TodoController() {
  this.list = [{
    title: 'First todo item',
    completed: false,
  },
  {
    title: 'Number 2',
    completed: false,
  },
  {
    title: '#3 FTW!',
    completed: false,
  }]
}

angular
  .module('app')
  .controller('TodoController', TodoController);
