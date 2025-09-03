
This is a mobile application that uses Ionic, typescript, css and HTML
It allows the user to enter the name of any country and view the weather, news, national anthem and flag of that country.
It uses various API's to do this




The National Anthem Button Feature.
The innovation added to this project is a National Anthem Button feature, integrated into the countries page where countries are displayed using data from the REST Countries API.
Functionality

Each country displayed on the page has a dedicated National Anthem Button.
Clicking the button triggers the playback of a video of the respective country's national anthem.
The feature utilizes the YouTube API to search for the country's name combined with "national anthem" (e.g., "France national anthem").
The first search result's URL is retrieved and played within an HTML iframe.

Security Implementation
To ensure safe embedding of the YouTube URL in the Angular application:

The URL is sanitized using Angular's DomSanitizer to bypass security restrictions, as Angular blocks potentially unsafe URLs by default.
The following code is used to mark the URL as trusted:

// Source: https://dev.to/ayyash/sanitizing-background-image-url-in-angular-5c584
// Reference: https://angular.dev/api/platform-browser/DomSanitizer
this.cleanedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.nationalAnthemSource);

This ensures the YouTube URL is safely embedded without triggering Angular's security mechanisms.
References

Ayyash (2022) 'Sanitizing background image url in Angular'. DEV Community. Available at: https://dev.to/ayyash/sanitizing-background-image-url-in-angular-5c58 (Accessed: 15 August 2025).
Angular (no date) 'DomSanitizer'. Angular Dev. Available at: https://angular.dev/api/platform-browser/DomSanitizer (Accessed: 15 August 2025).
