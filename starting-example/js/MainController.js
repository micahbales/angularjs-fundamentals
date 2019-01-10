function MainController(a) {
    this.name = 'Micah';
    this.likes = ['Javascript', 'Ruby'];
}

MainController.$inject = ['$scope'];

angular
    .module('app')
    .controller('MainController', MainController);