import { getCurrentInstance, onMounted, onUnmounted } from 'vue';

export function onClickOutside(callback) {
    const { ctx } = getCurrentInstance();

    function handleClick(event) {
        if (ctx.$el !== event.target && !ctx.$el.contains(event.target)) {
            callback(event);
        }
    }

    onMounted(() => document.body.addEventListener('click', handleClick));
    onUnmounted(() => document.body.removeEventListener('click', handleClick));
}
