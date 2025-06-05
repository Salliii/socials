import "@/styles/globals.css";
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
				{children}
			</body>
		</html>
	);
}

export default AppLayout;
