
import { environment } from './../environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore'




import { AppComponent } from './app.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';

const firebaseConfig = {
  apiKey: "AIzaSyC0j8sTQ1pj59AFFMRz2Zd1Q269wZCmYKg",
  authDomain: "hillogy-star-wars-5f412.firebaseapp.com",
  projectId: "hillogy-star-wars-5f412",
  storageBucket: "hillogy-star-wars-5f412.appspot.com",
  messagingSenderId: "76656054024",
  appId: "1:76656054024:web:bd4b04eb71ece2665aa6bd"
};

@NgModule({
  declarations: [
    AppComponent,
    StarshipsListComponent,
    StarshipDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
