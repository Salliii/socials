import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

function Button({
	className,
	asChild = false,
	...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={cn(
				"h-11 px-6 py-2.5 inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-base font-medium whitespace-nowrap ring-offset-background transition-all cursor-pointer [&_svg]:shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 md:text-base",
				"focus:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				"disabled:cursor-default disabled:pointer-events-none disabled:opacity-50",
				"aria-invalid:ring-destructive aria-invalid:border-destructive",
				className
			)}
			{...props}
		/>
	);
}

function PrimaryButton({
	className,
	...props
}: React.ComponentProps<typeof Button>) {
	return (
		<Button
			className={cn(
				"bg-primary text-primary-foreground hover:bg-primary/90",
				className
			)}
			{...props}
		/>
	);
}

function DestructiveButton({
	className,
	...props
}: React.ComponentProps<typeof Button>) {
	return (
		<Button
			className={cn(
				"bg-destructive text-destructive-foreground focus-visible:ring-destructive hover:bg-destructive/90",
				className
			)}
			{...props}
		/>
	);
}

function GhostButton({
	className,
	...props
}: React.ComponentProps<typeof Button>) {
	return (
		<Button
			className={cn(
				"bg-transparent text-foreground hover:bg-white/5",
				className
			)}
			{...props}
		/>
	);
}

function LinkButton({
	className,
	...props
}: React.ComponentProps<typeof Button>) {
	return (
		<Button
			className={cn(
				"bg-transparent text-foreground underline-offset-4 hover:underline",
				className
			)}
			{...props}
		/>
	);
}

export { PrimaryButton, DestructiveButton, GhostButton, LinkButton, Button };
