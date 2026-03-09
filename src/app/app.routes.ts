import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { EndpointDemo } from './pages/endpoint-demo/endpoint-demo';
import { CartPage } from './pages/cart-page/cart-page';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'register',
        component: RegisterPage
    },
    {
        path: 'endpoint',
        component: EndpointDemo
    },
    {
        path: 'cart',
        component: CartPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];