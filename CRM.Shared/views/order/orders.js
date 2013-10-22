CRM.Orders = function(params) {
    var TAB_FILTERS = [
        [["ShippedDate", null], ["EmployeeID", null]],
        [["ShippedDate", null], ["EmployeeID", "<>", null]],
        ["ShippedDate", "<>", null]
    ];
    var createDataSource = function(filter) {
        return new DevExpress.data.SimpleDataSource({
            store: CRM.db.Orders,
            map: function(item) {
                return new CRM.OrderViewModel(item);
            },
            filter: filter
        });
    };
    return {
        tabs: [
          { text: "New" },
          { text: "In progress" },
          { text: "Shipped" }
        ],
        selectedTabIndex: ko.observable(0),
        handleTabClick: function() {
            this.dataSource(this.dataSources[this.selectedTabIndex()]);
        },
        dataSources: [
            createDataSource(TAB_FILTERS[0]),
            createDataSource(TAB_FILTERS[1]),
            createDataSource(TAB_FILTERS[2]),
        ],
        dataSource: ko.observable(),
        viewShown: function() {
            this.dataSource(this.dataSources[this.selectedTabIndex()]);
        }
    };
};