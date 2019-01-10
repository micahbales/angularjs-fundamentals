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
  }];

  this.addItem = function () {
    this.list.push({
      title: this.newTitle ? this.newTitle : 'Item #' + this.list.length,
      completed: false,
      rating: this.newRating ? this.newRating : 1,
      category: this.newCategory ? this.newCategory : 'Miscellaneous',
    });

    this.newTitle='';
    this.newRating='';
    this.category='';
  };

  this.deleteItem = function (itemIndex) {
    this.list = this.list.filter((item, i) => {
      return itemIndex !== i;
    })
  };

  this.onFocus = function () {
    console.log('Focus!');
  };

  this.onBlur = function () {
    console.log('Blur');
  };
}

angular
  .module('app')
  .controller('TodoController', TodoController);
