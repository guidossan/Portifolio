import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesComecoComponent } from './botoes-comeco.component';

describe('BotoesComecoComponent', () => {
  let component: BotoesComecoComponent;
  let fixture: ComponentFixture<BotoesComecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoesComecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesComecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
