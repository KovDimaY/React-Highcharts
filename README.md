# React-Highcharts

This project was created to practice my knowledge of React.js and to integrate highcharts as react components in application with Express.js back-end. Also I tried to collect all my knowledge about Highcharts and how to work with them in one place, where it will be not only useful but also interesting to see results.

You can try it here: https://react-highcharts-practice.herokuapp.com/

### Content

There are several Highcharts converted from pure Javascript to React.js components (development is still in progress):

1. Line Chart
2. Bar Chart
3. Pie Chart

Each chart has a page where the user can try different modes to play with representation. The modes have 3 global sections united by common behavior:

**First** is about random, where the data is generated using random numbers. The idea is to try different configurations of the chart itself and to see how different data looks like when represented by the current type of chart.

**Second** is about analysis, where the data is provided by the user and the chart is used to represent some results of the analysis to the user. The idea is to make chart useful or interesting.

**Third** is about interesting information, where the data is taken from different sources on the internet. The idea is to show some interesting facts using a type of chart that makes this data the most understandable and representable.

### Screenshots

1. Main Page Layout
   ![image](https://user-images.githubusercontent.com/26466644/31556335-e6b3d980-b044-11e7-8707-249399c11a3d.png)
   ![screenshot 2](https://cloud.githubusercontent.com/assets/26466644/25593093/88d33a50-2ebb-11e7-8695-976ef01c6bc2.png)
   ![screenshot 3](https://cloud.githubusercontent.com/assets/26466644/25593096/8b2b9fe0-2ebb-11e7-9ced-760bc0fa1f5e.png)

2. Line Chart (Pure Random Mode)
   ![image](https://user-images.githubusercontent.com/26466644/31556398-2945c1be-b045-11e7-8077-329a5a3b281c.png)

3. Bar chart (Symbols Analysis Mode)
   ![image](https://user-images.githubusercontent.com/26466644/31556451-662a901e-b045-11e7-812d-57294691c4b9.png)

4. Pie Chart (Interesting Facts Mode)
   ![image](https://user-images.githubusercontent.com/26466644/31556497-9e2006d4-b045-11e7-8266-3c85ae35713f.png)

### Setup the project

##### Clone the project:

```
git clone https://github.com/KovDimaY/React-Highcharts.git
```

##### Open it:

```
cd React-Highcharts
```

##### Install all required packages:

```
npm install
```

##### Compile React.js components:

```
webpack -w
```

##### Run the application:

```
npm run start
```

##### Open in browser http://localhost:3000/

<br>

### Deployment to Heroku

Make sure you have Node.js and the Heroku CLI installed amd write the next commands:

```
$ git clone git@github.com:###-your app-###
$ cd ###-your app-###
$ npm install
$ npm start
```

After this step your app should be running locally, it means that everything is ok and the app is ready for deployment. So to deploy it to Heroku, write the next commands:

```
$ heroku create
$ git push heroku master
$ heroku open
```

Congratulations, your app is deployed! :D

For more details, visit https://devcenter.heroku.com/articles/getting-started-with-nodejs
