import { cn } from "@/lib/utils";
import React from "react";

function BackgroundGradient({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-primary-alt/10",
				className
			)}
			{...props}
		/>
	);
}

function BackgroundEllipse({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"absolute z-0 aspect-square rounded-full blur-[100px]",
				className
			)}
			{...props}
		/>
	);
}

export { BackgroundGradient, BackgroundEllipse };
