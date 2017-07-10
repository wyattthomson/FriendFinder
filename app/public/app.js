$(document).ready(function(){

	$("#submit-button").on("click", function(){
		// event.preventDefault();

		function checkForm(){
			var isFilled = true;
			if ($("#name").val() || $("#photo").val === ""){
				isFilled=false;
			}

			else if ($(".chosen-select").val() === ""){
				isFilled = false;
			}
			return isFilled;
		}

		if( checkForm())
			var userData = {
				name: $("#name").val(),
				photo: $("#photo").val(),
				scores: [
					$("#question1").val(),
					$("#question2").val(),
					$("#question3").val(),
					$("#question4").val(),
					$("#question5").val(),
					$("#question6").val(),
					$("#question7").val(),
					$("#question8").val(),
					$("#question9").val(),
					$("#question10").val(),
				]
			}

		$.post("/friends", userData, function(data)) {
			$("#match-name").text(data.name);
			$("#match-picture").attr("src", data.photo);

			$("#match-modal").modal("toggle");
		});
		} 

		else {
			alert("FILL OUT ALL FIELDS YA FOOL!")
			}	
		}
	})

})