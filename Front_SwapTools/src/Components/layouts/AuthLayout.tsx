export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="auth-layout">
			<div className="auth-layout__content">{children}</div>
		</div>
	);
};
