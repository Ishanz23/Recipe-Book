import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../shared/material.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { UserAuthService } from '../auth/user-auth.service';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        DropdownDirective
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        AngularFirestoreModule,
        RecipeService,
        ShoppingListService,
        UserAuthService
    ]
})
export class CoreModule { }
