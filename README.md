# 📊 Sistema de Orçamento - Tradução e Interpretação em Libras

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
</p>

---

## 📋 Sobre o Projeto

Sistema web desenvolvido para **automatizar o cálculo de orçamentos** de serviços de **Tradução** e **Interpretação em Libras**. A aplicação foi criada para atender empresas que prestam esses serviços, facilitando a geração de propostas comerciais precisas e profissionais.

O projeto implementa **regras de negócio reais** utilizadas no mercado de acessibilidade e inclusão, considerando fatores como:
- Tempo de serviço
- Quantidade de profissionais necessários
- Direitos de imagem
- Impostos e taxas

---

## 🎯 Funcionalidades

### ✅ Página Inicial
- Seleção clara entre **Interpretação** ou **Tradução**
- Interface amigável e responsiva
- Design moderno com Bootstrap 5

### ✅ Orçamento de Interpretação
**Dados coletados:**
- Nome do evento (opcional)
- Tipo de evento (Jurídico, Educação, Artístico/Cultural, Vídeo Conferência)
- Tempo do evento (minutos)
- Endereço (opcional)
- Se será gravado (checkbox)

**Cálculos automáticos:**
- ✔ Valor por hora: R$ 144,00 (eventos padrão) ou R$ 192,00 (artístico/cultural)
- ✔ Quantidade de intérpretes: 1 (até 60min) ou 2 (61-360min)
- ✔ Acréscimo de direito de imagem: 10% (se gravado)
- ✔ Impostos: 15,5% sobre o subtotal
- ✔ **Total final detalhado**

### ✅ Orçamento de Tradução
**Dados coletados:**
- Título do material (opcional)
- Tipo de material (VideoBook, TV, Propaganda, Filme, Documentário)
- Tempo total (minutos)
- Possui legendagem? (checkbox)
- Tipo de edição (Simples/Completa)
- Descrição (opcional)

**Cálculos automáticos:**
- ✔ Valor por minuto: R$ 60,00 (sem legenda) / R$ 96,00 (com legenda) / R$ 250,00 (propaganda/TV)
- ✔ Acréscimo de direito de imagem: 30%
- ✔ Impostos: 15,5% sobre o subtotal
- ✔ **Total final detalhado**

### ✅ Página de Orçamento
- Exibição profissional dos dados
- Conversão automática de minutos para "Xh Ymin"
- Campos não preenchidos aparecem como "~ Não se aplica ~"
- Botão de impressão otimizado
- Layout responsivo e pronto para apresentação

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| HTML5 | - | Estrutura das páginas |
| CSS3 | - | Estilização personalizada |
| JavaScript | ES6 | Lógica de cálculo e validação |
| Bootstrap | 5.3.3 | Framework CSS responsivo |
| Bootstrap Icons | 1.10.5 | Ícones da interface |

---

## 📁 Estrutura do Projeto

```
projeto-orcamento/
│
├── index.html                 # Página inicial
├── interpretacao.html         # Formulário de interpretação
├── traducao.html             # Formulário de tradução
├── orcamento.html            # Página de exibição do orçamento
│
├── css/
│   ├── style-interpretacao-traducao.css     # Estilos personalizados para as páginas interpretação e Tradução
│   ├── style-orcamento.css                  # Estilos personalizados para a página de orçamento
│   └── style.css                            # Estilos personalizados para o index
│
├── js/
│   ├── script-interpretacao.js   # Lógica de interpretação
│   └── script-traducao.js        # Lógica de tradução
│
└── README.md                 # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Nenhuma instalação adicional necessária!

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/thiagodeangelis/orcamento-traducao-interpretacao.git
```

2. **Navegue até a pasta**
```bash
cd orcamento-traducao-interpretacao
```

3. **Abra o arquivo index.html**
- Clique duas vezes no arquivo `index.html`
- Ou abra com o seu navegador preferido

4. **Pronto!** 🎉
- O sistema está rodando localmente

