import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingPlaygroundComponent } from './coding-playground.component';

describe('CodingPlaygroundComponent', () => {
  let component: CodingPlaygroundComponent;
  let fixture: ComponentFixture<CodingPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
