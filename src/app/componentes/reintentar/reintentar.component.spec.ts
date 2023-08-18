import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReintentarComponent } from './reintentar.component';

describe('ReintentarComponent', () => {
  let component: ReintentarComponent;
  let fixture: ComponentFixture<ReintentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReintentarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReintentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
