
import {Routes} from '@angular/router';

import { HomeComponent } from './components/home.component';
import { PostComponent } from './components/post.component';
import {DetailComponent} from './components/detail.component';
import {ProfileComponent} from './components/profile.component';


export const appRoutes: Routes = [
	{
		path: '',
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

];
