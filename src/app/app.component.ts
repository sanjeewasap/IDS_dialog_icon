import {
  Component,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit
} from '@angular/core';


// @ts-ignore
import {
  SohoPersonalizeDirective,
  SohoRenderLoopService,
} from 'ids-enterprise-ng';

@Component({
  selector: 'body', // eslint-disable-line
  templateUrl: 'app.component.html',
  styleUrls: [
    './app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild(SohoPersonalizeDirective, { static: true })
  personalize?: SohoPersonalizeDirective;

  /**
   * Include the new icons only if required by the current theme, this
   * is not quite perfect, as we need to listen for the theme change here.
   * Maybe wrap all the icons into their own component?
   */
  public useNewIcons = Soho.theme.currentTheme.id.startsWith("theme-new");

  public personalizeOptions: SohoPersonalizeOptions = {};

  constructor(private readonly renderLoop: SohoRenderLoopService) {
    // Init render loop manually for Angular applications
    // Ensures requestAnimationFrame is running outside of Angular Zone
    this.renderLoop.start();
  }

  ngAfterViewInit(): void {

  }

  onChangeTheme(ev: SohoPersonalizeEvent) {
    this.useNewIcons = ev.data.theme === 'theme-uplift-light'
      || ev.data.theme === 'theme-uplift-dark'
      || ev.data.theme === 'theme-uplift-contrast'
      || ev.data.theme === 'theme-new-light'
      || ev.data.theme === 'theme-new-dark'
      || ev.data.theme === 'theme-new-contrast';
  }

  toggleMenuVisibility() {
    console.info('app menu click captured.  Fire demoapp container toggle')
  }
}
