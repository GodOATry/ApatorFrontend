# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Apator
Recruitment project: Spring application for demonstration and evaluation purposes.

Instrukcja obsługi

System kolejkowy

Uruchomienie

  •	Backend (Spring)
    o	Pobierz projekt z GitHuba: https://github.com/GodOATry/ApatorBackend.git 
    o	Upewnij się, że masz zainstalowaną Java 17.
    o	Otwórz projekt w IDE (np. IntelliJ IDEA).
    o	IDE powinno automatycznie pobrać wszystkie zależności projektu.
    o	Uruchom projekt.
  •	Frontend (React)
    o	Pobierz projekt z GitHuba: https://github.com/GodOATry/ApatorFrontend.git 
    o	Upewnij się, że masz zainstalowany Node.js: https://nodejs.org/en  
    o	Otwórz projekt w IDE (np. Visual Studio Code).
    o	W terminalu uruchom komendę: „npm install”
    o	W terminalu uruchom komendę: „npm start”
    o	Aplikacja frontendowa powinna zostać uruchomiona.

Obsługa
Backend
  •	Endpoint clients
    o	Pobiera aktualną kolejkę.
    o	Parametry: brak.
    o	Wynik: JSON z listą klientów w kolejce.
  •	Endpoint clientToMonitor
    o	Pobiera informacje o kliencie na podstawie przekazanego imienia lub identyfikatora.
    o	Parametry:
      	name - imię klienta.
      lub
      	clientNumber - identyfikator klienta.
    o	Wynik: JSON z informacjami o kliencie.
•	Endpoint placeOrder
  o	Dodaje klienta do systemu na podstawie przekazanych informacji.
  o	Parametry:
    	name - imię klienta.
    	isVip - rodzaj klienta.
    	isUrgent - rodzaj klienta.
    	Pin – pin przekazany przez klienta.
    	Wynik: JSON z informacjami o dodanym kliencie.

Frontend
  •	Strona internetowa
    o	Dostępna pod adresem http://localhost:3000/ 
    o	AppBar
      	Client List - kliknięcie na ten przycisk przenosi użytkownika do listy klientów w kolejce.
      	Add Client - kliknięcie na ten przycisk przenosi użytkownika do formularza dodawania klienta.
      	Monitoring - kliknięcie na ten przycisk przenosi użytkownika do strony monitorowania kolejki.
    •	Lista klientów w kolejce
      o	Wyświetla aktualną kolejkę klientów.
      o	Kolejka jest automatycznie odświeżana.
    •	Formularz dodawania klienta
      o	Umożliwia dodanie nowego klienta do systemu.
      o	Wymaga podania imienia i rodzaju klienta.
    •	Strona monitorowania kolejki
      o	Wyświetla informacje o kolejce.
      o	W tym informacje o:
        	liczbie osób przed nami w kolejce,
        	czasie oczekiwania na obsługę.
Uwagi
  Szczegółowe informacje o API systemu znajdują się w Swaggerze.
  Aby skorzystać z Swaggera, uruchom serwer backendowy i przejdź do adresu:
  http://localhost:8080/swagger-ui/index.html 

