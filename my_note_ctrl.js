/*
* @file my_note_ctrl
* @author lai_lc
* @date   2017-04-06 14:50:49
* @Last Modified by:   lai_lc
* @Last Modified time: 2017-04-06 15:09:06
*/

'use strict';

app.controller("myNoteCtrl", function($scope){
	$scope.message = "";
	$scope.left = function() {
		return 100 - $scope.message.length;
	};
	$scope.clear = function() {
		$scope.message = "";
	};
	$scope.save = function() {
		alert("Note Saved.");
	};

});
