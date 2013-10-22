
CRM.OrderDetails = function(params) {
    return {
        id: params.id,

        order: new CRM.OrderViewModel(),

        handleDelete: function() {
            DevExpress.ui.dialog.confirm("Are you sure you want to delete this item?", "Delete item").then($.proxy(function (result) {
                if (result)
                    this.handleConfirmDelete();
            }, this));
        },

        handleConfirmDelete: function() {
            CRM.db.Orders.remove(params.id).done(function() {
                CRM.app.navigate("Orders", { target: "back" });
            });
        },

        viewShown: function() {
            orderDetails = this;
            CRM.db.Orders.byKey(params.id, { expand: ["Customer", "Employee", "Shipper"] }).done(function(data) {
                orderDetails.order.fromJS(data);
            });
        }
    };
};
