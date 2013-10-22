
CRM.ShipperEdit = function(params) {

    return {
        shipper: new CRM.ShipperViewModel(),


        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            CRM.db.Shippers.byKey(params.id).done(function(data) {
                self.shipper.fromJS(data);
            });
        },

        update: function(){
            CRM.db.Shippers.update(params.id, this.shipper.toJS()).done(function() {
                CRM.app.navigate("ShipperDetails/" + params.id);
            });
        },

        insert: function() {
            CRM.db.Shippers.insert(this.shipper.toJS()).done(function() {
                CRM.app.navigate("Shippers");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
