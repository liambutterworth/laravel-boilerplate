import { useAdmin } from '@modules/Admin';
import { useApp } from '@modules/App';

export function useModules(provided) {
    useAdmin(provided);
    useApp(provided);
}
