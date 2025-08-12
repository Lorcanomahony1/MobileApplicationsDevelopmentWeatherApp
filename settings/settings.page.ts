import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonCheckbox } from '@ionic/angular/standalone';

import {
  IonList
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent,IonList, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCheckbox]
})


export class SettingsPage implements OnInit {


  Metric: boolean = false;
  Standard: boolean = false;
  Imperial: boolean = false;


  constructor() { }



  ngOnInit() {
    this.Checkbox();
  }

    Checkbox() {
      console.log('Checkbox method called');
    }

}
