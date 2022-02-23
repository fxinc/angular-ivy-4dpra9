import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { CabinetLayoutComponent } from './shared/layouts/cabinet-layout/cabinet-layout.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { AuthGuard } from './shared/services/auth.guard'
import { FoundPageComponent } from './pages/found-page/found-page.component'
import { SecurityPageComponent } from './pages/security-page/security-page.component'
import { InvestIdeaComponent } from './pages/invest-idea/invest-idea.component'
import { FoundAboutComponent } from './pages/found-page/components/found-about/found-about.component'
import { FoundStrategyComponent } from './pages/found-page/components/found-strategy/found-strategy.component'
import { FoundPortfelComponent } from './pages/found-page/components/found-portfel/found-portfel.component'
import { FoundAdvantagesComponent } from './pages/found-page/components/found-advantages/found-advantages.component'
import { FoundConditionsComponent } from './pages/found-page/components/found-conditions/found-conditions.component'
import { FoundRisksComponent } from './pages/found-page/components/found-risks/found-risks.component'
import { ProfilePageComponent } from './pages/profile-page/profile-page.component'
import { EditPageComponent } from './pages/profile-page/edit-page/edit-page.component'
import { FundsCategoryPageComponent } from './pages/funds-category-page/funds-category-page.component'
import { MyAccountsComponent } from './pages/my-accounts/my-accounts.component'
import { DetailsPageComponent } from './pages/my-accounts/details-page/details-page.component'
import { SchetaMainComponent } from './pages/my-accounts/scheta-main/scheta-main.component'

const routes: Routes = [
	{
		path: '', component: CabinetLayoutComponent, children: [
			{ path: '', redirectTo: '/cabinet/dashboard', pathMatch: 'full' },
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'funds', component: FundsCategoryPageComponent },
			{
				path: 'funds/:id', component: FoundPageComponent, children: [
					{ path: 'about', component: FoundAboutComponent },
					{ path: 'strategy', component: FoundStrategyComponent },
					{ path: 'case', component: FoundPortfelComponent },
					{ path: 'advantages', component: FoundAdvantagesComponent },
					{ path: 'conditions', component: FoundConditionsComponent },
					{ path: 'risks', component: FoundRisksComponent },
				],
			},
			{ path: 'invest-idea', component: InvestIdeaComponent },
			{
				path: 'profile', component: ProfilePageComponent, children: [
					{ path: 'security', component: SecurityPageComponent },
					{ path: 'edit', component: EditPageComponent },
				],
			},
			{
				path: 'my-accounts', component: MyAccountsComponent, children: [
					{ path: 'details', component: DetailsPageComponent },
					{ path: 'scheta-main', component: SchetaMainComponent },
				],
			},
		],
		canActivate: [AuthGuard],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CabinetRoutingModule {
}
