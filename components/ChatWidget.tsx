import React, { useEffect } from "react";

declare global {
	interface Window {
		chatwootSDK?: any;
	}
}

interface ChatWidgetProps {
	websiteToken?: string;
}

const DEFAULT_TOKEN = "pLD1ZFoy2hFf3BGN4ie4Khdd";
const DEFAULT_BASE = (import.meta as any)?.env?.VITE_CHAT_BASE_URL || "http://192.168.1.16:3000";
const SCRIPT_ID = "chatwoot-sdk";

const ChatWidget: React.FC<ChatWidgetProps> = ({ websiteToken = DEFAULT_TOKEN }) => {
	useEffect(() => {
		const normalizedBase = DEFAULT_BASE.replace(/\/$/, "");

		const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
		if (existing) {
			const sdk = window.chatwootSDK;
			if (sdk && typeof sdk.run === "function") {
				sdk.run({ websiteToken, baseUrl: normalizedBase });
			}

			return () => {
				const s = window.chatwootSDK;
				if (s) {
					if (typeof s.shutdown === "function") s.shutdown();
					if (typeof s.destroy === "function") s.destroy();
				}
			};
		}

		const g = document.createElement("script");
		const s = document.getElementsByTagName("script")[0];
		g.src = `${normalizedBase}/packs/js/sdk.js`;
		g.async = true;
		g.id = SCRIPT_ID;
		s.parentNode!.insertBefore(g, s);

		const onLoad = () => {
			if (window.chatwootSDK && typeof window.chatwootSDK.run === "function") {
				window.chatwootSDK.run({ websiteToken, baseUrl: normalizedBase });
			}
		};

		g.addEventListener("load", onLoad);

		return () => {
			g.removeEventListener("load", onLoad);
			if (g.parentNode) g.parentNode.removeChild(g);

			const sdk = window.chatwootSDK;
			if (sdk) {
				if (typeof sdk.shutdown === "function") sdk.shutdown();
				if (typeof sdk.destroy === "function") sdk.destroy();
			}

			try {
				// best-effort cleanup of global
				// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
				delete (window as any).chatwootSDK;
			} catch (_) {
				/* ignore */
			}
		};
	}, [websiteToken]);

	return null;
};

export default ChatWidget;