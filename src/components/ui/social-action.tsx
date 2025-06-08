import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

type SocialActionProps =
	| ({ asLink?: true } & React.ComponentProps<"a">)
	| ({ asLink?: false } & React.ComponentProps<"button">);

function SocialAction({
	className,
	children,
	asLink,
	...props
}: SocialActionProps) {
	const Comp = asLink ? "a" : "button";

	return (
		<Slot
			className={
				"group w-full h-fit block z-10 cursor-pointer focus-visible:outline-none"
			}
			{...props}>
			<Comp>
				<Card
					className={cn(
						"relative p-4 flex items-center gap-3 [&_svg:not([class*='text-'])]:text-primary-text [&_svg:not([class*='transition-'])]:transition-colors",
						className
					)}>
					{children}
					<div
						className={
							"absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-alt/10 opacity-0 rounded-xl transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
						}
					/>
				</Card>
			</Comp>
		</Slot>
	);
}

function SocialActionTitle({
	className,
	...props
}: React.ComponentProps<"h3">) {
	return (
		<h3
			className={cn(
				"flex-1 text-base text-start font-normal leading-none",
				className
			)}
			{...props}
		/>
	);
}

export { SocialAction, SocialActionTitle };
