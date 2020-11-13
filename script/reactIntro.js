
// function formatName(user){
//     return `${user.firstName} ${user.lastName}`
// }

// const user = {
//     firstName: 'Harper',
//     lastName: 'Lee'
// }

// const element = (
//     <h1 className='greeting'>
//     Hello, {formatName(user)} !
//     </h1> 
// )

// ReactDOM.render(
//     element,
//     d3.select('#root').node()
// )

// function tick(){
//     const element = (
//         <div>
//             <h1 className='greeting'>Hello, {formatName(user)} !</h1> 
//             <h2>It is {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}.</h2>
//         </div>
//     )
//     ReactDOM.render(
//         element,
//         d3.select('#root').node()
//     )
// }

// setInterval(tick,1000)

// class Welcome extends React.Component {
//     render() {
//     return <h1>Hello, {this.props.name}</h1>
//     }
// }

// class App extends React.Component{
//     render(){
//         return (
//             <div>
//                 <Welcome name='Sara'></Welcome>
//                 <Welcome name='Cahal'></Welcome>
//                 <Welcome name='Edite'></Welcome>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     d3.select('#root').node()
// )


// function Comment(props){
//     return (
//         <div className="Coment">
//             <div className='UserInfo'>
//                 <img className='Avatar'
//                      src={props.author.avatarUrl}
//                      alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     )
// }

// function Avatar(props){
//     return(
//         <img 
//             className='Avatar'
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//         />
//     )

// }


// function UserInfo(props){
//     return(
//         <div className="UserInfo">
//             <Avatar user={props.user}/>
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     )
// }

// function Comment(props) {
//     return (
//       <div className="Comment">
//         <UserInfo user={props.author} />
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
// }

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world !</h1>
//             <h2>It is {props.date.getHours()}:{props.date.getMinutes()}:{props.date.getSeconds()}</h2>
//         </div>
//     )
// }

// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         d3.select('#root').node()
//     )
// }

// setInterval(tick,1000)

const Component = React.Component;
const render = ReactDOM.render;

// class Clock extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//       }

//     componentDidMount() {
//         this.timerID = setInterval(
//           () => this.tick(),
//           1000
//         );
//       }


//     tick(){
//         this.setState({
//             date: new Date()
//         })
//     }

//     render(){
//         return (
//         <div>
//             <h1>Hello, world !</h1>
//             <h2>
//                 It is {this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()}
//             </h2>
//         </div>
//         )
//     }

// }
// // render(
// //     <Clock />,
// //     d3.select('#root').node()
// // )

// function App() {
//     return (
//       <div id="app">
//         <Clock />
//       </div>
//     );
//   }
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );

// class Toggle extends Component {
//   constructor(props){
//     super(props);
//     this.state = { isToggleOn: true};
//     // Aqui utilizamos o 'bind para que o 'this' funtion dentro da nossa callback
//     // Em HavaScript métodos de classe não são vinculados por padrão. 
//     // Se esquecermos de fazer o bind o this será undefined quando a função for chamada
//     this.handleClick = this.handleClick.bind(this)
//   }
  
//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render(){
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     )
//   }

// }

// class App extends Component{
//   render(){
//     return(
//       <div id='app'>
//         <Toggle />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <App/>,
//   d3.select('#root').node()
// )

// class UserGreeting extends Component{
//   render(){
//     return <h1>Welcome Back!</h1>
//   }
// }

// class GuestGreeting extends Component{
//   render(){
//     return <h1>Please sign up</h1>
//   }
// }

// class Greeting extends Component{
//   constructor(props){
//     super(props)
//     this.isLoggedIn = this.props.value
//   }

//   render(){
//     if(this.isLoggedIn){
//       return <UserGreeting/>;
//     } else {
//       return <GuestGreeting/>;
//     }
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }


// function LoginButton(props){
//   return <button onClick={props.onClick}> Login </button>
// }
// function LogoutButton(props){
//   return <button onCLick={props.onCLick}></button>
// }

// class LoginControl extends Component{
//   constructor(props){
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true})
//   }

//   handleLogoutClick(){
//     this.setState({isLoggedIn: false})
//   }

//   render(){
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn){
//       button = <LogoutButton onCLick={this.handleLogoutClick}/>;
//     } else {
//       button = <LoginButton onCLick={this.handleLoginClick}/>;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={false}/>
//         {button}
//       </div>
//     )
//   }

// }

// class App extends Component{
//   render(){
//     return (
//       <div id="app">
//         <LoginControl/>
//       </div>

//     )
//   }
// }

// render(
//   <App/>,
//   d3.select('#root').node()
// )


// const numbers = [1,2,3,4,5]


// function NumberList(props){
//   const numbers = props.numbers;
//   const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>)

//   return <ul>{listItems}</ul>
// }

// class App extends Component{
//   render(){
//     return(
//       <div id="app">
//         <NumberList numbers={numbers}/>
//       </div>  
//     )
//   }
// }

// render(
//   <App/>,
//   d3.select('#root').node()
// )

// function Blog(props){
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   )

//   const content = props.posts.map((post) => 

//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//         </div>
//   )

//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   )
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );


// class NameForm extends Component {
//   constructor(props){
//     super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value})
//   }

//   handleSubmit(event){
//     alert('Um nome foi enviado:' + this.state.value);
//     event.preventDefault()

//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Nome:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Enviar" />
//       </form>
//     );
//   }
// }

// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Uma dissertação foi enviada: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Dissertação:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Enviar" />
//       </form>
//     );
//   }
// }

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coco'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Seu sabor favorito é: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Escolha seu sabor favorito:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="laranja">Laranja</option>
//             <option value="limao">Limão</option>
//             <option value="coco">Coco</option>
//             <option value="manga">Manga</option>
//           </select>
//         </label>
//         <input type="submit" value="Enviar" />
//       </form>
//     );
//   }
// }
// class App extends Component {
//   render(){
//     return (
//       <div id='app'>
//         <NameForm />
//         <EssayForm/>
//         <FlavorForm/>
//       </div>
//     )
//   }
// }

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Estão indo:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Número de convidados:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

// class App extends Component {
//   render(){
//     return (
//       <div id='app'>
//         <Reservation />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>A água ferveria.</p>;
//   }
//   return <p>A água não ferveria.</p>;
// }

// class Calculator extends Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Informe a temperatura em Celsius:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>A água ferveria.</p>;
//   }
//   return <p>A água não ferveria.</p>;
// }

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// class TemperatureInput extends Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Informe a temperatura em {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }


// class App extends Component {
//   render(){
//     return(
//       <div id='app'>
//         <Calculator/>
//       </div>
//     )
//   }
// }

// render(
//   <App/>,
//   d3.select('#root').node()
// )

function FancyBorder(props){
  return(
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog(){
  return(
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>
        Bem-vindo
      </h1>
      <p className='Dialog-message'>
        Obrigado por visitar a nossa espaçonave !
      </p>

    </FancyBorder>

  )
};

class App extends Component {
  render(){
    return(
      <div id='app'>
        <WelcomeDialog/>
      </div>
    )
  }
}

render(
  <App/>,
  d3.select('#root').node()
)