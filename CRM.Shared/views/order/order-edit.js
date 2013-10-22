
CRM.OrderEdit = function(params) {

    return {
        order: new CRM.OrderViewModel(),

        customersSource: {
            store: CRM.db.Customers,
            select: ["CustomerID", "CompanyName"]
        },
        employeesSource: {
            store: CRM.db.Employees,
            select: ["EmployeeID", "Title"]
        },
        shippersSource: {
            store: CRM.db.Shippers,
            select: ["ShipperID", "CompanyName"]
        },

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            CRM.db.Orders.byKey(params.id, { expand: ["Customer", "Employee", "Shipper"] }).done(function(data) {
                self.order.fromJS(data);
            });
        },

        update: function(){
            CRM.db.Orders.update(params.id, this.order.toJS()).done(function() {
                CRM.app.navigate("OrderDetails/" + params.id);
            });
        },

        insert: function() {
            CRM.db.Orders.insert(this.order.toJS()).done(function() {
                CRM.app.navigate("Orders");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
