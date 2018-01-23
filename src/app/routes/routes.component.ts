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
    haku = '';

    getStops(nimi) {
        this.digitransitService.getRoutes(nimi).subscribe(response => {
            //console.log(response.data['stops']);
            return response.data['stops'];
        });
    }

    ngOnInit() {
        document.getElementById('hae').addEventListener('click', e => {
            e.preventDefault();
            this.haku = document.getElementById('haku').getAttribute('value');
            console.log(this.haku);
            console.log(this.getStops(this.pysakki));
        });

        //console.log(this.getStops());

    }




}
