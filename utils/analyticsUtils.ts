interface TrackEventParams {
    action: string;
    category: string;
    label: string;
    value?: number;
}

declare global {
    interface Window {
        gtag?: (command: string, targetId: string, config?: { [key: string]: any }) => void;
    }
}

export const trackEvent = ({ action, category, label, value }: TrackEventParams): void => {

    if (window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value !== undefined ? value : 1,
        });
    }
};



