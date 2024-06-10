import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'categories',
                title: 'Categorías',
                loadComponent: () => import('./dashboard/pages/categories/categories.component')
            },
            {
                path: 'user',
                title: 'Registrar Usuario',
                loadComponent: () => import('./dashboard/pages/user/user.component')
            },
            {
                path: 'category/:id',
                title: 'Juegos Categoría ',
                loadComponent: () => import('./dashboard/pages/category/category.component')
            },
            {
                path: 'game/:id',
                loadComponent: () => import('./dashboard/pages/game/game.component')
            },
            {
                path: 'categories',
                title: 'Categorías',
                loadComponent: () => import('./dashboard/pages/categories/categories.component')
            },
        ]
    }


];
