const portfolioData = { 
	"imageUrl": 'https://caio-teixeira.herokuapp.com/',
	"logo": 'images/app-logo.png',
	"logoWhite": 'images/app-logo-white.png',
	"name": 'Caio Teixeira',
	"role": 'Desenvolvedor',
	"intro": "Conheça um pouco sobre mim e meus projetos.",
	"projects": [
		{
			"id": 1,
			"title": "Cantinho do pastel",
			"imageUrl": "images/portfolio/pastel.jpg",
			"link": "",
			"codeLink": "https://github.com/CaioTeixeira95/cantinho_pastel",
			"description": "A pastelaria Cantinho do Pastel, tem um dos melhores pastéis de Limeira - SP. Porém, não era fácil saber os produtos vendidos já que a mesma não possuía presença online. Pensando nisso foi desenvolvido um site que supriria esse gap e faria com que mais pessoas pudessem experimentar um bom pastel.",
			"technology": ["HTML", "W3CSS"],
		},	
		{
			"id": 2,
			"title": "Projeto 7 a 1",
			"imageUrl": "images/portfolio/copa.jpg",
			"link": "",
			"codeLink": "https://github.com/CaioTeixeira95/Fatec/tree/master/projeto_7_a_1",
			"description": "Muitas pessoas definem Estrutura de Dados como \"a pior matéria dos cursos de TI\", de fato, entendê-las pode não ser um processo fácil, mas não precisa ser chato o aprendizado dessas estruturas computacionais. O projet 7x1 foi a junção do clima de Copa do Mundo e Estruturas de Dados, fazendo com que fossem aplicado os conceitos empregados na matéria no desenvolvimento de um album de figurinhas.",
			"technology": ["C++"],
		}
		],
	"skills": [
		{
			"type": "Python",
			"level": 85
		},	
		{
			"type": "Django",
			"level": 65
		},
		{
			"type": "PHP",
			"level": 80
		},
		{
			"type": "Javascript",
			"level": 70
		},				
		{
			"type": "R. Native",
			"level": 55
		},
		{
			"type": "React JS",
			"level": 55
		}						
	],
	"workExp": [
		{
			"title": "Desenvolvedor de Software",
			"date" : 'Junho 2020 - atualmente',
			"description": "Desenvolvedor Fullstack do sistema interno e site do KaBum!",
			"company": 'KaBum!'
		},
		{
			"title": "Desenvolvedor Backend Python",
			"date" : 'Setembro 2019 - Maio 2020',
			"description": "Desenvolvimento de APIs em Django e integrações com marketplaces.",
			"company": 'Napp Solutions'
		},
		{
			"title": "Programador PHP",
			"date" : 'Fevereiro 2019 - Setembro 2019',
			"company": 'Alfa Networks',
			"description": "Trabalho voltado a suporte a usuário, trabalhando na manutenção do sistema, implementação de novos módulos, e resolvendo problemas."
		},
		{
			"title": "Estágio",
			"date" : 'Junho 2018 - Fevereiro 2019',
			"company": ' Alfa Networks',
			"description": "Trabalho voltado a suporte a usuário, trabalhando na manutenção do sistema, implementação de novos módulos, e resolvendo problemas."
		},
		{
			"title": "Suporte técnico",
			"date" : 'Outubro 2016 - Junho 2018',
			"company": 'Light System',
			"description": "Suporte ao usuário no sistema de gestão Bosch."
		},				
		{
			"title": "Técnico de informática",
			"date" : 'Setembro 2012 - Outubro 2016',
			"company": 'Info House',
			"description": "Manutenção e montagem de computadores."
		},
	]	
 
}

export default portfolioData;