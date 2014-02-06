var listTemplate = require('../projects/list.html');
var detailTemplate = require('../projects/detail.html');

module.exports = function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListCtrl',
      template: listTemplate
    })
    .when('/edit/:projectId', {
      controller: 'EditCtrl',
      template: detailTemplate
    })
    .when('/new', {
      controller: 'CreateCtrl',
      template: detailTemplate
    })
    .otherwise({
      redirectTo: '/'
    });
};
