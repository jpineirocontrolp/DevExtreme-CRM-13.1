/// <reference path="../js/jquery-1.9.1.min.js" />
/// <reference path="../js/knockout-2.2.1.js" />
/// <reference path="../js/dx.all.js" />

(function() {
    var endpointSelector = new DevExpress.EndpointSelector(CRM.config.endpoints);

    var serviceConfig = $.extend(true, {}, CRM.config.services, {
        db: {
            url: endpointSelector.urlFor("db"),

            // To enable JSONP support, uncomment the following line
            //jsonp: !window.WinJS,

            // To allow cookies and HTTP authentication with CORS, uncomment the following line
            // withCredentials: true,

            errorHandler: handleServiceError
        }
    });

    function handleServiceError(error) {
        if(window.WinJS) {
            try {
                new Windows.UI.Popups.MessageDialog(error.message).showAsync();
            } catch(e) {
                // Another dialog is shown
            }
        } else {
            alert(error.message);
        }
    }

    // Enable partial CORS support for IE < 10    
    $.support.cors = true;
    
    CRM.db = new DevExpress.data.ODataContext(serviceConfig.db);

}());
