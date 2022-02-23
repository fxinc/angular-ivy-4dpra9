import { LOCALE_ID, NgModule } from '@angular/core'
import { CommonModule, registerLocaleData } from '@angular/common'
import localeRu from '@angular/common/locales/ru'
import { CabinetLayoutComponent } from './shared/layouts/cabinet-layout/cabinet-layout.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { CabinetRoutingModule } from './cabinet-routing.module'
import { SharedModule } from '../shared/shared.module'
import { AuthGuard } from './shared/services/auth.guard'
import { FoundPageComponent } from './pages/found-page/found-page.component'
import { BriefSectionComponent } from './shared/sections/brief-section/brief-section.component'
import { SecurityPageComponent } from './pages/security-page/security-page.component'
import { NewsSectionComponent } from './shared/sections/news-section/news-section.component'
import { BannerSectionComponent } from './shared/sections/banner-section/banner-section.component'
import { FoundService } from './shared/services/found.service'
import { InvestIdeaComponent } from './pages/invest-idea/invest-idea.component'
import { NgChartsModule } from 'ng2-charts'
import { FoundAboutComponent } from './pages/found-page/components/found-about/found-about.component'
import { FoundStrategyComponent } from './pages/found-page/components/found-strategy/found-strategy.component'
import { FoundPortfelComponent } from './pages/found-page/components/found-portfel/found-portfel.component'
import { FoundAdvantagesComponent } from './pages/found-page/components/found-advantages/found-advantages.component'
import { FoundConditionsComponent } from './pages/found-page/components/found-conditions/found-conditions.component'
import { FoundRisksComponent } from './pages/found-page/components/found-risks/found-risks.component'
import { ProfilePageComponent } from './pages/profile-page/profile-page.component'
import { EditPageComponent } from './pages/profile-page/edit-page/edit-page.component'
import { PasswordChangeComponent } from './shared/components/password-change/password-change.component'
import { CodeInputModule } from 'angular-code-input'
import { NgxMaskModule } from 'ngx-mask';
import { FundsCategoryPageComponent } from './pages/funds-category-page/funds-category-page.component';
import { MyAccountsComponent } from './pages/my-accounts/my-accounts.component';
import { DetailsPageComponent } from './pages/my-accounts/details-page/details-page.component';
import { SchetaMainComponent } from './pages/my-accounts/scheta-main/scheta-main.component'


registerLocaleData(localeRu, 'ru')

@NgModule({
	declarations: [
		CabinetLayoutComponent,
		DashboardComponent,
		FoundPageComponent,
		BriefSectionComponent,
		SecurityPageComponent,
		NewsSectionComponent,
		BannerSectionComponent,
		InvestIdeaComponent,
		FoundAboutComponent,
		FoundStrategyComponent,
		FoundPortfelComponent,
		FoundAdvantagesComponent,
		FoundConditionsComponent,
		FoundRisksComponent,
		ProfilePageComponent,
		EditPageComponent,
		PasswordChangeComponent,
		FundsCategoryPageComponent,
		MyAccountsComponent,
		DetailsPageComponent,
		SchetaMainComponent,
	],
	imports: [
		CommonModule,
		CabinetRoutingModule,
		NgChartsModule,
		SharedModule,
		CodeInputModule,
		NgxMaskModule.forRoot(),
	],
	providers: [
		AuthGuard,
		FoundService,
		{
			provide: LOCALE_ID, useValue: 'ru',
		},
	],
})
export class CabinetModule {
}
