var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover", function(){
		//this.style.color = "green";//this is prefered to the lis
		this.classList.add("mouseOverSelected");
	});

	lis[i].addEventListener("mouseout", function(){
		//this.style.color = "black";
		this.classList.remove("mouseOverSelected");
	});
	lis[i].addEventListener("click", function(){
		this.classList.toggle("selected");
	})
}