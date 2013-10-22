
// NOTE object below must be a valid JSON
window.CRM = $.extend(true, window.CRM, {
    "config": {
        "endpoints": {
            "db": {
                "local": "http://localhost:55281/DataService.svc",
                "production": "http://localhost:55281/DataService.svc"
            }
        },
        "services": {
            "db": {
                "entities": {
					"Categories": { 
						"key": "CategoryID", 
						"keyType": "Int32" 
					},
					"Customers": { 
						"key": "CustomerID", 
						"keyType": "String" 
					},
					"Employees": { 
						"key": "EmployeeID", 
						"keyType": "Int32" 
					},
					"Order_Details": { 
						"key": ["OrderID","ProductID"], 
						"keyType": {"OrderID":"Int32","ProductID":"Int32"} 
					},
					"Orders": { 
						"key": "OrderID", 
						"keyType": "Int32" 
					},
					"Products": { 
						"key": "ProductID", 
						"keyType": "Int32" 
					},
					"Shippers": { 
						"key": "ShipperID", 
						"keyType": "Int32" 
					},
					"Suppliers": { 
						"key": "SupplierID", 
						"keyType": "Int32" 
					}
                }
            }
        }
    }
});
