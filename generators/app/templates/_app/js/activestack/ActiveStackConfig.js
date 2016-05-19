angular.module('ActiveStack.Config', [], function($provide) {
    $provide.factory('ActiveStackConfig', function($log) {
        return {
            gatewayIp:"<%= gatewayIp %>",
            gatewayPort: "8080",
            oauthProviders: {
                <%- authProvidersList.join(",\n"); %>
            }
        }
    });
});

