import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { ShipListComponent } from './components/ship-list/ship-list.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { IntroComponent } from './components/intro/intro.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ExploreComponent, ShipListComponent, IntroComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
})
export class ExploreModule {}
