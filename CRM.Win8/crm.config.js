
// NOTE object below must be a valid JSON
window.CRM = $.extend(true, window.CRM, {
    "config": {
        "defaultLayout": "split",
        "navigation": [
            {
                "title": "Home",
                "action": "#Index",
                "icon": "home"
            },
            {
                "title": "Orders",
                "action": "#Orders",
                "icon": "order",
                "root": false
            },
            {
                "title": "Products",
                "action": "#Products",
                "icon": "product",
                "root": false
            },
            {
                "title": "Shippers",
                "action": "#Shippers",
                "icon": "shipper",
                "root": false
            },
            {
                "title": "About",
                "action": "#About",
                "icon": "info",
                "root": false
            }
        ]
    }
});
