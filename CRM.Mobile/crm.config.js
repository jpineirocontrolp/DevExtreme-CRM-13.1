
// NOTE object below must be a valid JSON
window.CRM = $.extend(true, window.CRM, {
    "config": {
        "defaultLayout": "slideout",
        "navigation": [
            {
                "title": "Orders",
                "action": "#Orders",
                "icon": "order"
            },
            {
                "title": "Products",
                "action": "#Products",
                "icon": "product"
            },
            {
                "title": "Shippers",
                "action": "#Shippers",
                "icon": "shipper"
            },
            {
                "title": "About",
                "action": "#About",
                "icon": "info"
            }
        ]
    }
});
