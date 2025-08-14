import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NationalAnthemPage } from './national-anthem.page';

describe('NationalAnthemPage', () => {
  let component: NationalAnthemPage;
  let fixture: ComponentFixture<NationalAnthemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalAnthemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
