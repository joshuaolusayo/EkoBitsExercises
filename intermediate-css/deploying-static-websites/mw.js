let abtModal = document.getElementById("myModal");
let abtModalPic = document.getElementsByClassName("ppp");
let captionText = document.getElementById("caption");
let modaimg = document.getElementById("img01");
let i = 0;
let l = abtModalPic.length;
for (let i = 0; i < l; i++) {
	abtModalPic[i].onclick = function() {
		abtModal.style.display = "block";
		modaimg.src = this.src;
		modaimg.alt = this.alt;
		captionText.innerHTML = this.alt;
	}
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function () {
	abtModal.style.display = "none";
}