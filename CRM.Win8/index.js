
$(function() {
    
    var device = DevExpress.devices.current(),
        defaultLayout = CRM.config.defaultLayout,
        startupView = "Orders";


    CRM.app = new DevExpress.framework.html.HtmlApplication({
        namespace: CRM,
        defaultLayout: defaultLayout,
        navigation: CRM.config.navigation,
		disableViewCache: true,
        restoreState: function(args) {
            for(var i = 0; i < args.history.length; i++)
                CRM.app.navigate(args.history[i].uri);
        }
    });		

    $(window).unload(function() {
        CRM.app.saveState();
    });

    CRM.app.router.register(":view/:id", { view: "Index", id: undefined });
    CRM.app.navigate();
});
