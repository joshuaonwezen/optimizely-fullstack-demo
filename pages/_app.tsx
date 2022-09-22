import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createInstance, OptimizelyProvider } from "@optimizely/react-sdk";
import Script from "next/script";

const optimizely = createInstance({
    sdkKey: "EBBFSke1Sx1sbzABdxaFf",
    datafileOptions: {
        autoUpdate: true,
        updateInterval: 600000, // 10 minutes in milliseconds
    },
});

function AppWrapper({ Component, pageProps }: AppProps) {
    return (
        <OptimizelyProvider
            optimizely={optimizely}
            user={{ id: "<Your_User_Id>" }}>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-8ZZ5YXD535"
                strategy="afterInteractive"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-8ZZ5YXD535');
                `}
            </Script>
            <Component {...pageProps} />
        </OptimizelyProvider>
    );
}

export default AppWrapper;
