import { cn } from "@/lib/utils";
import Image from "next/image";
import AvatarImage from "public/avatar.png";
import React from "react";

function Avatar({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"size-28 relative z-10 ring-2 ring-primary rounded-full",
				className
			)}
			{...props}>
			<Image
				className={"object-cover rounded-full"}
				src={AvatarImage}
				alt={""}
				priority={true}
			/>
			<div
				className={
					"w-full h-full absolute top-0.5 left-0.5 -z-10 bg-gradient-to-tr from-primary to-primary-alt rounded-full blur-sm"
				}
			/>
		</div>
	);
}

export { Avatar };
