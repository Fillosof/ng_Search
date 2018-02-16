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
  findedExperts: Expert;

  constructor() { }

  ngOnInit() {
  }

  toogleModal () {
    this.showModal = !this.showModal;
  }

  modal (expert) {
    this.findedExperts = expert;
    this.toogleModal ();
    this.searchExpert = '';
  }

}
