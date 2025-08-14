import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MyDataService } from '../app/services/my-data.service';
import { MyHttpService } from '../app/services/my-http.service';
import { HttpOptions } from '@capacitor/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers: [MyDataService, MyHttpService]
})
export class WeatherPage implements OnInit {
  weather: any = null;
  ClickedCountry: any;
  capitalCity: any;
  latitude: any;
  longitude: any;


  constructor(private ds: MyDataService, private mhs: MyHttpService, private router: Router) {}



  async ngOnInit() {
    this.ClickedCountry = await this.ds.get('ClickedCountry');
    await this.getWeatherInfo();
  }

//THIS GETS THE COUNTRY INFO SO I CAN USE IT ON THE WEATHER API
  async getWeatherInfo() {
    this.ClickedCountry = await this.ds.get("ClickedCountry");
    this.capitalCity = this.ClickedCountry.capital;
    this.latitude = this.ClickedCountry.latlng[0];
    this.longitude = this.ClickedCountry.latlng[1];
    console.log("This is the getCountryCode capitalCity", this.capitalCity);
    console.log("This is the getCountryCode latitude", this.latitude);
    console.log("This is the getCountryCode longitude", this.longitude);
    await this.getWeather(); 
  }


  async getWeather() {
    const apiKey = 'cdc41e58fab84fee0cc272cb01fa3188';
    const units = 'metric'; 
    console.log(this.latitude)
    console.log(this.longitude)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=${units}&appid=${apiKey}`;
    console.log(url);
    const options: HttpOptions = { url };
    this.weather = await this.mhs.get(options);
    console.log(this.weather)
}

}

