import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';

// add these imports
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    /* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsq4y4v6SBh9btsD8SjxlcG3RM8nFwpBo',
    }),
    AgmSnazzyInfoWindowModule, */
    LeafletModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
