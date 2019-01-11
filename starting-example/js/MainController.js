function MainController(a, $http) {
    this.name = 'Micah';
    this.likes = ['Javascript', 'Ruby'];
    this.myObject = {
        one: 'Key 1',
        two: 'Key 2',
    }

    const API = '//jsonplaceholder.typicode.com/users/';
    this.userId = '';
    this.chosenUser = {};
    this.getUser = function() {
        console.log('hi there')
        if (!this.userId) return;

        $http
            .get(API + this.userId)
            .then((res) => {
                this.chosenUser = res.data;
            }, (err) => {
                if (err) console.error(err);
            });
    };
}

MainController.$inject = ['$scope'];

angular
    .module('app')
    .controller('MainController', MainController);