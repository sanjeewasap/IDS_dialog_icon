import {
  Component,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-dynamic-demo',
  templateUrl: 'header-dynamic.demo.html'
})
export class SohoHeaderDynamicDemoComponent {

  public defaultPersonalizeColor?: string | null;
  public defaultPersonalizeTheme?: string | null;

  constructor(
    public router: Router,
  ) {
  }


  onAppMenuTriggerClick() {
  }
}
