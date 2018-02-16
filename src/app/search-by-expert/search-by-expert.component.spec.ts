import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByExpertComponent } from './search-by-expert.component';

describe('SearchByExpertComponent', () => {
  let component: SearchByExpertComponent;
  let fixture: ComponentFixture<SearchByExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
