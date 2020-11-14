const Component = React.Component;
const render = ReactDOM.render;

const projects = [
    {   
        id: 1,
        name: 'Meu site pessoal',
        type: 'Website',
        photo: 'resources/web-design.svg',
        link:'https://pedrodrocha.com/',
        width: '8rem',
        margin: '2rem 0rem 2rem 5rem'
    },
    {   
        id: 2,
        name:'ABRI 2020',
        type:'Slide Deck',
        photo: 'resources/power-point.svg',
        link:'https://drive.google.com/file/d/1OyQRJR6U03rlL6yov26X-Xw4P5T5IMIn/view?usp=sharing',
        width: '8rem',
        margin: '2rem 0rem 2rem 4.5rem'
    },
    {
        id: 3,
        name:'cbloldataR',
        type: 'Pacote R',
        photo: 'resources/code.svg',
        link:'https://github.com/pedrodrocha/cbloldataR',
        width: '8rem',
        margin: '3rem 0rem 2rem 4.5rem'
    }

];





class Gallery extends Component{
    constructor(props){
        super(props);

    }



    render(){

        const content = this.props.projectList.map((project) =>        
    
        <a key={project.id} id={`project-items${project.id}`} href={project.link} target='_blank'>
            <div id={`item${project.id}`}>
                <img id={`icon${project.id}`} src={project.photo} style={{width: project.width, margin: project.margin}}/>

            </div>

            
            <div id={`overlay${project.id}`}>

                <div id={`item${project.id}-thumb`}>

                    <p>{project.name}</p>
                    <hr/>
                    <p>{project.type}</p>
                </div>   
            </div>

            
        </a>

        )
        
        return (
            <div id='gallery-content'>
                {content}
            </div>

        )

    }
}




class App extends Component{
    render(){
        return(
            <div id='gallery'> 
                <div id='gallery-header'>
                    <h1 id='page-title'>Portfólio</h1>
                    <hr/>
                    <p id='page-description'>Aqui estão reunidos alguns dos meus projetos e apresentações na área de tecnologia, design, visualização de dados e Relações Internacionais.</p>
                </div>

                <Gallery projectList={projects}/>

            </div>

        )
    }
}

render(
    <App/>,
    d3.select('#root').node()
)

// Setting up interactions with D3
d3.select('#project-items1')
    .style('position','relative')
    .on('mouseover',function(){
        d3.select('#overlay1')
     
            .style('opacity','1')
    })
    .on('mouseout', function(){
        d3.select('#overlay1')
   
            .style('opacity','0')
    })

d3.select('#project-items2')
    .style('position','relative')
    .on('mouseover',function(){
        d3.select('#overlay2')
     
            .style('opacity','1')
    })
    .on('mouseout', function(){
        d3.select('#overlay2')
      
            .style('opacity','0')
    })

d3.select('#project-items3')
    .style('position','relative')
    .on('mouseover',function(){
        d3.select('#overlay3')

            .style('opacity','1')
    })
    .on('mouseout', function(){
        d3.select('#overlay3')

            .style('opacity','0')
    })