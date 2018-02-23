import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShopModule } from './shopping-list/shop.module';

import { MaterialModule } from './shared/material.module';

import { environment } from '../environments/environment';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { UserAuthService } from './auth/user-auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'recipe-book'),
    AngularFirestoreModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    RecipesModule,
    ShopModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
