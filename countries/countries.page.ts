

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../app/services/my-data.service';
import { MyHttpService } from '../app/services/my-http.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    RouterModule,
    CommonModule,
    FormsModule
  ],
  providers: [MyDataService, MyHttpService]
})
export class CountriesPage implements OnInit {


  keyword: string = "";
  apiKey = "2ee2ed84";
  CountryInfo: any;
  countries: any = [];
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  };

  constructor(private ds: MyDataService, private mhs: MyHttpService, private router: Router) {}

  ngOnInit() {
    this.getKW();
  }

  //THIS GETS THE KW(KEYWORD) THAT WAS TYPED IN THE SEARCHBOX IN THE HOME PAGE
  //THEN IT ADDS THAT KEYWORD TO THE END OF THE API URL
  //THEN IT USES GET TO GET THE DATA FROM THE API
  //THEN IT SETS THE COUNTRYINFO VARIABLE TO THE DATA FROM THE API
  //THEN IT SHOWS THE COUNTRY INFO JSON OBJECT IN THE CONSOLE
  //TLDR: THIS GETS THE KEYWORD TYPED IN THE SEARCHBAR AND CALLS API WITH IT
  async getKW() {
    this.keyword = await this.ds.get("kw");
    this.options.url = this.options.url.concat(this.keyword);
    let result = await this.mhs.get(this.options);
    console.log(result);
    this.CountryInfo = result;
    console.log(JSON.stringify(this.CountryInfo));
    return this.CountryInfo; 
  }


  //THIS FIND OUT WHAT COUNTRY YOU CLICKED ON AND 
  async getCountry(country: any) {
    let ClickedCountry = await country

    this.ds.set('ClickedCountry', country);
    console.log("This is the country that you clicked the button on" + ClickedCountry );
    console.log("This is the name of the country you clicked " + ClickedCountry.name.common);
    return ClickedCountry;
  }

}