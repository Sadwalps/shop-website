import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:"" , component:HomeComponent , title:"Home page"
    },
    {
        path:"about" , component:AboutComponent , title:"About"
    },
    {
        path:"products" , component:ProductComponent , title:"Products"
    },
    {
        path:"contact" , component:ContactComponent , title:"Contact"
    }
    
];
