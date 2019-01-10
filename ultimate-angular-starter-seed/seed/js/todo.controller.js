function TodoController() {
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
  }]
}

angular
  .module('app')
  .controller('TodoController', TodoController);
