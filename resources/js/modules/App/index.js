import Home from '@modules/App/Home';

export function useApp({ app, router }) {
    router.addRoute({ path: '/', component: Home });
}
