
(function() {
    CRM.OrderViewModel = function(data) {
            this.OrderID = ko.observable();
            this.Customer = new CRM.CustomerViewModel();
            this.Employee = new CRM.EmployeeViewModel();
            this.OrderDate = ko.observable();
            this.RequiredDate = ko.observable();
            this.ShippedDate = ko.observable();
            this.Shipper = new CRM.ShipperViewModel();
            this.Freight = ko.observable();
            this.ShipName = ko.observable();
            this.ShipAddress = ko.observable();
            this.ShipCity = ko.observable();
            this.ShipRegion = ko.observable();
            this.ShipPostalCode = ko.observable();
            this.ShipCountry = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(CRM.OrderViewModel.prototype, {
        toJS: function() {
            return {
                OrderID: this.OrderID(),
                Customer: CRM.db.objectLink("Customers", this.Customer.CustomerID()),
                Employee: CRM.db.objectLink("Employees", this.Employee.EmployeeID()),
                OrderDate: this.OrderDate(),
                RequiredDate: this.RequiredDate(),
                ShippedDate: this.ShippedDate(),
                Shipper: CRM.db.objectLink("Shippers", this.Shipper.ShipperID()),
                Freight: String(this.Freight() || 0),
                ShipName: this.ShipName(),
                ShipAddress: this.ShipAddress(),
                ShipCity: this.ShipCity(),
                ShipRegion: this.ShipRegion(),
                ShipPostalCode: this.ShipPostalCode(),
                ShipCountry: this.ShipCountry(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.OrderID(data.OrderID);
                this.Customer.fromJS(data.Customer);
                this.Employee.fromJS(data.Employee);
                this.OrderDate(data.OrderDate);
                this.RequiredDate(data.RequiredDate);
                this.ShippedDate(data.ShippedDate);
                this.Shipper.fromJS(data.Shipper);
                this.Freight(Number(data.Freight));
                this.ShipName(data.ShipName);
                this.ShipAddress(data.ShipAddress);
                this.ShipCity(data.ShipCity);
                this.ShipRegion(data.ShipRegion);
                this.ShipPostalCode(data.ShipPostalCode);
                this.ShipCountry(data.ShipCountry);

            }
        }
    });
})();