import { cn } from "@/lib/utils";
import * as React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			className={cn(
				"w-full min-w-0 min-h-24 flex px-3 py-2 bg-card border rounded-md text-base ring-offset-background transition-[color,box-shadow,border] field-sizing-content placeholder:text-muted md:text-sm",
				"focus:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				"disabled:cursor-default disabled:opacity-50 disabled:pointer-events-none",
				"aria-invalid:ring-destructive aria-invalid:border-destructive",
				className
			)}
			{...props}
		/>
	);
}

export { Textarea };
