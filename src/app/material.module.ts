import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [ MatButtonModule, MatInputModule, MatIconModule ],
    exports: [ MatButtonModule, MatInputModule, MatIconModule ]
})

export class MaterialModule  { }
