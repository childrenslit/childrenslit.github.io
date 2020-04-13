$(function(){

	// Initialize the gallery
	$('.thumbs a').touchTouch();

});

function changeImage() {

        if (document.getElementById("imgClickAndChange").getAttribute("src") == "images/ER_drawing.jpeg")
        {
            document.getElementById("imgClickAndChange").src = "images/ER.png";
        }
        else
        {
            document.getElementById("imgClickAndChange").src = "images/ER_drawing.jpeg";
        }
    }
