import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoriesComponent } from './memories/memories.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import { MemoryDetailEditComponent } from './memory-detail-edit/memory-detail-edit.component';
import { MemoriesDashboardComponent } from './memories-dashboard/memories-dashboard.component';


const routes: Routes = [
  { path: 'memories', component: MemoriesComponent },
  { path: 'memories-dashboard', component: MemoriesDashboardComponent },
  { path: '', redirectTo: '/memories', pathMatch: 'full' },
  { path: 'memories/new', component: MemoryDetailEditComponent },
  { path: 'memories/:Id', component: MemoryDetailComponent },
  { path: 'memories/:Id/edit', component: MemoryDetailEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
