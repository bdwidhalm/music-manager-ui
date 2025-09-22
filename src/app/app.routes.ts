import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Songs } from './songs/songs';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Music Manager'
    },
    {
        path: 'songs',
        component: Songs,
        title: 'Our Songs'
    }
];
