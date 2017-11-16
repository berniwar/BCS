// Mark items as done. 

$("ul").on("click", "li", function(){
	$(this).toggleClass('completed');
});

// Click to delete todo item
$("ul").on("click", 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

// Input new item
$("input[type ='text'").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-minus-square-o'></i></span>" + todoText + "</li>");
	}
});

// Delete Item
$('.fa-plus-square-o').click(function(){
	$("input[type ='text'").fadeToggle();
});

// Making Draggable NOT WORKING 

  $( function() {
    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
  } );