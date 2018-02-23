import { Component } from '@angular/core';
import { UserAuthService } from '../../auth/user-auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private userAuthService: UserAuthService) { }

    onLogout() {
        this.userAuthService.logout();
    }

    isAuthenticated() {
        return this.userAuthService.isAuthenticated();
    }
}
