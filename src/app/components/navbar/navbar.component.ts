import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, NgOptimizedImage],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    constructor(private router: Router, private route: ActivatedRoute) {}

    get routerLinkActive() {
        return this.router.url.includes('/sing-up');
    }
}
