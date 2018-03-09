$(document).ready(function() {
	$("#ajaxButton").click(function() {
		$.ajax({
				type: "Post",
				url: "team.php",
				success: function(data) {
						var obj = $.parseJSON(data);
						var results = "<ul>"
						$.each(obj, function() {
							result = results + "<li>Team : " + this['team']
							+ " , Manager : " + this['manager'] + "</li>";
						});
						result = result + "</ul>"
						$("#result").html(result);
				}
		});
	});
});