# Job Explorer
View the app, live at: https://gentle-shore-13644.herokuapp.com/

### Running Locally
First, git clone and install node modules by running
```
npm install
```
Once `node_modules` are installed. You can run locally by running
```
npm run start
```

### Frameworks used
The project is built with `react` and `redux`. We are also following the `ducks` methodology for building our redux infrastructure, find out more [here]("https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be")

Other notable libraries are:
- `redux-persist` --> For persisting and rehydrating our store to pick up where users have left off.
- `react-router-dom` --> For routing
- `axios` --> To perform API calls to the github jobs endpoint to retrieve jobs

### Development
Future development of the project should follow strict folder structures so as to maintain readability and consistency.

```
/api  // Stores API 
/ducks // Redux store, Actions, Action creators, 
/pages // Main components which corresponds to routes. e.g LoginPage presents /login
/shared // Common components, routes, and layouts
/utils // Helper functions
```


### Future 
- Create useful statistics at dashboard page with [Victory Charts](https://formidable.com/open-source/victory/docs/victory-chart/)
- Refactor `DashboardView.js` to use smaller, pure components




