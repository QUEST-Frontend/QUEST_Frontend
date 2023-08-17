import {Store} from "react-notifications-component";
import {NOTIFICATION_TYPE, NotificationTitleMessage} from "react-notifications-component/dist/src/typings";

export function useNotification(type: NOTIFICATION_TYPE, title: NotificationTitleMessage="", message: NotificationTitleMessage) {
    Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__backInDown"],
        animationOut: ["animate__animated", "animate__backOutRight"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });
}