---

## 📊 Regras de Cálculo

### 🎤 Interpretação

#### Valor da Hora
```
Evento padrão:           R$ 144,00/hora
Artístico/Cultural:      R$ 192,00/hora
```

#### Quantidade de Intérpretes
```
0 - 60 minutos:         1 intérprete
61 - 360 minutos:       2 intérpretes
```

#### Direito de Imagem
```
Evento não gravado:     0%
Evento gravado:         +10%
```

#### Fórmula Final
```
Subtotal = (Valor da Hora × Qtd. Intérpretes × Tempo em Horas) + Direito de Imagem
Impostos = Subtotal × 15,5%
Total = Subtotal + Impostos
```

---

### 🎬 Tradução

#### Valor por Minuto
```
Filme/Documentário/VideoBook (sem legenda):    R$ 60,00/min
Filme/Documentário/VideoBook (com legenda):    R$ 96,00/min
Propaganda/Programa de TV:                     R$ 250,00/min
```

#### Direito de Imagem
```
Sempre:                 +30%
```

#### Fórmula Final
```
Valor Base = Valor por Minuto × Tempo Total
Direito de Imagem = Valor Base × 30%
Subtotal = Valor Base + Direito de Imagem
Impostos = Subtotal × 15,5%
Total = Subtotal + Impostos
```

---

## 💡 Destaques do Código

### ✨ Código Limpo e Comentado
- Variáveis com nomes sugestivos
- Comentários explicativos em cada etapa
- Organização clara por seções

### ✨ Validação de Formulários
- Toast do Bootstrap para mensagens de erro
- Verificação de campos obrigatórios
- Feedback visual imediato

### ✨ Comunicação entre Páginas
- Uso de URL Parameters (GET)
- Dados preservados durante a navegação
- Fácil compartilhamento de orçamentos

### ✨ Design Responsivo
- Adaptável a mobile, tablet e desktop
- Modo de impressão otimizado
- Interface profissional e moderna

---

## 📱 Responsividade

O sistema foi desenvolvido com **Mobile First** e funciona perfeitamente em:

- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Notebooks (1024px+)
- 🖥️ Desktops (1440px+)

---

## 🖨️ Modo de Impressão

A página de orçamento possui:
- ✅ Layout otimizado para A4
- ✅ Remoção de elementos desnecessários
- ✅ Cores ajustadas para impressão
- ✅ Espaçamento reduzido

---

## 🎓 Conceitos Aplicados

### JavaScript
- ✔ Manipulação do DOM
- ✔ Validação de formulários
- ✔ Cálculos matemáticos
- ✔ URL Parameters
- ✔ Estruturas condicionais (if/else)
- ✔ Funções

### HTML/CSS
- ✔ Formulários semânticos
- ✔ Flexbox e Grid
- ✔ Media Queries
- ✔ Bootstrap 5

---

## 📝 Melhorias Futuras

- [ ] Adicionar banco de dados para histórico
- [ ] Implementar geração de PDF
- [ ] Criar sistema de login
- [ ] Adicionar edição de orçamentos
- [ ] Implementar envio por e-mail
- [ ] Adicionar mais tipos de serviços

---

## 👨‍💻 Autores

**Thiago De Angelis**
- GitHub: [@thiagodeangelis](https://github.com/thiagodeangelis)
- LinkedIn: [Thiago De Angelis](https://www.linkedin.com/in/thiagodeangelis/)
- E-mail: thiagodevangelis@gmail.com

---

**Diego Manoel**
- GitHub: [@diegommcosta](https://github.com/diegommcosta)
- LinkedIn: [Diego Manoel](https://www.linkedin.com/in/diego-manoel/)
- E-mail: diegomanoelmcosta@gmail.com


---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- Bootstrap pela framework CSS
- Bootstrap Icons pelos ícones
- Comunidade de desenvolvedores

---

<p align="center">
  Feito com ❤️ e ☕
</p>