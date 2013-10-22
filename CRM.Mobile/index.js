
$(function() {
    
    var device = DevExpress.devices.current(),
        defaultLayout = CRM.config.defaultLayout,
        startupView = "Orders";

    if(device.platform === "win8" && device.phone) {
        defaultLayout = "simple";
        startupView = "Navigation";
        $.each(CRM.config.navigation, function (i, item) { item.root = false; });
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    function onBackKeyDown() {
		if(CRM.app.canBack()) {
			CRM.app.back();
		}
        else {
            if(window.external) {
                window.external.Notify("DevExpress.ExitApp");
            }
        }
    }

    CRM.app = new DevExpress.framework.html.HtmlApplication({
        namespace: CRM,
        defaultLayout: defaultLayout,
        navigation: CRM.config.navigation
    });

    $(window).unload(function() {
        CRM.app.saveState();
    });

    CRM.app.router.register(":view/:id", { view: startupView, id: undefined });
    CRM.app.navigate();
});
