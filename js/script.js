$(function(){

	// Initialize the gallery
	$('.thumbs a').touchTouch();

});

function changeImage() {

        if (document.getElementById("imgClickAndChange").getAttribute("src") == "images/ER_drawing.jpeg")
        {
            document.getElementById("imgClickAndChange").src = "images/ER.png";
        }
        else if (document.getElementById("imgClickAndChange").getAttribute("src") == "images/ER.png")
        {
            document.getElementById("imgClickAndChange").src = "images/ER_drawing.jpeg";
        }
				else if (document.getElementById("imgClickAndChange").getAttribute("src") == "images/Early_Theoretical.png")
        {
            document.getElementById("imgClickAndChange").src = "images/Final_Theoretical.png";
        }
				else if (document.getElementById("imgClickAndChange").getAttribute("src") == "images/Final_Theoretical.png")
        {
            document.getElementById("imgClickAndChange").src = "images/Early_Theoretical.png";
        }
    }
