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
        name:'#TidyTuesday',
        type: 'DataViz',
        photo: 'resources/noun_bar_graph.svg',
        link:'https://github.com/pedrodrocha/TidyTuesday',
        width: '8rem',
        margin: '3rem 0rem 2rem 4.5rem'
    },
    {
        id: 3,
        name:'camaradeputadosapi',
        type: 'Pacote R',
        photo: 'resources/code.svg',
        link:'https://pedrodrocha.com/camaradeputadosapi/',
        width: '8rem',
        margin: '3rem 0rem 2rem 4.5rem'
    },
    {   
        id: 4,
        name:'COBRAINT 2020',
        type:'Slide Deck',
        photo: 'resources/power-point.svg',
        link:'https://drive.google.com/file/d/1X1MxbMeFVnij8RhrllPdnx05cgUI4eB4/view?usp=sharing',
        width: '8rem',
        margin: '2rem 0rem 2rem 4.5rem'
    },
    {
        id: 5,
        name:'#MakeoverMonday',
        type: 'DataViz',
        photo: 'resources/noun_bar_graph.svg',
        link:'https://github.com/pedrodrocha/MakeoverMonday',
        width: '8rem',
        margin: '2rem 0rem 2rem 4.5rem'
    },

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

                <div id={`item-thumb${project.id}`}>

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


// Setting up overlay events with D3    
const overlayEvents = projects.map((project,i) => {
    d3.select(`#project-items${i + 1}`)
        .style('position','relative')
        .on('mouseover',function(){
            d3.select(`#overlay${i + 1}`)     
                .style('opacity','1')
        })
        .on('mouseout', function(){
            d3.select(`#overlay${i + 1}`)   
                .style('opacity','0')
        })
})


