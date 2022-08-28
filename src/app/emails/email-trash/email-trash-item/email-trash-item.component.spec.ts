import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTrashItemComponent } from './email-trash-item.component';

describe('EmailTrashItemComponent', () => {
  let component: EmailTrashItemComponent;
  let fixture: ComponentFixture<EmailTrashItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailTrashItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTrashItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
