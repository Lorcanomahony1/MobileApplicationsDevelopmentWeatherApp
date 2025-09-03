# Country Information Mobile Application

This is a mobile application built using **Ionic**, **TypeScript**, **CSS**, and **HTML**. It allows users to enter the name of any country and view its weather, news, national anthem, and flag. The application leverages various APIs to fetch and display this information.

## Requirements to Run the Project

- **Ionic**: Framework for building the mobile application.
- **HTML**: For structuring the application.
- **CSS**: For styling the application.
- **Angular JS**: For managing the application's frontend logic.

## Key Feature: National Anthem Button

The innovation added to this project is a **national anthem button** on the countries page, where countries are displayed using the **RestCountries API**. Each country has a dedicated national anthem button. When clicked, it plays a video of the country's national anthem.

### How It Works
- The application uses the **YouTube API** to search for the country's name combined with "national anthem."
- The URL of the first search result is retrieved and played in an HTML iframe.
- To ensure the URL is safely embedded, the following Angular code is used to bypass Angular's security limitations, marking the URL as trusted:

```typescript
// Source: https://dev.to/ayyash/sanitizing-background-image-url-in-angular-5c584
// https://angular.dev/api/platform-browser/DomSanitizer
this.cleanedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.nationalAnthemSource);
```

This code ensures that Angular does not block the URL for security reasons, as external URLs could potentially be unsafe.

### Screenshot
![National Anthem Feature](https://github.com/user-attachments/assets/939bf0e2-d6ca-48f8-845a-8aac3eefbc34)

## References

- Ayyash (2022) 'Sanitizing background image url in Angular'. *DEV Community*. Available at: [https://dev.to/ayyash/sanitizing-background-image-url-in-angular-5c584](https://dev.to/ayyash/sanitizing-background-image-url-in-angular-5c584) (Accessed: 15 August 2025).
- Angular (n.d.) 'DomSanitizer'. *Angular Dev*. Available at: [https://angular.dev/api/platform-browser/DomSanitizer](https://angular.dev/api/platform-browser/DomSanitizer) (Accessed: 15 August 2025).
