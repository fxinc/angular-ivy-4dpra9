import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { MainLayoutComponent } from './main/shared/main-layout/main-layout.component'
import { LoginPageComponent } from './main/pages/login-page/login-page.component'
import { RegisterPageComponent } from './main/pages/register-page/register-page.component'
import { ResetPasswordComponent } from './main/pages/reset-password/reset-password.component'
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component'
import { HomePageComponent } from './main/pages/home-page/home-page.component'
import { TechnicalWorkPageComponent } from './main/pages/technical-work-page/technical-work-page.component'
import { DemoGuard } from './main/shared/services/demo.guard'
import { EmailConfirmComponent } from './main/pages/email-confirm/email-confirm.component'
import { FormPasswordComponent } from './main/pages/form-password/form-password.component'

const routes: Routes = [
	{
		path: '', component: MainLayoutComponent, children: [
			{ path: '', redirectTo: '/login', pathMatch: 'full' },
			{ path: '', component: HomePageComponent, canActivate: [DemoGuard] },
			{ path: 'login', component: LoginPageComponent },
			{ path: 'register', component: RegisterPageComponent },
			{ path: 'reset-password', component: ResetPasswordComponent },
			{ path: 'confirm-email', component: EmailConfirmComponent },
			{ path: 'form-password/:uuid/:token', component: FormPasswordComponent },
		],
	},
	{
		path: 'demo',
		component: TechnicalWorkPageComponent,
	},
	{
		path: 'cabinet',
		loadChildren: () => import('./cabinet/cabinet.module').then(m => m.CabinetModule),
	},

	{ path: '404', component: ErrorPageComponent },
	{ path: '**', redirectTo: '/404' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		preloadingStrategy: PreloadAllModules,
	})],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
