
(function() {
    CRM.ProductViewModel = function(data) {
            this.ProductID = ko.observable();
            this.ProductName = ko.observable();
            this.Supplier = new CRM.SupplierViewModel();
            this.Category = new CRM.CategoryViewModel();
            this.QuantityPerUnit = ko.observable();
            this.UnitPrice = ko.observable();
            this.UnitsInStock = ko.observable();
            this.UnitsOnOrder = ko.observable();
            this.ReorderLevel = ko.observable();
            this.Discontinued = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(CRM.ProductViewModel.prototype, {
        toJS: function() {
            return {
                ProductID: this.ProductID(),
                ProductName: this.ProductName(),
                Supplier: CRM.db.objectLink("Suppliers", this.Supplier.SupplierID()),
                Category: CRM.db.objectLink("Categories", this.Category.CategoryID()),
                QuantityPerUnit: this.QuantityPerUnit(),
                UnitPrice: String(this.UnitPrice() || 0),
                UnitsInStock: this.UnitsInStock(),
                UnitsOnOrder: this.UnitsOnOrder(),
                ReorderLevel: this.ReorderLevel(),
                Discontinued: this.Discontinued(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.ProductID(data.ProductID);
                this.ProductName(data.ProductName);
                this.Supplier.fromJS(data.Supplier);
                this.Category.fromJS(data.Category);
                this.QuantityPerUnit(data.QuantityPerUnit);
                this.UnitPrice(Number(data.UnitPrice));
                this.UnitsInStock(data.UnitsInStock);
                this.UnitsOnOrder(data.UnitsOnOrder);
                this.ReorderLevel(data.ReorderLevel);
                this.Discontinued(data.Discontinued);

            }
        }
    });
})();