function touchHover(x) {
	if (x.style.backgroundColor != "rgba(0, 0, 0, 0)") {
		x.style.backgroundColor = "rgba(0, 0, 0, 0)";
	} else {
		x.style.backgroundColor = x.style.color;
	}
}