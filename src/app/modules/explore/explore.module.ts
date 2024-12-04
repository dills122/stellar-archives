import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { ShipListComponent } from './components/ship-list/ship-list.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ExploreComponent, ShipListComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
})
export class ExploreModule {}
