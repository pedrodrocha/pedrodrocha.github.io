

class Header extends React.Component{
    constructor(props){
        super(props);

    }


    render(){

        
        return (
            <div id='main' className='main'>
                <div id='main-texto' className='main-texto'>
                    <div id='categoria-mais-recente' className='categoria-mais-recente'>Último post</div>
                    <div id='title-mais-recente' className='title-mais-recente'>Meu primeiro React Component</div>
                </div>

                <div id='main-icon' className='main-icon'>
                </div>
            </div>

        )

    }
}


class App extends React.Component{
    constructor(props){
        super(props);

    }


    render(){

        
        return (
            <div></div>

        )

    }
}




ReactDOM.render(
    <Header/>,
    d3.select('#root').node()
)

d3.select('#categoria-mais-recente')
    .style('color','#f0f0f0')
    .style('font-size','2rem')

d3.select('#title-mais-recente')
    .style('color','#444')
    .style('font-size','3rem')