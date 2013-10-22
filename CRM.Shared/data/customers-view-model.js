
(function() {
    CRM.CustomerViewModel = function(data) {
            this.CustomerID = ko.observable();
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
            if(data)
                this.fromJS(data);
    };

    $.extend(CRM.CustomerViewModel.prototype, {
        toJS: function() {
            return {
                CustomerID: this.CustomerID(),
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
            };
        },

        fromJS: function(data) {
            if(data) {
                this.CustomerID(data.CustomerID);
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

            }
        }
    });
})();