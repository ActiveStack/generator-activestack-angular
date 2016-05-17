angular.module('ActiveStack.Config', [], function($provide) {
    $provide.factory('ActiveStackConfig', function($log) {
        return {
            gatewayIp:"<%= gatewayIp %>",
            gatewayPort: "8080",
            oauthProviders: {
                // TODO: Comment this out if you want to DISABLE Basic Auth.
                "ACTIVESTACK:BASIC":{
                    name:"ACTIVESTACK:BASIC",
                    redirectUri: "",
                    appKey: "",
                    authUrl: ""
                }
            }
        }
    });
});

