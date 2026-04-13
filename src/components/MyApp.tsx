import { WindowProps } from "@prozilla-os/core";

export function MyApp({ app }: WindowProps) {
	return <p>Welcome to {app?.name ?? "my app"}!</p>
}