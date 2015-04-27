/**
 * Register the Participants Controller class with RequireJS
 */
(function( define ) {
    "use strict";

    define( ['model/appModel'],

        function (appModel)
        {
            /**
             * @constructor
             */
            var participantsController = function($scope)
            {
                console.log("Participants Controller Initialized");
                $scope.content = appModel.getInstance().getData().pages[3].content;
            };

            return ["$scope",participantsController];
        });

}( define ));