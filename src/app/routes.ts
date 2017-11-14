
import {Routes} from '@angular/router';

import { HomeComponent } from './components/home.component';
import { PostComponent } from './components/post.component';
import { DetailComponent } from './components/detail.component';
import { ProfileComponent } from './components/profile.component';
import { ConnectionComponent } from './components/connection.component';


export const appRoutes: Routes = [
	{
		path: '',
		component: ConnectionComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'post/:id', 
		component: DetailComponent 
	},
	{
		path: 'profil', 
		component: ProfileComponent 
	}
	// { 
	// 	path: '**', 
	// 	component: PageNotFoundComponent 
	// }

];
