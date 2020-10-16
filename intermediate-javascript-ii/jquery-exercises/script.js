$(function () {
	console.log("Let's get ready to party with jQuery!");
    $("article img").addClass("image-center");
	$("article p:last-child").remove();
	$("h1#title").css("font-size", Math.random() * 100);
    $("ol").append($("<li>", { text: "Added with jQuery" }));
    $("aside").empty().append($("<p>", {text: "We are sorry for putting the list items there in the first instance"}));
    $(".form-control").on("keyup blur change", function () {
        let red = $(".form-control").eq(0).val();
        let green = $(".form-control").eq(1).val();
        let blue = $(".form-control").eq(2).val();
        $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
    })
    $("img").on("click", function() {
        this.remove();
    })
});
