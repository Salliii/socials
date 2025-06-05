import "@/styles/globals.css";
import {
	BackgroundEllipse,
	BackgroundGradient,
} from "@/components/ui/decorator";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React from "react";

const fontInter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html suppressHydrationWarning lang={"en"}>
			<body className={cn(fontInter.variable, fontInter.className)}>
				<BackgroundGradient />
				<BackgroundEllipse
					className={
						"w-[30vw] h-[30vw] top-[10%] left-[15%] bg-primary/10"
					}
				/>
				<BackgroundEllipse
					className={
						"w-[25vw] h-[25vw] bottom-[20%] right-[15%] bg-primary-alt/10"
					}
				/>
				{children}
			</body>
		</html>
	);
}

export default AppLayout;
