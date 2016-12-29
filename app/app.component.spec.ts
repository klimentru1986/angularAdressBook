import { ContactsBook } from './contactsBook/contactsBook.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ContactsBook', function () {
  let de: DebugElement;
  let comp: ContactsBook;
  let fixture: ComponentFixture<ContactsBook>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsBook ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsBook);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });
});
