
This is a mobile application that uses Ionic, typescript, css and HTML
It allows the user to enter the name of any country and view the weather, news, national anthem and flag of that country.

It uses various API's to do this

Requirements to run this project
* Ionic
* HTML
* CSS
* Angular JS
  




 The innovation I added to this project was a national anthem button
 The national anthem buttons are on the countries page where the countries are 
displayed from the restcountries api
 each country has a national anthem button
 When the national anthem button is clicked it plays a video of the national anthem 
for that country

<img width="705" height="530" alt="iono" src="https://github.com/user-attachments/assets/939bf0e2-d6ca-48f8-845a-8aac3eefbc34" />

It does this by using the youtube API to search youtube for the name of the 
country clicked + “national anthemˮ
 then it takes the url of the first result and plays it in a html iframe 
But before it is played, the url has to transformed using this code,
 this line of code tells angular that the url is safe and can bypass the security 
limitations of angular
 if this is not done, then the url will be blocked by angular for security reasons 
because the url could be unsafe
 This code tells angular that the url can bypass the security limitations because it is 
trusted
 // source = https://dev.to/ayyash/sanitizing-background-image-url-in-angul
 ar-5c584
 // https://angular.dev/api/platform-browser/DomSanitizer
 this.cleanedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.nation
 alAnthemSource);
 REFERENCES
 Ayyash 2022 'Sanitizing background image url in Angular'. DEV Community. 
Available at: 
https://dev.to/ayyash/sanitizing-background-image-url-in-angular
5c58 Accessed: 15 August 2025.
 "Angular" (no date) 'DomSanitizer'. Angular Dev. Available at: 
https://angular.dev/api/platform-browser/DomSanitizer Accessed: 15 August 
2025
