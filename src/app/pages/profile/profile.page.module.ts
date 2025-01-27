import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile.page';
import { MatProgressSpinnerModule, MatButtonModule, MatTooltipModule, MatTableModule } from '@angular/material';
import { SharedModule } from '../../modules/shared.module';
import { ProfileCupsTableComponent } from './components/profile-cups-table/profile-cups-table.component';
import { ProfileRewardsComponent } from './components/profile-rewards/profile-rewards.component';
import { ProfileRatingChartComponent } from './components/profile-rating-chart/profile-rating-chart.component';
import { ProfileService } from './services/profile.service';
import { ProfileLastDemosComponent } from './components/profile-last-demos/profile-last-demos.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
    {
        path: '',
        component: ProfilePageComponent,
    },
];

@NgModule({
    declarations: [
        ProfilePageComponent,
        ProfileCupsTableComponent,
        ProfileRewardsComponent,
        ProfileRatingChartComponent,
        ProfileLastDemosComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatProgressSpinnerModule,
        SharedModule,
        MatButtonModule,
        MatTooltipModule,
        MatTableModule,
        CdkTableModule,
        ChartsModule,
    ],
    providers: [ProfileService],
})
export class ProfilePageModule {}
