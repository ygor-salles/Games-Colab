//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

//Componentes Criados
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { GamesCrudComponent } from './views/games-crud/games-crud.component';
import { GameCreateComponent } from './components/game/game-create/game-create.component';
import { LOCALE_ID } from '@angular/core';
import { GameReadComponent } from './components/game/game-read/game-read.component';
import { GameDeleteComponent } from './components/game/game-delete/game-delete.component';
import { DialogComponent } from './services/dialog/dialog.component';
import { GameUpdateComponent } from './components/game/game-update/game-update.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { LoginComponent } from './login/login/login.component';



registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    GamesCrudComponent,
    GameCreateComponent,
    GameReadComponent,
    GameDeleteComponent,
    DialogComponent,
    GameUpdateComponent,
    UsersCrudComponent,
    UserCreateComponent,
    UserReadComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
