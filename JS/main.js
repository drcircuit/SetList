angular.module('setList', [])
.controller('setListController', function($scope){
        $scope.songs = [{title: 'Ballroom', key:'C', tempo:'Slowly', played: false}];
    }
).directive('setList', function () {
        return {
            scope: {
               songs: '=',
                title: '@'
            },
            templateUrl: 'modules/setList.html', //please edit foldername to represent your component folder...
            replace: true,
            controller: 'setListController',
            controllerAs: 'ctrl'
        };
    });