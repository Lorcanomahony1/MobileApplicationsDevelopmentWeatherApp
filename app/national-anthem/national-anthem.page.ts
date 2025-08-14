import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
//import { DataService} from '../services/date.service';


@Component({
  selector: 'app-national-anthem',
  templateUrl: './national-anthem.page.html',
  styleUrls: ['./national-anthem.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers: [MyDataService, MyHttpService]
})




export class NationalAnthemPage implements OnInit {
  videoId = ''; 
  ClickedCountry: any;
  apiKeyNews = "pub_537b014dc62f442c82f476617ef00bd5";
  NewsInfo: any;
  country: any;
  countryCode: any;
  nationalAnthemSource: any;
  CountryInfo: any;
  searchQuery: any;
  nationalAnthem: any;
  keyword: string = "";
  apiKey = "2ee2ed84";
  countries: any = [];
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  };


  
  constructor(private ds: MyDataService, private mhs: MyHttpService, private router: Router) {}


 


  async ngOnInit() {
    this.ClickedCountry = await this.ds.get('ClickedCountry');
    this.getNationalAnthem()
    console.log('ClickedCountry:', this.ClickedCountry);
  }






  // THIS GETS THE OUTPUT FROM THE COUNTRYCODE USED ON THE NEWS API
  async getNationalAnthem() {
    const apiKey = 'AIzaSyCkL3OeBmROtOwVfrqMFfTjAuHlXmrUTpc';
    this.ClickedCountry = await this.ds.get("ClickedCountry");
    this.country = this.ClickedCountry.name.common
    this.searchQuery = this.country + " national anthem"
    console.log("This is the search query " + this.searchQuery)
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${this.searchQuery}&key=${apiKey}`;
    console.log("This is the url" + url)
    const options: HttpOptions = { url };
    this.nationalAnthem = await this.mhs.get(options);
    this.nationalAnthemSource = await ('https://www.youtube.com/embed/' + this.nationalAnthem.items[0].id.videoId)
    console.log("This is the NationalAnthem url " + this.nationalAnthemSource);

  }

}




