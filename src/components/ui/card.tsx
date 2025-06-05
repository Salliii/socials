import { cn } from "@/lib/utils";
import * as React from "react";

function Card({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"w-full p-6 space-y-4 bg-card backdrop-blur-md border rounded-xl",
				className
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("text-xl font-medium leading-none", className)}
			{...props}
		/>
	);
}

export { Card, CardTitle };
