
(function() {
    CRM.CategoryViewModel = function(data) {
            this.CategoryID = ko.observable();
            this.CategoryName = ko.observable();
            this.Description = ko.observable();
            this.Picture = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(CRM.CategoryViewModel.prototype, {
        toJS: function() {
            return {
                CategoryID: this.CategoryID(),
                CategoryName: this.CategoryName(),
                Description: this.Description(),
                Picture: this.Picture(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.CategoryID(data.CategoryID);
                this.CategoryName(data.CategoryName);
                this.Description(data.Description);
                this.Picture(data.Picture);

            }
        }
    });
})();