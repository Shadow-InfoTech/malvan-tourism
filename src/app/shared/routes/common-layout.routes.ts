import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'contact',
        loadChildren: () => import('../../contact/contact.module').then(m => m.ContactModule),
    },
    {
        path: 'about',
        loadChildren: () => import('../../about/about.module').then(m => m.AboutModule),
    },
    {
        path: 'hotels',
        loadChildren: () => import('../../hotels/hotels.module').then(m => m.HotelsModule),
    },
    {
        path: 'packages',
        loadChildren: () => import('../../packages/packages.module').then(m => m.PackagesModule),
    },
    {
        path: 'tour',
        loadChildren: () => import('../../tour/tour.module').then(m => m.TourModule),
    }
];