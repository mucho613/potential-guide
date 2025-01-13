import "./global.css";

import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return (
		<div className={notoSansJP.className}>
			<Component {...pageProps} />
		</div>
	);
}
