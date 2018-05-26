import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  selector: 'page-exp',
  templateUrl: 'exp.html',
  animations :[
    trigger('popOverState', [
      state('show', style({
        'max-height' : '5000px'
      })),
      state('hide',   style({
        'max-height' : '0px'
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class ExpPage {


  a='hide';
  b='hide';

  constructor(public navCtrl: NavController, public navParams: NavParams,private splash : SplashScreen) {
    
  }

  ionViewDidLoad() {
  
    this.splash.show();
    //this.splash.hide();
  }

}
