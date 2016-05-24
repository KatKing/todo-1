// Check of todo items by clicking

$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on the icon to delet the todo
$('ul').on ("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//This stops event bubbling to other elements.
	event.stopPropagation();
	
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabs text from the inpurt
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to the ul 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text'").fadeToggle();
});