
CRM.ProductDetails = function(params) {
    return {
        id: params.id,

        product: new CRM.ProductViewModel(),

        handleDelete: function() {
            DevExpress.ui.dialog.confirm("Are you sure you want to delete this item?", "Delete item").then($.proxy(function (result) {
                if (result)
                    this.handleConfirmDelete();
            }, this));
        },

        handleConfirmDelete: function() {
            CRM.db.Products.remove(params.id).done(function() {
                CRM.app.navigate("Products", { target: "back" });
            });
        },

        viewShown: function() {
            productDetails = this;
            CRM.db.Products.byKey(params.id, { expand: ["Supplier", "Category"] }).done(function(data) {
                productDetails.product.fromJS(data);
            });
        }
    };
};
