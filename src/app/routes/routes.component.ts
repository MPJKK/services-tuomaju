import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {


    constructor(public digitransitService: DigitransitService) {
    }

    pysakki = 'Gransinmäki';
    haku: any;


    ngOnInit() {
        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {
            this.haku = response.data['stops'];
            console.log(this.haku);
        });

        let url_string = window.location.href;

    }


}
