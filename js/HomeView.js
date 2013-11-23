var HomeView = function(store){

	this.initialize= function() {
		this.el = $('<div/>');
		this.el.on('keyup','.search-key', this.findByName);
		this.el.on('click','#employee-list li',this.renderProduct)
	};
	this.render = function(){
		this.el.html(HomeView.template());
		return this;
	};
	
	this.renderProduct = function(){
		var prodId = $(this).data("id");
		$("#prodDetails").remove();
		$("#employee-list").empty();
		
		var product = _.findWhere(store.products,{id: prodId});
		
		$("#employee-list").after(HomeView.prodTemplate(product));
	
	};
	
	this.findByName = function(){
		store.findByName($('.search-key').val(), function(products) {
			$('.employee-list').html(HomeView.litemplate(products));
		});
	};
	this.initialize();
	
	
}



HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.litemplate = Handlebars.compile($("#employee-li-tpl").html());
HomeView.prodTemplate = Handlebars.compile($("#product-details-tlp").html());