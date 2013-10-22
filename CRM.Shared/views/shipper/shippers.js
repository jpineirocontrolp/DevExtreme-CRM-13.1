
CRM.Shippers = function(params) {
    return {
        dataSource: {
            store: CRM.db.Shippers,
            map: function(item) {
                return new CRM.ShipperViewModel(item);
            }
        }
    };   
};
