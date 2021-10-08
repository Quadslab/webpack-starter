import registerServiceWorker from "./registerServiceWorker";
import "./index.scss";
registerServiceWorker();
function component() {
	const element = document.createElement("div");
	element.innerHTML = "hello!";
	element.classList.add("hello");
	return element;
}
document.body.appendChild(component());
