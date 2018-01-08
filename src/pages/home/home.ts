import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*import { FormControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';*/


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  constructor(public nav: NavController) {
        this.nav = nav;
        this.username = window.localStorage.getItem('username');
    }

    logout() {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('password');
 
        this.nav.setRoot(LoginPage);
        this.nav.popToRoot();         
    }    
 
   /* ionViewDidLoad() {
 
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
 		      this.setFilteredItems();
        });
    }
    setFilteredItems() {
 
        this.items = this.dataService.filterItems(this.searchTerm);
 
    }*/
}