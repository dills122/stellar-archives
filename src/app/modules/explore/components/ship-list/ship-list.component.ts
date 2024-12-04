import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StarshipService } from '../../../swapi/services/starship/starship.service';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-ship-list',
  standalone: false,

  templateUrl: './ship-list.component.html',
  styleUrl: './ship-list.component.scss',
})
export class ShipListComponent implements OnInit, OnDestroy {
  constructor(private starshipService: StarshipService) {}
  private destroy$ = new Subject<void>();
  displayedColumns: string[] = ['name', 'model', 'manufacturer', 'crew'];
  dataSource = new MatTableDataSource<any>();
  totalShips = 0;
  currentPage = 0;
  isLoadingResults = false;

  ngOnInit(): void {
    this.fetchPage(1);
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

  onPageChange(event: PageEvent): void {
    const requestedPage = event.pageIndex + 1;

    console.log(`PAGE: Req: ${requestedPage} CurrentPage: ${this.currentPage}`);
    this.fetchPage(requestedPage);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
