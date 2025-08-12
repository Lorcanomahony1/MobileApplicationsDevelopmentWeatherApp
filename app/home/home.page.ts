
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    FormsModule,
    RouterModule,
    IonIcon,
    IonButtons
  ],
  providers: [MyDataService]
})

export class HomePage implements OnInit {
  searchText = '';
  Keyword: string = '';
  link: any;

  constructor(private router: Router, private ds: MyDataService) {}

  ngOnInit() {
    this.link = '/settings';
  }

  async openCountries() {
    await this.ds.set("kw", this.Keyword);
    this.router.navigate(['/countries']);
  }

  async openSettings() {
    console.log("theOpensettings function was called")
    this.router.navigate(['/settings']);
  }

}