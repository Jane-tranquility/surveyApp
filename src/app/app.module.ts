import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatasetService } from './dataset.service';
import { AppComponent } from './app.component';
import { RegistrationService } from './registration.service';
import { RouterModule }   from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TwoButtonComponent } from './two-button/two-button.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SummaryComponent } from './summary/summary.component';
import { RegisterComponent } from './register/register.component';
import {EmailService} from './email.service';
import {StopWordsService} from './stop-words.service';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import {SummaryService} from './summary.service';

const routes=[{path:'Login Page',component: LoginComponent},
              {path:'Home Page', component: HomeComponent},
              {path:'User Profile Page', component: ProfileComponent},
              {path:'Survey Summary', component:SummaryComponent},
              {path:'Register', component:RegisterComponent},
              {path:'**',component:LoginComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    TwoButtonComponent,
    NavigationBarComponent,
    SummaryComponent,
    RegisterComponent,
    ChatBotComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DatasetService,RegistrationService,EmailService,StopWordsService,SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
