
CRM.Products = function(params) {
    return {
        dataSource: {
            store: CRM.db.Products,
            map: function(item) {
                return new CRM.ProductViewModel(item);
            }
        }
    };   
};
