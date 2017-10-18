import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { SuperSaiyanFourComponent } from './power/super-saiyan-four/super-saiyan-four.component';
import { SuperSaiyanThreeComponent } from './power/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanTwoComponent } from './power/super-saiyan-two/super-saiyan-two.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './power/super-saiyan/super-saiyan.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    SuperSaiyanFourComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanTwoComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
