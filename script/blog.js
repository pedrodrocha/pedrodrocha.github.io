const Component = React.Component;
const render = ReactDOM.render;

const listaPosts = [
    {
     id: 1,
     titulo: 'Lorem ipsum dolor sit amet',
     resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
     tag: 'Lorem ipsum',
     data: '20 nov. 2020',
     icon: 'resources/web-design.svg'
    },
    {
        id: 2,
        titulo: 'Lorem ipsum dolor sit amet',
        resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tag: 'Lorem ipsum',
        data: '17 nov. 2020',
        icon: 'resources/web-design.svg'
    },
    {
        id: 3,
        titulo: 'Lorem ipsum dolor sit amet',
        resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tag: 'Lorem ipsum',
        data: '15 nov. 2020',
        icon: 'resources/web-design.svg'
   },

]



function Posts(props){

    const content = props.listaDePosts.map((post) =>
        <div key={post.id} id={`post-box-content${post.id}`} className='post-box-content'>
            <a href='#' id={`post-title${post.id}`} className='post-title'>{post.titulo}</a>
            <p id={`post-resumo${post.id}`} className='post-resumo'>{post.resumo} <a className='r-link link text-underlined' href='#'>Leia Mais </a></p>
            <p id={`post-tag${post.id}`} className='post-tag'>{post.tag}</p>
            <p id={`post-data${post.id}`} className='post-data'>{post.data}</p>

        </div>

    )

    return(
        <div>
            {content}
        </div>
    )
}

class App extends Component{
    render(){
        return(
            <div id='app' className='app'>
                     <h1 className='page-title' id='page-title'>Blog</h1>
                     <p id='blog-description' className='blog-description'>
                         Aqui escrevo sobre Relações Internacionais, visualização de dados e programação em R e JavaScript
                     </p>
                <Posts listaDePosts={listaPosts}/>
            </div>
        )
    }
}
render(
    <App/>,
    d3.select('#root').node()
)

