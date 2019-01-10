function TodoController() {
  this.list = [{
    title: 'First todo item',
    completed: true,
    rating: 5,
  },
  {
    title: 'Number 2',
    completed: false,
    rating: 2,
  },
  {
    title: '#3 FTW!',
    completed: false,
    rating: 4,
  }]
}

angular
  .module('app')
  .controller('TodoController', TodoController);
