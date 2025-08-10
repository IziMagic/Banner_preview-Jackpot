document.querySelectorAll('.nav-btn').forEach(button => {
	button.addEventListener('click', () => {
		const size = button.textContent.trim();
		const [width, height] = size.split('x');
		const iframe = document.getElementById('banner-frame');
		iframe.src = `./banner${width}x${height}.html`;
		iframe.width = width;
		iframe.height = height;
	});
});
const buttonList = document.getElementById("button-list");

buttonList.addEventListener("click", (event) => {

	if (event.target.tagName === "BUTTON") {

		document.querySelectorAll("#button-list button")
			.forEach(btn => btn.classList.remove("active"));

		event.target.classList.add("active");
	}
});