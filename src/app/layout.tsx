import "@/styles/globals.css";
import React from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html suppressHydrationWarning lang={"en"}>
			<body>{children}</body>
		</html>
	);
}

export default AppLayout;
