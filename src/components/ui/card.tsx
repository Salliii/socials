import { cn } from "@/lib/utils";
import * as React from "react";

function Card({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"w-full py-6 bg-card backdrop-blur-md border rounded-xl",
				className
			)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("mb-4 px-6 flex items-center space-x-3", className)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
	return <div className={cn("px-6 space-y-4", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"mt-4 px-6 flex items-center justify-end space-x-3",
				className
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<h4
			className={cn("text-xl font-medium leading-none", className)}
			{...props}
		/>
	);
}

export { Card, CardHeader, CardContent, CardFooter, CardTitle };
