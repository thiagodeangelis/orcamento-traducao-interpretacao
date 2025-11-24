// SCRIPT PARA A PÁGINA DE INTERPRETAÇÃO

function calcularOrcamento() {
    // Pegando os valores dos campos do formulário + comando trim para remover espaços em brancos no começo e fim dos campos
    let nomeEvento = document.getElementById("titulo-material").value.trim();
    const tipoEvento = document.getElementById("tipoEvento").value;
    const tempoEvento = Number(document.getElementById("tempo-minutos").value);
    let endereco = document.getElementById("enderecoEvento").value.trim();
    const gravado = document.getElementById("gravadoSwitch").checked;

    // Verificando se os campos obrigatórios foram preenchidos
    if ( tipoEvento === "" || tempoEvento === 0 ) {
        // Mostrando mensagem de erro
        const toastElement = document.getElementById('msgErro');
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
        return;
    }


    //Deixei os campos nomeEvento e endereco não obrigatórios para deixar o usuário a vontade de calcular orçamento

    //Fazendo if's para aparecer no preenchimento do orçamento caso os campos nomeEvento e endereco estejam vazios

    if(nomeEvento === ""){

        nomeEvento = "~ Não se aplica ~";
        
    }

    if(endereco === ""){

        endereco = "~ Não se aplica ~";
        
    }

    // Calculando o valor da hora
    let valorHora = 144;
    
    // Se for evento artístico/cultural, o valor é diferente
    if (tipoEvento === "Artístico/Cultural") {
        valorHora = 192;
    }

    // Definindo a quantidade de intérpretes necessários
    let qtdInterpretes = 1;
    
    // Se o evento durar mais de 60 minutos e menos de 360 minutos
    if (tempoEvento > 60 && tempoEvento <= 360) {
        qtdInterpretes = 2;
    }

    // Convertendo minutos para horas
    const horasTotais = tempoEvento / 60;
    
    // Calculando o total de horas trabalhadas
    const totalHoras = valorHora * qtdInterpretes * horasTotais;

    // Calculando o direito de imagem
    let porcentagemDireito = 0;
    
    // Se o evento for gravado, adiciona 10%
    if (gravado === true) {
        porcentagemDireito = 0.1;
    }
    
    const valorDireito = totalHoras * porcentagemDireito

    // Calculando o subtotal (antes dos impostos)
    const subtotal = totalHoras + valorDireito;
    
    // Calculando os impostos (15,5%)
    const impostos = subtotal * 0.155;
    
    // Calculando o total final
    const totalFinal = subtotal + impostos;

    // Criando a URL para a página de orçamento
    const url = new URL("orcamento.html", window.location.href);
    
    // Adicionando o tipo de serviço
    url.searchParams.append("servico", "interpretacao");

    // Adicionando as informações do evento
    url.searchParams.append("nomeEvento", nomeEvento);
    url.searchParams.append("tipoEvento", tipoEvento);
    url.searchParams.append("tempoEvento", tempoEvento);
    url.searchParams.append("endereco", endereco);
    url.searchParams.append("gravado", gravado);

    // Adicionando os valores calculados
    url.searchParams.append("valorHora", valorHora.toFixed(2));
    url.searchParams.append("qtdInterpretes", qtdInterpretes);
    url.searchParams.append("totalHoras", totalHoras.toFixed(2));
    url.searchParams.append("porcentagemDireito", porcentagemDireito);
    url.searchParams.append("valorDireito", valorDireito.toFixed(2));
    url.searchParams.append("impostos", impostos.toFixed(2));
    url.searchParams.append("totalFinal", totalFinal.toFixed(2));

    // Indo para a página de orçamento
    window.location.href = url;
}