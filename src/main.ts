import { App } from "@prozilla-os/core";
import { MyApp } from "./components/MyApp";

const myApp = new App("My App", "my-app", MyApp)
	.setIconUrl("https://os.prozilla.dev/icon.svg")
	.setPinnedByDefault(false);

export { myApp };