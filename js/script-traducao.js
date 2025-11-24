// SCRIPT PARA A PÁGINA DE TRADUÇÃO

function calcularOrcamento() {
    // Pegando os valores dos campos do formulário + comando trim para remover espaços em brancos no começo e fim dos campos
    let tituloMaterial = document.getElementById("titulo-material").value.trim();
    const tipoMaterial = document.getElementById("tipo-material").value;
    const tempoMinutos = Number(document.getElementById("tempo-minutos").value);
    const legendagem = document.getElementById("legendagem").checked;
    const tipoEdicao = document.getElementById("tipo-edicao").value;
    const descricao = document.getElementById("descricao").value.trim();

    // Verificando se todos os campos obrigatórios foram preenchidos
    if ( tipoMaterial === "" || tempoMinutos === 0 || tipoEdicao === "") {
        // Mostrando mensagem de erro
        const toastElement = document.getElementById('msgErro');
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
        return;
    }


    if(tituloMaterial === ""){

        tituloMaterial = "~ Não se aplica ~"
    }
    

    // Calculando o valor por minuto
    let valorMinuto = 0;

    // Verificando o tipo de material para definir o preço
    if (tipoMaterial === "filme" || tipoMaterial === "documentario" || tipoMaterial === "videobook") {
        // Filmes, documentários e videoBooks
        
        if (legendagem === true) {
            valorMinuto = 96;
        } else {
            valorMinuto = 60;
        }
    } else if (tipoMaterial === "propaganda" || tipoMaterial === "programa_tv") {
        // Propaganda de marcas e programa de TV
        valorMinuto = 250;
    }

    // Calculando o valor total base
    const valorTotal = valorMinuto * tempoMinutos;

    // Calculando o direito de imagem (30% do valor total)
    const porcentagemDireito = 30;
    const valorDireito = (valorTotal * porcentagemDireito) / 100;

    // Calculando o subtotal (antes dos impostos)
    const subtotal = valorTotal + valorDireito;

    // Calculando os impostos (15,5%)
    const impostos = subtotal * 0.155;

    // Calculando o total final
    const totalFinal = subtotal + impostos;

    // Formatando o nome do tipo de material
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

    // Formatando o tipo de edição
    let tipoEdicaoFormatado = "";
    
    if (tipoEdicao === "simples") {
        tipoEdicaoFormatado = "Edição Simples";
    } else if (tipoEdicao === "completa") {
        tipoEdicaoFormatado = "Edição Completa";
    }

    // Verificando se tem descrição
    let descricaoFinal = "";
    
    if (descricao === "") {
        descricaoFinal = "Nenhuma descrição fornecida";
    } else {
        descricaoFinal = descricao;
    }

    // Criando a URL para a página de orçamento
    const url = new URL("orcamento.html", window.location.href);
    
    // Adicionando o tipo de serviço
    url.searchParams.append("servico", "traducao");

    // Adicionando as informações do material
    url.searchParams.append("tituloMaterial", tituloMaterial);
    url.searchParams.append("tipoMaterial", tipoMaterialFormatado);
    url.searchParams.append("tempoMinutos", tempoMinutos);
    url.searchParams.append("legendagem", legendagem);
    url.searchParams.append("tipoEdicao", tipoEdicaoFormatado);
    url.searchParams.append("descricao", descricaoFinal);

    // Adicionando os valores calculados
    url.searchParams.append("valorMinuto", valorMinuto.toFixed(2));
    url.searchParams.append("valorTotal", valorTotal.toFixed(2));
    url.searchParams.append("porcentagemDireito", porcentagemDireito);
    url.searchParams.append("valorDireito", valorDireito.toFixed(2));
    url.searchParams.append("impostos", impostos.toFixed(2));
    url.searchParams.append("totalFinal", totalFinal.toFixed(2));

    // Indo para a página de orçamento
    window.location.href = url;
}