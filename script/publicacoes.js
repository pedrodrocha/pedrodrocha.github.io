const Component = React.Component;
const render = ReactDOM.render;

const artigos = [
    {id:1,
    title: 'A agenda de segurança internacional no BRICS (2009-2019)',
    autores: ['Leonardo Ramos',' Pedro D. Rocha',' Danny Zahreddine'],
    periodico: 'Dados: Revista de Ciências Sociais',
    resumo: "Desde sua criação na segunda metade da década de 2000, predominou no BRICS discussões     relativas à economia política internacional, especialmente àquelas ligadas ao desenvolvimento internacional. A partir das cúpulas de Sanya (2011) e Delhi (2012), entretanto, questões de segurança internacional passam também a, paulatinamente, ter espaço dentro do grupo. Os encontros são aqui entendidos como marco deste processo e a temática do segundo, BRICS Partnership for Global Stability, Security and Prosperity, como essencial para o argumento proposto. O objetivo geral do artigo é analisar as discussões sobre Segurança Internacional dentro das cúpulas dos BRICS de 2009 a 2019. De modo a cumpri-lo discute-se a aproximação do grupo ao nexo desenvolvimento-segurança bem como os limites desta aproximação e é realizada análise de conteúdo das declarações de cúpula dos BRICS. Destacam-se na análise seis unidades temáticas e dentro de cada uma delas se sublinha a evolução das discussões e a abordagem do grupo às problemáticas.",
    palavrasChave: ['BRICS',' Cooperação Internacional',' Segurança Internacional',' Desenvolvimento',' Análise de Conteúdo'],
    link:'https://www.scielo.br/scielo.php?script=sci_serial&pid=0011-5258&lng=en&nrm=iso'},
    {id:2,
    title:'O modelo Steps-to-War: panorama de um programa de pesquisa',
    autores: ['Pedro D. Rocha'],
    periodico: 'Meridiano 47: Journal of Global Studies',
    resumo:'O objetivo deste artigo é o de via revisão bibliográfica apresentar o modelo Steps-to-War, seu programa de pesquisa e alguns de seus resultados empíricos ao público brasileiro afeto às Relações Internacionais. Isto porque, embora o modelo tenha se desenvolvido nos últimos vinte anos no exterior, não há até o momento literatura especializada em português que lide com ele, seja apresentado seus pressupostos ou testando-o em estudos empíricos.',
    palavrasChave:['Relações Internacionais',' Estudos de Paz e Conflito',' Steps to War'],
    link:'https://periodicos.unb.br/index.php/MED/index'},
    {id:3,
    title:'A Construção do Pensamento sobre o Internacional na Rússia: identidades, projetos político-pragmáticos e o Ocidente',
    autores: ['Daniela V. Secches', ' Marina Bernardes',' Pedro D. Rocha'],
    periodico: 'Carta Internacional',
    resumo:'A compreensão sobre o internacional no século XX e o desenvolvimento do campo das Relações Internacionais ecoam particularidades do ambiente sociopolítico no qual são construídos. O que pode ser percebido no caso da Rússia, onde a construção científica do campo está atrelada a projetos de nação que buscam imitar o Outro Ocidental; ou contrapor-se a ele. Dito isto, o objetivo do presente artigo é compreender o quadro contemporâneo das escolas de pensamento sobre o internacional no país. Para tanto, serão incorporados conceitos da sociologia do conhecimento e do construtivismo aplicado às Relações Internacionais a partir da noção de epistemologias geoculturais. Análises matriciais sobre a literatura revista serão o principal recurso de comparação das classificações propostas pelas obras selecionadas, com vistas a entender o impacto dos diferentes contextos sociopolíticos sobre a Academia. Conclui-se que o caso russo fornece um interessante exemplo no qual é possível observar a confluência de inclinações identitárias, projetos político-pragmáticos e a constituição dessa área do saber em torno do elemento Ocidental.',
    palavrasChave:['Relações Internacionais',' Academia Russa',' Identidades',' Projetos Polito-Pragmáticos',' Política Externa'],
    link:'https://www.cartainternacional.abri.org.br/Carta'},
    {id:4,
    title: 'Organizações internacionais não-governamentais no sistema de governança global: a ICAN e o tratado sobre a proibição de armas nucleares',
    autores: ['Pedro D. Rocha'],
    periodico: 'Desafíos',
    resumo: 'O objetivo geral deste artigo é o de demonstrar o processo pelo qual uma Organização Internacional Não-Governamental (OING) a partir do processo de enquadramento de uma questão na agenda internacional foi capaz de influenciar resultados em uma Organização Internacional. Em específico, buscou-se compreender o papel desempenhado pela ICAN (em inglês, International Campaign to Abolish Nuclear Weapons) na aprovação do Tratado sobre a Proibição de Armas Nucleares (TPAN) pela Assembleia Geral das Nações Unidas em 17 de julho de 2017. De modo a cumpri-lo, em termos metodológicos adotou-se o process-tracing, tendo o mecanismo causal sido construído e guiado a partir do arcabouço teórico proposto por Jutta Joachim (2007). Ao fim e ao cabo, se espera contribuir para a literatura em Relações Internacionais ao propor estudo centrado nos processos de negociação em meio ao sistema de governança global, especificamente no que concerne ao papel das OINGs e sua interrelação com outros atores de relevância internacional.',
    palavrasChave: ['governança global', ' armas nucleares',' OINGs', ' ICAN',' TPAN'],
    link: 'https://revistas.urosario.edu.co/index.php/desafios/article/view/7936'},
    {id: 5,
    title:'A Unasul, o Conselho de Defesa Sul-Americano e a prevenção de conflitos na América do Sul',
    autores:['Pedro D. Rocha'],
    periodico: 'Conjuntura Austral: Journal of the Global South',
    resumo:'Apesar da ideia de prevenção de conflitos ter sido introduzida pela primeira vez ainda na década de 1960 pelo então Secretário Geral da ONU Dag Hammarksjöld, é somente com a emergência das novas guerras ao fim da Guerra Fria que o conceito passa a ser elaborado e operacionalizado de forma mais contundente. Tendo como plano de fundo o fracasso das intervenções humanitárias na Somália (1993) e Ruanda (1994), partiu-se do princípio de que os custos humanos e financeiros da ação internacional em conflitos em estágio avançado eram superiores aos custos políticos e econômicos da ação preventiva. Seria mister, então, cercear os conflitos antes de sua escalada, conter o uso da violência ao promover mecanismos de resolução de conflitos em estágio inicial de contenda. Dito isto, o objetivo deste artigo é o de levantar e analisar os mecanismos de prevenção de conflitos desenvolvidos e colocados em prática pela Unasul e seu Conselho de Defesa Sul Americano (CDS) desde 2008 até 2017, de forma a compreender a contribuição da organização para a prevenção de conflitos na América do Sul. Em vista a realizá-lo será operacionalizado o que se entende por diplomacia preventiva e empreendida pesquisa documental das decisões, declarações, resoluções, disposições e comunicados da Unasul de 2008 a 2017',
    palavrasChave:['Prevenção de Conflitos',' América do Sul',' Unasul',' CDS'],
    link:'https://doi.org/10.22456/2178-8839.83100'}

]




function Articles(props){

    const content = props.listaDeArtigos.map((article) =>
        <div key={article.id} id='article-box-content' className='article-box-content'>

            <h3 className='article-title'>{article.title}</h3>
            <p className='article-authors'>{article.autores.join()}</p>
            {/* <p><a href={article.link}>{article.periodico}</a></p> */}
            <p className='article-resumo'>{article.resumo} <a className='r-link link text-underlined' href={article.link}>Saiba Mais </a></p>
            <p className='article-keywords'><span id='keywords-label' className='keywords-label'>Palavras-chave:</span> {article.palavrasChave.join()}</p>    
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
            <div id='app'>
                <h1 id='page-title' className='page-title'>Produções Selecionadas <img id='h1-svg' className='h1-svg' src='../resources/artigo.svg'></img></h1>
                <Articles listaDeArtigos={artigos}/>
            </div>
        )
    }
}
render(
    <App/>,
    d3.select('#root').node()
)







