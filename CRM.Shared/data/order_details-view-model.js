
(function() {
    CRM.Order_DetailsViewModel = function(data) {
            this.Order = new CRM.OrderViewModel();
            this.Product = new CRM.ProductViewModel();
            this.UnitPrice = ko.observable();
            this.Quantity = ko.observable();
            this.Discount = ko.observable();
            if(data)
                this.fromJS(data);
            this.TotalPriceFormatted = ko.computed(function() {
                var sum = this.UnitPrice() * this.Quantity() * (1 - this.Discount());
                return Globalize.format(sum, "c");
            }, this);
    };

    $.extend(CRM.Order_DetailsViewModel.prototype, {
        toJS: function() {
            return {
                Order: CRM.db.objectLink("Orders", this.Order.OrderID()),
                Product: CRM.db.objectLink("Products", this.Product.ProductID()),
                UnitPrice: String(this.UnitPrice() || 0),
                Quantity: this.Quantity(),
                Discount: this.Discount(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.Order.fromJS(data.Order);
                this.Product.fromJS(data.Product);
                this.UnitPrice(Number(data.UnitPrice));
                this.Quantity(data.Quantity);
                this.Discount(data.Discount);

            }
        }
    });
})();