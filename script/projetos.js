const Component = React.Component;
const render = ReactDOM.render;

const projects = [
    {   
        id: 1,
        name: 'Site pessoal',
        type: 'Site',
        photo: 'resources/web-design.svg',
        link:'https://pedrodrocha.com/',
        width: '8rem',
        padding: '2rem 1rem 2rem 4.5rem'
    },
    {   
        id: 2,
        name:'Seminário ABRI 2020',
        type:'Apresentação',
        photo: 'resources/power-point.svg',
        link:'https://drive.google.com/file/d/1OyQRJR6U03rlL6yov26X-Xw4P5T5IMIn/view?usp=sharing',
        width: '8rem',
        padding: '2rem 1rem 2rem 4.5rem'
    },
    {
        id: 3,
        name:'cbloldataR',
        type: 'Pacote R',
        photo: 'resources/code.svg',
        link:'https://github.com/pedrodrocha/cbloldataR',
        width: '8rem',
        padding: '2.5rem 1rem 2rem 4.5rem'
    }

];




// class GalleryItem extends Component{
//     constructor(props){
//         super(props)
//         this.state = {hover: false}
//     }

//     toggleHover() {
//         this.setState({hover: !this.state.hover})
//     }

//     render(){

//         let content;

//         if (this.state.hover) {

//             content =         
//             <a key={this.props.projectList.id} className='project-items' href={this.props.projectList.link} target='_blank' style={{}}>
//                 <div>
//                     <p>{this.props.projectList.name}</p>
//                     <p>{this.props.projectList.type}</p>
//                 </div>
                
//             </a>


//         } else {
//             content =      
        
//             <a key={this.props.projectList.id} className='project-items' href={this.props.projectList.link} target='_blank'>
//                 <img className='photo' src={this.props.projectList.photo} style={{width: this.props.projectList, padding: this.props.projectList.padding}}/>
//             </a>

    
//             return (
//                 <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
//                     {content}
//                 </div>

//             )

//         }
//     }
// }

// class Gallery extends Component{

//     render(){
//         return(
//             <div id='gallery-content'>
//                 <GalleryItem projectList={projects[0]}/>
//                 <GalleryItem projectList={projects[1]}/>
//                 <GalleryItem projectList={projects[2]}/>
//             </div>
//         )
//     }
// }

// class Gallery extends Component{
//     constructor(props){
//         super(props);
//         this.state = {hover: false}
//         this.toggleHover = this.toggleHover.bind(this);
//     }

//     toggleHover() {
//         this.setState({hover: !this.state.hover})
//     }

//     render(){

//         let content;

//         if (this.state.hover) {

//             content = this.props.projectList.map((project) =>        
        
//             <a key={project.id} className='project-items' href={project.link} target='_blank' style={{}}>
//                 <div>
//                     <p>{project.name}</p>
//                     <p>{project.type}</p>
//                 </div>
                
//             </a>
    
//             )

//         } else {
//             content = this.props.projectList.map((project) =>        
        
//             <a key={project.id} className='project-items' href={project.link} target='_blank'>
//                 <img className='photo' src={project.photo} style={{width: project.width, padding: project.padding}}/>
//             </a>

    
//             )

//         }
        
//         return (
//             <div id='gallery-content' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
//                 {content}
//             </div>

//         )

//     }
// }




// class App extends Component{
//     render(){
//         return(
//             <div id='gallery'> 
//                 <div id='gallery-header'>
//                     <h1 id='page-title'>Portfólio</h1>
//                     <hr/>
//                     <p id='page-description'>Aqui estão reunidos alguns dos meus projetos e apresentações já finalizados na área de tecnologia, design, visualização de dados e Relações Internacionais</p>
//                 </div>

//                 <Gallery projectList={projects}/>
//                 {/* <Gallery/> */}
//             </div>

//         )
//     }
// }

// render(
//     <App/>,
//     d3.select('#root').node()
// )

// Style

// d3.select('#gallery')
//     .style('display','flex')
//     .style('flex-direction','column')
//     .style('align-content','center')
//     .style('gap','5rem')



// d3.select('#page-title')
//     .style('color','#444')
//     .style('font-family','Xanh Mono')
//     .style('font-size','2.6rem')
//     .style('text-align','center')

// d3.select('#linha')
//     .style('border-bottom','10px solid #444')
//     .style('width','1rem')

// d3.select('#page-description')
//     .style('color','#444')
//     .style('font-family','Open Sans Condensed')
//     .style('text-align','center')
//     .style('font-size','1.4rem')

// d3.selectAll('#gallery-content')
//     .style('display','flex')
//     .style('flex-direction','row')
//     .style('flex-wrap','wrap')
//     .style('justify-content','center')
//     .style('gap','1rem')

// d3.selectAll('.project-items')
//     .style('border-top','15px solid #444')
//     .style('border-bottom','15px solid #444')
//     .style('border-right','7px solid #444')
//     .style('border-left','7px solid #444')
//     .style('outline-offset', '-15px')
//     .style('width','18rem')
//     .style('height','13rem')

// d3.select('#icon1')
//     .style('margin','2rem 0rem 2rem 5rem')
//     .style('width','8rem')

    
// d3.select('#icon2')
//     .style('margin','2rem 0rem 2rem 4.5rem')
//     .style('width','8rem')


// d3.select('#icon3')
//     .style('margin','3rem 0rem 2rem 4.5rem')
//     .style('width','8rem')    




// -----------------------

// d3.select('#item1')
//     .on('mouseover', function(){
//         d3.select(this)
//             .classed('onHoverImg', true)
//         d3.select('#item1-thumb')
//             .classed('onHover',false)

//     })    
//     .on('mouseout', function(){
//         d3.select(this)
//             .classed('onHoverImg', false)

//         d3.select('#item1-thumb')
//             .classed('onHover',true)
//     })


// d3.select('#item2')
//     .on('mouseover', function(){
//         d3.select(this)
//             .classed('onHoverImg', true)
//         d3.select('#item2-thumb')
//             .classed('onHover',false)
//     })    
//     .on('mouseout', function(){
//         d3.select(this)
//             .classed('onHoverImg', false)

//         d3.select('#item2-thumb')
//             .classed('onHover',true)
//     })


// d3.select('#item3')
//     .on('mouseover', function(){
//         d3.select(this)
//             .classed('onHoverImg', true)
//         d3.select('#item3-thumb')
//             .classed('onHover',false)
//     })    
//     .on('mouseout', function(){
//         d3.select(this)
//             .classed('onHoverImg', false)

//         d3.select('#item3-thumb')
//             .classed('onHover',true)
//     })

