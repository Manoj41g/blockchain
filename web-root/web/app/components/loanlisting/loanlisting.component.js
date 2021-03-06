'use strict';

(function() {

    var loanlistingController = function() {
        //this.message = 'Test Message';
    };

    var componentConfig = {
        // isolated scope binding
        bindings: {
            loanInfo: '<'
        },
        templateUrl: 'loanlisting/loanlisting.html',
        controller: loanlistingController,
        $canActivate: ['$nextInstruction', '$prevInstruction', 'userService', function($nextInstruction, $prevInstruction, userService) {
            if (userService.isAnonymous() === true) {
                window.location.pathname = '/login';
                return false;
            } else {
                return true;
            }
        }]
    };

    module.exports = angular.module('loanlisting')
        .component('loanListing', componentConfig);

})();
