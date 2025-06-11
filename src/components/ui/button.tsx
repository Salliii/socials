import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
	"relative inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-base font-medium whitespace-nowrap outline-none transition-all cursor-pointer [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 [&_svg]:pointer-events-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-default after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-opacity hover:after:opacity-100 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
	{
		variants: {
			variant: {
				primary:
					"bg-gradient-to-br from-primary/90 to-primary-alt/90 text-primary-foreground after:bg-black/10",
				outline:
					"bg-transparent border text-foreground after:bg-white/5",
				ghost: "after:bg-white/5",
				link: "text-primary-text underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 has-[>svg]:px-3",
				sm: "h-8 px-3 gap-1.5 has-[>svg]:px-2.5",
				lg: "h-10 px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	}
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
