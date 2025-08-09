document.querySelectorAll('.nav-btn').forEach(button => {
	button.addEventListener('click', () => {
		const size = button.textContent.trim(); // приклад: "300x250"
		const [width, height] = size.split('x');
		const iframe = document.getElementById('banner-frame');
		iframe.src = `./banner${width}x${height}.html`;
		iframe.width = width;
		iframe.height = height;
	});
});