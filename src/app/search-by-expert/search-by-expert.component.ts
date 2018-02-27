import { Component, OnInit } from '@angular/core';
import { EXPERTS } from '../mock-experts';
import { Expert } from '../expert';

@Component({
  selector: 'app-search-by-expert',
  templateUrl: './search-by-expert.component.html',
  styleUrls: ['./search-by-expert.component.css']
})
export class SearchByExpertComponent implements OnInit {
  experts = EXPERTS;
  searchExpert = '';
  showModal = false;
  showAfterSearching = false;
  findedExperts: Expert;
  searchDelayTimer = null;


  constructor() { }

  ngOnInit() {
  }

  toogleModal () {
    this.showModal = !this.showModal;
  }


  showSearcingDelay(event) {
    const searchInput = (<HTMLInputElement>event.target).value;

    if (searchInput) {
      this.showAfterSearching = true;
      clearTimeout(this.searchDelayTimer);
      this.searchDelayTimer = setTimeout(() => {
        this.showAfterSearching = false;
        this.searchExpert = searchInput;
      }, 500);
    } else {
      clearTimeout(this.searchDelayTimer);
      this.showAfterSearching = false;
      this.searchExpert = '';
    }


  }

  modal (expert) {
    this.findedExperts = expert;
    this.toogleModal ();
    this.searchExpert = '';
  }

}
