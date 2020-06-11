import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoriesComponent } from './memories/memories.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import { MemoryDetailEditComponent } from './memory-detail-edit/memory-detail-edit.component';
import { MemoriesDashboardComponent } from './memories-dashboard/memories-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MemoriesComponent,
    MemoryDetailComponent,
    MemoryDetailEditComponent,
    MemoriesDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
