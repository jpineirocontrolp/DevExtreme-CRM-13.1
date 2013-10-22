
CRM.Orders = function(params) {
    return {
        dataSource: {
            store: CRM.db.Orders,
            map: function(item) {
                return new CRM.OrderViewModel(item);
            }
        }
    };   
};
