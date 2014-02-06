var projectsFactory = require('../projects/factory');
var routes = require('./routes');
var projectsController = require('../projects/controller');

// is this needed here? or just in the controllers where it's used?
require('Firebase');

module.exports = angular.module('project', ['ngRoute', 'firebase'])
	.value('fbURL', 'https://angularjs-projects.firebaseio.com/')
	.factory('Projects', projectsFactory)
	.config(routes)
	.controller('ListCtrl', projectsController.ListCtrl)
	.controller('CreateCtrl', projectsController.CreateCtrl)
	.controller('EditCtrl', projectsController.EditCtrl);
