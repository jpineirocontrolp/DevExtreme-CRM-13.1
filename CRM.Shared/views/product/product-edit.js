
CRM.ProductEdit = function(params) {

    return {
        product: new CRM.ProductViewModel(),

        suppliersSource: {
            store: CRM.db.Suppliers,
            select: ["SupplierID", "CompanyName"]
        },
        categoriesSource: {
            store: CRM.db.Categories,
            select: ["CategoryID", "CategoryName"]
        },

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            CRM.db.Products.byKey(params.id, { expand: ["Supplier", "Category"] }).done(function(data) {
                self.product.fromJS(data);
            });
        },

        update: function(){
            CRM.db.Products.update(params.id, this.product.toJS()).done(function() {
                CRM.app.navigate("ProductDetails/" + params.id);
            });
        },

        insert: function() {
            CRM.db.Products.insert(this.product.toJS()).done(function() {
                CRM.app.navigate("Products");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
