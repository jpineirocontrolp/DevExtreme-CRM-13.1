
CRM.ShipperDetails = function(params) {
    return {
        id: params.id,

        shipper: new CRM.ShipperViewModel(),

        handleDelete: function() {
            DevExpress.ui.dialog.confirm("Are you sure you want to delete this item?", "Delete item").then($.proxy(function (result) {
                if (result)
                    this.handleConfirmDelete();
            }, this));
        },

        handleConfirmDelete: function() {
            CRM.db.Shippers.remove(params.id).done(function() {
                CRM.app.navigate("Shippers", { target: "back" });
            });
        },

        viewShown: function() {
            shipperDetails = this;
            CRM.db.Shippers.byKey(params.id).done(function(data) {
                shipperDetails.shipper.fromJS(data);
            });
        }
    };
};
