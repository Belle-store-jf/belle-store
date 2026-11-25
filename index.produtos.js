const categorias = {
    "perfumes": {
        nome: "Perfumes",
        subcategorias: {
            "feminino": "Feminino",
            "masculino": "Masculino",
        }
    },
    "cabelo": { 
        nome: "Cabelo",
        subcategorias: {
            "oleos-capilares": "Óleos capilares",
            "mascaras-capilares": "Máscaras capilares",
            "shampoo-e-condicionador": "Shampoo e condicionador",
        }
    },
    "maquiagem":     { 
        nome: "Maquiagem", 
    },
    "corpo-e-banho": { 
        nome: "Corpo e banho",
        subcategorias: {
            "body-splash": "Body splash",
            "spray-intimo": "Spray íntimo",
            "sabonetes": "Sabonetes",
            "hidratantes": "Hidratante corporal",
        }
    },
    "skin-care":     { 
        nome: "Skin care",
    },
    "kids":          { 
        nome: "Kids",
    },
    "kits":          { 
        nome: "Kits",
     }
};

const produtos = [
    {
        nome: "Óleo Em Creme Sige Nutri Acid.Complex 100ML",
        marca: "Eudora",
        categoria: "cabelo",
        subcategoria: "oleos-capilares",
        preco: 69.99,
        descricao: "Nutrição e proteção para cabelos ressecados. Controla o frizz, protege do calor e deixa os fios mais brilhantes.",
        foto: "imagens/oleo-creme-sige-nutri-acid-complex.jpg"
    },
    {
        nome:"Argan Oil Sige Reconstrói Os Fios 60Ml",
        marca: "Eudora",
        categoria: "cabelo",
        subcategoria: "oleos-capilares",
        preco: 84.99,
        descricao: "Argan Oil: Reconstrói os fios no 1° uso, 96h de controle do frizz e fios fortes. Ideal para cabelos quebradiços.",
        foto: "imagens/argan-oil-sige-reconstroi-fios.jpg"
    },
    {
       nome: "Óleo Nutritivo Sige Ultra Bond Reset Light Oil 60Ml", 
       marca: "Eudora",
       categoria: "cabelo",
       subcategoria: "oleos-capilares",
       preco: 84.99,
       descricao: "Óleo capilar com ação 5 em 1 que reconstrói pontes capilares com uma fórmula leve e de baixa viscosidade.",
       foto: "imagens/oleo-nutritivo-sige-ultra-bond.jpg"
    },
    {
        nome: "Supreme Oil Siàge Nutri Rosé 60Ml",
        marca: "Eudora",
        categoria: "cabelo",
        subcategoria: "oleos-capilares",
        preco: 79.99,
        descricao: "Óleo nutritivo Siàge Nutri Rosé com partículas de brilho rosé, proteção térmica e fios mais macios.",
        foto: "imagens/supreme-oil-siage-nutri-rose-60ml.jpg"
    },
    {
        nome: "Óleo Nutritivo Siàge Nutri Diamond 60Ml",
        marca: "Eudora",
        categoria: "cabelo",
        subcategoria: "oleos-capilares",
        preco: 82.99,
        descricao: "Óleo Siàge Nutri Diamond: nutrição luxuosa com brilho de diamante e proteção térmica para pontas seladas.",
        foto: "imagens/oleo-nutritivo-siage-nutri-diamond.jpg"
    },
    {
        nome: "Máscara Condicionante Nutrição Iluminadora Lily L’Or 200Ml",
        marca: "Eudora",
        categoria: "cabelo",
        subcategoria: "mascaras-capilares",
        preco: 65.09,
        descricao: "Nutrição profunda e aveludada por 72 horas e fios 100% mais luminosos¹, com a fragrância de Lily L’Or.",
        foto: "imagens/mascara-condicionante-nutricao.jpg"
    },
    {
        nome: "Shampoo Nutrição Iluminadora Lily L’Or 250Ml",
        marca: "Eudora",
        categoria: "cabelo",
        subcategoria: "shampoo-e-condicionador",
        preco: 52.00,
        descricao: "Com a mesma fragrância marcante do Elixir de Lily, limpa sem ressecar e entrega cabelos macios e iluminados.",
        foto: "imagens/shampoo-nutricao-iluminadora-lily.jpg"
    },
    {
        nome: "Eudora H Energy Desodorante Colônia 100ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "masculino",
        preco: 112.00,
        descricao: "Eudora H Energy Desodorante Colônia entrega uma explosão de frescor e intensidade em forma de fragrância.",
        foto: "imagens/eudora-h-energy-desodorante.jpg"
    },
    {
       nome: "Eudora H Refresh Desodorante Colônia 100ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "masculino",
        preco: 112.00,
        descricao: "Eudora H Refresh Desodorante Colônia entrega uma explosão de frescor e intensidade em forma de fragrância.",
        foto: "imagens/eudora-h-refresh-desodorante.jpg"
    },
    {
      nome: "Eudora H Marine Desodorante Colônia 100ml",
      marca: "Eudora",
      categoria: "perfumes",  
      subcategoria: "masculino",
      preco: 79.90,
      descricao: "Fragrância masculina fresca inspirada no oceano. Combina o toque frutal surpreendente do Melão com as notas cítricas e aquosas.",
      foto: "imagens/eudora-h-marine-desodorante.jpg"
    },
    {
        nome: "Eudora H Flow Desodorante Colônia 100ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "masculino",
        preco: 79.90,
        descricao: "Desodorante Colônia com explosão de frescor do acorde Sea Salt: uma combinação de sal marinho e alecrim",
        foto: "imagens/eudora-h-flow-desodorante-colonia.jpg"
    },
    {
        nome: "Eudora H Acqua Desodorante Colônia 100ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "masculino",
        preco: 112.00,
        descricao: "Eudora H Acqua Desodorante Colônia traz uma fragrância com frescor revigorante para um dia com mais energia.",
        foto: "imagens/eudora-h-acqua-desodorante-colonia.jpg"
    },
    {
       nome: "Eudora H Ready Desodorante Colônia 100ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "masculino",
        preco: 112.00,
        descricao: "Sinta a fragrância masculina única de Eudora H Ready e desperte o seu Eu aventureiro para o inesperado.",
        foto: "imagens/eudora-h-ready-desodorante-colonia.jpg"
    },
    {
        nome: "Eudora H Desodorante Colônia 100ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "masculino",
        preco: 112.00,
        descricao: "Eudora H Desodorante Colônia traz uma fragrância refrescante e poderosa para você viver tudo o que é novo.",
        foto: "imagens/eudora-h-desodorante-colonia-100ml.jpg"
    },
    {
        nome: "Clash Extreme Desodorante Colônia 100Ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "masculino",
        preco: 149.90,
        descricao: "Uma nova interpretação da intensidade em Clash, com dobro de concentração, entrega frescor mais impactante.",
        foto: "imagens/clash-extreme-desodorante-colonia.jpg"
    },
    {
        nome: "Botica 214 Dark Mint Eau De Parfum 90Ml",
        marca: "O Boticário",
        categoria: "perfumes",
        subcategoria: "masculino",
        preco: 238.00,
        descricao: "Sinta fragrância refrescante e moderna de Botica 214 Dark Mint Eau De Parfum em todos os momentos especiais.",
        foto: "imagens/botica-214-dark-mint-eau-parfum.jpg"
    },
    {
        nome: "Malbec Desodorante Colônia 100Ml", 
        marca: "O Boticário",
        categoria: "perfumes",
        subcategoria: "masculino",
        preco: 219.90,
        descricao: "Com nova embalagem e mesma fragrância masculina inesquecível e ideal para o homem sedutor e marcante.",
        foto: "imagens/malbec-desodorante-colonia-100ml.jpg"
    },
    {
        nome: "Lily L'Or Elixir Eau De Parfum, 75 Ml",
        marca: "O Boticário",
        categoria: "perfumes",
        subcategoria: "feminino",
        preco: 349.99,
        descricao: "Com 2x óleos essenciais*, entrega a maior concentração olfativa de Lily, com até 12 horas de fixação.",
        foto: "imagens/lily-lor-elixir-eau-parfum-75-ml.jpg"
    },
    {
        nome: "Lyra Desodorante Colônia 75Ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "feminino",
        preco: 160.00,
        descricao: "Lyra Desodorante Colônia revela a mulher confiante e poderosa, com uma fragrância Oriental Frutal envolvente e marcante.",
        foto: "imagens/lyra-desodorante-colonia-75ml.jpg"
    },
    {
       nome: "Lyra Happy Desodorante Colônia 75Ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "feminino",
        preco: 160.00,
        descricao: "O novo Lyra Happy, com fragrância Chypre Frutal vibrante e sofisticada, traz exclusivo Acorde Glow para aumentar a sensação de alegria.",
        foto: "imagens/lyra-happy-desodorante-colonia.jpg" 
    },
    {
       nome: "Her Code Eau De Parfum 50Ml",
        marca: "O Boticário",
        categoria: "perfumes",
        subcategoria: "feminino",
        preco: 242.99,
        descricao: "Fragrância feminina, este eau de parfum incentiva as mulheres a se libertarem em busca de seu próprio prazer",
        foto: "imagens/her-code-eau-parfum-50ml.jpg" 
    },
    {
       nome: "Her Code Clímax Eau De Parfum 50Ml",
        marca: "O Boticário",
        categoria: "perfumes",
        subcategoria: "feminino",
        preco: 242.99,
        descricao: "Fragrância sensual que combina o código secreto com o instigante chocolate noir em uma explosão de sensações.",
        foto: "imagens/her-code-climax-eau-parfum-50ml.jpg" 
    },
    {
       nome: "Her Code Touch Eau De Parfum 50Ml",
        marca: "O Boticário",
        categoria: "perfumes",
        subcategoria: "feminino",
        preco: 242.99,
        descricao: "Her Code Touch é um amadeirado envolvente para você descobrir o seu prazer absoluto através do toque.",
        foto: "imagens/her-code-touch-eau-parfum-50ml.jpg" 
    },
    {
       nome: "Floratta Blue Crystal Desodorante Colônia 75Ml",
        marca: "O Boticário",
        categoria: "perfumes",
        subcategoria: "feminino",
        preco: 174.90,
        descricao: "Floral fresco e luminoso. O conforto de Blue com o frescor limpo do aldeído, em uma versão surpreendente.",
        foto: "imagens/floratta-blue-crystal-desodorante.jpg" 
    },
    {
       nome: "Floratta Red Desodorante Colônia 75 ml",
        marca: "O Boticário",
        categoria: "perfumes",
        subcategoria: "feminino",
        preco: 165.00,
        descricao: "Floratta Red é a combinação da delicadeza da flor da Maçã de Vermont e a doçura do fruto. Uma fragrância feminina que transmite atitude e romantismo.",
        foto: "imagens/floratta-red-desodorante-colonia.jpg" 
    },
    {
       nome: "La Victorie Intense Eau De Parfum 75Ml",
        marca: "Eudora",
        categoria: "perfumes",
        subcategoria: "feminino",
        preco: 269.90,
        descricao: "La Victorie Intense Eau de Parfum traz um floral amadeirado de muita intensidade, impacto e sofisticação.",
        foto: "imagens/la-victorie-intense-eau-parfum.jpg" 
    },
    {
       nome: "Base Líquida Niina Secrets Hidra Glow 30Ml",
        marca: "Eudora",
        categoria: "maquiagem",
        preco: 90.99,
        descricao: "Base Líquida Niina Secrets Hidra Glow conta com avançado ácido hialurônico e FPS16. Pele radiante como pétala.",
        foto: "imagens/base-liquida-niina-secrets-hidra.jpg" 
    },
    {
       nome: "Corretivo Líquido Niina Secrets Daily Tint 10Ml",
        marca: "Eudora",
        categoria: "maquiagem",
        preco: 54.90,
        descricao: "Corretivo líquido soft matte com 12h de duração. Corrige olheiras, nutre, não marca as linhas e não arde os olhos.",
        foto: "imagens/corretivo-liquido-niina-secrets.jpg" 
    },
    {
       nome: "Bruma Nutri Fresh Niina Secrets Skin Travel Size 30Ml",
        marca: "Eudora",
        categoria: "maquiagem",
        preco: 32.99,
        descricao: "Bruma facial em miniatura com ácido hialurônico que hidrata por 24h e mantém a pele sequinha por 8h.",
        foto: "imagens/bruma-nutri-fresh-niina-secrets.jpg" 
    },
    {
       nome: "Base Líquida Daily Tint Cream Niina Secrets 25Ml",
        marca: "Eudora",
        categoria: "maquiagem",
        preco: 55.99,
        descricao: "Daily Tint Cream é a reinvenção da sua make diária. Com multibenefícios 11 em 1, matifica, trata e protege.",
        foto: "imagens/base-liquida-daily-tint-cream.jpg" 
    },
    {
       nome: "Make B Base Líquida Mate Salicylic 30G",
        marca: "O Boticário",
        categoria: "maquiagem",
        preco: 97.90,
        descricao: "A base mais recomendada * com até 18h de controle de oleosidade, 42 cores e acabamento mate premium.",
        foto: "imagens/make-b-base-liquida-mate-salicylic.jpg" 
    },
    {
       nome: "Máscara De Cílios Turbo Dimension Eudora Make 10G",
        marca: "Eudora",
        categoria: "maquiagem",
        preco: 54.99,
        descricao: "A máscara nº1 de Eudora, agora com efeito preenchedor para um olhar no modo turbo: volume e preto absoluto.",
        foto: "imagens/mascara-cilios-turbo-dimension.jpg" 
    },
    {
       nome: "Máscara Para Cílios Super Bold Niina Secrets 10G",
        marca: "Eudora",
        categoria: "maquiagem",
        preco: 72.99,
        descricao: "Esta máscara de cílios de Niina Secrets traz volume extremo com efeito de cílios postiços para os seus fios.",
        foto: "imagens/mascara-cilios-super-bold-niina.jpg" 
    },
    {
       nome: "Hidratante Labial Quem Disse, Berenice? Cuide-Se Bem Amoruda 6,2G",
        marca: "O Boticário",
        categoria: "maquiagem",
        preco: 39.90,
        descricao: "Lip balm com cor suave, cheirinho inspirado de amora e efeito hidratante, para lábios hidratados por 24 h.",
        foto: "imagens/hidratante-labial-quem-disse.jpg" 
    },
    {
       nome: "Combo Sofisticada e Envolvente: Batom Vermelho 3,4g + Case Dourado",
        marca: "Eudora",
        categoria: "maquiagem",
        preco: 67.98,
        descricao: "Refil Batom Customizável Amulips Semi Matte Vermelho Envolvente para hidratação profunda e coloração dos lábios + Case Dourada.",
        foto: "imagens/combo-sofisticada-envolvente-batom.jpg" 
    },
    {
       nome: "Body Splash Desodorante Colônia Cereja De Fases 200Ml",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "body-splash",
        preco: 94.90,
        descricao: "Com fragrância de Cereja desenvolvida por neurociência que te acolhe em um floriental frutal envolvente.",
        foto: "imagens/body-splash-desodorante-colonia.jpg" 
    },
    {
       nome: "Spray Íntimo Desodorante Cuide-Se Bem Cereja De Fases 75Ml",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "spray-intimo",
        preco: 35.90,
        descricao: "Spray que respeita a região íntima entregando proteção e perfumação, especialmente no período menstrual.",
        foto: "imagens/spray-intimo-desodorante-cuide-se.jpg" 
    },
    {
       nome: "Sabonetes Em Barra Cuide-Se Bem Cereja De Fases 4X80G",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "sabonetes",
        preco: 38.90,
        descricao: "Com 4 unidades, entrega fragrância de cereja que te acolhe* e espuma cremosa, limpa a pele sem ressecar.",
        foto: "imagens/sabonetes-barra-cuide-se-bem.jpg" 
    },
    {
       nome: "Shower Gel Cabelo, Corpo E Barba Clash Extreme 150G",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "sabonetes",
        preco: 41.90,
        descricao: "Shower gel 3 em 1 com a mesma fragrância da linha que traz uma rotina completa para cabelo corpo e barba.",
        foto: "imagens/shower-gel-cabelo-corpo-barba.jpg" 
    },
    {
       nome: "Loção Desodorante Hidratante Corporal Cuide-Se Bem Cereja De Fases 400Ml",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "hidratantes",
        preco: 77.50,
        descricao: "Com fragrância que acolhe e textura ultra hidratante para a pele, te apoia em todas as fases do seu ciclo.",
        foto: "imagens/1-locao-desodorante-hidratante.jpg" 
    },
    {
       nome: "Loção Desodorante Hidratante Corporal Cuide-Se Bem Cereja De Fases 200Ml",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "hidratantes",
        preco: 56.90,
        descricao: "Com fragrância que acolhe e textura ultra hidratante para a pele, te apoia em todas as fases do seu ciclo.",
        foto: "imagens/locao-desodorante-hidratante.jpg" 
    },
    {
       nome: "Sabonete Líquido Anti-Oleosidade Corpo E Rosto Cuide-Se Bem Cereja De Fases 200Ml",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "sabonetes",
        preco: 52.99,
        descricao: "Sabonete 2 em 1 que controla o excesso de oleosidade, limpa sem ressecar e tem fragrância que acolhe.",
        foto: "imagens/sabonete-liquido-anti-oleosidade.jpg" 
    },
    {
       nome: "Lily Creme Acetinado Desodorante Hidratante Corporal Lor Elixir, 200 G",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "hidratantes",
        preco: 139.99,
        descricao: "Com a mesma fragrância marcante do Elixir de Lily, hidrata intensamente por 48h, com toque acetinado.",
        foto: "imagens/lily-creme-acetinado-desodorante.jpg" 
    },
    {
       nome: "Body Spray Desodorante Clash Extreme 100Ml",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "body-splash",
        preco: 41.90,
        descricao: "Body spray com a fragrância da linha que protege contra odores da transpiração com sensação de frescor.",
        foto: "imagens/body-spray-desodorante-clash.jpg" 
    },
    {
       nome: "Loção Hidratante Desodorante Corporal Eudora Velvet Authentic 150Ml",
        marca: "Eudora",
        categoria: "corpo-e-banho",
        subcategoria: "hidratantes",
        preco: 47.99,
        descricao: "O hidratante desodorante Velvet Authentic entrega perfumação, toque aveludado e hidratação de até 48 horas.",
        foto: "imagens/locao-hidratante-desodorante.jpg" 
    },
    {
       nome: "Loção Nutritiva Desodorante Nativa Spa Uva Merlot 400 ml",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "hidratantes",
        preco: 86.99,
        descricao: "Fragrância que te deixa comprovadamente mais confiante. Nutrição intensa e toque aveludado para a pele.",
        foto: "imagens/locao-nutritiva-desodorante-nativa.jpg" 
    },
    {
       nome: "Óleo Térmico Corporal TPM Cuide-Se Bem Cereja de Fases 110 ml",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "hidratantes",
        preco: 57.90,
        descricao: "Com efeito bolsa térmica, entrega sensação de calor e relaxamento com fragrância de cereja que te acolhe.",
        foto: "imagens/oleo-termico-corporal-tpm-cuide-se.jpg" 
    },
    {
       nome: "Desodorante Colônia Body Splash Nativa Spa Ameixa Negra 200Ml",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "body-splash",
        preco: 109.90,
        descricao: "O Body Splash Nativa Spa Ameixa Negra reúne hidratação diária, frescor e perfumação única para a sua pele.",
        foto: "imagens/desodorante-colonia-body-splash.jpg" 
    },
    {
       nome: "Sabonete Em Barra Cuide-Se Bem Deleite 2X80G",
        marca: "O Boticário",
        categoria: "corpo-e-banho",
        subcategoria: "sabonetes",
        preco: 24.90,
        descricao: "O Sabonete Barra Cuide-se Bem Deleite traz limpeza suave sem ressecar com uma fragrância doce e envolvente.",
        foto: "imagens/sabonete-barra-cuide-se-bem.jpg" 
    },
    {
       nome: "Hidratante Labial Quem Disse, Berenice? Cuide-Se Bem Amoruda 6,2G",
        marca: "O Boticário",
        categoria: "skin-care",
        preco: 39.90,
        descricao: "Lip balm com cor suave, cheirinho inspirado de amora e efeito hidratante, para lábios hidratados por 24 h.",
        foto: "imagens/hidratante-labial-quem-disse.jpg" 
    },
    {
       nome: "Sabonete Líquido Next Toy Story Gosma Intergaláctica 150Ml",
        marca: "O Boticário",
        categoria: "kids",
        preco: 49.90,
        descricao: "Com textura slime e espuma suave, limpa sem ressecar e deixa a pele perfumada com o acorde Animation Boost.",
        foto: "imagens/sabonete-liquido-next-toy-story.jpg" 
    },
    {
       nome: "Colônia Infantil Toy Story Next Rodeio Do Xerife 75Ml",
        marca: "O Boticário",
        categoria: "kids",
        preco: 109.90,
        descricao: "Uma fragrância inspirada no amigo mais leal de Toy Story, com acorde que desperta memórias felizes.",
        foto: "imagens/colonia-infantil-toy-story-next.jpg" 
    },
    {
       nome: "Mini Bag Alien Remix Surpresa",
        marca: "O Boticário",
        categoria: "kids",
        preco: 59.90,
        descricao: "Minibag para pendurar onde quiser com os personagens dos 4 universos Pixar conectando ao Garra.",
        foto: "imagens/mini-bag-alien-remix-surpresa.jpg" 
    },
    {
       nome: "Paleta De Maquiagem Multifuncional Sophie Toy Story Memórias Felizes 10G",
        marca: "O Boticário",
        categoria: "kids",
        preco: 149.99,
        descricao: "Paleta de maquiagem acolchoada e desmontável, com cores divertidas que vão do matte ao cintilante.",
        foto: "imagens/paleta-maquiagem-multifuncional.jpg" 
    },
    {
       nome: "Colônia Infantil Toy Story Sophie Vaqueira Valente 100Ml",
        marca: "O Boticário",
        categoria: "kids",
        preco: 112.99,
        descricao: "Floriental frutal que desperta alegria e diversão e remete ao universo Toy Story para crianças de 6 anos.",
        foto: "imagens/colonia-infantil-toy-story-sophie.jpg" 
    },
    {
        nome: "Kit Presente Especial Cuide-Se Bem Deleite (2 Itens)",
        marca: "O Boticário",
        categoria: "kits",
        preco: 66.99,
        descricao: "Dois itens especiais para presentear com carinho e cuidado.",
        foto: "imagens/kit-presente-especial-cuide-se-bem.jpg",
    },
    {
        nome: "Kit Presente Imensi: Body Spray 100Ml + Loção Corporal 200Ml",
        marca: "Eudora",
        categoria: "kits",
        preco: 72.00,
        descricao: "Liberdade em cada detalhe. Loção Corporal e Body Spray com a fragrância Floriental Ambarada de Imensi para presentear",
        foto: "imagens/kit-presente-imensi-body-spray.jpg",
    },
     {
        nome: "Kit Presente Natal Diva Esplêndida (3 Itens)",
        marca: "Eudora",
        categoria: "kits",
        preco: 139.90,
        descricao: "Unindo perfumação marcante, hidratação corporal e gloss preenchedor para destacar seu brilho magnético.",
        foto: "imagens/kit-presente-natal-diva-esplendida.jpg",
    },
     {
        nome: "Kit Presente Natal Malbec (3 Itens)",
        marca: "O Boticário",
        categoria: "kits",
        preco: 225.99,
        descricao: "Kit premium com três itens de Malbec, grande ícone da perfumaria masculina, embalados em caixa especial.",
        foto: "imagens/kit-presente-natal-malbec.jpg",
    },
     {
        nome: "Kit Presente Natal Floratta Red (2 Itens)",
        marca: "O Boticário",
        categoria: "kits",
        preco: 59.99,
        descricao: "Kit para as amantes de Floratta Red, ideal para presentear em todos os momentos com embalagem especial.",
        foto: "imagens/kit-presente-natal-floratta-red.jpg",
    },
    
];