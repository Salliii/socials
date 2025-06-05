import { cn } from "@/lib/utils";
import * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			className={cn(
				"w-full min-w-0 h-10 flex px-3 py-2 bg-card rounded-md border text-sm ring-offset-background transition-[color,box-shadow,border] placeholder:text-muted",
				"focus:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				"disabled:cursor-default disabled:opacity-50 disabled:pointer-events-none",
				"aria-invalid:ring-destructive aria-invalid:border-destructive",
				"file:inline-flex file:bg-transparent file:border-0 file:text-sm file:text-foreground file:font-medium",
				className
			)}
			{...props}
		/>
	);
}

export { Input };
