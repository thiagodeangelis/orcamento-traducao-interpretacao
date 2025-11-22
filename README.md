# 📊 Orçamento de Tradução e Interpretação em Libras  
Aplicação web desenvolvida para gerar orçamentos completos de serviços de **Tradução** e **Interpretação em Libras**, com base em regras profissionais de cálculo e cenários reais de prestação de serviços.

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20Bootstrap%20%7C%20JS-orange?style=for-the-badge"/>
</p>

---

## 🚀 Visão Geral

Este projeto foi desenvolvido como parte de um trabalho prático do curso de **Desenvolvimento Web**, simulando uma solução profissional utilizada em empresas que prestam serviços de tradução e interpretação.  
A aplicação oferece uma experiência simples, intuitiva e robusta para gerar valores detalhados de orçamento com base nas informações fornecidas pelo usuário.

O sistema contempla duas modalidades principais:

- **Interpretação em Libras**
- **Tradução de Materiais Audiovisuais**

Cada categoria possui regras específicas de cálculo envolvendo tempo, quantidade de profissionais, direitos de imagem e impostos.

---

## 🖥️ Demonstração
*Adicione aqui um print da interface ou link para GitHub Pages quando publicar.*

---

## 📌 Funcionalidades Principais

### ✔ Seleção de serviço
- Escolha entre **Interpretação** ou **Tradução** diretamente na página inicial.

### ✔ Formulários dinâmicos
- Campos específicos para cada modalidade.
- Layout limpo, responsivo e acessível.

### ✔ Cálculo automático do orçamento
Baseado nas regras do projeto:
- Tempo total  
- Quantidade de profissionais  
- Valor por hora ou minuto  
- Direito de imagem (% adicional)  
- Imposto descontado (15,5%)  
- Valor final detalhado  

### ✔ Exibição completa dos resultados
- Painel de cálculo com todos os valores utilizados.
- Perfeito para fins administrativos ou apresentação ao cliente.

---

## 🧮 Regras de Cálculo

### 🟦 **1. Interpretação**

#### 📥 Dados solicitados:
- Nome do evento  
- Tipo (Jurídico, Educação, Cultural/Artístico, Videoconferência)  
- Tempo total  
- Evento será gravado? (Sim/Não)  
- Endereço  

#### 🧠 Regras:
##### **Valor da Hora**
- Até **60 min** → 1 profissional → R$ 144/h  
- Entre **61 e 360 min** → 2 profissionais → R$ 144/h cada  
- Eventos **Artístico-Culturais** → R$ 192/h por profissional  

##### **Direito de Imagem**
Se houver gravação: acréscimo = 10% do valor total



##### **Saídas da aplicação**
- Valor da hora por intérprete  
- Quantidade de intérpretes  
- Tempo total em horas  
- Valor total das horas  
- Porcentagem adicional (10%)  
- Total final  
- Impostos (15,5%)  

---

### 🟦 **2. Tradução**

#### 📥 Dados solicitados:
- Título do material  
- Tipo (VideoBook, TV, Propaganda, Filme, Documentário)  
- Tempo total em minutos  
- Possui legendagem?  
- Tipo de edição (Simples / Completa)  
- Descrição (opcional)

#### 🧠 Regras:
##### **Valor por minuto**
- Filmes, documentários e videobooks → **R$ 60/min**  
- Caso haja legendagem → **R$ 96/min**  
- Propaganda e similares → **R$ 250/min**

##### **Direito de Imagem**
Acrescentar:
30% do valor total


##### **Saídas**
- Valor por minuto  
- Tempo total  
- Valor base  
- Acréscimo de 30%  
- Total final  
- Impostos (15,5%)  

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript**
- Design responsivo e acessível

---

## 📁 Estrutura do Projeto

/
|-- index.html
|-- interpretacao.html
|-- traducao.html
|-- css/
| └── style.css
|-- js/
| └── script.js
|-- assets/
└── imagens, logos...


---

## ▶️ Como Executar

1. Clone este repositório:
```bash
git clone https://github.com/thiagodeangelis/orcamento-traducao-interpretacao

cd orcamento-traducao-interpretacao

