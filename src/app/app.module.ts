import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
// @ts-ignore
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { SohoHeaderDynamicDemoComponent } from './header/header-dynamic.demo';
import { SohoRenderLoopService } from '../../projects/ids-enterprise-ng/src/lib/renderLoop';
import { MessageDemoComponent } from './message/message.demo';

@NgModule({
  declarations: [
    AppComponent,
    MessageDemoComponent,
    SohoHeaderDynamicDemoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SohoComponentsModule,
  ],
  providers: [
    SohoRenderLoopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
