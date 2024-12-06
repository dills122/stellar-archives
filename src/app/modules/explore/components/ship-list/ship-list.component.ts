import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StarshipService } from '../../../swapi/services/starship/starship.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { Starship } from '../../../swapi/models/starship.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-list',
  standalone: false,

  templateUrl: './ship-list.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  styleUrl: './ship-list.component.scss',
})
export class ShipListComponent implements OnInit, OnDestroy {
  constructor(
    private starshipService: StarshipService,
    private router: Router
  ) {}
  private destroy$ = new Subject<void>();
  columnsToDisplay: string[] = ['name', 'model', 'manufacturer', 'crew'];
  columnsToDisplayWithExpand = ['expand', ...this.columnsToDisplay];
  dataSource = new MatTableDataSource<any>();
  totalShips = 0;
  currentPage = 0;
  isLoadingResults = false;
  expandedElement: Starship | null | undefined;

  ngOnInit(): void {
    this.fetchPage(1);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchPage(page: number) {
    this.isLoadingResults = true;
    this.starshipService
      .getStarshipsByPage(page)
      .pipe(
        takeUntil(this.destroy$),
        tap((resp) => {
          this.dataSource.data = resp.results;
          this.totalShips = resp.count;
          this.currentPage = page;
          this.isLoadingResults = false;
        })
      )
      .subscribe();
  }

  extractResourceIdFromUrl(url: string): number {
    if (!url) {
      return -1;
    }
    const match = url.match(/\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : -1;
  }

  navigateToResource(resourceId: number): void {
    if (resourceId !== -1) {
      this.router.navigate(['/details', resourceId]);
    }
  }

  onPageChange(event: PageEvent): void {
    const requestedPage = event.pageIndex + 1;
    this.fetchPage(requestedPage);
  }
}
