import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPostComponent } from './show-all-post.component';

describe('ShowAllPostComponent', () => {
  let component: ShowAllPostComponent;
  let fixture: ComponentFixture<ShowAllPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
