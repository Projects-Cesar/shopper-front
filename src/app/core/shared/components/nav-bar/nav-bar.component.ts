import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() icon = 'bi bi-arrow-return-left';
  @Input() nameSection = '';
  @Input() nameRuta = '';
  @Input() color = 'bg-warning';

  constructor(
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
  }

}
