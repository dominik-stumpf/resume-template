import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'resume-template',
	description: 'Generate resumes with ease using this tool.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
