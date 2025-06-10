"use client";

import { GithubIcon } from "@/components/icons/github";
import { InstagramIcon } from "@/components/icons/instagram";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { PortfolioIcon } from "@/components/icons/portfolio";
import { SpotifyIcon } from "@/components/icons/spotify";
import { Avatar } from "@/components/ui/avatar";
import { SocialAction, SocialActionTitle } from "@/components/ui/social-action";
import { ExternalLinkIcon } from "lucide-react";

const socials = [
	{
		title: "Github",
		href: "https://github.com/Salliii",
		Icon: GithubIcon,
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/silas-schulreich",
		Icon: LinkedinIcon,
	},
	{
		title: "Instagram",
		href: "https://instagram.com/salliii_02",
		Icon: InstagramIcon,
	},
	{
		title: "Spotify",
		href: "https://open.spotify.com/user/5otfy4jykovu1ypl938xzn7zf?si=Yxn1R807Teu2kBcuI-upnA",
		Icon: SpotifyIcon,
	},
	{
		title: "Portfolio",
		href: "https://salliii.dev",
		Icon: PortfolioIcon,
	},
];

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
			<section className={"space-y-4"}>
				{socials.map(({ title, href, Icon }, index) => (
					<SocialAction href={href} key={index} asLink>
						<Icon />
						<SocialActionTitle>{title}</SocialActionTitle>
						<ExternalLinkIcon
							className={
								"text-muted group-hover:text-primary-text group-focus-visible:text-primary-text"
							}
						/>
					</SocialAction>
				))}
			</section>
			<footer className={"text-center"}>
				<p className={"text-sm text-muted"}>
					© {new Date().getFullYear()} Silas Schulreich. All rights
					reserved.
				</p>
			</footer>
		</main>
	);
}

export default AppPage;
