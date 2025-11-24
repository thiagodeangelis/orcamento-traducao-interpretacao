// ====================================================
// SCRIPT PARA CALCULAR ORÇAMENTO DE TRADUÇÃO
// ====================================================

function calcularOrcamento() {
    
    // ====================================================
    //  CAPTURANDO OS DADOS DO FORMULÁRIO
    // ====================================================
    
    // Pegando o título do material e removendo espaços extras
    let tituloMaterial = document.getElementById("titulo-material").value.trim();
    
    // Pegando o tipo de material selecionado
    const tipoMaterial = document.getElementById("tipo-material").value;
    
    // Convertendo o tempo para número
    const tempoTotalMinutos = Number(document.getElementById("tempo-minutos").value);
    
    // Verificando se terá legendagem (true ou false)
    const possuiLegendagem = document.getElementById("legendagem").checked;
    
    // Pegando o tipo de edição
    const tipoEdicao = document.getElementById("tipo-edicao").value;
    
    // Pegando a descrição (campo opcional)
    const descricaoMaterial = document.getElementById("descricao").value.trim();

    
    // ====================================================
    //  VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS
    // ====================================================
    
    // Se algum campo obrigatório estiver vazio, mostra erro
    if (tipoMaterial === "" || tempoTotalMinutos === 0 || tipoEdicao === "") {
        const toastErro = document.getElementById('msgErro');
        const mensagemToast = new bootstrap.Toast(toastErro);
        mensagemToast.show();
        return; // Para a execução da função
    }

    
    // ====================================================
    //  PREENCHENDO CAMPO NÃO OBRIGATÓRIO
    // ====================================================
    
    // Se o título estiver vazio, coloca "Não se aplica"
    if (tituloMaterial === "") {
        tituloMaterial = "~ Não se aplica ~";
    }
    

    // ====================================================
    //  CALCULANDO O VALOR POR MINUTO
    // ====================================================
    
    // Começa com valor zerado
    let valorPorMinuto = 0;

    // Verificando o tipo de material para definir o preço
    if (tipoMaterial === "filme" || tipoMaterial === "documentario" || tipoMaterial === "videobook") {
        
        // Se tiver legendagem, custa R$ 96 por minuto
        if (possuiLegendagem === true) {
            valorPorMinuto = 96;
        } else {
            // Sem legendagem, custa R$ 60 por minuto
            valorPorMinuto = 60;
        }
        
    } else if (tipoMaterial === "propaganda" || tipoMaterial === "programa_tv") {
        // Propaganda e programa de TV custam R$ 250 por minuto
        valorPorMinuto = 250;
    }

    
    // ====================================================
    //  CALCULANDO O VALOR TOTAL BASE
    // ====================================================
    
    // Multiplicando o valor por minuto pelo tempo total
    const valorTotalBase = valorPorMinuto * tempoTotalMinutos;

    
    // ====================================================
    //  CALCULANDO O DIREITO DE IMAGEM
    // ====================================================
    
    // Direito de imagem é sempre 30% para tradução
    const porcentagemDireitoImagem = 30;
    
    // Calculando 30% do valor total base
    const valorDireitoImagem = (valorTotalBase * porcentagemDireitoImagem) / 100;

    
    // ====================================================
    //  CALCULANDO SUBTOTAL E IMPOSTOS
    // ====================================================
    
    // Somando valor base + direito de imagem
    const subtotal = valorTotalBase + valorDireitoImagem;

    // Calculando 15,5% de impostos sobre o subtotal
    const valorImpostos = subtotal * 0.155;

    // Somando tudo para o valor final
    const valorFinalOrcamento = subtotal + valorImpostos;

    
    // ====================================================
    //  FORMATANDO O TIPO DE MATERIAL
    // ====================================================
    
    let tipoMaterialFormatado = "";
    
    if (tipoMaterial === "videobook") {
        tipoMaterialFormatado = "VideoBook";
    } else if (tipoMaterial === "programa_tv") {
        tipoMaterialFormatado = "Programa de TV";
    } else if (tipoMaterial === "propaganda") {
        tipoMaterialFormatado = "Propaganda de Marcas";
    } else if (tipoMaterial === "filme") {
        tipoMaterialFormatado = "Filme";
    } else if (tipoMaterial === "documentario") {
        tipoMaterialFormatado = "Documentário";
    }

    
    // ====================================================
    //  FORMATANDO O TIPO DE EDIÇÃO
    // ====================================================
    
    let tipoEdicaoFormatado = "";
    
    if (tipoEdicao === "simples") {
        tipoEdicaoFormatado = "Edição Simples";
    } else if (tipoEdicao === "completa") {
        tipoEdicaoFormatado = "Edição Completa";
    }

    
    // ====================================================
    //  VERIFICANDO A DESCRIÇÃO
    // ====================================================
    
    let descricaoFinal = "";
    
    // Se não tiver descrição, coloca mensagem padrão
    if (descricaoMaterial === "") {
        descricaoFinal = "Nenhuma descrição fornecida";
    } else {
        descricaoFinal = descricaoMaterial;
    }

    
    // ====================================================
    //  PREPARANDO A URL PARA ENVIAR OS DADOS
    // ====================================================
    
    // Criando a URL da página de orçamento
    const urlOrcamento = new URL("orcamento.html", window.location.href);
    
    // Adicionando o tipo de serviço
    urlOrcamento.searchParams.append("servico", "traducao");

    // Adicionando as informações do material
    urlOrcamento.searchParams.append("tituloMaterial", tituloMaterial);
    urlOrcamento.searchParams.append("tipoMaterial", tipoMaterialFormatado);
    urlOrcamento.searchParams.append("tempoMinutos", tempoTotalMinutos);
    urlOrcamento.searchParams.append("legendagem", possuiLegendagem);
    urlOrcamento.searchParams.append("tipoEdicao", tipoEdicaoFormatado);
    urlOrcamento.searchParams.append("descricao", descricaoFinal);

    // Adicionando os valores calculados (com 2 casas decimais)
    urlOrcamento.searchParams.append("valorMinuto", valorPorMinuto.toFixed(2));
    urlOrcamento.searchParams.append("valorTotal", valorTotalBase.toFixed(2));
    urlOrcamento.searchParams.append("porcentagemDireito", porcentagemDireitoImagem);
    urlOrcamento.searchParams.append("valorDireito", valorDireitoImagem.toFixed(2));
    urlOrcamento.searchParams.append("impostos", valorImpostos.toFixed(2));
    urlOrcamento.searchParams.append("totalFinal", valorFinalOrcamento.toFixed(2));

    
    // ====================================================
    //  REDIRECIONANDO PARA A PÁGINA DE ORÇAMENTO
    // ====================================================
    
    window.location.href = urlOrcamento;
}