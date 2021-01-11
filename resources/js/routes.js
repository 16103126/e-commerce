import AllBooks from './components/AllBooks.vue';
import AddBooks from './components/AllBooks.vue';
import EditBooks from './components/EditBooks.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllBooks
    },
    {
        name: 'add',
        path: '/add',
        component: AddBooks
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditBooks
    }
];