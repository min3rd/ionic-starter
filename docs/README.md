# Ionic Starter Project

Welcome to the Ionic Starter Project! This project is built using the latest Ionic Framework (8+) and integrates Tailwind CSS with the DaisyUI plugin for a seamless and modern UI experience. Additionally, it includes custom Highcharts for advanced data visualization.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Customization](#customization)
  - [Tailwind CSS and DaisyUI](#tailwind-css-and-daisyui)
  - [Highcharts](#highcharts)
- [Contributing](#contributing)
- [License](#license)
- [Development Environment](#development-environment)
  - [Recommended VSCode Extensions](#recommended-vscode-extensions)
  - [Mindset for Multiplatform Development](#mindset-for-multiplatform-development)
- [Creating New Components or Views](#creating-new-components-or-views)
- [Creating New Modules](#creating-new-modules)
- [Using RxJS for Data Control](#using-rxjs-for-data-control)

## Features

- **Ionic Framework 8+**: Leverage the powerful and flexible Ionic framework for building cross-platform mobile applications.
- **Angular 18+**: Utilize the robust Angular framework for building dynamic and responsive web applications.
- **Tailwind CSS**: Utilize the utility-first CSS framework for rapid UI development.
- **DaisyUI Plugin**: Enhance your Tailwind CSS with DaisyUI components for a beautiful and consistent design.
- **Custom Highcharts**: Implement advanced and customizable charts for data visualization.

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/min3rd/ionic-starter.git
   cd ionic-starter
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Project

1. Start the development server:

   ```sh
   ionic serve
   ```

2. Open your browser and navigate to `http://localhost:4200`.

## Customization

### Tailwind CSS and DaisyUI

Tailwind CSS and DaisyUI are pre-configured in the project. You can customize the styles in the `tailwind.config.js` and `daisyui.config.js` files.

### Highcharts

Custom Highcharts configurations can be found in the `src/highcharts` directory. Modify these files to suit your data visualization needs.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Development Environment

### Recommended VSCode Extensions

To enhance your development experience, consider installing the following Visual Studio Code extensions:

- **Ionic**: Provides Ionic snippets and commands.
- **Angular Language Service**: Offers rich editing and navigation capabilities for Angular templates.
- **Tailwind CSS IntelliSense**: Provides autocomplete, syntax highlighting, and linting for Tailwind CSS.
- **ESLint**: Integrates ESLint into VSCode for identifying and fixing linting issues.
- **Prettier**: An opinionated code formatter to ensure consistent code style.

### Mindset for Multiplatform Development

When developing with Ionic and Angular, it's essential to adopt a mindset that embraces the nuances of building applications for multiple platforms. Here are some key points to consider:

- **Responsive Design**: Ensure your UI adapts seamlessly to different screen sizes and orientations. Utilize CSS media queries and responsive design principles.
- **Platform-Specific Features**: Leverage Ionic's platform-specific utilities to tailor the user experience for iOS, Android, and web.
- **Performance Optimization**: Optimize your application for performance by lazy loading modules, minimizing bundle sizes, and using efficient data handling techniques.
- **Testing Across Devices**: Regularly test your application on various devices and emulators to identify and address platform-specific issues.
- **Consistent User Experience**: Strive to provide a consistent user experience across platforms while respecting the design guidelines and conventions of each platform.

By following these guidelines and utilizing the recommended tools, you can create robust and performant cross-platform applications with Ionic and Angular.

## Creating New Components or Views

In Angular, you can create new components or views using either the Angular CLI or the Ionic extension for Visual Studio Code. Below are the steps for both methods:

### Using Angular CLI

1. Open your terminal and navigate to your project directory.
2. Run the following command to generate a new component:

   ```sh
   ng generate component component-name
   ```

   Replace `component-name` with the desired name of your component.

3. The CLI will create a new folder with the component files in the specified directory.

### Using Angular Schematics Extensions in VSCode

1. Open your project in Visual Studio Code.
2. Open the Command Palette (`Ctrl+Shift+P`) and type `Angular Schematics: generate a file`.

   ![Angular Schematics Extension: angular-schematics-generate-a-file.png](/docs/images/angular-schematics-generate-a-file.png)

3. Follow the prompts to specify the name and path for your new component.

   ![Angular Schematics Extension: angular-schematics-generate-a-file-component.png](/docs/images/angular-schematics-generate-a-file-component.png)

By using these methods, you can quickly scaffold new components or views in your Angular project, streamlining your development process.

## Creating New Modules

When creating a new module in this project, follow these guidelines to ensure consistency and maintainability. All modules should be placed in the `src/app/modules` folder and must include specific files and components.

### Module Structure

Each module should have the following structure:

- `*.routes.ts`: Declare the module routing.
- `*.service.ts`: Declare services and data used in the module.
- `parent-component`: The main component of the module.
- `list-component`: A component to display a list of items.
- `detail-component`: A component to display details of a single item.

### Steps to Create a New Module

1.  **Create the Module Folder**:
    Navigate to `src/app/modules` and create a new folder for your module.

2.  **Generate Module Files**:
    Use the Angular CLI to generate the necessary files. Replace `module-name` with your module's name.

        ```sh
        ng generate module modules/module-name
        ng generate component modules/module-name/parent-component
        ng generate component modules/module-name/list-component
        ng generate component modules/module-name/detail-component
        ng generate service modules/module-name/module-name
        ```

3.  **Extend BaseComponent**:
    Ensure that all components extend from `BaseComponent`. Modify the component classes as follows:

        ```typescript
        import { BaseComponent } from 'src/app/base/base.component';

        export class ParentComponent extends BaseComponent { ... }
        export class ListComponent extends BaseComponent { ... }
        export class DetailComponent extends BaseComponent { ... }
        ```

4.  **Declare Module Routing**:
    In `module-name.routes.ts`, declare the routes for the module:

        ```typescript
        import { Routes } from '@angular/router';
        import { ParentComponent } from './parent-component/parent-component.component';
        import { ListComponent } from './list-component/list-component.component';
        import { DetailComponent } from './detail-component/detail-component.component';

        export const ModuleNameRoutes: Routes = [
            { path: '', component: ParentComponent },
            { path: 'list', component: ListComponent },
            { path: 'detail/:id', component: DetailComponent }
        ];
        ```

5.  **Declare Services**:
    In `module-name.service.ts`, declare the services and data used in the module:

        ```typescript
        import { Injectable } from '@angular/core';

        @Injectable({
            providedIn: 'root'
        })
        export class ModuleNameService {
            // Service logic here
        }
        ```

By following these steps, you can create well-structured and maintainable modules in your Ionic and Angular project.

## Using RxJS for Data Control

This section demonstrates the use of RxJS to control data flow and manage state within an application.

RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

### Key Concepts

- **Observable**: Represents a stream of data that can be observed.
- **Observer**: Consumes the data emitted by an Observable.
- **Subscription**: Represents the execution of an Observable, allowing you to cancel it.
- **Operators**: Functions that enable complex asynchronous code by composing Observables.

### Usage

1. Create an Observable to emit data.
2. Use operators to transform, filter, or combine data streams.
3. Subscribe to the Observable to start receiving data.
4. Manage subscriptions to control the lifecycle of data streams.

### Example

```javascript
import { of } from "rxjs";
import { map, filter } from "rxjs/operators";

// Create an Observable that emits a sequence of numbers
const numbers$ = of(1, 2, 3, 4, 5);

// Use operators to transform the data
const squaredEvenNumbers$ = numbers$.pipe(
  filter((n) => n % 2 === 0),
  map((n) => n * n)
);

// Subscribe to the Observable to receive the transformed data
squaredEvenNumbers$.subscribe(console.log); // Output: 4, 16
```

This module is useful for managing complex data flows in a reactive manner, making it easier to handle asynchronous operations and state management in a clean and declarative way.

## Using Resolve to Get and Control Data Before User Reaches the View

In Angular, a `Resolve` guard is used to pre-fetch data before navigating to a route. This ensures that the necessary data is available when the component is initialized, providing a smoother user experience.

### Creating a Resolve Guard

1. **Generate the Resolve Guard**:
   Use the Angular CLI to generate a new resolve guard. Replace `data-resolver` with your desired guard name.

   ```sh
   ng generate guard data-resolver --implements=Resolve
   ```

2. **Implement the Resolve Interface**:
   Modify the generated guard to implement the `Resolve` interface and fetch the required data.

   ```typescript
   import { Injectable } from "@angular/core";
   import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
   import { Observable } from "rxjs";
   import { DataService } from "./data.service";

   @Injectable({
     providedIn: "root",
   })
   export class DataResolver implements Resolve<any> {
     constructor(private dataService: DataService) {}

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
       return this.dataService.getData();
     }
   }
   ```

3. **Configure the Route**:
   Add the resolve guard to the route configuration to ensure data is fetched before the component is activated.

   ```typescript
   import { Routes } from "@angular/router";
   import { MyComponent } from "./my-component/my-component.component";
   import { DataResolver } from "./data-resolver.guard";

   const routes: Routes = [
     {
       path: "my-route",
       component: MyComponent,
       resolve: {
         data: DataResolver,
       },
     },
   ];
   ```

4. **Access Resolved Data in the Component**:
   In the component, access the resolved data using the `ActivatedRoute` service.

   ```typescript
   import { Component, OnInit } from "@angular/core";
   import { ActivatedRoute } from "@angular/router";

   @Component({
     selector: "app-my-component",
     templateUrl: "./my-component.component.html",
     styleUrls: ["./my-component.component.css"],
   })
   export class MyComponent implements OnInit {
     data: any;

     constructor(private route: ActivatedRoute) {}

     ngOnInit(): void {
       this.route.data.subscribe((data) => {
         this.data = data["data"];
       });
     }
   }
   ```

By using a resolve guard, you can ensure that your components have the necessary data before they are rendered, improving the overall user experience and reducing the need for loading indicators within the component.

## Building APK from Ionic Framework

To build an APK (Android Package) from your Ionic project, follow these steps:

### Prerequisites

- Ensure you have the latest version of Ionic CLI installed.
- Install Android Studio and set up the Android SDK.
- Ensure you have Java Development Kit (JDK) installed.

### Steps to Build APK

1. **Add Android Platform**:
   Navigate to your project directory and add the Android platform.

   ```sh
   ionic cordova platform add android
   ```

2. **Build the Project**:
   Build the project for production. This will generate the necessary files for the Android platform.

   ```sh
   ionic cordova build android --prod --release
   ```

3. **Sign the APK**:
   To distribute your APK, you need to sign it. First, generate a keystore file if you don't have one:

   ```sh
   keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
   ```

   Then, sign the APK using the generated keystore:

   ```sh
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name
   ```

4. **Optimize the APK**:
   Use the `zipalign` tool to optimize the APK:

   ```sh
   zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk MyApp.apk
   ```

5. **Verify the APK**:
   Finally, verify the APK to ensure it is signed correctly:

   ```sh
   apksigner verify MyApp.apk
   ```

Your APK is now ready for distribution. You can find it in the specified output directory.

By following these steps, you can build and prepare your Ionic application for distribution on Android devices.

## Building APK from Android Studio

To build an APK (Android Package) from your Ionic project using Android Studio, follow these steps:

### Prerequisites

- Ensure you have the latest version of Ionic CLI installed.
- Install Android Studio and set up the Android SDK.
- Ensure you have Java Development Kit (JDK) installed.

### Steps to Build APK

1. **Open the Project in Android Studio**:
   Navigate to your project directory and open the `platforms/android` folder in Android Studio.

2. **Sync Project with Gradle Files**:
   Once the project is loaded, click on `File` > `Sync Project with Gradle Files` to ensure all dependencies are correctly set up.

3. **Build the APK**:
   Click on `Build` > `Build Bundle(s) / APK(s)` > `Build APK(s)`. This will start the build process and generate the APK file.

4. **Locate the APK**:
   After the build is complete, a notification will appear with a link to locate the generated APK file. Click on `locate` to open the folder containing the APK.

By following these steps, you can build and prepare your Ionic application for distribution on Android devices using Android Studio.

## Building iOS App from Ionic Framework

To build an iOS app from your Ionic project, follow these steps:

### Prerequisites

- Ensure you have the latest version of Ionic CLI installed.
- Install Xcode from the Mac App Store.
- Ensure you have a valid Apple Developer account.

### Steps to Build iOS App

1. **Add iOS Platform**:
   Navigate to your project directory and add the iOS platform.

   ```sh
   ionic cordova platform add ios
   ```

2. **Build the Project**:
   Build the project for production. This will generate the necessary files for the iOS platform.

   ```sh
   ionic cordova build ios --prod --release
   ```

3. **Open the Project in Xcode**:
   Open the generated Xcode project by navigating to the `platforms/ios` directory and opening the `.xcworkspace` file.

   ```sh
   open platforms/ios/YourApp.xcworkspace
   ```

4. **Configure Signing and Capabilities**:
   In Xcode, select your project in the Project Navigator. Go to the "Signing & Capabilities" tab and ensure that your Apple Developer account is selected for signing.

5. **Build and Run the App**:
   Select your target device or simulator from the top device menu and click the "Run" button (or press `Cmd+R`) to build and run the app on your selected device.

6. **Archive the App for Distribution**:
   To distribute your app, create an archive by selecting `Product` > `Archive` from the menu. Once the archive is created, you can distribute it through the App Store or other distribution methods.

By following these steps, you can build and prepare your Ionic application for distribution on iOS devices using Xcode.

## Acknowledgements

We would like to extend our gratitude to the following technologies and their communities for making this project possible:

- **Ionic Framework**: For providing a powerful platform to build cross-platform mobile applications.
- **Angular**: For offering a robust framework to develop dynamic and responsive web applications.
- **Tailwind CSS**: For enabling rapid UI development with its utility-first CSS framework.
- **DaisyUI**: For enhancing Tailwind CSS with beautiful and consistent UI components.
- **Highcharts**: For delivering advanced and customizable data visualization solutions.

Thank you to all the contributors and maintainers of these projects for their hard work and dedication. Your efforts have significantly contributed to the success of this project.

## Author

This project is maintained by Minh Nguyen. If you have any questions or feedback, feel free to reach out:

- GitHub: [min3rd](https://github.com/min3rd)
- Email: [min6th@gmail.com](mailto:min6th@gmail.com)

Contributions, suggestions, and feedback are always welcome!
