import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPageComponent } from './movies.page';
import { MoviesService } from './services/movies.service';
import { MatProgressSpinnerModule } from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: MoviesPageComponent,
    },
];

@NgModule({
    declarations: [MoviesPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MatProgressSpinnerModule],
    providers: [MoviesService],
})
export class MoviesPageModule {}
