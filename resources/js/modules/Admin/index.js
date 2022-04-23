import Dashboard from '@modules/Admin/Dashboard';

export function useAdmin({ router }) {
    router.addRoute({ path: '/admin', component: Dashboard });
}
