import { NgModule, Provider } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { MainLayoutComponent } from './main/shared/main-layout/main-layout.component'
import { LoginPageComponent } from './main/pages/login-page/login-page.component'
import { RegisterPageComponent } from './main/pages/register-page/register-page.component'
import { ResetPasswordComponent } from './main/pages/reset-password/reset-password.component'
import { SharedModule } from './shared/shared.module'
import { MessageComponent } from './main/pages/reset-password/message/message.component'
import { HomePageComponent } from './main/pages/home-page/home-page.component'
import { TechnicalWorkPageComponent } from './main/pages/technical-work-page/technical-work-page.component'
import { DemoGuard } from './main/shared/services/demo.guard'
import { ConfirmEmailComponent } from './main/pages/register-page/confirm-email/confirm-email.component'
import { EmailConfirmComponent } from './main/pages/email-confirm/email-confirm.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './shared/interceptor/auth.interceptor'
import { FormPasswordComponent } from './main/pages/form-password/form-password.component'
import {
	ResetPasswordSuccessComponent,
} from './main/pages/form-password/components/reset-password-success/reset-password-success.component'


const INTERCEPTOR_PROVIDER: Provider = {
	provide: HTTP_INTERCEPTORS,
	multi: true,
	useClass: AuthInterceptor,
}


@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponent,
		LoginPageComponent,
		RegisterPageComponent,
		ResetPasswordComponent,
		MessageComponent,
		HomePageComponent,
		TechnicalWorkPageComponent,
		ConfirmEmailComponent,
		EmailConfirmComponent,
		FormPasswordComponent,
		ResetPasswordSuccessComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
	],
	providers: [DemoGuard, INTERCEPTOR_PROVIDER],
	bootstrap: [AppComponent],
})
export class AppModule {
}
