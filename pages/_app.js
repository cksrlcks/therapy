import { useEffect } from "react";
import "../styles/reset.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
            window.location = "microsoft-edge:" + window.location;
            setTimeout(function () {
                window.location = "/browserSupport.html";
            }, 1000);
        }
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
