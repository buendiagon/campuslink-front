import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePublicationComponent } from './make-publication.component';

describe('MakePublicationComponent', () => {
  let component: MakePublicationComponent;
  let fixture: ComponentFixture<MakePublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakePublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
