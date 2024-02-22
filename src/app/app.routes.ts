import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

export const routes: Routes = [
    { path: 'sign-up', component: RegistrationFormComponent },
    { path: 'sign-in', component: LoginFormComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() {
        console.log('AppRoutingModule');
    }
}