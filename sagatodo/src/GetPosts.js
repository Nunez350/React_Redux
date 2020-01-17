import React, { Component } from 'react';
import * as actionCreators from '../actions/index'
import { connect } from 'react-redux';
import axios from 'axios';

class GetPosts extends Component {
    constructor(props){
        super(props)
        this.title = React.createRef(); 
        this.message = React.createRef(); 
    }   

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.title.current.value;
        const message = this.message.current.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }     
        this.title.current.value ='';
        this.message.current.value = '';
        //console.log(actionCreators.addPost(data))
        this.props.onAddPost(data)

    }

    render () {
        return (           
            
        );
    }
}


const mapStateToProps = state => {
    return {       
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {     
        onAddPost: (data) => dispatch(actionCreators.addPost(data)),     
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);




  
//   // Load Page starts by checking if there is a vale entered in the search box. If there isn't we just set the StockCode to nothing and move on. 
//   // If there is a value, we use our API on the backend to make sure we have the correct stock symbol. Our backend
//   // Will return the stock code needed, assuming its valid.
//   loadPage = () => {
//     if(document.getElementById('stockEntry').value === ""){
//       stockCode = (document.getElementById('stockEntry').value);
//       this.setState({stockCode: (document.getElementById('stockEntry').value)});
//     }else{

//       this.setState({loading: true});
//       this.setState({loadingSMA: true});
//       stockCode = (document.getElementById('stockEntry').value);
//       this.setState({stockCode: (document.getElementById('stockEntry').value)});
     
//       axios.get('http://stock-react.herokuapp.com/stock' + stockCode)
//         .then( (response) => {
//           stockCode = response.data;
//           this.setState({stockCode: response.data});
//           return response.data
//         }).then((response) => {
//           if(response === "Nothing"){
//             this.setState({stockCode: ""});
//             this.setState({open: ""});
//             this.setState({close: ""});
//             this.setState({sma: ""});
//             this.setState({stockChartXValue: []});
//             this.setState({stockChartYValue: []});
//             this.setState({SMAChartXValue: []});
//             this.setState({SMAChartYValue: []});
//             this.setState({EMA: ""});
//             this.setState({WMA: ""});
//             this.setState({BBANDS: ""});
//             this.setState({OBV: ""});
//             this.setState({RSI: ""});
//             this.setState({loading: false});
//             this.setState({loadingSMA: false});
//             this.setState({loadingTI: false});
//             alert("Invalid Entry");
//           }else{
//             this.fetchStock(response);
//             if(document.getElementById('TISelect').value !== "---"){
//               this.setState({EMA: ""});
//               this.setState({WMA: ""});
//               this.setState({BBANDS: ""});
//               this.setState({OBV: ""});
//               this.setState({RSI: ""});
//               this.getTI();
//             }
//           }
//         })
//         .catch(error => {
//           console.log("Error: " + error);
//         });
//     }
//   }

//   // Get SMA uses our stock code that gets passed to it, and then sets the state of our desired time period to the selected period in the
//   // drop down menu. Once we have that we call the AlphaVantage API with the stock code and period we want, get the response, and grab the SMA
//   // value. We do that by just grabbing the first key from the returned object, because that will always be what we want.
//   getSMA = (theCode) => {
//     this.setState({EMA: ""});
//     this.setState({WMA: ""});
//     this.setState({BBANDS: ""});
//     this.setState({OBV: ""});
//     this.setState({RSI: ""});

//     let SMAChartXValueFunction = [];
//     let SMAChartYValueFunction = [];
//     var firstHundred = {};
//     this.setState({ period: (document.getElementById('selectDrop').value) })
//     fetch(`https://www.alphavantage.co/query?function=SMA&symbol=${theCode}&interval=daily&time_period=${this.state.period}&series_type=open&apikey=QWAZUD4WW32N18NDs`)
//       .then(res => res.json())
//       .then((data) => {
//         var set = data['Technical Analysis: SMA'];
//         var firstKey = Object.keys(set)[0];
//         for(var index = 0; index < 100; index++){
//           // SMAChartXValueFunction.push(key);
//           // SMAChartYValueFunction.push(set[key]['SMA']);
//           // console.log(key + " : " + set[key]['SMA']);
//           var myKey = Object.keys(set)[index];
//           firstHundred[myKey] = set[myKey];
//         }
//         for(var key in firstHundred){
//           SMAChartXValueFunction.push(key);
//           SMAChartYValueFunction.push(set[key]['SMA']);
//         }

//         this.setState({loadingSMA: false});
//         this.setState({ sma: data['Technical Analysis: SMA'][firstKey]['SMA'] });
//         this.setState({SMAChartXValue: SMAChartXValueFunction});
//         this.setState({SMAChartYValue: SMAChartYValueFunction});

//       })
//       .catch(console.log)
//   }

//   // Fetch Stock uses the AlphaVantage API and passes in our entered stock code, and our generated api key. It then goes thorugh the
//   // returned object and sets our states for values, and adds values to an array for our graph that is used in our render function.
//   fetchStock = (code) => {
//     const pointerToThis = this;
//     const API_KEY = 'QWAZUD4WW32N18ND';
//     let DAILY_API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${code}&outputsize=compact&apikey=${API_KEY}`;
//     console.log(DAILY_API_CALL)
//     let stockChartXValueFunction = [];
//     let stockChartYValueFunction = [];
//     let closeChartYValueFunction = [];
//     let highChartYValueFunction = [];
//     let lowChartYValueFunction = [];


//     fetch(DAILY_API_CALL)
//       .then(
//         (response) => {
//           return response.json();
//         }
//       )
//       .then(
//         (data) => {

//           console.log(data);          
//           // We can check if our object returned from the API contains an error with the below code.
//           /*if('Error Message' in data){
//             console.log("Error Block");
//           }else{
//             console.log("Not erroring out");
//           }*/

//           try{
//             // Here we check if the current date is available yet through the alphavantage API. If it isn't
//             // we get the values of yesterday instead.
//             if(currentDate in data['Time Series (Daily)']){
//               this.setState({open: data['Time Series (Daily)'][currentDate][`1. open`]});
//               this.setState({close: data['Time Series (Daily)'][currentDate][`4. close`]});
//             }else if(yesterday in data['Time Series (Daily)']){
//               this.setState({open: data['Time Series (Daily)'][yesterday][`1. open`]});
//               this.setState({close: data['Time Series (Daily)'][yesterday][`4. close`]});
//             }
//             else{
//               //console.log("Here");
//               this.setState({open: data['Time Series (Daily)'][threeDaysAgo][`1. open`]});
//               this.setState({close: data['Time Series (Daily)'][threeDaysAgo][`4. close`]});
//             }

//             for(var key in data['Time Series (Daily)']){
//               stockChartXValueFunction.push(key);
//               stockChartYValueFunction.push(data['Time Series (Daily)'][key][`1. open`]);
//               closeChartYValueFunction.push(data['Time Series (Daily)'][key][`4. close`]);
//               highChartYValueFunction.push(data['Time Series (Daily)'][key][`2. high`]);
//               lowChartYValueFunction.push(data['Time Series (Daily)'][key][`3. low`]);

//             }
//             this.getSMA(code);

//           }catch(Exception){
//             console.log("In last catch block");
//           } finally {
//             pointerToThis.setState({
//               stockChartXValue: stockChartXValueFunction,
//               stockChartYValue: stockChartYValueFunction,
//               closeChartYValue: closeChartYValueFunction,
//               highChartYValue: highChartYValueFunction,
//               lowChartYValue: lowChartYValueFunction,
//               loading: false
//             });
//           }
//         }
//       )   
//   }

//   // This function is to get the Technical Indicator that is chosen in a drop down box. 
//   // It makes sure the stock code isn't blank and that the drop down box isnt on the "None" option.
//   // Once we know that, we can do an API call with the function of their choice (EMA, BBANDS, etc.) and pass in
//   // our stock code and API key. We get a response like the others in a big object. We take that, and grab the first 
//   // thing by getting the first key, and then getting the value of the first key, all according to what function they chose. Then we set 
//   // a state so we keep track of that value as long as it is valid so we do not need to keep doing API calls. 
//   // We finish up by setting a few states to display what we want, get rid of the loading symbol, and display the correct number.
//   getTI = () =>{

//     if(this.state.stockCode === ""){
//       return;
//     }

//     var chosenTechnicalIndicator = document.getElementById('TISelect').value;
//     var valueToDisplay = 0;
//     if(chosenTechnicalIndicator === "---"){
//       //This is if the box is on the empty selector.
//       this.setState({tiValue: ""});
//     }
//     else if(chosenTechnicalIndicator === "BBANDS"){
//       // BBANDS is a special case because it has different entries in the object
//       // So we will need to handle that differently than the others.
//       this.setState({loadingTI: false});
//       this.setState({[chosenTechnicalIndicator]: "Temp Placeholder"});
//       this.setState({tiValue: `Place\nholder`})
//     }
//     else{
//       this.setState({loadingTI: true});
//       if(this.state[chosenTechnicalIndicator] === ""){
//           const API_KEY = 'QWAZUD4WW32N18ND';
//           const API_Call = `https://www.alphavantage.co/query?function=${chosenTechnicalIndicator}&symbol=${this.state.stockCode}&interval=weekly&time_period=10&series_type=open&apikey=${API_KEY}`;
//           fetch(API_Call)
//             .then(res => res.json())
//             .then((data) => {
//                //console.log(data);
//                try{
//                   var set = data[`Technical Analysis: ${chosenTechnicalIndicator}`];
//                   //console.log(set);
//                   var firstKey = Object.keys(set)[0];
//                   valueToDisplay = set[firstKey][`${chosenTechnicalIndicator}`];
//                }catch(err){
//                   console.log("Garbage API");
//                }

//             })
//             .then( () => {
//                 this.setState({loadingTI: false});
//                 this.setState({[chosenTechnicalIndicator]: valueToDisplay});
//                 this.setState({tiValue: valueToDisplay});
//               }
//             );

//       }else{
//         this.setState({loadingTI: false});
//         this.setState({tiValue: this.state[chosenTechnicalIndicator]});
//       }

//     }
//   }

//   // Our add to list function doesnt do anyhting yet, just checks to make sure there is a valid 
//   // stock code currently, and if there isnt it says to add a valid code.
//   addToList = () =>{
//     if(this.state.stockCode === "Nothing" || this.state.stockCode === ""){
//       alert("Please search for a valid stock first!");
//     }
//     else{
//       alert("Added");
//     }
//   }

//   // View graph is called when you click the view graph button. There is a class called myPlotDiv that has the CSS property hidden.
//   // It that class is currently on the div that contains the graph, get rid of it. If it is NOT there, add it. That just toggles
//   // hidden every time you click it.
//   viewGraph(){
//     var element = document.getElementById('myPlotlyGraph');
//     if(element.classList.contains("myPlotDiv")){
//       element.classList.remove("myPlotDiv");
//     }else{
//       element.classList.add("myPlotDiv");
//     }
//   }

//   // Here we add an event listener to our drop down menu for the SMA. If the value gets changed at any point, it will automatically
//   // update because of this even listener. That way we dont need to re-search the stock if we just want to change the SMA.
//   componentDidMount(){
//     var myDropDownMenu = document.getElementById('selectDrop');
//     myDropDownMenu.addEventListener('change', () => {
//       this.getSMA(this.state.stockCode);
//     });

//     var technicalDropDown = document.getElementById('TISelect');
//     technicalDropDown.addEventListener('change', () => {
//       this.getTI();
//     })

//     var mySearchButton = document.getElementById('stockEntry');
//     mySearchButton.addEventListener('keypress', (event) => {
//       if(event.keyCode === 13){
//         document.getElementById('mySearchButton').click();
//       }
//     });
//   }

//   // The standard render for react. Just adds all the HTML for our page :D
//   render(){
//     return(
//       <div id="myStockPageDiv" className="container-fluid">
//         <br />
//         <h1 id="stockPageHeading">Stock Search:</h1>
//         <input type="text" id="stockEntry" className="m-1" placeholder="Ticker/Company"/>
//         <button  type="Submit" onClick={this.loadPage} className="btn btn-primary" id="mySearchButton">Search</button>
//         <br />
//         <br />
//         <div id="" className="row container-fluid">
//           <div className="col-sm-2 container myColDivs">
//             <p className="columnTitles">Stock Ticker</p>
            
//             <div className="blueText">{this.state.stockCode}</div>
//             <br />
//           </div>
//           <div className="col-sm-1 container myColDivs">
//            <p className="columnTitles">Probability of Success</p>
//            <br />
//           </div>
//           <div className="col-sm-1 container myColDivs">
//             <p className="columnTitles">Buy Bid</p>
//             <br />
//           </div>

//           <div className="col-sm-1 container myColDivs">
//             <p className="columnTitles">Technical Indicators</p>
//             <div className="blueText TIClass">{this.state.loadingTI ? <p style={{color:'red'}}>....</p> : this.state.tiValue}</div>
//             <br />
//             <select id="TISelect" className="browser-default custom-select" style={{width:"75%"}}>
//               <option value="---">---</option>
//               <option value="EMA">EMA</option>
//               <option value="WMA">WMA</option>
//               <option value="BBANDS">BBAND</option>
//               <option value="OBV">OBV</option>
//               <option value="RSI">RSI</option>
//             </select>
//             <br />
//           </div>

//           <div className="col-sm-1 container myColDivs">
//           <p className="columnTitles">Open</p>
            
//             <div className="greenText">{this.state.loading ? <p style={{color:'red'}}>....</p> : this.state.open}</div>
//             <br />
//           </div>

         
//           <div className="col-sm-1 container myColDivs">
//             <p className="columnTitles">Close</p>
            
//             <div className="redText">{this.state.loading ? <p style={{color:'red'}}>....</p> : this.state.close}</div>
//             <br />
//           </div>
//           <div className="col-sm-2 container myColDivs">
          
//             <p className="columnTitles">SMA</p>
//             <div className="purpleText">{this.state.loadingSMA ? <p style={{color:'red'}}>....</p> : this.state.sma}</div>
//             <br />
//             <select id="selectDrop" className="browser-default custom-select" style={{width:"75%"}}>
//               <option value="10">10 Days</option>
//               <option value="50">50 Days</option>
//               <option value="100">100 Days</option>
//               <option value="150">150 Days</option>
//               <option value="200">200 Days</option>
//             </select>
//             <br />
//           </div>

//           <div className="col-sm-1 container myColDivs">
//           <br />

//             <button className="btn btn-outline-danger" onClick={this.viewGraph}>View Graph</button>
//           </div>
//           <div className="col-12 container myPlotDiv" id='myPlotlyGraph'>
//             <br />
//             <Plot
//             data={[
//               {
//                 name: 'Opening',
//                 x: this.state.stockChartXValue,
//                 y: this.state.stockChartYValue,
//                 type: 'scatter',
//                 mode: 'lines+markers',
//                 marker: {color: 'lightgreen'},
                
//               },
//               {
//                 name: 'Close',
//                 x: this.state.stockChartXValue,
//                 y: this.state.closeChartYValue,
//                 type: 'scatter',
//                 mode: 'lines+markers',
//                 marker: {color: 'red'},  
//                 visible: "legendonly"              
//               },
//               {
//                 name: 'SMA',
//                 x: this.state.SMAChartXValue,
//                 y: this.state.SMAChartYValue,
//                 type: 'scatter',
//                 mode: 'lines+markers',
//                 marker: {color: '#D686E6'},
//                 visible: "legendonly"                
//               },
//               {
//                 name: 'High',
//                 x: this.state.stockChartXValue,
//                 y: this.state.highChartYValue,
//                 type: 'scatter',
//                 mode: 'lines+markers',
//                 marker: {color: 'blue'},  
//                 visible: "legendonly"              
//               },
//               {
//                 name: 'Low',
//                 x: this.state.stockChartXValue,
//                 y: this.state.lowChartYValue,
//                 type: 'scatter',
//                 mode: 'lines+markers',
//                 marker: {color: 'black'},  
//                 visible: "legendonly"              
//               },
//             ]}
//             style={{width: '100%', height: '99%', title: `${this.state.stockCode} stock graph`, overflow: 'auto', useResizeHandler: true}}
//             layout= {{
//               autosize: true,
//               //width: '100%',
//               height: '100%',
//               plot_bgcolor: "white",
//               paper_bgcolor: "#3A95D1",
//               title: {
//                 text: this.state.stockCode,
//                 font:{
//                   family: 'Courier New, monospace',
//                   size: 20,
//                   color: 'white'
//                 }
//               },
//               xaxis: {
//                 title: {
//                   text: 'Date',
//                   font: {
//                     family: 'Courier New, monospace',
//                     size: 20,
//                     color: 'white'
//                   }
//                 },
//                 color: 'white'
//               },
//               yaxis: {
//                 title: {
//                   text: 'USD($)',
//                   font: {
//                     family: 'Courier New, monospace',
//                     size: 20,
//                     color: 'white'
//                   }
//                 },
//                 color: 'white'
//               },
//               legend: {
//                 bgcolor: "LightSteelBlue",
//                 bordercolor: "Black",
//                 borderwidth: 2
//               }
//             }}
           
//             //Plotly.newPlot('myDiv', data, layout, {responsive: true});
//             />
//            </div>
//            </div>
//         {/* End of Graph Plot */}
//         <br />
//         <button className="btn btn-primary m-1 p-1 addButton" onClick={this.addToList}>Add To My List!</button>
//       </div>
//     )
//   }
// }

// export default StockSearch;