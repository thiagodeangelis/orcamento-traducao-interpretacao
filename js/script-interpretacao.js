// ====================================================
// SCRIPT PARA CALCULAR ORÇAMENTO DE INTERPRETAÇÃO
// ====================================================

function calcularOrcamento() {
    
    // ====================================================
    //  CAPTURANDO OS DADOS DO FORMULÁRIO
    // ====================================================
    
    // Pegando o nome do evento e removendo espaços extras
    let nomeEvento = document.getElementById("titulo-material").value.trim();
    
    // Pegando o tipo de evento selecionado
    const tipoEvento = document.getElementById("tipoEvento").value;
    
    // Convertendo o tempo para número
    const tempoEventoMinutos = Number(document.getElementById("tempo-minutos").value);
    
    // Pegando o endereço e removendo espaços extras
    let enderecoEvento = document.getElementById("enderecoEvento").value.trim();
    
    // Verificando se o evento será gravado (true ou false)
    const eventoSeraGravado = document.getElementById("gravadoSwitch").checked;

    
    // ====================================================
    //  VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS
    // ====================================================
    
    // Se algum campo obrigatório estiver vazio, mostra erro
    if (tipoEvento === "" || tempoEventoMinutos === 0) {
        const toastErro = document.getElementById('msgErro');
        const mensagemToast = new bootstrap.Toast(toastErro);
        mensagemToast.show();
        return; // Para a execução da função
    }

    
    // ====================================================
    //  PREENCHENDO CAMPOS NÃO OBRIGATÓRIOS
    // ====================================================
    
    // Se o nome do evento estiver vazio, coloca "Não se aplica"
    if (nomeEvento === "") {
        nomeEvento = "~ Não se aplica ~";
    }

    // Se o endereço estiver vazio, coloca "Não se aplica"
    if (enderecoEvento === "") {
        enderecoEvento = "~ Não se aplica ~";
    }

    
    // ====================================================
    //  CÁLCULO DO VALOR DA HORA
    // ====================================================
    
    // Valor padrão por hora
    let valorPorHora = 144;
    
    // Se for evento artístico/cultural, o valor é maior
    if (tipoEvento === "Artístico/Cultural") {
        valorPorHora = 192;
    }

    
    // ====================================================
    //  DEFININDO QUANTIDADE DE INTÉRPRETES
    // ====================================================
    
    // Por padrão, 1 intérprete
    let quantidadeInterpretes = 1;
    
    // Se o evento durar mais de 60 minutos, precisa de 2 intérpretes
    if (tempoEventoMinutos > 60 && tempoEventoMinutos <= 360) {
        quantidadeInterpretes = 2;
    }

    
    // ====================================================
    //  CALCULANDO O VALOR TOTAL DAS HORAS
    // ====================================================
    
    // Convertendo minutos para horas (exemplo: 90min = 1.5h)
    const tempoTotalEmHoras = tempoEventoMinutos / 60;
    
    // Multiplicando: valor da hora × quantidade de intérpretes × tempo
    const valorTotalHoras = valorPorHora * quantidadeInterpretes * tempoTotalEmHoras;

    
    // ====================================================
    //  CALCULANDO O DIREITO DE IMAGEM
    // ====================================================
    
    // Começa com 0%
    let porcentagemDireitoImagem = 0;
    
    // Se o evento for gravado, adiciona 10% de direito de imagem
    if (eventoSeraGravado === true) {
        porcentagemDireitoImagem = 10;
    }
    
    // Calculando o valor do direito de imagem
    const valorDireitoImagem = (valorTotalHoras * porcentagemDireitoImagem) / 100;

    
    // ====================================================
    //  CALCULANDO SUBTOTAL E IMPOSTOS
    // ====================================================
    
    // Somando horas trabalhadas + direito de imagem
    const subtotal = valorTotalHoras + valorDireitoImagem;
    
    // Calculando 15,5% de impostos sobre o subtotal
    const valorImpostos = subtotal * 0.155;
    
    // Somando tudo para o valor final
    const valorFinalOrcamento = subtotal + valorImpostos;

    
    // ====================================================
    // PREPARANDO A URL PARA ENVIAR OS DADOS
    // ====================================================
    
    // Criando a URL da página de orçamento
    const urlOrcamento = new URL("orcamento.html", window.location.href);
    
    // Adicionando o tipo de serviço
    urlOrcamento.searchParams.append("servico", "interpretacao");

    // Adicionando as informações do evento
    urlOrcamento.searchParams.append("nomeEvento", nomeEvento);
    urlOrcamento.searchParams.append("tipoEvento", tipoEvento);
    urlOrcamento.searchParams.append("tempoEvento", tempoEventoMinutos);
    urlOrcamento.searchParams.append("endereco", enderecoEvento);
    urlOrcamento.searchParams.append("gravado", eventoSeraGravado);

    // Adicionando os valores calculados (com 2 casas decimais)
    urlOrcamento.searchParams.append("valorHora", valorPorHora.toFixed(2));
    urlOrcamento.searchParams.append("qtdInterpretes", quantidadeInterpretes);
    urlOrcamento.searchParams.append("totalHoras", valorTotalHoras.toFixed(2));
    urlOrcamento.searchParams.append("porcentagemDireito", porcentagemDireitoImagem);
    urlOrcamento.searchParams.append("valorDireito", valorDireitoImagem.toFixed(2));
    urlOrcamento.searchParams.append("impostos", valorImpostos.toFixed(2));
    urlOrcamento.searchParams.append("totalFinal", valorFinalOrcamento.toFixed(2));

    
    // ====================================================
    //  REDIRECIONANDO PARA A PÁGINA DE ORÇAMENTO
    // ====================================================
    
    window.location.href = urlOrcamento;
}