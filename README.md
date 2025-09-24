 # React Native Assessment  
 ## Overview  
 
This project implements the provided Figma design as part of the internship coding assessment.  
It demonstrates:  
- A reusable, accessible button component with an enlarged touch area.
- A modal popup containing text and an animated GIF.
- A maintainable structure following MVVM principles and clean coding practices.

# Running the project

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

Implementation Details
----------------------

### Button Component

*   Defined in ChunkyButton.tsx.
    
*   Supports configurable colors, sizes, and shadows.
    
*   Enlarged touch target via hitSlop.
    
*   Screen reader friendly with accessibilityRole and accessibilityLabel.
    

### Modal

*   Defined in PopupModal.tsx.
    
*   Triggered by the purple button.
    
*   Dismissible via backdrop tap or close button.
    
*   Contains a heading, GIF (using react-native-fast-image), and body message.
    

### Architecture

Organized under src/ for clarity and scalability:

src/

├── assets/         #Local static assets you import from code

├── types/         #Global & module declarations

├── components/      # Reusable UI (buttons, modal, text)

├── constants/       # Colors, spacing, typography

├── models/          # App + UI state definitions

├── viewmodels/     # View logic (MainViewModel)

├── services/        # Helpers (e.g. accessibility, state)

├── utils/           # Reusable utilities

└── screens/         # Main screen and styles

### Assumptions

*   Fonts are bundled locally: **Lacquer** (body text) and **Metamorphous** (heading).
    
*   react-native-fast-image is used to ensure GIF animation works reliably on both platforms.
    
*   Minimal state management (via hooks) is sufficient for this scope.
    

### Future Improvements

With more time, I would:

*   Add automated tests (unit + integration). [5-6 Hrs]
    
*   Extract design tokens into a theme system for easier theming/dark mode. [2-3 Hrs]
    
*   Add Storybook for isolated component development. [2-3 Hrs]

## Citations
- React Native documentation
- `react-native-fast-image` docs
- https://fonts.google.com/specimen/Lacquer
- https://fonts.google.com/specimen/Metamorphous
- Provided Figma design
- Generative AI (ChatGPT) was used to help draft documentation and suggest code structure/styling patterns. All code was reviewed, edited, and tested by me.
