import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { IonList, IonItem } from '@ionic/angular/standalone';





@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    RouterModule,
    CommonModule,
  ],
  providers: [MyDataService, MyHttpService]
})
export class NewsPage implements OnInit, OnDestroy {

  ClickedCountry: any;
  apiKeyNews = "pub_537b014dc62f442c82f476617ef00bd5";
  NewsInfo: any;
  country: any;
  countryCode: any;
  CountryInfo: any;
  keyword: string = "";
  apiKey = "2ee2ed84";
  countries: any = [];
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  };

 

  constructor(private ds: MyDataService, private mhs: MyHttpService, private router: Router) {}


  
 
  async ngOnInit() {
    this.ClickedCountry = await this.ds.get('ClickedCountry');
    console.log('ClickedCountry:', this.ClickedCountry);
    this.getCountryCode();
    this.getNews();
  }

  ngOnDestroy() {
    this.countryCode = null;
  }





 

  /* TASKS 
  1. GET THE KW 
  2. CALL THE RESTCOUNTRIES API AND GET CCA2 CODE = NOT WORKING
  3. CALL THE NEWSDATA API CODE WITH THE CCA2 CODE
  */


  // THIS GETS THE COUNTRY CODE FROM THE COUNTRY API
  async getCountryCode() {
    this.ClickedCountry = await this.ds.get("ClickedCountry");
    this.countryCode = this.ClickedCountry.cca2
    console.log("This is the getCountryCode output" + this.countryCode)
    return this.countryCode;
  }

  //THIS GETS THE KW(KEYWORD) THAT WAS TYPED IN THE SEARCHBOX IN THE HOME PAGE
  //THEN IT ADDS THAT KEYWORD TO THE END OF THE API URL
  //THEN IT USES GET TO GET THE DATA FROM THE API
  //THEN IT SETS THE COUNTRYINFO VARIABLE TO THE DATA FROM THE API
  //THEN IT SHOWS THE COUNTRY INFO JSON OBJECT IN THE CONSOLE
  //TLDR: THIS GETS THE KEYWORD TYPED IN THE SEARCHBAR AND CALLS API WITH IT
  // THIS GETS THE OUTPUT FROM THE COUNTRYCODE USED ON THE NEWS API
  async getNews() {
    let countryCode = await this.getCountryCode(); 
    const url = `https://newsdata.io/api/1/news?apikey=${this.apiKeyNews}&country=${countryCode}&language=en`;
    console.log("This is the url" + url)
    const options: HttpOptions = { url };
    let NewsResult = await this.mhs.get(options);
    console.log("This is the NewsResult" + NewsResult);
    this.NewsInfo = NewsResult;
    console.log(JSON.stringify(this.NewsInfo));
  }




}