import { getCurrentInstance, onMounted, onUnmounted } from 'vue';

export function onClickOutside(ref, callback) {
    function handleClick(event) {
        if (ref.value !== event.target && !ref.value.contains(event.target)) {
            callback(event);
        }
    }

    onMounted(() => document.body.addEventListener('click', handleClick));
    onUnmounted(() => document.body.removeEventListener('click', handleClick));
}
