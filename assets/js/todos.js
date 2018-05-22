//check off specfic todos by clicking

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");

});

//click on x to delete Todo

$("ul").on ("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() { //li is parent
		$(this).remove(); // this refers to li not span
	}); 
	e.stopPropagation(); //jQuery method that stops method from bubling up
});


$("input[type='text']").keypress(function(e) {
	if(e.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//create new li and add ul
		$(this).val(""); //empty the input
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();

})