import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StarshipService } from '../modules/swapi/services/starship/starship.service';

describe('AppComponent', () => {
  let starshipServiceMock: jasmine.SpyObj<StarshipService>;
  beforeEach(async () => {
    starshipServiceMock = jasmine.createSpyObj('StarshipService', [
      'getStarshipsByPage',
    ]);
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [AppComponent],
      providers: [
        {
          provide: StarshipService,
          useValue: starshipServiceMock,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   starshipServiceMock.getStarshipsByPage.and.returnValue(of({} as Starships));
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain(
  //     'Hello, stellar-archives'
  //   );
  // });
});
