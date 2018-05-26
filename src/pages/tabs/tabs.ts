import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { ExpPage } from '../exp/exp';
import { EducationPage } from '../education/education';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExpPage
  tab3Root = EducationPage;

  constructor() {

  }
}