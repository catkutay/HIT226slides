
//please credit where you get your code form - in this case a studnets work as sample

document.addEventListener('DOMContentLoaded', function() {

	var selectedSnippitClass = 'snippit--selected';
//also explain what the code does so we know you understand the code wehn you use it
	/**
	 * Click event handler for snippit section
	 * Reset all sections to be unselected and grow this section
	 * @param {Event} evt The click event
	 * @return {boolen} Returns true to indicate success
	 **/
	function sectionClicked(evt) {
		var clickedElem = evt.target.parentNode.parentNode;
		
		if (clickedElem.classList.contains(selectedSnippitClass)) {
			clickedElem.classList.remove(selectedSnippitClass);
			return true;
		}

		var selectedSnippits = document.querySelectorAll(selectedSnippitClass);
		for (var i = 0; i < selectedSnippits.length; i++) {
			selectedSnippits[i].classList.remove(selectedSnippitClass);
		}
	
		
		console.log(evt.target,evt.target.src);
		if (evt.target.src.indexOf("images/hairstyle20.jpg") != -1)
			clickedElem.innerHTML = "<div width=50%> <h1>The form</h1>" +

				"<form action='/action_page.php'>" +
				"<label for='fname'>First name:</label>" +
				"<input type='text' id='fname' name='fname'><br><br>" +
				"<label for='lname'>Last name:</label>" +
				"<input type='text' id='lname' name='lname'><br><br>" +
				"<input type='submit' value='Submit'>" +
				"</form>";
		else {
		/* 	clickedElem.classList.add(selectedSnippitClass);
			var canvas = document.getElementById("localCanvas");
			var ctx = canvas.getContext("2d");
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(25, 10, 750, 80); */
		}
	}
	/**
	 * Add event listener to snippit sections
	 * @return {undefined} no return value
	 **/
	function addSnippitEvents() {
		var snippitSections = document.querySelectorAll('.snippit__section');
		for(var i = 0; i < snippitSections.length; i++) {
			snippitSections[i].addEventListener('click', sectionClicked);
		}
	}
	function removeStyle() {
		
		/* var button = document.querySelector('#btn');
		button.addEventListener('click', function(evt) {
			console.log('Button clicked', evt);
			   var btn = evt.target;
    		btn.parentNode.removeChild(btn);
		}); */
	}
	removeStyle();
	addSnippitEvents();

});
