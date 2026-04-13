import { AppsConfig } from "@prozilla-os/core";
import { myApp } from "../../main";

export const appsConfig = new AppsConfig({
	apps: [
		myApp.setPinnedByDefault(true)
			.setLaunchAtStartup(true)
	]
});