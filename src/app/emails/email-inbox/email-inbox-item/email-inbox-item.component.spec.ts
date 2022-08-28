import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInboxItemComponent } from './email-inbox-item.component';

describe('EmailInboxItemComponent', () => {
  let component: EmailInboxItemComponent;
  let fixture: ComponentFixture<EmailInboxItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailInboxItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInboxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
