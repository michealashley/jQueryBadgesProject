$(function() {

  // your code will go here

	$.ajax({
		url: 'https://www.codeschool.com/users/mashley82.json',
		dataType: 'jsonp',
		success: function(response) {
			console.log(response.courses.completed);
			$.each(response.courses.completed, function(key, value){
				console.log(value.title);
				$('#badges').append('<div class="courses"><h3>'+value.title+'</h3>'
				+ '<img src="'+value.badge+'"/><a href="'+value.url+'" target=_blank class="btn btn-primary">See Course</a></div>');
			});
		}
	});

});
