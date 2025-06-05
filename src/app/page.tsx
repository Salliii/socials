import { Avatar } from "@/components/ui/avatar";

function AppPage() {
	return (
		<main
			className={
				"w-full max-w-xl min-h-dvh mx-auto px-6 py-12 relative z-10"
			}>
			<header className={"text-center"}>
				<Avatar className={"mx-auto mb-6"} />
				<h1
					className={
						"bg-gradient-to-br from-primary to-primary-alt bg-clip-text text-4xl text-transparent font-bold"
					}>
					Silas Schulreich
				</h1>
				<h2 className={"mb-2 text-xl text-muted"}>Salliii</h2>
				<div
					className={
						"w-16 h-1 mx-auto bg-gradient-to-br from-primary to-primary-alt rounded-full mb-6"
					}
				/>
			</header>
		</main>
	);
}

export default AppPage;
