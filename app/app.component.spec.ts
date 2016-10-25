/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/component';
import { AppContentComponent } from './app-content/component';
import { AppFooterComponent } from './app-footer/component';

import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppNavbarComponent,
        AppContentComponent,
        AppFooterComponent,
      ]
    });
  });

  describe('truethy', () => {
    it('true to be true', () => expect(true).toBe(true));
  });

  it('should instantiate component', (done) => {
    TestBed.compileComponents().then(ok => {

      let fixture = TestBed.createComponent(AppComponent);
      expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');

      done();
    });
  });

  it('should have expected <h4> app', (done) => {
    TestBed.compileComponents().then(ok => {

      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      // it works
      let h4 = fixture.debugElement.query(el => el.name === 'h4').nativeElement;
      // preferred
      h4 = fixture.debugElement.query(By.css('div.row h4')).nativeElement;
      expect(h4.innerText).toMatch(/app/i, '<h4> should say something about "app"');

      done();
    });
  });
});
