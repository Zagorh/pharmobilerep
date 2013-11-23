var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var products = this.products.filter(function(element) {
            var fullName = element.name;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, products);
    }

    this.findById = function(id, callback) {
        var products = this.products;
        var products = null;
        var l = products.length;
        for (var i=0; i < l; i++) {
            if (products[i].id === id) {
                product = products[i];
                break;
            }
        }
        callLater(callback, product);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.products = [
            {"id": 1, "name": "Benuron", "description": "contra dores de cabeca", "price":"4"},
			{"id": 2, "name": "Cegripe", "description": "contra a gripe", "price":"6"},
			{"id": 3, "name": "Mebocaina", "description": "dores de garganta", "price":"2"},
			{"id": 4, "name": "Paracetamol", "description": "dores de cabeca", "price":"1"}
        ];

    callLater(successCallback);

}