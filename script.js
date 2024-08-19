const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia,todas as dúvidas de que uma pode ter, ele também gera imagens e áudios hiper-realistas.qual o primeiro pensamento?",
    alternativas: [ 
         "alternativa 1",
        "aternativa 2",
     ]
},
{    enunciado: "Com a descoberta desta tecnologia, chamada inteligência artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aula sobra elaIA. Escreva uma trabalho em sala de aula. qual atitude você toma?"

    alternativas: [
        "Utilizar uma ferramenta de buscar na innternet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e exprique numa linguagem que facilite o entendimento",
        "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
    ]
},
{
    enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre ",
    alternativas: [
        "Alternativa 1",
        "Atenativa 2",
    ]
},

];