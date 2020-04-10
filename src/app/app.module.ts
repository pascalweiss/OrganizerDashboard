import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatCheckboxModule, MatGridListModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './routing/routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NotecardComponent } from './cards/notecard/notecard.component';
import { CardComponent } from './cards/card/card.component';
import { ChecklistcardComponent } from './cards/checklistcard/checklistcard.component';
import { CardContainer } from './container/cardcontainer/card.container.component';
import { NewCardContainer } from './container/newcardcontainer/newcard.container.component';
import { Globals } from './shared/globals';
import { HammerModule} from '@angular/platform-browser';
import { AddCardComponent } from './add-card/add-card.component';
import { PreviewContainerComponent } from './container/previewcontainer/preview.container.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    NotecardComponent,
    CardComponent,
    ChecklistcardComponent,
    CardContainer,
    NewCardContainer,
    AddCardComponent,
    PreviewContainerComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule, 
    FontAwesomeModule,
    FormsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatCheckboxModule,
    MatInputModule, 
    AppRoutingModule,
    DragDropModule,
    HammerModule,
    MatGridListModule,
    MatSidenavModule, 
    MatIconModule
  ],
  entryComponents: [SignInComponent, SignUpComponent],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
