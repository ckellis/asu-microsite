$(document).ready(function(){
 $('#submit').click(function(){

      var checked = $('input:checkbox:checked'); 
	  var resourcesArray = [];
    
	  resourcesArray["career"] = "<a href='https://students.asu.edu/careerguide/careerpreparation' target='_blank'>CareerPreparation</a>";
    resourcesArray["advising"] = "<a href='http://technology.asu.edu' target='_blank'>College Advising</a>";
    resourcesArray["counseling"] = "<a href='http://technology.asu.edu' target='_blank'>Counseling Services</a>";
    resourcesArray["financial"] = "<a href='http://technology.asu.edu' target='_blank'>Financial Aid</a>";
    resourcesArray["fitness"] = "<a href='http://technology.asu.edu' target='_blank'>Fitness & Recreation</a>";
    resourcesArray["health"] = "<a href='http://technology.asu.edu' target='_blank'>Health Services</a>";
    resourcesArray["housing"] = "<a href='http://technology.asu.edu' target='_blank'>Housing</a>";
    resourcesArray["library"] = "<a href='http://technology.asu.edu' target='_blank'>Library</a>";
    resourcesArray["parking"] = "<a href='http://technology.asu.edu' target='_blank'>Parking</a>";
    resourcesArray["scholarships"] = "<a href='http://technology.asu.edu' target='_blank'>Scholarships</a>";
    resourcesArray["employment"] = "<a href='http://technology.asu.edu' target='_blank'>Student Employment</a>";
    resourcesArray["organizations"] = "<a href='http://technology.asu.edu' target='_blank'>Student Organizations</a>";
    resourcesArray["tutoring"] = "<a href='http://technology.asu.edu' target='_blank'>Tutoring Support</a>";
    resourcesArray["writing"] = "<a href='http://technology.asu.edu' target='_blank'>Writing Support</a>";
    
      var results = [];
	  
	  $(checked).map(function(i) {
		  results[i] = resourcesArray[$(this).val()];
	  });
	     $('#resources li').each(function (i) {
         $(this).append(results[i]);   
    }) 
      
     if ($('#form1 input:checkbox:checked').length > 0){	 	 
	 	 $('#indicate').show();
     } else {
         alert("You must select at least one resource!");
}
	$('#reset').click(function(){
	$('#resources li').empty();
	$('input:checkbox').removeAttr('checked');
	$('#indicate').hide();
	}); 
   }
  );
  
 });

