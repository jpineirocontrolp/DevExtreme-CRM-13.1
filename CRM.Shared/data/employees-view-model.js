
(function() {
    CRM.EmployeeViewModel = function(data) {
            this.EmployeeID = ko.observable();
            this.LastName = ko.observable();
            this.FirstName = ko.observable();
            this.Title = ko.observable();
            this.TitleOfCourtesy = ko.observable();
            this.BirthDate = ko.observable();
            this.HireDate = ko.observable();
            this.Address = ko.observable();
            this.City = ko.observable();
            this.Region = ko.observable();
            this.PostalCode = ko.observable();
            this.Country = ko.observable();
            this.HomePhone = ko.observable();
            this.Extension = ko.observable();
            this.Photo = ko.observable();
            this.Notes = ko.observable();
            this.ReportsTo = ko.observable();
            this.PhotoPath = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(CRM.EmployeeViewModel.prototype, {
        toJS: function() {
            return {
                EmployeeID: this.EmployeeID(),
                LastName: this.LastName(),
                FirstName: this.FirstName(),
                Title: this.Title(),
                TitleOfCourtesy: this.TitleOfCourtesy(),
                BirthDate: this.BirthDate(),
                HireDate: this.HireDate(),
                Address: this.Address(),
                City: this.City(),
                Region: this.Region(),
                PostalCode: this.PostalCode(),
                Country: this.Country(),
                HomePhone: this.HomePhone(),
                Extension: this.Extension(),
                Photo: this.Photo(),
                Notes: this.Notes(),
                ReportsTo: this.ReportsTo(),
                PhotoPath: this.PhotoPath(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.EmployeeID(data.EmployeeID);
                this.LastName(data.LastName);
                this.FirstName(data.FirstName);
                this.Title(data.Title);
                this.TitleOfCourtesy(data.TitleOfCourtesy);
                this.BirthDate(data.BirthDate);
                this.HireDate(data.HireDate);
                this.Address(data.Address);
                this.City(data.City);
                this.Region(data.Region);
                this.PostalCode(data.PostalCode);
                this.Country(data.Country);
                this.HomePhone(data.HomePhone);
                this.Extension(data.Extension);
                this.Photo(data.Photo);
                this.Notes(data.Notes);
                this.ReportsTo(data.ReportsTo);
                this.PhotoPath(data.PhotoPath);

            }
        }
    });
})();