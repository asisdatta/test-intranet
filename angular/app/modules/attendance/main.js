define([
  'angular',
  'bootstrapUi',
  'Util'
], function(angular, bootstrapUi, util) {
  'use strict';
  if (!util.modules.attendance) {
    var app = angular.module('AttendanceModule', ['ui.bootstrap'])
      .controller('AddAttendance', ['$scope', '$injector', '$modal',
        function($scope, $injector, $modal) {
          require(['attendanceModulePath/controllers/add-attendance'], function(addAttendance) {
            $injector.invoke(addAttendance, this, {
              '$scope': $scope,
              '$modal': $modal
            });
          });
        }
      ]).controller('ViewAttendance', ['$scope', '$injector', '$modal',
        function($scope, $injector, $modal) {
          require(['attendanceModulePath/controllers/view'], function(viewAttendance) {
            $injector.invoke(viewAttendance, this, {
              '$scope': $scope,
              '$modal': $modal
            });
          });
        }
      ]).controller('AttendanceSettingsController', ['$scope', '$injector', '$modal',
        function($scope, $injector, $modal) {
          require(['attendanceModulePath/controllers/attendance-settings'], function(settings) {
            $injector.invoke(settings, this, {
              '$scope': $scope,
              '$modal': $modal
            });
          });
        }
      ]);
    util.modules.attendance = app;
  }
  return util.modules.attendance;

});
