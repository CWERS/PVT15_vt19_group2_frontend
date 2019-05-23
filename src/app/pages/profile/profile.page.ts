import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user-service/user.service';
import {YouthcenterService} from '../../services/youthcenter.service';
import {BadgeService} from '../../services/badge-service/badge.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
})
export class ProfilePage implements OnInit {

    allCentres = [];
    ourId: any;
    currentyouthcentre;
    youthCentres = [];
    private allMyBadges = [];

    constructor(private router: Router, private userservice: UserService, private youthcentreService: YouthcenterService, private badgeservice: BadgeService) {
    }

    ngOnInit() {
        console.log(this.allCentres);

        this.youthcentreService.getAllLocations();
        this.youthCentres = this.youthcentreService.allYouthCentres;
        setTimeout(() => {
            this.youthcentreService.getAllLocations();
            this.youthCentres = this.youthcentreService.allYouthCentres;
        }, 200);


        setTimeout(() => {
            this.getMyYouthCentre();

        }, 200);

        this.displayAllMyBadges();

    }

    goToSettings() {

        this.router.navigateByUrl('settings');

    }

    getMyYouthCentre() {

        this.ourId = this.youthcentreService.getTheRightId();
    }

    addYouthCentre() {
        this.userservice.addYouthCentre(this.currentyouthcentre);
    }

    displayAllMyBadges() {
        this.badgeservice.getAllMyBadges(this.userservice.currentUser.id).subscribe(data => {
            this.allMyBadges = data;
        });
    }

    doesNotHaveYouthCentre() {
        return this.userservice.currentUser.currentyouthcentre === undefined;
    }
}

