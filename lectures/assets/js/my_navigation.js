var toc_button = document.getElementById("toc-close");
var toc_reopen_button = document.getElementById("toc-reopen");
var top_toc_div = document.getElementById("toc-all");

function toc_close() {
	toc_button.classList.toggle("hidden");
	toc_reopen_button.classList.toggle("hidden");
	let toc_content = toc_reopen_button.nextElementSibling;
	// check if it is an ul element. if it is, toggle the hidden class
	if (toc_content.tagName == "UL") {
	toc_content.classList.toggle("hidden");
	}
	// change borders, etc
	top_toc_div.style.border = "none";
	top_toc_div.style.backgroundColor = "transparent";
	top_toc_div.style.opacity = "0.6";
	top_toc_div.style.left = "0px";
	top_toc_div.style.padding = "10px 15px";
}

function toc_reopen() {
	toc_button.classList.toggle("hidden");
	toc_reopen_button.classList.toggle("hidden");
	let toc_content = toc_reopen_button.nextElementSibling;
	// check if it is an ul element. if it is, toggle the hidden class
	if (toc_content.tagName == "UL") {
	toc_content.classList.toggle("hidden");
	}
	top_toc_div.style.border = "1px solid #e8e8e8";
	top_toc_div.style.backgroundColor = "#fff";
	top_toc_div.style.opacity = "1.0";
	top_toc_div.style.left = "15px";
	top_toc_div.style.padding = "10px 30px";
}

toc_button.addEventListener("click", toc_close);
toc_reopen_button.addEventListener("click", toc_reopen);