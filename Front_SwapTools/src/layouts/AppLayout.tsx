import React from "react";
import Box from "@mui/material/Box";
import { HeaderApp } from "./HeaderApp";
import { FooterApp } from "./FooterApp";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box>
			<HeaderApp />
			<Box>{children}</Box>
			<FooterApp />
		</Box>
	);
};
