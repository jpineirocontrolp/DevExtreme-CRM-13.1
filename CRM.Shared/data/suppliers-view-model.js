
(function() {
    CRM.SupplierViewModel = function(data) {
            this.SupplierID = ko.observable();
            this.CompanyName = ko.observable();
            this.ContactName = ko.observable();
            this.ContactTitle = ko.observable();
            this.Address = ko.observable();
            this.City = ko.observable();
            this.Region = ko.observable();
            this.PostalCode = ko.observable();
            this.Country = ko.observable();
            this.Phone = ko.observable();
            this.Fax = ko.observable();
            this.HomePage = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(CRM.SupplierViewModel.prototype, {
        toJS: function() {
            return {
                SupplierID: this.SupplierID(),
                CompanyName: this.CompanyName(),
                ContactName: this.ContactName(),
                ContactTitle: this.ContactTitle(),
                Address: this.Address(),
                City: this.City(),
                Region: this.Region(),
                PostalCode: this.PostalCode(),
                Country: this.Country(),
                Phone: this.Phone(),
                Fax: this.Fax(),
                HomePage: this.HomePage(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.SupplierID(data.SupplierID);
                this.CompanyName(data.CompanyName);
                this.ContactName(data.ContactName);
                this.ContactTitle(data.ContactTitle);
                this.Address(data.Address);
                this.City(data.City);
                this.Region(data.Region);
                this.PostalCode(data.PostalCode);
                this.Country(data.Country);
                this.Phone(data.Phone);
                this.Fax(data.Fax);
                this.HomePage(data.HomePage);

            }
        }
    });
})();