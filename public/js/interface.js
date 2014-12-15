$(document).ready(function(){
	$('#fetch_github_profile').on('click', function(){
		var profile_name = $('#profile_name').val();
		var source = $('#profileTemplate').html();
		var template = Handlebars.compile(source);
		 var url ="https://api.github.com/users/" + profile_name;

		$.get(url + "?client_id=" + "#{ENV['GH_ID']}" +"&client_secret=" + "#{ENV['GH_SECRET']}")
			.done(function(gitHubProfile){
				$('#profiles').append(template(gitHubProfile));
				$('.close_profile').on('click', function(){
					$(this).closest("article").remove();
				});
			}).error(function(){
				$('.error').html("Couldn't find that user...");
			});
		
		$("#profile_name").val('');
		$("#profile_name").focus(function(){
			$('.error').html("");
		});
	});
});