import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const alertVariants = cva(
	"w-full p-4 relative grid grid-cols-[0_1fr] items-start border rounded-lg text-sm [&>svg]:size-4 [&>svg]:text-current  has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3",
	{
		variants: {
			variant: {
				error: "bg-alert-error/5 border-alert-error/10 text-alert-error-foreground ring-bg-alert-error",
				warning:
					"bg-alert-warning/5 border-alert-warning/10 text-alert-warning-foreground ring-bg-alert-warning",
				success:
					"bg-alert-success/5 border-alert-success/10 text-alert-success-foreground ring-bg-alert-success",
				info: "bg-alert-info/5 border-alert-info/10 text-alert-info-foreground ring-bg-alert-info",
			},
		},
		defaultVariants: {
			variant: "error",
		},
	}
);

function Alert({
	className,
	variant,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
	return (
		<div
			data-slot="alert"
			role="alert"
			className={cn(alertVariants({ variant }), className)}
			{...props}
		/>
	);
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-title"
			className={cn(
				"min-h-4 col-start-2 font-medium line-clamp-1 leading-none",
				className
			)}
			{...props}
		/>
	);
}

function AlertDescription({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-description"
			className={cn(
				"mt-1 col-start-2 text-sm space-y-1 leading-normal",
				className
			)}
			{...props}
		/>
	);
}

function AlertAction({
	className,
	...props
}: Omit<React.ComponentProps<typeof Button>, "variant" | "size">) {
	return (
		<Button
			className={cn(
				"w-fit mt-3 col-start-2  bg-inherit border-inherit text-sm text-inherit after:bg-inherit focus-visible:border-inherit focus-visible:ring-inherit",
				className
			)}
			variant={"outline"}
			size={"default"}
			{...props}
		/>
	);
}

export { Alert, AlertTitle, AlertDescription, AlertAction };
