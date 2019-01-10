function MainController(a) {
    this.name = 'Micah';
    this.likes = ['Javascript', 'Ruby'];
    this.myObject = {
        one: 'Key 1',
        two: 'Key 2',
    }
}

MainController.$inject = ['$scope'];

angular
    .module('app')
    .controller('MainController', MainController);