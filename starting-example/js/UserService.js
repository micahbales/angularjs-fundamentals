function UserService($http) {
    var API = 'https://jsonplaceholder.typicode.com/users/';
    function getUser(userId) {
        return $http
            .get(API + userId)
            .then(function (response) {
                return response.data;
            }, function (err) {
                console.error(err);
            });
    }
    function getAllUsers() {
      // TODO
    }

    return {
        getUser: getUser,
        getAllUsers: getAllUsers
    };

}

angular
    .module('app')
    .factory('UserService', UserService);