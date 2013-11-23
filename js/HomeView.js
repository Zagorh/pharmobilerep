var HomeView = function(store){

	this.initialize= function() {
		this.el = $('<div/>');
		this.el.on('keyup','.search-key', this.findByName);
	};
	this.render = function(){
		this.el.html(HomeView.template());
		return this;
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
