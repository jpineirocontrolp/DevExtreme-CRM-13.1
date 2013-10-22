
$(function() {
    
    var device = DevExpress.devices.current(),
        defaultLayout = CRM.config.defaultLayout,
        startupView = "Orders";


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
