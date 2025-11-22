document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formInterpretacao");
    const btnCalcular = document.getElementById("btnCalcular");

    // Elementos do modal
    const rValorHora = document.getElementById("resultValorHora");
    const rQtdInterpretes = document.getElementById("resultQtdInterpretes");
    const rTempo = document.getElementById("resultTempo");
    const rTotalHoras = document.getElementById("resultTotalHoras");
    const rDireito = document.getElementById("resultDireito");
    const rTotalPagar = document.getElementById("resultTotalPagar");
    const rImpostos = document.getElementById("resultImpostos");

    // Toast de erro
    const toastErro = document.getElementById("toastErro");
    const toast = new bootstrap.Toast(toastErro);

    btnCalcular.addEventListener("click", function (e) {
        e.preventDefault();

        // Coletando campos
        const nomeEvento = form.querySelector("#nomeEvento").value.trim();
        const tipoEvento = form.querySelector("#tipoEvento").value;
        const tempoStr = form.querySelector("#tempoEvento").value;
        const endereco = form.querySelector("#enderecoEvento").value.trim();
        const gravado = document.getElementById("gravadoSwitch").checked;

        // ==========================
        //      VALIDAÇÃO
        // ==========================
        if (nomeEvento === "" ||
            tipoEvento === "" ||
            tempoStr === "" ||
            endereco === "") 
        {
            toast.show();
            return;
        }

        const tempo = Number(tempoStr);

        if (isNaN(tempo) || tempo <= 0) {
            toast.show();
            return;
        }

        // ==========================
        //  DEFINIÇÃO DE VALORES
        // ==========================

        let valorHora = 144;  // padrão
        if (tipoEvento === "Artístico/Cultural") {
            valorHora = 192; // regra especial
        }

        let quantidadeInterpretes = 1;
        if (tempo > 1 && tempo <= 6) {
            quantidadeInterpretes = 2;
        }

        // ==========================
        //      CÁLCULOS
        // ==========================

        const totalHoras = valorHora * quantidadeInterpretes * tempo;

        // Direito de imagem: 10% se gravado, 0% se não gravado
        let porcentagemDireito = 0;
        if (gravado === true) {
            porcentagemDireito = 10;
        }

        const valorDireito = (totalHoras * porcentagemDireito) / 100;

        const totalPagar = totalHoras + valorDireito;

        const impostos = totalPagar * 0.155;

        // ==========================
        //  ENVIAR PRO MODAL
        // ==========================

        rValorHora.textContent = "R$ " + valorHora.toFixed(2);
        rQtdInterpretes.textContent = quantidadeInterpretes;
        rTempo.textContent = tempo + " hora(s)";
        rTotalHoras.textContent = "R$ " + totalHoras.toFixed(2);
        rDireito.textContent = porcentagemDireito + "%";
        rTotalPagar.textContent = "R$ " + totalPagar.toFixed(2);
        rImpostos.textContent = "R$ " + impostos.toFixed(2);

        // Abre modal depois da validação
        const modal = new bootstrap.Modal(document.getElementById("resultadoModal"));
        modal.show();

    });
});
