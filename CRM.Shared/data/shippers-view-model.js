
(function() {
    CRM.ShipperViewModel = function(data) {
            this.ShipperID = ko.observable();
            this.CompanyName = ko.observable();
            this.Phone = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(CRM.ShipperViewModel.prototype, {
        toJS: function() {
            return {
                ShipperID: this.ShipperID(),
                CompanyName: this.CompanyName(),
                Phone: this.Phone(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.ShipperID(data.ShipperID);
                this.CompanyName(data.CompanyName);
                this.Phone(data.Phone);

            }
        }
    });
})();