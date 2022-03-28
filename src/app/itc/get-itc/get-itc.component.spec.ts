import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetItcComponent } from './get-itc.component';

describe('GetItcComponent', () => {
  let component: GetItcComponent;
  let fixture: ComponentFixture<GetItcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetItcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetItcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
