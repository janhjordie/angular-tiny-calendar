/**
 */

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {
    var today = new Date();
    $scope.events = [{
        "title": "Today Event",
        "startDate": today,
        "endDate": null,
        "time": "21:00"
    }, {
        "title": "Tomorrow",
        "startDate": new Date(today.getTime() + 24 * 60 * 60 * 1000),
        "endDate": null,
        "time": "17:15"
    },{
        "title": "All-day event",
        "startDate": new Date(today.getTime() + (24*3) * 60 * 60 * 1000),
        "endDate": null
    }, {
        "title": "Two in one day!",
        "startDate": new Date(today.getTime() + (24*3) * 60 * 60 * 1000),
        "endDate": null,
        "time": "09:00"
    },{
        "title": "Three in one day!",
        "startDate": new Date(today.getTime() + (24*3) * 60 * 60 * 1000),
        "endDate": null,
        "time": "15:00"
    },{
        "title": "Multi-day event",
        "startDate": new Date(today.getTime() + (24*7) * 60 * 60 * 1000),
        "endDate": new Date(today.getTime() + (24*8) * 60 * 60 * 1000)
    }];
    $scope.nome = 'nome';

    $scope.eventsDisplay = JSON.stringify($scope.events, undefined, 2);
}]);

