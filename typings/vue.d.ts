import {ElNotification} from "element-ui/types/notification";

declare module 'vue/types/vue' {
    interface Vue {
        $notify: ElNotification;
        $eventBus: Vue;
    }
}
