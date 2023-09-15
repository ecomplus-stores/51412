const JSNovasDescricoes = {
    funcoesAntigas(){
 
       if($('.desc-milho').length > 0){
          $('.desc-lamp.desc-milho a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                   var target = $(this.hash);
                   target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                   if (target.length) {
                      $('html, body').animate({
                         scrollTop: (target.offset().top -110)
                      }, 700, "easeInOutExpo");
                      return false;
                   }
             }
          });
          var scrollLink = $('.desc-lamp.desc-milho .page-scroll');
          $(window).scroll(function() {
             var scrollbarLocation = $(this).scrollTop();
             scrollLink.each(function() {
                   var sectionOffset = $(this.hash).offset().top -110;
                   if ( sectionOffset <= scrollbarLocation ) {
                      scrollLink.removeClass('active');
                      $(this).addClass('active');
                   }
             });
          });
       }
       
       $('.div-botoes-rgb > div > div').click(function(){
          $('.box-nth-um-rgb .img-rgb-prod').removeAttr('id');
          var newIDRGB = $(this).attr('data-rgb');
          $('.box-nth-um-rgb .img-rgb-prod').attr('id',''+newIDRGB+'');
       });
 
       $('.desc-mini-spot-smd .bloco2 .wrap-info .wrap-items > .item').click(function(){
          $(this).parents('.bloco2').attr('ambiente', $(this).attr('ambiente'));
          $(this).parent().find('.item').removeClass('active');
          $(this).addClass('active');
       });
 
       $('.descricao-fitas .descricao-fitas-bloco-1 .bloco-1-menu-ambiente ul li').click(function(){
          let target = $(this).attr('data-target');
          $(`.descricao-fitas .descricao-fitas-bloco-1 .bloco-1-imagens img`).removeClass('imagem-ativa');
          $(`.descricao-fitas .descricao-fitas-bloco-1 .bloco-1-imagens img[data-target="${target}"]`).addClass('imagem-ativa');
          $('.descricao-fitas .descricao-fitas-bloco-1 .bloco-1-menu-ambiente ul li').removeClass('menu-ativo');
          $(this).addClass('menu-ativo');
       });
 
    window.changerBG = function(cor){
          $('.caixa_um').attr('data-cor', cor);
    }
 
    },
 
    descricaoLuminariaPublica(){
 
       if( $('.descricao-luminaria-publica .descricao-bloco.descricao-bloco-5 .botao-power-luminaria-publica').length > 0){
 
          $('.descricao-luminaria-publica .descricao-bloco.descricao-bloco-5 .botao-power-luminaria-publica').click(function(){
          
             if($(this).hasClass('active')){
                $('.descricao-luminaria-publica .descricao-bloco[data-target="ligado"]').removeClass('active');
                $('.descricao-luminaria-publica .descricao-bloco[data-target="desligado"]').addClass('active');
             }else {
                $('.descricao-luminaria-publica .descricao-bloco[data-target="desligado"]').removeClass('active');
                $('.descricao-luminaria-publica .descricao-bloco[data-target="ligado"]').addClass('active');
             }
          
             $(this).toggleClass('active');
          
          });
 
       }
 
    },
 
    descricaoArandelaLED(){
		if ($('.descricao-luminaria-arandela-led .descricao-carousel-imagens').length > 0){
			$('.descricao-luminaria-arandela-led .descricao-carousel-imagens').addClass('swiper');
			$('.descricao-luminaria-arandela-led .descricao-carousel-imagens > *').addClass('swiper-slide');
			$('.descricao-luminaria-arandela-led .descricao-carousel-imagens').html(`
				<div class="swiper-clip">
					<div class="swiper-wrapper">
						${$('.descricao-luminaria-arandela-led .descricao-carousel-imagens').html()}
					</div>
			
					<div class="swiper-button-next"></div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-pagination"></div>
				</div>
			`);

			new Swiper($('.descricao-luminaria-arandela-led .descricao-carousel-imagens')[0], {
				navigation: {
					nextEl: $('.descricao-luminaria-arandela-led .swiper-button-next')[0],
					prevEl: $('.descricao-luminaria-arandela-led .swiper-button-prev')[0],
				},
				margin: 0,
				slidesPerView: 1,
			});
		}
    },
 
    refletorLEDVerde(){

		// $('.descricao-refletor-verde .conteudo-bloco-carousel').owlCarousel({
		// 	margin: 0,
		// 	autoHeight: true,
		// 	nav: true,
		// 	dots: false,
		// 	navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
		// 	responsive: {
		// 		768: {
		// 		items: 3
		// 		}
		// 	}
		// });

		$('.descricao-refletor-verde .conteudo-bloco-interruptor').click(function(){
			$('.descricao-refletor-verde').toggleClass('interruptor-toggle');
		});
    },
 
    descricaoLuminariaPlafon(){
		if( $('.descricao-luminaria-plafon .descricao-carrousel-imagens .carousel-target').length > 0){
			// $('.descricao-luminaria-plafon .descricao-carrousel-imagens .carousel-target').owlCarousel({
			// 	loop:false,
			// 	margin:0,
			// 	nav:true,
			// 	navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
			// 	responsive:{
			// 		1024:{
			// 		items: 1
			// 		}
			// 	}
			// });
		}
    },
 
    iniciar(){  
       if(screen.width > 1024){
          this.funcoesAntigas();
          this.descricaoArandelaLED();
          this.descricaoLuminariaPublica();
          this.descricaoLuminariaPlafon();
          this.refletorLEDVerde();
       }
    }
}
 
JSNovasDescricoes.iniciar();

function adicionarBeneficiosLED(){
    $('.descricao-conteudo-accordion.accordion-descricao').after(`
       <div class="descricao-conteudo-accordion beneficios-led">
             <div class="descricao-titulo descricao-titulo-beneficios-led">
                <span class="descricao-icone">
                   <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="24 0 527.87 511.91"><path d="M287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9zM226.5 168.8C221.9 178.3 212.9 184.9 202.4 186.5L64.99 206.8L164.8 305.6C172.1 312.9 175.5 323.4 173.8 333.7L150.2 473.2L272.8 407.7C282.3 402.6 293.6 402.6 303 407.7L425.6 473.2L402.1 333.7C400.3 323.4 403.7 312.9 411.1 305.6L510.9 206.8L373.4 186.5C362.1 184.9 353.1 178.3 349.3 168.8L287.9 42.32L226.5 168.8z"></path></svg>
                </span>
                <span>Você já conhece os benefícios do led?</span>
             </div>
             
             <div class="descricao-conteudo">
                <div class="bloco-beneficios-led">
                   <div class="carousel-target">
             
                      <div class="item-beneficio-led">
                         <div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-maior-durabilidade-04-02-22.png"></div>
                         <div class="item-beneficio-titulo">Maior Durabilidade</div>
                         <div class="item-beneficio-texto">
                               <span>O LED, em média, possui</span>
                               <span>uma vida de 50 mil horas</span>
                               <span>úteis, visto que seu material </span>
                               <span>não esquenta e raramente queima.</span>
                         </div>
                      </div>
                      
                      <div class="item-beneficio-led">
                         <div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-menor-consumo-de-energia-04-02-22.png"></div>
                         <div class="item-beneficio-titulo">Menor Consumo de Energia</div>
                         <div class="item-beneficio-texto">
                               <span>Eficiente na produção de lúmens</span>
                               <span>com menos gasto energético,</span>
                               <span>economize até 80% na sua</span>
                               <span>conta de energia com o LED.</span>
                         </div>
                      </div>
             
                      <div class="item-beneficio-led">
                         <div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-variedade-04-02-22.png"></div>
                         <div class="item-beneficio-titulo">Variedade</div>
                         <div class="item-beneficio-texto">
                               <span>Por não utilizar metais pesados e não</span>
                               <span>esquentar, o LED possui maior</span>
                               <span>versatilidade, permitindo um amplo</span>
                               <span>catálogo de produtos.</span>
                         </div>
                      </div>
             
                      <div class="item-beneficio-led">
                         <div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-praticidade-04-02-22.png"></div>
                         <div class="item-beneficio-titulo">Praticidade</div>
                         <div class="item-beneficio-texto">
                               <span>Fácil e prático o LED</span>
                               <span>é descomplicado,</span>
                               <span>sem burocracia</span>
                               <span>e mais econômico.</span>
                         </div>
                      </div>
             
                      <div class="item-beneficio-led">
                         <div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-garantia-04-02-22.png"></div>
                         <div class="item-beneficio-titulo">Garantia</div>
                         <div class="item-beneficio-texto">
                               <span>A maior garantia em</span>
                               <span>LED do mercado</span>
                               <span>com até 6 MESES.</span>
                         </div>
                      </div>
             
                      <div class="item-beneficio-led">
                         <div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-ultima-tecnologia-led-04-02-22.png"></div>
                         <div class="item-beneficio-titulo">Última Tecnologia LED</div>
                         <div class="item-beneficio-texto">
                               <span>Contamos com uma equipe de </span>
                               <span>especialistas que selecionam os</span>
                               <span>melhores produtos e </span>
                               <span>de última geração.</span>
                         </div>
                      </div>
             
                   </div>
                </div>
             </div>
       </div>
    `);

    // $('.bloco-beneficios-led .carousel-target').owlCarousel({
    //    loop:false,
    //    margin:0,
    //    autoHeight: true,
    //    nav:true,
    //    dots: false,
    //    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    //    responsive:{
    //          0: {
    //             items:1
    //          },
    //          768: {
    //             items:3
    //          },
    //          1024:{
    //             items:4
    //          }
    //    }
    // });
}

function avaliacoesPersonalizadas(){
    const avaliacoes = {
       gerarHTML(){
          return `
             <div class="descricao-conteudo-accordion accordion-avaliacoes-personalizadas">
                <div class="descricao-titulo avaliacoes-personalizadas-titulo">
                   <span class="descricao-icone">
                      <svg fill="currentColor" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.97 512"><path d="M288 358.3c13.98-8.088 17.53-30.04 28.88-41.39c11.35-11.35 33.3-14.88 41.39-28.87c7.98-13.79 .1658-34.54 4.373-50.29C366.7 222.5 383.1 208.5 383.1 192c0-16.5-17.27-30.52-21.34-45.73c-4.207-15.75 3.612-36.5-4.365-50.29c-8.086-13.98-30.03-17.52-41.38-28.87c-11.35-11.35-14.89-33.3-28.87-41.39c-13.76-7.963-34.61-.1852-50.29-4.375C222.5 17.27 208.5 0 192 0C175.5 0 161.5 17.27 146.3 21.34C130.5 25.54 109.7 17.74 95.98 25.7C82 33.79 78.46 55.74 67.11 67.08C55.77 78.43 33.81 81.97 25.72 95.95C17.74 109.7 25.56 130.5 21.35 146.2C17.27 161.5 .0008 175.5 .0008 192c0 16.5 17.27 30.52 21.34 45.73c4.207 15.75-3.615 36.5 4.361 50.29C33.8 302 55.74 305.5 67.08 316.9c11.35 11.35 14.89 33.3 28.88 41.4c13.74 7.951 34.61 .1699 50.28 4.369C161.5 366.7 175.5 384 192 384c16.5 0 30.52-17.27 45.74-21.34C253.5 358.5 274.2 366.3 288 358.3zM191.1 351.5c-8.029-4.002-20.8-15.34-37.48-19.79c-16.71-4.477-33.04-1.301-42.29-1.717c-4.953-7.838-10.39-23.65-22.51-35.76c-12.11-12.12-27.85-17.5-35.77-22.52C53.59 262.5 56.7 246.1 52.26 229.5c-4.465-16.71-15.77-29.39-19.79-37.48c3.996-8.025 15.33-20.77 19.8-37.5c4.434-16.6 1.33-32.88 1.697-42.27c7.854-4.971 23.63-10.37 35.78-22.52C101.8 77.68 107.3 61.72 112.3 53.95C121.4 53.58 137.9 56.69 154.5 52.25c16.74-4.475 29.33-15.74 37.48-19.79c8.027 3.992 20.77 15.33 37.49 19.8c16.74 4.471 33.01 1.295 42.28 1.711c4.84 7.65 10.45 23.71 22.51 35.76c12.03 12.04 28 17.61 35.77 22.52c.3555 9.273-2.752 25.64 1.693 42.28c4.469 16.71 15.77 29.38 19.79 37.47c-3.977 8-15.32 20.78-19.8 37.5c-4.404 16.49-1.34 32.1-1.695 42.27c-7.857 4.969-23.64 10.38-35.78 22.52c-12.03 12.03-17.59 27.99-22.5 35.75c-9.195 .4141-25.54-2.775-42.28 1.703C212.8 336.2 200.1 347.5 191.1 351.5zM279.1 192c0-48.7-39.39-88-87.1-88S104 143.3 104 192c0 48.58 39.39 88 87.1 88S279.1 240.6 279.1 192zM192 248C161.1 248 136 222.9 136 192c0-30.88 25.12-56 55.1-56S247.1 161.1 247.1 192C247.1 222.9 222.9 248 192 248zM357.4 370.1c-3.25-8.219-12.58-12.2-20.76-8.984c-8.203 3.25-12.23 12.55-8.984 20.77l24.22 61.25l-47.48-6.562l-24.64 42.28l-24.92-61.2c-3.328-8.203-12.72-12.14-20.84-8.781c-8.188 3.328-12.12 12.66-8.781 20.84l24.9 61.19C255.2 503.4 266.6 511.4 281.4 512c12.83 0 24.38-7.125 30.12-18.59l10.42-20.64l21.51 4.312c12.12 2.547 24.69-1.906 32.67-11.5c7.953-9.547 10.03-22.66 5.453-34.22L357.4 370.1zM150 408.9c-8.139-3.375-17.53 .5938-20.84 8.781l-24.92 61.2l-24.64-42.28l-47.44 6.547l24.17-61.23c3.25-8.219-.7813-17.52-8.984-20.77C39.14 357.9 29.86 361.9 26.61 370.1l-24.22 61.25c-4.578 11.56-2.5 24.67 5.453 34.22c8.016 9.625 20.52 14 32.61 11.52l21.58-4.328l10.41 20.62c5.766 11.45 17.27 18.58 31.42 18.58c13.42-.5313 24.98-8.609 30.03-21.05l24.92-61.2C162.2 421.5 158.2 412.2 150 408.9z"></path></svg>
                   </span>
                   <span>Avaliações</span>
                </div>
                <div class="descricao-conteudo duvidas-rapidas-conteudo">
					<div class="block-seo-rating">
						<div class="block-seo-rating-wrapper">
							<div class="block-seo-rating-note">
								<strong>4.9/5</strong>
								<p>+ 1 milhão avaliações</p>
								<div>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
								</div>
							</div>
		
							<div class="block-seo-rating-comment">
								<strong>Lenilson Ferreira <span>Aracaju - SE</span></strong>
								<div>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
								</div>
								<p>
									Da compra até a entrega, tudo foi <br> 
									extramemente rápido, em apenas 2 dias os <br> 
									produto já estava em minhas mãos. Certeza <br> 
									que recomendo a loja.
								</p>
							</div>
		
							<div class="block-seo-rating-comment">
								<strong>Márcio dos Santos <span>Campinas - SP</span></strong>
								<div>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
								</div>
								<p>
									Estava precisando resolver o problema de iluminação de meu <br>
									Jardim e adquiri um Refletor Holofote de LED 50w, o produto é <br>
									muito potente e resistente, parabéns pelo excelente atendimento <br>
									e agilidade.
								</p>
							</div>
		
							<div class="block-seo-rating-comment">
								<strong>Natália Schmit <span>Rio de Janeiro - RJ</span></strong>
								<div>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
									<i class="fa-4-7 fa-star" aria-hidden="true"></i>
								</div>
								<p>
									Precisava de uma entrega rápida com um <br>
									produto de qualidade e consegui. Obrigado pelo <br>
									excelente atendimento por parte de toda equipe. <br>
									Parabéns!
								</p>
							</div>
						</div>
					</div>
                </div>
             </div>
          `;
       },

       renderizar(){
          const html = this.gerarHTML();
          $('#descricao').append(html);
         
          /*const time = setInterval(() => {
                if($('div#_trustvox_widget strong.ts-average').length > 0){
                   data.nota = $('div#_trustvox_widget strong.ts-average').text();
                   data.avaliacoesTotal = $('div#_trustvox_widget .ts-count-opinion > p > a > span').text();
                   
                   const html = this.gerarHTML(data);

                   $('div#comentarios-container').after(html);

                   clearInterval(time);
                }
          }, 500);
       
          setTimeout(() => {
                clearInterval(time);
          }, 10000);*/
       },
    }
    
    avaliacoes.renderizar();
}

function duvidasRapidas(){
    const duvidasRapidas = {
       gerarObjeto(){
             let nome_produto = $('body#page-products .product-info h1.product__name').text().toLowerCase();
             //termosIncludes: [] //TERMOS QUE PODE ESTÁ INCLUSO
             //termosNotIncludes: [] //TERMOS QUE NÃO PODE ESTÁ INCLUSO

             let duvidas = [
                {
                   termosIncludes: ['spot'],
                   termosNotIncludes: [],
                   titulo: 'Spot LED tem lâmpada?',
                   descricao: 'O Spot LED da Iluminim possui lâmpada de led integrada, não sendo necessário a compra de lâmpadas avulsas.',
                },
                {
                   termosIncludes: ['spot'],
                   termosNotIncludes: [],
                   titulo: 'Spot LED é direcionável?',
                   descricao: 'Sim, este modelo possui preciso ajuste direcionável focal.',
                },
                {
                   termosIncludes: ['spot'],
                   termosNotIncludes: [],
                   titulo: 'Embutir ou Sobrepor?',
                   descricao: 'O spot de sobrepor é instalado sob o teto fixado por parafuso e bucha, sem necessidade de recorte. <br><br> Já o spot de embutir é instalado rente ao teto com presilhas, necessitando de um corte no forro para a fixação do mesmo.',
                },
                {
                   termosIncludes: ['fita'],
                   termosNotIncludes: [],
                   titulo: 'Como cortar Fita de LED?',
                   descricao: 'A Fita LED da Iluminim pode ser cortada a cada 5 centímetros aproximadamente. É possível verificar na própria fita uma marcação pontilhado indicando o local do corte.',
                },
                {
                   termosIncludes: ['fita'],
                   termosNotIncludes: [],
                   titulo: 'Diferença entre Fita LED 5050 ou 3528?',
                   descricao: 'A Fita LED 3528 possui consumo médio de 4,8w por metro e é indicada para iluminação decorativa. Já o modelo 5050 possui cerca de 14,8w por metro, três vezes maior do que a fita LED 3528 e outros modelos similares.',
                },
                {
                   termosIncludes: ['fita', 'rgb'],
                   termosNotIncludes: [],
                   titulo: 'Como funciona o liga/desliga?',
                   descricao: 'A Fita LED RGB da Iluminim acompanham controle com função de liga e desliga.',
                },
                {
                   termosIncludes: ['fita', 'rgb'],
                   termosNotIncludes: [],
                   titulo: 'A Fita LED RGB tem cor branca?',
                   descricao: 'A Fita LED RGB 3528 possui 3 cores, o vermelho, verde e azul. Já a Fita LED 5050 realiza a combinação de 16 cores, o vermelho, verde, azul e mais 13 combinações, incluindo o branco frio e branco quente.',
                },
                {
                   termosIncludes: ['fita', 'branco frio'],
                   termosNotIncludes: [],
                   titulo: 'Fita LED Branca Fria com fonte?',
                   descricao: 'Na Iluminim a Fita LED Branca fria é encontrada com fonte e completa para instalação. Acesse a metragem desejada: <a href="/fita-led-branco-frio-5050-5-metros-com-carregador">5 metros</a>,<a href="/fita-led-branco-frio-5050-10-metros-com-carregador"> 10 metros</a>,<a href="/fita-led-branco-frio-5050-15-metros-com-carregador"> 15 metros</a>,<a href="/fita-led-branco-frio-5050-20-metros-com-carregador"> 20 metros</a>,<a href="/fita-led-branco-frio-5050-25-metros-com-carregador"> 25 metros e <a href="/fita-led-branco-frio-5050-30-metros-com-carregador">30 metros</a>.',
                },
                {
                   termosIncludes: ['fita', 'branco quente'],
                   termosNotIncludes: [],
                   titulo: 'Fita LED Branco Quente com fonte?',
                   descricao: 'Na Iluminim a Fita LED Branco Quente é encontrada com fonte e completa para instalação. Acesse a metragem desejada: <a href="/fita-led-branco-quente-3528-5-metros-com-fonte-carregador-a-prova-dagua-24w">5 metros</a>,<a href="/fita-led-branco-quente-3528-10-metros-com-fonte-carregador-a-prova-dagua"> 10 metros</a>,<a href="/fita-led-branco-quente-3528-15-metros-com-fonte-carregador-a-prova-dagua"> 15 metros</a>,<a href="/fita-led-branco-quente-3528-20-metros-com-fonte-carregador-a-prova-dagua"> 20 metros</a>,<a href="/fita-led-branco-quente-3528-25-metros-com-fonte-carregador-a-prova-dagua"> 25 metros e <a href="/fita-led-branco-quente-3528-30-metros-com-fonte-carregador-a-prova-dagua">30 metros</a>.',
                },
                {
                   termosIncludes: ['fita'],
                   termosNotIncludes: ['fonte/carregador'],
                   titulo: "Fita LED 12V a prova d'água?",
                   descricao: 'A Fita LED da Iluminim possui proteção IP65, sendo resistente a água e poeira.',
                },
                {
                   termosIncludes: ['fita', 'rgb', '3528'],
                   termosNotIncludes: [],
                   titulo: "Quais cores a fita 3528 RGB produz?",
                   descricao: 'Esse modelo de Fita LED RGB produz as cores verde, vermelho e azul.',
                },
                {
                   termosIncludes: ['fita', 'rgb', '5050'],
                   termosNotIncludes: [],
                   titulo: "Quais cores a fita 5050 RGB produz?",
                   descricao: 'Esse modelo de Fita LED RGB possuem chips que emitem luzes na cor vermelha, verde e azul, que juntas podem reproduzir até 16 cores diferentes, como tons de rosa, azul, vermelho, laranja, amarelo, e branco.',
                },


                {
                   termosIncludes: ['fonte chaveada'],
                   termosNotIncludes: [],
                   titulo: 'Fonte LED é bivolt?',
                   descricao: 'Sim, todas as Fontes LED comercializadas pela Iluminim possuem bi-voltagem automática.',
                },
                {
                   termosIncludes: ['fonte chaveada'],
                   termosNotIncludes: [],
                   titulo: 'Qual fonte usar para Fita de LED?',
                   descricao: 'O ideal é sempre utilizar 1 ampér a cada 10W de consumo. Assim, cabe calcular o consumo x metragem de sua Fita LED, para que possa saber qual é a Fonte recomendada.',
                },


                {
                   termosIncludes: ['luminária', 'emergência'],
                   termosNotIncludes: [],
                   titulo: 'Qual fonte usar para Fita de LED?',
                   descricao: 'O ideal é sempre utilizar 1 ampér a cada 10W de consumo. Assim, cabe calcular o consumo x metragem de sua Fita LED, para que possa saber qual é a Fonte recomendada.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '24 leds'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 24 LEDs é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '30 leds'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 30 LEDs é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 6 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '42 leds'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 42 LEDs é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 6 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '60 leds'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 60 LEDs é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 6 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },

                {
                   termosIncludes: ['luminária', 'emergência', '100 lúmens'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 100 Lúmens é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '200 lúmens'],
                   termosNotIncludes: ['2.200 lúmens', '1200 lúmens', '24 leds'],
                   titulo: 'A Luminária de Emergência 200 Lúmens é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 6 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '400 lúmens'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 400 Lúmens é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '1200 lúmens'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 1.200 Lúmens é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '2.200 lúmens'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 2.200 Lúmens é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '3.000 lúmens'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 3.000 Lúmens é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '50 lúmens'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 50 Lúmens é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária', 'emergência', '50 lúmens'],
                   termosNotIncludes: [],
                   titulo: 'A Luminária de Emergência 50 Lúmens é recarregável?',
                   descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
                },
                {
                   termosIncludes: ['luminária plafon'],
                   termosNotIncludes: [],
                   titulo: 'Diferença de Sobrepor e Embutir?',
                   descricao: 'O Plafon de Sobrepor é instalado de forma que se sobressaia ao teto, já o Plafon de Embutir fica rente ao teto, sendo necessário um recorte no forro.',
                },



                {
                   termosIncludes: ['lâmpada'],
                   termosNotIncludes: ['tubular'],
                   titulo: 'Lâmpada LED é econômica?',
                   descricao: 'A Lâmpada LED consome menos energia elétrica, pois é 12 vezes mais eficiente que a lâmpada incandescente. Isso representa uma economia de aproximadamente 80% na conta de luz.',
                },
                {
                   termosIncludes: ['lampada'],
                   termosNotIncludes: ['tubular'],
                   titulo: 'Lâmpada LED é econômica?',
                   descricao: 'A Lâmpada LED consome menos energia elétrica, pois é 12 vezes mais eficiente que a lâmpada incandescente. Isso representa uma economia de aproximadamente 80% na conta de luz.',
                },


                {
                   termosIncludes: ['lâmpada', 'tubular'],
                   termosNotIncludes: [],
                   titulo: 'Tubular LED precisa de reator?',
                   descricao: 'Não é necessário. Isso acontece porque ela possui um driver integrado que elimina a necessidade de uso desse dispositivo para o funcionamento.',
                },
                {
                   termosIncludes: ['lampada', 'tubular'],
                   termosNotIncludes: [],
                   titulo: 'Tubular LED precisa de reator?',
                   descricao: 'Não é necessário. Isso acontece porque ela possui um driver integrado que elimina a necessidade de uso desse dispositivo para o funcionamento.',
                },



                {
                   termosIncludes: ['lâmpada', 'tubular'],
                   termosNotIncludes: [],
                   titulo: 'Posso substituir Lâmpada Fluorescente por LED?',
                   descricao: 'Sim, basta uma modificação simples na fiação da luminária já existente. Saiba mais <a href="https://blog.iluminim.com.br/saiba-como-instalar-uma-lampada-tubular-de-led/">aqui</a>',
                },
                {
                   termosIncludes: ['lampada', 'tubular'],
                   termosNotIncludes: [],
                   titulo: 'Posso substituir Lâmpada Fluorescente por LED?',
                   descricao: 'Sim, basta uma modificação simples na fiação da luminária já existente. Saiba mais <a href="https://blog.iluminim.com.br/saiba-como-instalar-uma-lampada-tubular-de-led/">aqui</a>',
                },


                {
                   termosIncludes: ['refletor'],
                   termosNotIncludes: [],
                   titulo: 'Refletor LED precisa de reator?',
                   descricao: 'Não, o Refletor de LED possui um driver integrado que elimina a necessidade de uso do reator para o funcionamento.',
                },
                {
                   termosIncludes: ['refletor'],
                   termosNotIncludes: [],
                   titulo: 'Refletor LED ilumina quantos metros?',
                   descricao: 'O Refletor LED tem uma média de iluminação de 1 metro por 700 lúmens aproximadamente.',
                },


                {
                   termosIncludes: ['refletor', 'sensor'],
                   termosNotIncludes: [],
                   titulo: 'Como funciona o sensor?',
                   descricao: 'A movimentação causada pela entrada de alguém no ambiente faz com que a luz seja acionada automaticamente. O sensor é desligado logo após a saída dos ocupantes.',
                },
                {
                   termosIncludes: ['refletor', 'sensor'],
                   termosNotIncludes: [],
                   titulo: 'Pode ser instalado em áreas externas?',
                   descricao: 'Sim, o índice de proteção IP66 garante máximo nível de proteção contra água e poeira.',
                },


                {
                   termosIncludes: [],
                   termosNotIncludes: [],
                   titulo: 'Produto pronto para instalar?',
                   descricao: 'Os produtos LED da Iluminim acompanham todas as peças necessárias para a instalação.'
                },
                {
                   termosIncludes: [],
                   termosNotIncludes: [],
                   titulo: 'Garantia',
                   descricao: `<div class="descricao-duvidas-rapidas-garantia textos-duvidas"> <div class="first-garantia"> <div class="txtfirst"> <h5 class="titulo-garantia">Compra Garantida</h5> <p>Se houver algum problema ou se não receber o produto que comprou, devolveremos o dinheiro.</p></div></div><div class="nth-garantia"> <div class="txtnth"> <h5 class="titulo-garantia">Você sempre terá a nossa ajuda</h5> <p>Estaremos ao seu lado até você receber o que comprou e nos avisar que está tudo correto. Se tiver algum problema, basta nos avisar.</p><a href="/pagina/compra-garantida.html">Conheça mais o Compra Garantida</a> </div></div><div class="last-garantia"> <div class="txtlast"> <h5 class="titulo-garantia">Garantia do vendedor</h5> <div><div class="garatia-txt">6 MESES</div> DE GARANTIA COMPROVADA, <div class="maior-mercado">A MAIOR DO MERCADO.</div><div>PRODUTO COM NOTA FISCAL</div></div></div></div></div>`
                },

                {
                   termosIncludes: [],
                   termosNotIncludes: [],
                   titulo: 'Loja confiável?',
                   descricao: 'A Iluminim está presente no mercado online desde 2010 e possui mais de 400 mil clientes satisfeitos em todo o Brasil. Confira alguns dos selos conquistados: ABCOMM, Ebit Ouro, Trustvox, Site Blindado e mais!'
                },
             ]


             let duvidas_filtradas = [];

             duvidas.forEach(item=> {

                let countIncludes = 0;
                let countNotIncludes = 0;

                let { termosIncludes, termosNotIncludes } = item;

                termosIncludes.forEach(termo=> {

                   if( nome_produto.includes(termo) ){
                         countIncludes = countIncludes + 1;
                   }

                });

                if( termosNotIncludes.length > 0 ){
                   termosNotIncludes.forEach(termo=> {

                         if( nome_produto.includes(termo) ){
                            countNotIncludes = countNotIncludes + 1;
                         }

                   });
                }

                if(countNotIncludes == 0){

                   if(countIncludes == termosIncludes.length){
                         
                         duvidas_filtradas.push(item);

                   }

                }

             });

             return duvidas_filtradas;

       },

       gerarHTML(){

             let duvidas = this.gerarObjeto();

             if(!duvidas) return;

             let html = duvidas.map((item, index)=> {

                let id = Date.now();
                let { titulo, descricao } = item;

                $('body').append(`
                   <div class="modal modal-personalizado fade" id="modal_${id}_${index}">

                         <div class="modal-dialog" role="document">

                            <div class="modal-content">

                               <div class="modal-header">
                                     <h5 class="modal-title" id="exampleModalLongTitle">${titulo}</h5>
                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                     <span aria-hidden="true">&times;</span>
                                     </button>
                               </div>

                               <div class="modal-body">
                                     <div class="descricao-duvidas-rapidas">
                                        ${descricao}
                                     </div>
                               </div>

                               <div class="modal-footer">
                                     <button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
                               </div>

                            </div>

                         </div>

                   </div>
                `);

                return `
                   <li class="item-duvida" data-toggle="modal" data-hash="#modal_${id}_${index}" data-target="#modal_${id}_${index}">
                         ${ titulo }
                   </li>
                `;

             }).join('');

             return html;

       },

       renderizar(){
             const html = this.gerarHTML();
             const alertaDuvidasCookie = utils.getCookie('duvidas-rapidas-alerta');

             if(!html) return;

             $('#descricao').append(`
                <div class="descricao-conteudo-accordion duvidas-rapidas">
                   <div class="descricao-titulo duvidas-rapidas-titulo">
                         <span class="descricao-icone">
                            <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM240 344c-13.25 0-24 10.75-24 24s10.75 24 24 24s24-10.75 24-24S253.3 344 240 344zM285.6 128H226.4C189.8 128 160 157.8 160 194.4V204c0 8.844 7.156 16 16 16S192 212.8 192 204V194.4C192 175.4 207.4 160 226.4 160h59.25C304.6 160 320 175.4 320 194.4c0 12.48-6.781 24-17.06 29.72L242.5 254.3C231.1 260.7 224 272.7 224 285.8V304C224 312.8 231.2 320 240 320S256 312.8 256 304V285.8c0-1.453 .7813-2.797 1.438-3.172l60.41-30.22C338.9 240.7 352 218.5 352 194.4C352 157.8 322.2 128 285.6 128z"></path></svg>
                         </span>
                         <span>Dúvidas Rápidas</span>
                   </div>
                   <div class="descricao-conteudo duvidas-rapidas-conteudo">
                         <div class="duvidas-rapidas-conteudo-wrapper">
                            <ul class="lista-duvidas-rapidas">
                               ${html}
                            </ul>

                            ${window.innerWidth > 767 && !alertaDuvidasCookie ? `
                               <div class="duvidas-rapidas-alerta">
                                  <strong>Está com dúvidas?</strong>
                                  <p>Estes atalhos ajudarão você a encontrar o que busca.</p>
                                  <div class="duvidas-rapidas-alerta-fechar">×</div>
                               </div>
                            ` : ``}
                         </div>
                   </div>
                </div>
             `);

             $(document).on('click', '.duvidas-rapidas-alerta-fechar', event => {
                $(event.target).parents('.duvidas-rapidas-alerta').remove();
                utils.setCookie('duvidas-rapidas-alerta', 'true', 24);
             });
       }
    }

    duvidasRapidas.renderizar();
}

function cuidadoMaximoComSuaEncomenda(){
    let config = [
       {
             imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/icon-caixa-personalizada-23-08-18.png',
             titulo: 'Caixa Personalizada',
             descricao: 'Todas as encomendas são entregues com alto nível de excelência. Para isso, utilizamos caixas e envelopes personalizados com lacre de segurança.',
       },
       {
             imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/-icon-posicao-de-produtos-23-08-18.png',
             titulo: 'Posição de produtos',
             descricao: 'Profissionais capacitados e materiais propícios proporcionam o melhor posicionamento dos produtos dentro da caixa box, gerando segurança completa.'
       },
       {
             imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/icon-air-plus-23-08-18.png',
             titulo: 'Air Plus Storopack',
             descricao: 'Tecnologia de ultima geração na sua encomenda. Almofadas de ar são inseridas dentro da caixa box visando acomodar os produtos de maneira uniforme.'
       },
       {
             imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/long-checklist.png',
             titulo: 'Qualidade Garantida',
             descricao: 'Todos os produtos são testados por uma equipe técnica especialista antes do envio e são submetidos a um rigoroso controle de qualidade.'
       },
       {
             imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/icon-conferencia-antes-do-envio-23-08-18.png',
             titulo: 'Conferência antes do envio',
             descricao: 'Exclusivo setor de reconferência antes do envio de mercadorias online garante ao consumidor uma experiência de compra amplamente satisfatória.'
       }
    ];

    let html = config.map(item=> {

       let { imagem, titulo, descricao } = item;
       
       return `
             <div class="item-cuidado-maximo-encomenda">
                <div class="item-icone"><img alt="${titulo}" title="${titulo}" src="${imagem}"></div>
                <div class="item-titulo">${titulo}</div>
                <div class="item-descricao">${descricao}</div>
             </div>
       `;

    }).join('');


    $('#descricao').after(`
       <div class="descricao-conteudo-accordion cuidado-maximo-com-sua-encomenda">
             <div class="descricao-titulo descricao-titulo-cuidado-maximo-com-a-sua-encomenda">
                <span class="descricao-icone">
                   <svg fill="currentColor" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 32 448 448"><path d="M203.3 379.3C197.1 385.6 186.9 385.6 180.7 379.3L124.7 323.3C118.4 317.1 118.4 306.9 124.7 300.7C130.9 294.4 141.1 294.4 147.3 300.7L192 345.4L292.7 244.7C298.9 238.4 309.1 238.4 315.3 244.7C321.6 250.9 321.6 261.1 315.3 267.3L203.3 379.3zM442.5 163.6C446.1 171.8 448 180.6 448 189.6V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V189.6C0 180.6 1.879 171.8 5.516 163.6L47.11 70.01C57.38 46.89 80.3 32 105.6 32H342.4C367.7 32 390.6 46.9 400.9 70.01L442.5 163.6zM240 160H405.9L371.7 83C366.5 71.45 355.1 64 342.4 64H240V160zM32 192V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V192H32zM208 64H105.6C92.95 64 81.49 71.45 76.35 83L42.13 160H208L208 64z"></path></svg>
                </span>
                <span>Cuidado máximo com a sua encomenda</span>
             </div>
			 
             <div class="descricao-conteudo">
                <div class="carousel-target">
                   ${html}
                </div>
             </div>
       </div>
    `);

    // $('.descricao-conteudo-accordion.cuidado-maximo-com-sua-encomenda .carousel-target').owlCarousel({
    //    loop:false,
    //    margin:0,
    //    autoHeight: true,
    //    nav:true,
    //    dots: false,
    //    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    //    responsive:{
    //          0: {
    //             items:1
    //          },
    //          768: {
    //             items:3
    //          },
    //          1024:{
    //             items:4
    //          }
    //    }
    // });
}

function iluminimLEDExplica(){
    let iluminimLEDExplica = {
		gerarObjeto(){
			let nome_produto = $('body#page-products .product-info h1.product__name').text().toLowerCase();

			//termosIncludes: [] //TERMOS QUE PODE ESTÁ INCLUSO
			//termosNotIncludes: [] //TERMOS QUE NÃO PODE ESTÁ INCLUSO

			let duvidas = [
				{
				termosIncludes: ['fita', 'led'],
				termosNotIncludes: ['rgb'],
				titulo: 'Qual a diferença entre a fita led 3528 e 5050:',
				descricao_resumo: 'Conheças as diferenças entre a Fita LED 3528 e 5050 e as suas principais características.',
				descricao_completa: `
						A fita LED 3528 possui medida de 8 mm e seu consumo médio é de 5w por metro, o que gera aproximadamente 220 lm/m. Pode ser cortada no tamanho que você desejar e costuma ter espaços para corte a cada três LEDs. Seus LEDs são menores, com cerca de 3,5 mm por 2,8 mm.
						</br>
						</br>
						A fita LED 5050 possui medida de 10 mm de largura e é consideravelmente mais potente em relação ao modelo anterior, pois além de ter LEDs triplos, seus LEDs são maiores, medindo 5 mm por 5 mm. Seu consumo médio é de cerca de 15w por metro, três vezes maior do que a fita LED 3528.
				`,
				},
				{
				termosIncludes: ['fita', 'led'],
				termosNotIncludes: ['rgb'],
				titulo: 'O que é branco frio e branco quente?',
				descricao_resumo: 'Saiba o que é temperatura de cor e como aplicá-la corretamente em sua casa ou ambiente comercial.',
				descricao_completa: `
						O branco frio varia de 6.000 K a 6.500 K, e é o tipo de luz mais claro e tem um tom azulado. A luz fria é frequentemente usada em locais de trabalho, como escritórios e armazéns onde predominam cores vivas como branco, azul ou violeta. Também é comumente usado em residências, em cozinhas e corredores.
						</br>
						</br>
						O branco quente varia de 3.500 K a 4.000 K, e tem uma tonalidade amarelada. É ideal para uso residencial — quartos, salas de estar, lounges —, onde recriam ambientes relaxantes. É conhecido como a tonalidade mais amarelada da luz.
				`,
				},


				{
				termosIncludes: ['spot', 'trilho'],
				termosNotIncludes: ['metro'],
				titulo: 'Como instalar o Spot LED Trilho?',
				descricao_resumo: 'Aprenda a instalar o Spot LED Trilho na sua residência ou ambiente comercial!',
				descricao_completa: `
						A instalação é bem simples, basta encaixar os spots no trilho eletrificado e fixá-lo no teto. Atente-se para a posição dos móveis na hora de definir o local de cada lâmpada. O Spot é direcionável, o que possibilita que a luz seja direcionada para os locais que se deseja mais iluminação.
				`,
				},
				{
				termosIncludes: ['spot', 'trilho'],
				termosNotIncludes: ['metro'],
				titulo: 'Como usar o Spot LED Trilho na decoração?',
				descricao_resumo: 'Saiba como utilizar o Spot LED Trilho na decoração e iluminação de ambientes internos!',
				descricao_completa: `
						Uma boa dica para deixar o local com ar mais arrumado é usar o trilho eletrificado do mesmo tom do teto, geralmente o branco. Já, se você busca um estilo mais modernou ou industrial, os trilhos e spots pretos podem ser uma boa opção!
				`,
				},


				{
				termosIncludes: ['refletor', 'led'],
				termosNotIncludes: [],
				titulo: 'O Refletor LED ilumina quantos metros?',
				descricao_resumo: 'Saiba a distância que a luminosidade dos Refletores de LED alcançam.',
				descricao_completa: `
						A distância depende do modelo de Refletor e sua tecnologia, porém geralmente seguem este padrão:
						</br>
						</br>
						<ul>
							<li>10W até 1 metro;</li>
							<li>20W até 2 metros;</li>
							<li>30W até 3 metros;</li>
							<li>50W até 4 metros;</li>
							<li>100W até 8 metros;</li>
							<li>150W até 12 metros;</li>
							<li>200W até 16 metros.</li>
						</ul>
				`,
				},
				{
				termosIncludes: ['refletor', 'led'],
				termosNotIncludes: [],
				titulo: 'O que considerar na compra de um Refletor LED?',
				descricao_resumo: 'Entenda o que é importante saber na hora de adquirir um refletor.',
				descricao_completa: `
						Os pontos que deve ser levado em consideração na hora de adquirir um refletor LED são:
						</br>
						</br>
						<ul>
							<li>escolher o modelo de acordo com a sua necessidade (modelos como Sensor de Presença ou Solar, por exemplo);</li>
							<li>ter em mente o local que será instalado;</li>
							<li>quantidade de luz emitida por Watt;</li>
							<li>fornecedores especializados em soluções de LED (como a Iluminim);</li>
							<li>evite adquirir refletores de baixa qualidade.</li>
						</ul>
				`,
				},
			]

			let duvidas_filtradas = [];

			duvidas.forEach(item=> {

				let countIncludes = 0;
				let countNotIncludes = 0;

				let { termosIncludes, termosNotIncludes } = item;

				termosIncludes.forEach(termo=> {

				if( nome_produto.includes(termo) ){
						countIncludes = countIncludes + 1;
				}

				});

				if( termosNotIncludes.length > 0 ){
				termosNotIncludes.forEach(termo=> {

						if( nome_produto.includes(termo) ){
							countNotIncludes = countNotIncludes + 1;
						}

				});
				}

				if(countNotIncludes == 0){

				if(countIncludes == termosIncludes.length){
						
						duvidas_filtradas.push(item);

				}

				}

			});

			return duvidas_filtradas;
		},

		gerarHTML(){
			let duvidas = this.gerarObjeto();

			if(!duvidas) return;

			let html = duvidas.map((item, index)=> {
				let id = Date.now();
				let { titulo, descricao_completa, descricao_resumo } = item;

				$('body').append(`
					<div class="modal modal-personalizado fade" id="modal_${id}_${index}">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">${titulo}</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>

								<div class="modal-body">
									<div class="descricao-iluminim-led-explica">
										${descricao_completa}
									</div>
								</div>

								<div class="modal-footer">
									<button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
								</div>
							</div>
						</div>
					</div>
				`);

				return `
					<div class="item-led-explica" data-toggle="modal" data-hash="#modal_${id}_${index}" data-target="#modal_${id}_${index}">
						<div class="led-explica-icone"><i class="fas fa-bars"></i></div>
						<div class="led-explica-conteudo">
							<div class="led-explica-titulo">${ titulo }</div>
							<div class="led-explica-resumo-descricao">
							${ descricao_resumo }
							</div>
							<a href="#!">+ Leia mais</a>
						</div>
					</div>
				`;

			}).join('');

			return html;
		},

		renderizar(){
			let html = this.gerarHTML();

			if(!html) return;

			$('#descricao').after(`
				<div class="descricao-conteudo-accordion iluminim-led-explica">
				<div class="descricao-titulo iluminim-led-explica-titulo">
					<span class="descricao-icone">
						<svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM256 184c13.25 0 24-10.74 24-24c0-13.25-10.75-24-24-24S232 146.7 232 160C232 173.3 242.7 184 256 184zM304 352h-32V240C272 231.2 264.8 224 256 224H224C215.2 224 208 231.2 208 240S215.2 256 224 256h16v96h-32C199.2 352 192 359.2 192 368C192 376.8 199.2 384 208 384h96c8.836 0 16-7.164 16-16C320 359.2 312.8 352 304 352z"></path></svg>
					</span>
					<span>Iluminim LED Explica</span>
					<a href="https://blog.iluminim.com.br/" target="_blank" rel="noopener">+ Veja outros conteúdos</a>
				</div>
				<div class="descricao-conteudo iluminim-led-explica-conteudo">
					<div class="lista-iluminim-led-explica">
						${html}
					</div>
				</div>
				</div>
			`);
		}
    }

    iluminimLEDExplica.renderizar();
}

function compareOsModelos(){
	const CompareOsModelos = {
		gerarObjeto(){

			let objeto = [
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q42WBQ-40X40', 'PS-Q42WBQ-40X40'],
					produtos: [
					{
						nome: 'Luminária Plafon 40x40 42w LED Sobrepor Branco Quente',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/29010601/ab48ea5142.jpg',
						link: '/luminaria-plafon-40x40-42w-led-sobrepor-branco-quente',
						comparacaoValues: ['Fácil Instalação', '14 Meses', 'Sobrepor', '3,8 CM', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 40x40 42W LED Embutir Branco Quente Borda Branca',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/14649101/84d289f8bc.jpg',
						link: '/luminaria-plafon-40x40-42w-led-embutir-branco-quente-borda-branca',
						comparacaoValues: ['Slim', '14 Meses', 'Embutir', '1,3 CM', 'Bivolt'],
					}
					]
				},
			
				/*{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					aplicacoes: ['RSPM-10WBF', 'R-10WBF'],
					produtos: [
					{
						nome: 'Refletor Holofote MicroLED Slim 10W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/1000x1000/257/257163/produto/26482453/d4589d7898.jpg',
						link: '/refletor-holofoe-micro-led-slim-10w-branco-frio',
						comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor MicroLED Ultra Thin 10W Branco Frio Black Type',
						imagem: 'https://cdn.awsli.com.br/1000x1000/257/257163/produto/24684967/3d8a2e772c.jpg',
						link: '/refletor-micro-led-ultra-thin-10w-branco-frio-preto',
						comparacaoValues: ['Custo-benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					}
					]
				},*/
			
				/*{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					aplicacoes: ['RSPM-20WBF', 'LJC-W20-6500K', 'R-20WBF', 'XS-A20W-6500K'],
					produtos: [
					{
						nome: 'Refletor Holofote MicroLED Slim 20W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/27107826/0492d64ad9.jpg',
						link: '/refletor-holofote-micro-led-slim-20w-branco-frio',
						comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Mini Refletor Holofote LED SMD 20W Branco Frio IP67',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/51230287/66b0c068d9.jpg',
						link: '/mini-refletor-holofote-led-smd-20w-branco-frio-ip67',
						comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor MicroLED Ultra Thin 20W Branco Frio Black Type',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/24685222/c03e498658.jpg',
						link: '/refletor-microled-ultra-thin-20w-branco-frio-preto',
						comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor Holofote MicroLED 20W Multifocal Branco Frio Preto',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/39698568/ea016cdad1.jpg',
						link: '/refletor-holofote-microled-20w-multifocal-branco-frio-preto',
						comparacaoValues: ['Durabilidade', '6 Meses', 'IP66', '-', '120°', '50.000 Horas', 'Bivolt'],
					}
					]
				},*/
			
				/*{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					aplicacoes: ['RSPM-30WBF', 'LJC-W30-6500K', 'R-30WBF', 'XS-A30W-6500K'],
					produtos: [
					{
						nome: 'Refletor Holofote MicroLED Slim 30W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/27730580/2069c40987.jpg',
						link: '/refletor-holofote-microled-slim-30w-branco-frio-ip66',
						comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Mini Refletor Holofote LED SMD 30W Branco Frio IP67',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/39010352/aa34211c42.jpg',
						link: '/mini-refletor-holofote-led-smd-30w-branco-frio-ip67',
						comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor MicroLED Ultra Thin 30W Branco Frio Black Type',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/24685856/24b5b4e7ee.jpg',
						link: '/refletor-microled-ultra-thin-30w-branco-frio-preto',
						comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor Holofote MicroLED 30W Multifocal Branco Frio Preto',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/39697619/320605522b.jpg',
						link: '/refletor-holofote-microled-30w-multifocal-branco-frio-preto',
						comparacaoValues: ['Durabilidade', '6 Meses', 'IP66', '-', '120°', '50.000 Horas', 'Bivolt'],
					}
					]
				},*/
			
				/*{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					aplicacoes: ['RSPM-50WBF', 'LJC-W50-6500K', 'R-50WBF', 'XS-A50W-6500K', 'RI-50WBF'],
					produtos: [
					{
						nome: 'Refletor Holofote MicroLED Slim 50w Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RSPM-50WBF-19-05-2020v2.png',
						link: '/refletor-holofote-microled-slim-50w-branco-frio-ip66',
						comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Mini Refletor Holofote LED SMD 50w Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LJC-W50-6500K-ps-produto-18-05-2020.png',
						link: '/mini-refletor-holofote-led-smd-50w-branco-frio-ip67',
						comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor MicroLED Ultra Thin 50w Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/R-50WVE-ps-produto-18-05-2020.png',
						link: '/refletor-microled-ultra-thin-50w-branco-frio-preto',
						comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor Holofote MicroLED 50W Multifocal Branco Frio Preto',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/27783440/ddee109400.jpg',
						link: '/refletor-holofote-microled-50w-multifocal-branco-frio-preto',
						comparacaoValues: ['Durabilidade', '6 Meses', 'IP66', '-', '120°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor LED Industrial Modular 50w Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RI-50WBF-ps-produto-18-05-2020.png',
						link: '/refletor-led-industrial-modular-50w-branco-frio',
						comparacaoValues: ['Desempenho', '6 Meses', 'IP68', '> 0.95', '120°', '50.000 Horas', 'Bivolt'],
					},
					]
				},*/
			
				/*{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					aplicacoes: ['RSPM-100WBF', 'LJC-W100-6500K', 'R-100WBF'],
					produtos: [
					{
						nome: 'Refletor Holofote MicroLED Slim 100W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo2-RSPM-100WBF.png',
						link: '/refletor-holofote-microled-100w-branco-frio',
						comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Mini Refletor Holofote LED SMD 100W Branco Frio IP67',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo1-LJC-W100-6500K.png',
						link: '/mini-refletor-holofote-led-smd-100w-branco-frio-ip67',
						comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor MicroLED Ultra Thin 100W Branco Frio Black Type',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo3-R-100WBF.png',
						link: '/refletor-microled-ultra-thin-100w-branco-frio-preto',
						comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					},
					]
				},*/
			
				/*{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					aplicacoes: ['RSPM-200WBF', 'LJC-W200-6500K', 'R-200WBF'],
					produtos: [
					{
						nome: 'Refletor Holofote MicroLED Slim 200W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo2-RSPM-200WBF.png',
						link: '/refletor-micro-led-slim-200w-branco-frio',
						comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Mini Refletor Holofote LED SMD 200W Branco Frio IP67',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo1-LJC-W200-6500K.png',
						link: '/mini-refletor-holofote-led-smd-200w-branco-frio-ip67',
						comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor MicroLED Ultra Thin 200W Branco Frio Black Type',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo3-R-200WBFv1.png',
						link: '/refletor-microled-ultra-thin-200w-branco-frio-preto',
						comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					},
					]
				},*/
			
				/*{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					aplicacoes: ['RSPM-300WBF', 'LJC-W300-6500K', 'R-300WBF'],
					produtos: [
					{
						nome: 'Refletor Holofote MicroLED Slim 300W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RSPM-300WBF-22-06-2020.png',
						link: '/refletor-holofote-micro-led-slim-300w-branco-frio',
						comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Mini Refletor Holofote LED SMD 300W Branco Frio IP67',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LJC-W300-22-06-2020.png',
						link: '/mini-refletor-holofote-led-smd-300w-branco-frio-ip67',
						comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor MicroLED SMD Ultra Thin 300W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/R-300WBF-22-06-2020.png',
						link: '/refletor-microled-smd-ultra-thin-300w-branco-frio',
						comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					aplicacoes: ['RSPM-400WBF', 'LJC-W400-6500K', 'R-400WBF'],
					produtos: [
					{
						nome: 'Refletor MicroLED SMD Ultra Thin 400W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RSPM-400WBF-22-06-2020-v2.png',
						link: '/refletor-holofote-microled-slim-400w-branco-frio',
						comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Mini Refletor Holofote LED SMD 400W Branco Frio IP67',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LJC-W400-22-06-2020-v2.png',
						link: '/mini-refletor-holofote-led-smd-400w-branco-frio-ip67',
						comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor MicroLED SMD Ultra Thin 400W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/R-400WBF-22-06-2020-v2.png',
						link: '/refletor-microled-smd-ultra-thin-400w-branco-frio',
						comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					},
					]
				},*/
			
				/*{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					aplicacoes: ['RSPM-500WBF', 'R-500WBF'],
					produtos: [
					{
						nome: 'Refletor Holofote MicroLED Slim 500W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RSPM-500W-22-06-2020.png',
						link: '/refletor-holofote-microled-slim-500w-branco-frio',
						comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					},
					{
						nome: 'Refletor MicroLED SMD Ultra Thin 500W Branco Frio',
						imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/R-500W-22-06-2020.png',
						link: '/refletor-microled-smd-ultra-thin-500w-branco-frio',
						comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					},
					]
				},*/
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R12WBF', 'PS-R12WBF'],
					produtos: [
					{
						comparacaoValues: ['Fácil Instalação', '14 meses', 'Sobrepor', '4 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046527/0bde5ea9fa.jpg",
						link: "/luminaria-plafon-12w-led-sobrepor-branco-frio-redondo",
						nome: "Luminária Plafon 12w LED Sobrepor Branco Frio",
					},
					{
						comparacaoValues: ['Slim', '14 meses', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046498/8329e7a64e.jpg",
						link: "/luminaria-plafon-12w-led-embutir-branco-frio-redondo",
						nome: "Luminária Plafon 12w LED Embutir Branco Frio",
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R12WBQ', 'PS-R12WBQ'],
					produtos: [
					{
						comparacaoValues: ['Fácil Instalação', '14 meses', 'Sobrepor', '4 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046527/0bde5ea9fa.jpg",
						link: "/luminaria-plafon-12w-led-sobrepor-branco-quente-redondo",
						nome: "Luminária Plafon 12w LED Sobrepor Branco Quente",
					},
					{
						comparacaoValues: ['Slim', '14 meses', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046498/8329e7a64e.jpg",
						link: "/luminaria-plafon-12w-led-embutir-branco-quente-redondo",
						nome: "Luminária Plafon 12w LED Embutir Branco Quente",
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R12WBN', 'PS-R12WBN'],
					produtos: [
					{
						comparacaoValues: ['Fácil Instalação', '14 meses', 'Sobrepor', '4 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046527/0bde5ea9fa.jpg",
						link: "/luminaria-plafon-12w-led-sobrepor-branco-neutro-redondo",
						nome: "Luminária Plafon 12w LED Sobrepor Branco Neutro",
					},
					{
						comparacaoValues: ['Slim', '14 meses', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046498/8329e7a64e.jpg",
						link: "/luminaria-plafon-12w-led-embutir-branco-neutro-redondo",
						nome: "Luminária Plafon 12w LED Embutir Branco Neutro",
					},
					]
				},
				
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R18WBF', 'PS-R18WBF'],
					produtos: [
					{
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046510/056a4d6a4f.jpg",
						link: "/luminaria-plafon-18w-led-sobrepor-branco-frio-redondo",
						nome: "Luminária Plafon 18w LED Sobrepor Branco Frio",
					},
					{
						comparacaoValues: ['Slim', '3 Anos', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg",
						link: "/luminaria-plafon-18w-led-embutir-branco-frio-redondo",
						nome: "Luminária Plafon 18w LED Embutir Branco Frio",
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R18WBQ', 'PS-R18WBQ'],
					produtos: [
					{
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046511/0bd5d321d6.jpg",
						link: "/luminaria-plafon-18w-led-sobrepor-branco-quente-redondo",
						nome: "Luminária Plafon 18w LED Sobrepor Branco Quente",
					},
					{
						comparacaoValues: ['Slim', '3 Anos', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg",
						link: "/luminaria-plafon-18w-led-embutir-branco-quente-redondo",
						nome: "Luminária Plafon 18w LED Embutir Branco Quente",
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R18WBN', 'PS-R18WBN'],
					produtos: [
					{
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046510/056a4d6a4f.jpg",
						link: "/luminaria-plafon-18w-led-sobrepor-branco-neutro-redondo",
						nome: "Luminária Plafon 18w LED Sobrepor Branco Quente",
					},
					{
						comparacaoValues: ['Slim', '3 Anos', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg",
						link: "/luminaria-plafon-18w-led-embutir-branco-neutro-redondo",
						nome: "Luminária Plafon 18w LED Embutir Branco Neutro",
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R25WBF', 'PS-R25WBF'],
					produtos: [
					{
						nome: 'Luminária Plafon 25w LED Sobrepor Branco Frio',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046519/044c56d504.jpg',
						link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-redondo',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 25w LED Embutir Branco Frio',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg',
						link: '/luminaria-plafon-25w-led-embutir-branco-frio-redondo',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '2 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R25WBQ', 'PS-R25WBQ'],
					produtos: [
					{
						nome: 'Luminária Plafon 25w LED Sobrepor Branco Quente',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046519/044c56d504.jpg',
						link: '/luminaria-plafon-25w-led-sobrepor-branco-quente-redondo',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 25w LED Embutir Branco Quente',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg',
						link: '/luminaria-plafon-25w-led-embutir-branco-quente-redondo',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '2 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R25WBN', 'PS-R25WBN'],
					produtos: [
					{
						nome: 'Luminária Plafon 25w LED Sobrepor Branco Neutro',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046519/044c56d504.jpg',
						link: '/luminaria-plafon-25w-led-sobrepor-branco-neutro-redondo',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 25w LED Embutir Branco Neutro',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg',
						link: '/luminaria-plafon-25w-led-embutir-branco-neutro-redondo',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '2 cm', 'Bivolt'],
					},
					]
				},
			
				
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q12WBF', 'PS-Q12WBF'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 12W LED SOBREPOR BRANCO FRIO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046500/0e7822280f.jpg',
						link: '/luminaria-plafon-12w-led-sobrepor-branco-frio-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 12W LED EMBUTIR BRANCO FRIO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046496/0c9b985b0e.jpg',
						link: '/luminaria-plafon-12w-led-embutir-branco-frio-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q12WBN', 'PS-Q12WBN'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 12W LED SOBREPOR BRANCO NEUTRO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046500/0e7822280f.jpg',
						link: '/luminaria-plafon-12w-led-sobrepor-branco-neutro-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 12W LED EMBUTIR BRANCO NEUTRO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046496/0c9b985b0e.jpg',
						link: '/luminaria-plafon-12w-led-embutir-neutro-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q12WBQ', 'PS-Q12WBQ'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 12W LED SOBREPOR BRANCO QUENTE',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046500/0e7822280f.jpg',
						link: '/luminaria-plafon-12w-led-sobrepor-branco-quente-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 12W LED EMBUTIR BRANCO QUENTE',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046496/0c9b985b0e.jpg',
						link: '/luminaria-plafon-12w-led-embutir-branco-quente-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},               
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q18WBF', 'PS-Q18WBF'],
					produtos: [
					{
						nome: 'Luminária Plafon 18w LED Sobrepor Branco Frio',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046508/45c5ef0993.jpg',
						link: '/luminaria-plafon-18w-led-sobrepor-branco-frio-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 18w LED Embutir Branco Frio',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046504/02a5e1bcee.jpg',
						link: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q18WBQ', 'PS-Q18WBQ'],
					produtos: [
					{
						nome: 'Luminária Plafon 18w LED Sobrepor Branco Quente',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046508/45c5ef0993.jpg',
						link: '/luminaria-plafon-18w-led-sobrepor-branco-quente-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 18w LED Embutir Branco Quente',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046504/02a5e1bcee.jpg',
						link: '/luminaria-plafon-18w-led-embutir-branco-quente-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q18WBN', 'PS-Q18WBN'],
					produtos: [
					{
						nome: 'Luminária Plafon 18w LED Sobrepor Branco Neutro',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046508/45c5ef0993.jpg',
						link: '/luminaria-plafon-18w-led-sobrepor-branco-neutro-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 18w LED Embutir Branco Neutro',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046504/02a5e1bcee.jpg',
						link: '/luminaria-plafon-18w-led-embutir-branco-neutro-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q25WBF', 'PS-Q25WBF'],
					produtos: [
					{
						nome: 'Luminária Plafon 25w LED Sobrepor Branco Frio',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046517/e329b96685.jpg',
						link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 25w LED Embutir Branco Frio',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046513/48c5b1982b.jpg',
						link: '/luminaria-plafon-25w-led-embutir-branco-frio-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{ 
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q25WBQ', 'PS-Q25WBQ'],
					produtos: [
					{
						nome: 'Luminária Plafon 25w LED Sobrepor Branco Quente',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046517/e329b96685.jpg',
						link: '/luminaria-plafon-25w-led-sobrepor-branco-quente-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 25w LED Embutir Branco Quente',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046513/48c5b1982b.jpg',
						link: '/luminaria-plafon-25w-led-embutir-branco-quente-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q25WBN', 'PS-Q25WBN'],
					produtos: [
					{
						nome: 'Luminária Plafon 25w LED Sobrepor Branco Neutro',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046517/e329b96685.jpg',
						link: '/luminaria-plafon-25w-led-sobrepor-branco-neutro-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 25w LED Embutir Branco Neutro',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046513/48c5b1982b.jpg',
						link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PS-Q48WBF', 'PG-Q48WBF'],
					produtos: [
					{
						nome: 'Luminária Plafon 48W LED Sobrepor Branco Frio Borda Branca',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/20755316/8bb46a4362.jpg',
						link: '#!',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 48W LED Embutir Branco Frio Borda Branca',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/12615355/5ec9f9ed58.jpg',
						link: '#!',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{ 
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q45WBF', 'PS-Q45WBF'],
					produtos: [
					{
						nome: 'Luminária Plafon 45W LED Sobrepor Branco Frio',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/80775223/0b17a4b95f.jpg',
						link: '#!',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 45W LED Embutir Branco Frio',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/83486398/5b2506bb9b.jpg',
						link: '#!',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{ 
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q45WBQ', 'PS-Q45WBQ'],
					produtos: [
					{
						nome: 'Luminária Plafon 60x60 45W LED Sobrepor Branco Quente',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/80775223/0b17a4b95f.jpg',
						link: '/luminaria-plafon-60x60-45w-led-sobrepor-branco-quente',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'Luminária Plafon 62x62 45W LED Embutir Branco Quente',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/83486398/5b2506bb9b.jpg',
						link: '/luminaria-plafon-62x62-45w-led-embutir-branco-quente',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q45WBN', 'PS-Q45WBN'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO QUENTE',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/80775223/0b17a4b95f.jpg',
						link: '/luminaria-plafon-60x60-45w-led-sobrepor-branco-neutro',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO QUENTE',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/83486398/5b2506bb9b.jpg',
						link: '/luminaria-plafon-62x62-45w-led-embutir-branco-neutro',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q6WBQ', 'PS-Q6WBQ'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO QUENTE',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/11847246/c963fbc91e.jpg',
						link: '/luminaria-plafon-6w-led-sobrepor-branco-quente',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO QUENTE',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046522/11f768cc17.jpg',
						link: '/luminaria-plafon-6w-led-embutir-branco-quente-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R6WBQ', 'PS-R6WBQ'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO QUENTE',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/8046526/e66d903401.jpg',
						link: '/luminaria-plafon-6w-led-sobrepor-branco-quente-redondo',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO QUENTE',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046524/a3eae1f208.jpg',
						link: '/luminaria-plafon-6w-led-embutir-branco-quente-redondo',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q6WBF', 'PS-Q6WBF'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO FRIO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046525/7d5bab532f.jpg',
						link: '/luminaria-plafon-6w-led-sobrepor-branco-frio-quadrado',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO FRIO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046521/02f7b77de8.jpg',
						link: '/luminaria-plafon-6w-led-embutir-branco-frio-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R6WBF', 'PS-R6WBF'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO FRIO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046527/0bde5ea9fa.jpg',
						link: '/luminaria-plafon-6w-led-sobrepor-branco-frio-redondo',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO FRIO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046523/1a26444c1b.jpg',
						link: '/luminaria-plafon-6w-led-embutir-branco-frio-redondo',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-Q6WBN', 'PS-Q6WBN'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO NEUTRO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/38359454/071d1b2643.jpg',
						link: '/luminaria-plafon-6w-led-sobrepor-quadrado-branco-neutro',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO NEUTRO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/28319683/90fecb25bd.jpg',
						link: '/luminaria-plafon-6w-led-embutir-branco-neutro-quadrado',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					aplicacoes: ['PG-R6WBN', 'PS-R6WBN'],
					produtos: [
					{
						nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO NEUTRO',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/38359066/184219a74e.jpg',
						link: '/luminaria-plafon-6w-led-sobrepor-branco-neutro',
						comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					},
					{
						nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO NEUTRO',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/28320220/911cde57c0.jpg',
						link: '/luminaria-plafon-6w-led-embutir-branco-neutro-redonda',
						comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					},
					]
				},
				
				{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					aplicacoes: ['XL-3528RGB', 'XL-5050RGB'],
					produtos: [
					{
						nome: 'FITA LED RGB COLORIDA 3528 5 METROS 24W',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/15605205/5c2cb84e47.jpg',
						link: '/fita-led-rgb-colorida-3528-5-metros-24w',
						comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					},
					{
						nome: 'FITA LED RGB COLORIDA 5050 5 METROS 72W',
						imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/15605205/5c2cb84e47.jpg',
						link: '/fita-led-rgb-colorida-5050-5-metros-72w-ip65',
						comparacaoValues: ['Desempenho', '14 Meses', 'IP65', '72W',  'SMD 5050', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					aplicacoes: ['XL-3528BQ', 'XL-5050BQ'],
					produtos: [
					{
						nome: 'FITA LED BRANCO QUENTE 3528 5 METROS 24W',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/28273664/2a39a722a8.jpg',
						link: '/fita-led-branco-quente-3528-5-metros-24w',
						comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					},
					{
						nome: 'FITA LED BRANCO QUENTE 5050 5 METROS 72W',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/28273664/2a39a722a8.jpg',
						link: '/fita-led-branco-quente-5050-5-metros-72w',
						comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					aplicacoes: ['XL-3528AZ', 'XL-5050AZ'],
					produtos: [
					{
						nome: 'Fita LED Azul 3528 5 metros 24W IP65',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/19664195/426fcffd85.jpg',
						link: '/fita-led-azul-3528-5-metros-24w-ip65',
						comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					},
					{
						nome: 'Fita LED Azul 5050 5 metros 72W IP65',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/19664195/426fcffd85.jpg',
						link: '/fita-led-azul-5050-5-metros-72w-ip65',
						comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					aplicacoes: ['XL-3528BF', 'XL-5050BF'],
					produtos: [
					{
						nome: 'Fita LED Branco Frio 3528 5 metros 24W',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/15444902/829975f893.jpg',
						link: '/fita-led-branco-frio-3528-5-metros-24w',
						comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					},
					{
						nome: 'Fita LED Branco Frio 5050 5 metros 72W IP65',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/15444902/829975f893.jpg',
						link: '/fita-led-branco-frio-5050-5-metros-72w-ip65',
						comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					aplicacoes: ['XL-3528BM', 'XL-5050BM'],
					produtos: [
					{
						nome: 'Fita LED Branco Morno 3528 5 metros 24W IP65',
						imagem: 'https://cdn.awsli.com.br/800x800/257/257163/produto/15604609/98d677f8dd.jpg',
						link: '/fita-led-branco-morno-3528-5-metros-24w-ip65',
						comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					},
					{
						nome: 'Fita LED Branco Morno 5050 5 metros 72W IP65',
						imagem: 'https://cdn.awsli.com.br/800x800/257/257163/produto/15604609/98d677f8dd.jpg',
						link: '/fita-led-branco-morno-5050-5-metros-72w-ip65',
						comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					aplicacoes: ['XL-3528RO', 'XL-5050RO'],
					produtos: [
					{
						nome: 'Fita LED Rosa 3528 5 metros 24W IP65',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/31140979/bb89adebaf.jpg',
						link: '/fita-led-rosa-3528-5-metros-24w-ip65',
						comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					},
					{
						nome: 'Fita LED Rosa 5050 5 metros 72W IP65',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/31140979/bb89adebaf.jpg',
						link: '/fita-led-rosa-5050-5-metros-72w-ip65',
						comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					aplicacoes: ['XL-3528VM', 'XL-5050VM'],
					produtos: [
					{
						nome: 'Fita LED Vermelha 3528 5 metros 24W IP65',
						imagem: 'https://cdn.awsli.com.br/800x800/257/257163/produto/19664285/2ff95fafb4.jpg',
						link: '/fita-led-vermelha-3528-5-metros-72w-ip65',
						comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					},
					{
						nome: 'Fita LED Vermelha 5050 5 metros 72W IP65',
						imagem: 'https://cdn.awsli.com.br/800x800/257/257163/produto/19664285/2ff95fafb4.jpg',
						link: '/fita-led-vermelha-5050-5-metros-72w-ip65',
						comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					},
					]
				},
			
				{
					comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					aplicacoes: ['XL-3528VE', 'XL-5050VE'],
					produtos: [
					{
						nome: 'Fita LED Verde 3528 5 metros 24W IP65',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/19664004/0d1205e7f2.jpg',
						link: '/fita-led-verde-3528-5-metros-24w-ip65',
						comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					},
					{
						nome: 'Fita LED Verde 5050 5 metros 72W IP65',
						imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/19664004/0d1205e7f2.jpg',
						link: '/fita-led-verde-5050-5-metros-72w-ip6',
						comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					},
					]
				},
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-Q3WBF', 'COB-Q3WBF'],
					produtos: [
					{
						comparacaoValues: ['3w', '210 Lúmens', '55º', '25.000 horas', '7,5 X 7,5 X 4 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457670/83c1f5e767.jpg",
						link: "/spot-led-smd-3w-quadrado-branco-frio",
						nome: "SPOT LED SMD 3W QUADRADO BRANCO FRIO",
					},
					{
						comparacaoValues: ['3w', '270 Lúmens', '120º', '50.000 horas', '9,5 X 9,5 X 4,2 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12587062/e6eff9c00f.jpg",
						link: "/spot-led-3w-cob-embutir-quadrado-branco-frio-base-branca",
						nome: "SPOT LED 3W COB EMBUTIR QUADRADO BRANCO FRIO BASE BRANCA",
					},
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-Q3WBQ', 'COB-Q3WBQ'],
					produtos: [
					{
						comparacaoValues: ['3w', '210 Lúmens', '55º', '25.000 horas', '7,5 X 7,5 X 4 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457670/83c1f5e767.jpg",
						link: "/spot-led-smd-3w-quadrado-branco-quente",
						nome: "SPOT LED SMD 3W QUADRADO BRANCO QUENTE",
					},
					{
						comparacaoValues: ['3w', '270 Lúmens', '120º', '50.000 horas', '9,5 X 9,5 X 4,2 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12587062/e6eff9c00f.jpg",
						link: "/spot-led-3w-cob-embutir-quadrado-branco-quente-base-branca",
						nome: "Spot LED 3W COB Embutir Quadrado Branco Quente Base Branca",
					},
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-R3WBF', 'COB-R3WBF'],
					produtos: [
					{
						comparacaoValues: ['3w', '210 Lúmens', '55º', '25.000 horas', '7,5 X 7,5 X 4 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457369/4350d495e5.jpg",
						link: "/spot-led-smd-3w-redondo-branco-frio",
						nome: "SPOT LED SMD 3W REDONDO BRANCO FRIO",
					},
					{
						comparacaoValues: ['3w', '270 Lúmens', '120º', '50.000 horas', '9,5 X 9,5 X 4,2 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12491415/f1d14be73d.jpg",
						link: "/spot-led-3w-cob-embutir-redondo-branco-frio-base-branca",
						nome: "SPOT LED 3W COB EMBUTIR REDONDO BRANCO FRIO BASE BRANCA",
					},
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-R3WBQ', 'COB-R3WBQ'],
					produtos: [
					{
						comparacaoValues: ['3w', '210 Lúmens', '55º', '25.000 horas', '7,5 X 7,5 X 4 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457369/4350d495e5.jpg",
						link: "/spot-led-smd-3w-redondo-branco-quente",
						nome: "SPOT LED SMD 3W REDONDO BRANCO QUENTE",
					},
					{
						comparacaoValues: ['3w', '270 Lúmens', '120º', '50.000 horas', '9,5 X 9,5 X 4,2 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12491415/f1d14be73d.jpg",
						link: "/spot-led-3w-cob-embutir-redondo-branco-quente-base-branca",
						nome: "SPOT LED 3W COB EMBUTIR REDONDO BRANCO QUENTE BASE BRANCA",
					},
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-Q5WBF', 'COB-Q5WBF'],
					produtos: [
					{
						comparacaoValues: ['5w', '350 Lúmens', '55º', '25.000 horas', '8,6 X 8,6 X 2,5 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457089/882b65244e.jpg",
						link: "/spot-led-smd-5w-quadrado-branco-frio",
						nome: "SPOT LED SMD 5W QUADRADO BRANCO FRIO",
					},
					{
						comparacaoValues: ['5w', '450 Lúmens', '35º', '50.000 horas', '9 X 9 X 5 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12493992/8485c55252.jpg",
						link: "/spot-led-5w-cob-embutir-quadrado-branco-frio-base-branca",
						nome: "SPOT LED 5W COB EMBUTIR QUADRADO BRANCO FRIO BASE BRANCA",
					},
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-Q5WBF', 'COB-Q5WBF', 'D-QAB5WB'],
					produtos: [
					{
						comparacaoValues: ['5w', '350 Lúmens', '55º', '25.000 horas', '8,6 X 8,6 X 2,5 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457089/882b65244e.jpg",
						link: "/spot-led-smd-5w-quadrado-branco-quente",
						nome: "SPOT LED SMD 5W QUADRADO BRANCO QUENTE",
					},
					{
						comparacaoValues: ['5w', '450 Lúmens', '35º', '50.000 horas', '9 X 9 X 5 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/15069434/70b8c3d4af.jpg",
						link: "/spot-led-5w-cob-embutir-quadrado-branco-quente-base-branca",
						nome: "Spot LED 5W COB Embutir Quadrado Branco Quente Base Branca",
					},
					{
						comparacaoValues: ['5w', '475 Lúmens', '120º', '50.000 horas', '10,8 X 10,8 X 4 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/9595287/2c9cbb9d92.jpg",
						link: "/spot-5w-dicroica-led-base-branca",
						nome: "Spot 5W Dicróica LED Direcionavel Base Branca",
					}
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-R5WBQ', 'COB-R5WBQ'],
					produtos: [
					{
						comparacaoValues: ['5w', '350 Lúmens', '55º', '25.000 horas', '8,6 X 8,6 X 2,5 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/800x800/257/257163/produto/30457002/6fc736cb0b.jpg",
						link: "/spot-led-smd-5w-redondo-branco-quente",
						nome: "Spot LED SMD 5W Redondo Branco Quente",
					},
					{
						comparacaoValues: ['5w', '450 Lúmens', '35º', '50.000 horas', '9 X 9 X 5 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12412147/2d877643ea.jpg",
						link: "/spot-led-5w-cob-embutir-redondo-branco-quente-base-branca",
						nome: "Spot LED 5W COB Embutir Redondo Branco Quente Base Branca",
					}
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-R5WBF', 'COB-R5WBF'],
					produtos: [
					{
						comparacaoValues: ['5w', '350 Lúmens', '55º', '25.000 horas', '8,6 X 8,6 X 2,5 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/800x800/257/257163/produto/30457002/6fc736cb0b.jpg",
						link: "/spot-led-smd-5w-redondo-branco-frio",
						nome: "Spot LED SMD 5W Redondo Branco Frio",
					},
					{
						comparacaoValues: ['5w', '450 Lúmens', '35º', '50.000 horas', '9 X 9 X 5 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12412147/2d877643ea.jpg",
						link: "/spot-led-5w-cob-embutir-redondo-branco-frio-base-branca",
						nome: "Spot LED 5W COB Embutir Redondo Branco Frio Base Branca",
					}
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-Q7WBF', 'COB-Q7WBF'],
					produtos: [
					{
						comparacaoValues: ['7w', '630 Lúmens', '55º', '25.000 horas', '9 x 9 x 4,5 cm', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/43072722/e53be8a200.jpg",
						link: "/spot-led-smd-7w-quadrado-branco-frio",
						nome: "SPOT LED SMD 7W QUADRADO BRANCO FRIO",
					},
					{
						comparacaoValues: ['7w', '630 Lúmens', '30º', '50.000 horas', '10 x 10 x 5,3 cm', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/15069569/a251cae05c.jpg",
						link: "/spot-led-7w-cob-embutir-quadrado-branco-frio-base-branca",
						nome: "SPOT LED 7W COB EMBUTIR QUADRADO BRANCO FRIO BASE BRANCA",
					},
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-Q7WBQ', 'COB-Q7WBQ', 'D-QAB7WB'],
					produtos: [
					{
						comparacaoValues: ['7w', '630 Lúmens', '55º', '25.000 horas', '9 x 9 x 4,5 cm', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/43072722/e53be8a200.jpg",
						link: "/spot-led-smd-7w-quadrado-branco-quente",
						nome: "SPOT LED SMD 7W QUADRADO BRANCO QUENTE",
					},
					{
						comparacaoValues: ['7w', '630 Lúmens', '30º', '50.000 horas', '10 x 10 x 5,3 cm', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/15069569/a251cae05c.jpg",
						link: "/spot-led-7w-cob-embutir-quadrado-branco-quente-base-branca",
						nome: "SPOT LED 7W COB EMBUTIR QUADRADO BRANCO QUENTE BASE BRANCA",
					},
					{
						comparacaoValues: ['7w', '490 Lúmens', '30º', '25.000 horas', '10,8 X 10,8 X 4 CM', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/9595289/752ea9e01a.jpg",
						link: "/spot-7w-dicroica-led-base-branca",
						nome: "Spot 7W Dicróica LED Direcionavel Base Branca",
					}
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-R7WBF', 'COB-R7WBF'],
					produtos: [
					{
						comparacaoValues: ['7w', '630 Lúmens', '55º', '25.000 horas', '9 x 9 x 4,5 cm', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/41610089/57f265c152.jpg",
						link: "/spot-led-smd-7w-redondo-branco-frio",
						nome: "SPOT LED SMD 7W REDONDO BRANCO FRIO",
					},
					{
						comparacaoValues: ['7w', '630 Lúmens', '30º', '50.000 horas', '10 x 10 x 5,3 cm', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/15069525/3783defc2c.jpg",
						link: "/spot-led-7w-cob-embutir-redondo-branco-frio-base-branca",
						nome: "Spot LED 7W COB Embutir Redondo Branco Frio Base Branca",
					},
					]
				},*/
			
				/*{
					comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					aplicacoes: ['SMD-R7WBQ', 'COB-R7WBQ'],
					//naoAplicar: ['SMD-R7WBF-PT'],
					produtos: [
					{
						comparacaoValues: ['7w', '630 Lúmens', '55º', '25.000 horas', '9 x 9 x 4,5 cm', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/41610089/57f265c152.jpg",
						link: "/spot-led-smd-7w-redondo-branco-quente",
						nome: "Spot LED SMD 7W Redondo Branco Quente",
					},
					{
						comparacaoValues: ['7w', '630 Lúmens', '30º', '50.000 horas', '10 x 10 x 5,3 cm', 'Bivolt Automático'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/15069525/3783defc2c.jpg",
						link: "/spot-led-7w-cob-embutir-redondo-branco-quente-base-branca",
						nome: "Spot LED 7W COB Embutir Redondo Branco Quente Base Branca",
					},
					]
				},*/
			
				{
					comparacao: ['Área de abrangência', 'Autonomia', 'Luminaria', 'Modelo', 'Luz'],
					aplicacoes: ['23597', '24080', '27025', '25684', '25113', '25114', '25923', '25922', '24707', '24530', '24777', '25919', '24699', '25682', '25685', '25593', '26568', '25328'],
					produtos: [
					{
						comparacaoValues: ['25m²', '3/6h', 'Móvel', 'Slim', 'Fixa'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/16905459/72e5f39103.jpg",
						link: "/luminaria-de-emergencia-30-leds-slim",
						nome: "Luminária de Emergência 30 LEDs | Slim",
					},
					{
						comparacaoValues: ['450m²', '3h', 'Móvel', '2 Farois', 'Direcionavel'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/26997410/a20be0c9ce.jpg",
						link: "/luminaria-de-emergencia-led-2200-lumens-2-farois",
						nome: "Luminária de Emergência LED 2.200 Lúmens | 2 Faróis",
					},
					{
						comparacaoValues: ['120m²', '3h', 'Móvel | Fixa', '2 Farois | Premium', 'Fixa'],
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/41252542/e4048b1722.jpg",
						link: "/luminaria-de-emergencia-400-lumens-premium",
						nome: "Luminária de Emergência 400 Lúmens | Premium",
					},
					]
				},
			
				{
					comparacao: ['Ângulo de iluminação', 'Potência', 'Vida útil', 'Modelo'],
					aplicacoes: ['LT-', 'LUM-', 'T5C-30-'],
					produtos: [
					{
						comparacaoValues: ['120º', '9W', '50.000 Horas', 'Tubular T8'], //LT-60BF
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/8046561/a8bee3584e.jpg",
						link: "/lampada-led-tubular-t8-9w",
						nome: "Lampada LED Tubular T8 9w - 60cm - Branco Frio | Inmetro",
					},
					{
						comparacaoValues: ['120º', '9W', '40.000 Horas', 'Tubular T8 Com Calha'], //LTC-60-9W-L-BF
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/16243221/29cb0812cc.jpg",
						link: "/lampada-led-tubular-t8-9w-60cm-com-calha-branco-frio",
						nome: "Lampada LED Tubular T8 9w 60cm c/ Calha - Branco Frio",
					},
					{
						comparacaoValues: ['120º', '9W', '35.000 Horas', 'Ultra LED Tubular T5'], // T5C-60-9W-L-BF
						imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/42501063/cfd9341cab.jpg",
						link: "/lampada-led-tubular-t5-9w-60m-c-calha-branco-frio-inmetro",
						nome: "Lampada LED Tubular T5 9w - 60cm c/ Calha - Branco Frio | Inmetro",
					},
					]
				},
			
			];

			return objeto;

		},

		gerarHTML(){
			let prodSku = /* ILUMINIM_UTILS.produto.sku() */ '';
			let objeto = this.gerarObjeto();
			
			let itemFiltrado = objeto.filter(item=> {
				let produtoFiltrado = item.aplicacoes.filter(sku=> {
					if( ['LT-', 'LUM-', 'T5C-30-'].includes(sku) ){

					if(prodSku){
						return item;
					}
				
					} else {
						if(prodSku == sku || (prodSku.includes(`${sku}-KIT`) || prodSku.includes(`${sku}-60X60`) || prodSku.includes(`${sku}-62X62`)) ){
							return item;
						}
					}
				});
		
				if(produtoFiltrado.length > 0){
					let naoAplicar = (produtoFiltrado[0].naoAplicar || []).filter(sku=> prodSku.includes(sku));

					if( naoAplicar.length == 0 ){
						return item;
					}
				}
			});
		
			if(itemFiltrado.length == 0){
				return;
			}
		
			let { imagem, comparacao, produtos } = itemFiltrado[0];
			let htmlItems = produtos.map(item=> {
		
				let comparacaoValuesHTML = item.comparacaoValues.map(value=> `<div class="caracteristica-item">${value}</div>`).join('');
		
				return `
					<div class="produto-similar ps-produto">
		
						<div class="caracteristica-item-img-produto">
							<a href="${item.link}">
								<img src="${item.imagem}" alt="${item.nome}" title="${item.nome}"> 
							</a>
						
							<div class="nome-produto">
								<a href="${item.link}">${item.nome}</a>
							</div>
						</div>
						
						${comparacaoValuesHTML}
		
					</div>
				`;
		
			}).join('');
		
			let comparacaoHTML = comparacao.map(value=> `<div class="caracteristica-item">${value}</div>`).join('');

			return `
				<div class="descricao-conteudo-accordion compare-os-modelos">
					<div class="descricao-titulo descricao-titulo-compare-os-modelos">
					<span class="descricao-icone">
                        <svg id="compare-modelos" width="40" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
                            <g id="Camada_1" class="st0"><rect x="-31.5" y="-25.1" class="st1" width="1076.8" height="1076.8"/>
                                <rect x="169.3" y="369.8" class="st2" width="697.2" height="562.2"/><rect x="113.8" y="389.9" transform="matrix(0.9094 0.4159 -0.4159 0.9094 226.7675 -50.446)" class="st2" width="230.8" height="210.7"/><rect x="699.7" y="392.2" transform="matrix(0.4683 0.8836 -0.8836 0.4683 862.9684 -452.683)" class="st2" width="215.7" height="196.9"/><rect x="82.2" y="526.3" class="st3" width="301.4" height="42.4"/><rect x="137.6" y="547.5" class="st3" width="38.1" height="399.4"/><rect x="153.7" y="915.1" class="st3" width="718.9" height="31.8"/><rect x="861" y="547.5" class="st3" width="38.1" height="399.4"/><rect x="665.1" y="527.1" class="st3" width="287" height="40.8"/><rect x="323.6" y="442.9" transform="matrix(0.6416 -0.7671 0.7671 0.6416 -197.6527 505.2423)" class="st3" width="236.4" height="42.4"/><rect x="489.1" y="441.9" transform="matrix(-0.6416 -0.7671 0.7671 -0.6416 641.5842 1226.03)" class="st3" width="236.4" height="42.4"/><rect x="3.4" y="431.9" transform="matrix(0.5 -0.866 0.866 0.5 -329.8044 334.9742)" class="st3" width="243.7" height="42.4"/><rect x="789.1" y="431.9" transform="matrix(-0.5 -0.866 0.866 -0.5 972.5751 1467.5474)" class="st3" width="241.6" height="42.2"/><rect x="506.5" y="342.3" class="st3" width="36" height="604.6"/><rect x="168" y="337" class="st3" width="699.8" height="41.3"/><path class="st2" d="M526.2,90.1c1.4-2,30.2-42.1,70.6-37.6c36.6,4.1,57.5,42,63,64.5c13.5,55.3-39.2,127.9-133.2,177.4 C430.1,246.5,376.1,174.4,389,119.4c5-21.5,24.2-57.2,60-63.7C476.6,50.7,506.2,64.3,526.2,90.1z"/></g><g id="Camada_2" class="st0"><circle class="st2" cx="500" cy="500" r="470.1"/><text transform="matrix(0.8877 0 0 1 339.0438 759.5255)" class="st4 st5 st6">?</text></g><g id="Camada_3" class="st0"><image style="display:inline;overflow:visible;" width="163" height="130" prev-url="Chat.png" transform="matrix(5.9272 0 0 5.9272 14.6534 121.6471)"></image></g><g id="Camada_4" class="st0"><image style="display:inline;overflow:visible;" width="154" height="145" prev-url="Cuidado Máximo.png" transform="matrix(5.9715 0 0 5.9715 40.1929 73.9824)"></image><rect x="40.2" y="74" class="st2" width="919.6" height="255.3"/><rect x="40.2" y="319.4" class="st3" width="919.6" height="40.9"/><rect x="89.2" y="360.3" class="st2" width="823.1" height="579.6"/><rect x="255.6" y="726.5" transform="matrix(0.8163 0.5777 -0.5777 0.8163 508.996 -84.6883)" class="st3" width="264.1" height="62.7"/><rect x="358.8" y="623.1" transform="matrix(-0.5777 0.8163 -0.8163 -0.5777 1455.6456 555.7568)" class="st3" width="450.6" height="62.7"/></g><g id="Camada_5" class="st0"><rect x="140" y="29.5" class="st2" width="583.1" height="941.1"/><rect x="704.8" y="250.2" class="st2" width="155.2" height="720.4"/><path class="st2" d="M723.1,29.5C768.7,103,814.4,176.6,860,250.2c-8.6,20.5-17.2,41.1-25.8,61.6c-62.9-11.5-125.8-22.9-188.7-34.4 C671.4,194.8,697.2,112.1,723.1,29.5z"/><path class="st3" d="M719.3,41.8C763,112,806.8,182.1,850.5,252.3c-43.8,0-87.6,0-131.5,0C719.1,182.1,719.2,112,719.3,41.8z"/><image style="overflow:visible;" width="127" height="166" prev-url="Descrição.png" transform="matrix(5.6693 0 0 5.6693 140.0023 29.4518)"></image><rect x="312.5" y="386.8" class="st3" width="373.8" height="39.2"/><rect x="312.5" y="556.2" class="st3" width="373.8" height="38.1"/><rect x="312.5" y="720.3" class="st3" width="373.8" height="38.1"/></g><g id="Camada_6"><polygon class="st7" points="496.6,55.2 641.2,348 964.3,395 730.5,622.9 785.7,944.8 496.6,792.8 207.6,944.8 262.8,622.9 28.9,395 352.1,348 "/><image style="display:none;overflow:visible;" width="167" height="137" prev-url="Compare.png" transform="matrix(5.781 0 0 5.781 19.3529 99.8235)"></image><path class="st8" d="M524.8,358.9c5.6-7.3,15.1-21.9,14.3-40.2c-0.9-20.3-13.9-34.8-21.2-42.6c-26.6-28.6-85.6-87.8-165.3-162.9 c-20.6-15.3-48.6-11.7-62.8,5.7c-11.6,14.1-12.6,35.6-1.9,52.7c35.9,36.1,71.8,72.2,107.8,108.2c-114.1-0.2-228.2-0.5-342.4-0.7 c-18.1,5.1-30.6,21.7-30.4,40.2c0.1,18.1,12.2,34.3,29.7,39.5c114.5,0.5,228.9,0.9,343.4,1.4C360.3,397,324.6,433.7,289,470.4 c-8.6,17.5-5.6,38.2,7.1,51.5c14.8,15.5,40.2,18.1,59.3,4.9C411.8,470.9,468.3,414.9,524.8,358.9z"/><path class="st8" d="M477.6,715.3c-5.6-7.3-15.1-21.9-14.3-40.2c0.9-20.3,13.9-34.8,21.2-42.6c26.6-28.6,85.6-87.8,165.3-162.9 c20.2-15.4,48.3-12,62.8,5.7c12.3,15,12.9,37.9,0.6,55.1c-35.5,35.3-71,70.6-106.5,105.9c114.1-0.2,228.2-0.5,342.4-0.7 c18.1,5.1,30.6,21.7,30.4,40.2c-0.1,18.1-12.2,34.3-29.7,39.5c-115.1-0.1-230.2-0.2-345.3-0.3c36.3,37.3,72.6,74.6,108.8,111.9 c8.6,17.5,5.6,38.2-7.1,51.5c-14.8,15.5-40.2,18.1-59.3,4.9C590.5,827.3,534.1,771.3,477.6,715.3z"/>
                            </g>
                        </svg>
                    </span>
					<span>Compare os Modelos</span>
					</div>
					<div class="descricao-conteudo">

					<div class="produtos-similares visible-desktop">
							<div class="acopla-produtos">
								<div class="produto-similar ps_tabela">

								<div class="caracteristica-item-img-produto">
										<img src="https://cdn.awsli.com.br/257/257163/arquivos/18-05-2020-icon-ps-tabela.png">
								</div>
								
								${comparacaoHTML}

								</div>

								${htmlItems}
							</div>
					</div>

					</div>
				</div>
			`;

		},

		renderizar(){

			let html = this.gerarHTML();

			$('.descricao-conteudo-accordion[data-referencia="Características Técnicas"]').after(html);

		}
    }

    CompareOsModelos.renderizar();
}

function ajustarItensInclusos(){
    $('.descricao-conteudo-accordion[data-referencia="Itens Inclusos"] .table-striped tbody').attr('style', 'display: none !important;');
    $('.descricao-conteudo-accordion[data-referencia="Itens Inclusos"] .table-striped tbody').after(`
       <tbody style="box-sizing: border-box;">
          <tr style="box-sizing: border-box;">
             <td class="index" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); background-color: rgb(249, 249, 249);">Produto <b>novo</b>, <b>testado</b> e <b>aprovado</b>, com selo de <b>qualidade</b> ISO</td>
          </tr>

          <tr style="box-sizing: border-box;">
             <td class="index" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221);">Embalagem <b>lacrada</b> com todos itens necessários para <b>instalação</b></td>
          </tr>

          <tr style="box-sizing: border-box;">
             <td class="index" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); background-color: rgb(249, 249, 249);">Manual de instruções para instalação/utilização em <b>Português (PT-BR)</b></td>
          </tr>

          <tr style="box-sizing: border-box;">
             <td class="index" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221);">Certificado de garantia digital e impresso</td>
          </tr>

          <tr style="box-sizing: border-box;">
             <td class="index" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); background-color: rgb(249, 249, 249);">Nota fiscal digital e impressa</td>
          </tr>

          <tr style="box-sizing: border-box;">
             <td class="index" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221);">Entrega <b><i>expressa</i></b>, compra enviada em no <b>máximo 24h</b></td>
          </tr>
       </tbody>
    `);
}

function ajustarDescricao(){
    $('#descricao .table-striped tr').each(function(){
       let textos = $(this).text().toLowerCase();

       if( textos.includes('garantia') && (textos.includes('meses') || textos.includes('anos')) ){
          $(this).remove();
       }
    });

    $('#descricao table.table.table-striped').each(function(){
      let string = $(this).text().trim() || '';

      if(string.length < 20){
          $(this).remove();
      }
    });

    $('#descricao table.table.table-striped td').each(function(){
       let text = $(this).text().trim();
       if(text == ''){
             $(this).remove();
       }
    });
 
    $('div#descricao img[src="https://cdn.awsli.com.br/257/257163/arquivos/itensTITULO.png"], div#descricao img[src*="itenstitulo.png"]').parent().replaceWith(`
       <div class="descricao-titulo" data-referencia="Itens Inclusos">
             <span class="descricao-icone">
                <svg fill="currentColor" width="23" height="23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M76.29 154.2C73.41 157.7 69.22 159.8 64.72 159.1C60.23 160.2 55.86 158.5 52.69 155.3L4.686 107.3C-1.562 101.1-1.562 90.94 4.686 84.69C10.93 78.44 21.06 78.44 27.31 84.69L62.92 120.3L131.7 37.76C137.4 30.97 147.5 30.05 154.2 35.71C161 41.37 161.9 51.45 156.3 58.24L76.29 154.2zM76.29 314.2C73.41 317.7 69.22 319.8 64.72 319.1C60.23 320.2 55.86 318.5 52.69 315.3L4.686 267.3C-1.562 261.1-1.562 250.9 4.686 244.7C10.93 238.4 21.06 238.4 27.31 244.7L62.92 280.3L131.7 197.8C137.4 190.1 147.5 190.1 154.2 195.7C161 201.4 161.9 211.5 156.3 218.2L76.29 314.2zM191.1 96C191.1 87.16 199.2 80 207.1 80H496C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H207.1C199.2 112 191.1 104.8 191.1 96zM191.1 256C191.1 247.2 199.2 240 207.1 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H207.1C199.2 272 191.1 264.8 191.1 256zM159.1 416C159.1 407.2 167.2 400 175.1 400H496C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H175.1C167.2 432 159.1 424.8 159.1 416zM63.1 448C46.33 448 31.1 433.7 31.1 416C31.1 398.3 46.33 384 63.1 384C81.67 384 95.1 398.3 95.1 416C95.1 433.7 81.67 448 63.1 448z"></path></svg>
             </span>
             <span>Itens Inclusos</span>
       </div>
    `);

    $('div#descricao img[src="https://cdn.awsli.com.br/257/257163/arquivos/caracteristicasTITULO.png"], div#descricao img[src*="caracteristicastitulo.png"]').parent().replaceWith(`
       <div class="descricao-titulo descricao-titulo-caracteristicas-tecnicas" data-referencia="Características Técnicas">
             <span class="descricao-icone">
                <svg fill="currentColor" width="23" height="23" xmlns="http://www.w3.org/2000/svg" viewBox="16 48 496 416"><path d="M16 72C16 58.75 26.75 48 40 48H88C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72zM80 112V80H48V112H80zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H176C167.2 112 160 104.8 160 96C160 87.16 167.2 80 176 80H496zM496 240C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H176C167.2 272 160 264.8 160 256C160 247.2 167.2 240 176 240H496zM496 400C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H176C167.2 432 160 424.8 160 416C160 407.2 167.2 400 176 400H496zM88 208C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232C16 218.7 26.75 208 40 208H88zM48 240V272H80V240H48zM16 392C16 378.7 26.75 368 40 368H88C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392zM80 432V400H48V432H80z"></path></svg>
             </span>
             <span>Características Técnicas</span>
       </div>
    `);

    $('div#descricao img[src*="confiratitulo.png"], div#descricao img[src="https://cdn.awsli.com.br/257/257163/arquivos/confira.png"]').parent().replaceWith(`
       <div class="descricao-titulo descricao-titulo-o-que-dizem-nossos-clientes" data-referencia="Confira o que dizem nossos clientes">
             <span class="descricao-icone"><svg id="nossos-clientes" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve"><g id="Camada_1" class="st0"><rect x="-31.5" y="-25.1" class="st1" width="1076.8" height="1076.8"/><rect x="169.3" y="369.8" class="st2" width="697.2" height="562.2"/><rect x="113.8" y="389.9" transform="matrix(0.9094 0.4159 -0.4159 0.9094 226.7675 -50.446)" class="st2" width="230.8" height="210.7"/><rect x="699.7" y="392.2" transform="matrix(0.4683 0.8836 -0.8836 0.4683 862.9684 -452.683)" class="st2" width="215.7" height="196.9"/><rect x="82.2" y="526.3" class="st3" width="301.4" height="42.4"/><rect x="137.6" y="547.5" class="st3" width="38.1" height="399.4"/><rect x="153.7" y="915.1" class="st3" width="718.9" height="31.8"/><rect x="861" y="547.5" class="st3" width="38.1" height="399.4"/><rect x="665.1" y="527.1" class="st3" width="287" height="40.8"/><rect x="323.6" y="442.9" transform="matrix(0.6416 -0.7671 0.7671 0.6416 -197.6527 505.2423)" class="st3" width="236.4" height="42.4"/><rect x="489.1" y="441.9" transform="matrix(-0.6416 -0.7671 0.7671 -0.6416 641.5842 1226.03)" class="st3" width="236.4" height="42.4"/><rect x="3.4" y="431.9" transform="matrix(0.5 -0.866 0.866 0.5 -329.8044 334.9742)" class="st3" width="243.7" height="42.4"/><rect x="789.1" y="431.9" transform="matrix(-0.5 -0.866 0.866 -0.5 972.5751 1467.5474)" class="st3" width="241.6" height="42.2"/><rect x="506.5" y="342.3" class="st3" width="36" height="604.6"/><rect x="168" y="337" class="st3" width="699.8" height="41.3"/><path class="st2" d="M526.2,90.1c1.4-2,30.2-42.1,70.6-37.6c36.6,4.1,57.5,42,63,64.5c13.5,55.3-39.2,127.9-133.2,177.4C430.1,246.5,376.1,174.4,389,119.4c5-21.5,24.2-57.2,60-63.7C476.6,50.7,506.2,64.3,526.2,90.1z"/></g><g id="Camada_2" class="st0"><circle class="st2" cx="500" cy="500" r="470.1"/><text transform="matrix(0.8878 0 0 1 339.0438 759.5255)" class="st4 st5 st6">?</text></g><g id="Camada_3"><image style="display:none;overflow:visible;" width="1000" height="1000" prev-url="Chat.png" transform="matrix(0.8738 0 0 0.8738 60.8081 70.0023)"></image><rect x="73.4" y="176.1" class="st7" width="843.9" height="548.5"/><path class="st7" d="M608.1,694.9c73.1,49.8,146.1,99.5,219.2,149.3c6.4-54,12.7-108,19.1-162C766.9,686.4,687.5,690.6,608.1,694.9z"/><rect x="451.4" y="295.9" class="st8" width="336.7" height="42.4"/><rect x="198.3" y="426.1" class="st8" width="589.8" height="46.6"/><rect x="198.3" y="560.6" class="st8" width="589.8" height="46.6"/></g><g id="Camada_4" class="st0"><image style="overflow:visible;" width="154" height="145" prev-url="Cuidado Máximo.png" transform="matrix(5.9715 0 0 5.9715 40.1929 73.9824)"></image><rect x="40.2" y="74" class="st2" width="919.6" height="255.3"/><rect x="40.2" y="319.4" class="st3" width="919.6" height="40.9"/><rect x="89.2" y="360.3" class="st2" width="823.1" height="579.6"/><rect x="255.6" y="726.5" transform="matrix(0.8163 0.5777 -0.5777 0.8163 508.996 -84.6883)" class="st3" width="264.1" height="62.7"/><rect x="358.8" y="623.1" transform="matrix(-0.5777 0.8163 -0.8163 -0.5777 1455.6456 555.7568)" class="st3" width="450.6" height="62.7"/></g><g id="Camada_5" class="st0"><rect x="140" y="29.5" class="st2" width="583.1" height="941.1"/><rect x="704.8" y="250.2" class="st2" width="155.2" height="720.4"/><path class="st2" d="M723.1,29.5C768.7,103,814.4,176.6,860,250.2c-8.6,20.5-17.2,41.1-25.8,61.6c-62.9-11.5-125.8-22.9-188.7-34.4C671.4,194.8,697.2,112.1,723.1,29.5z"/><path class="st3" d="M719.3,41.8C763,112,806.8,182.1,850.5,252.3c-43.8,0-87.6,0-131.5,0C719.1,182.1,719.2,112,719.3,41.8z"/><image style="overflow:visible;" width="1000" height="1000" prev-url="Descrição.png" transform="matrix(0.8379 0 0 0.8379 81.0644 81.0644)"></image><rect x="312.5" y="386.8" class="st3" width="373.8" height="39.2"/><rect x="312.5" y="556.2" class="st3" width="373.8" height="38.1"/><rect x="312.5" y="720.3" class="st3" width="373.8" height="38.1"/></g><g id="Camada_6" class="st0"><polygon class="st7" points="496.6,55.2 641.2,348 964.3,395 730.5,622.9 785.7,944.8 496.6,792.8 207.6,944.8 262.8,622.9 28.9,395 352.1,348 "/><image style="overflow:visible;" width="167" height="137" prev-url="Compare.png" transform="matrix(5.781 0 0 5.781 19.3529 99.8235)"></image><path class="st2" d="M524.8,358.9c5.6-7.3,15.1-21.9,14.3-40.2c-0.9-20.3-13.9-34.8-21.2-42.6c-26.6-28.6-85.6-87.8-165.3-162.9c-20.6-15.3-48.6-11.7-62.8,5.7c-11.6,14.1-12.6,35.6-1.9,52.7c35.9,36.1,71.8,72.2,107.8,108.2c-114.1-0.2-228.2-0.5-342.4-0.7c-18.1,5.1-30.6,21.7-30.4,40.2c0.1,18.1,12.2,34.3,29.7,39.5c114.5,0.5,228.9,0.9,343.4,1.4C360.3,397,324.6,433.7,289,470.4c-8.6,17.5-5.6,38.2,7.1,51.5c14.8,15.5,40.2,18.1,59.3,4.9C411.8,470.9,468.3,414.9,524.8,358.9z"/><path class="st2" d="M477.6,715.3c-5.6-7.3-15.1-21.9-14.3-40.2c0.9-20.3,13.9-34.8,21.2-42.6c26.6-28.6,85.6-87.8,165.3-162.9c20.2-15.4,48.3-12,62.8,5.7c12.3,15,12.9,37.9,0.6,55.1c-35.5,35.3-71,70.6-106.5,105.9c114.1-0.2,228.2-0.5,342.4-0.7c18.1,5.1,30.6,21.7,30.4,40.2c-0.1,18.1-12.2,34.3-29.7,39.5c-115.1-0.1-230.2-0.2-345.3-0.3c36.3,37.3,72.6,74.6,108.8,111.9c8.6,17.5,5.6,38.2-7.1,51.5c-14.8,15.5-40.2,18.1-59.3,4.9C590.5,827.3,534.1,771.3,477.6,715.3z"/></g><g id="Camada_7" class="st0"><image style="overflow:visible;" width="1000" height="1000" prev-url="Sacola.png" transform="matrix(0.8385 0 0 0.8385 80.7486 80.7486)"></image><path class="st2" d="M787.4,334.9c-8.6-9.5-20.3-9.2-21.9-9.2c-46.4,0.2-92.7,0.5-139.1,0.7c-82.4,0.7-164.7,1.4-247.1,2.1c-46.4-0.5-92.7-0.9-139.1-1.4c-2.6,0.1-13.9,0.7-23.3,9.8c-10.2,9.9-10.6,22.3-10.6,24.7c-0.8,169.4-1.5,338.9-2.3,508.3c0.1,1.6,0.6,11.9,9.4,19c10.4,8.4,23.1,4.6,24,4.3c177.2,0.5,354.3,0.9,531.5,1.4c1.5,0,11-0.3,18.1-8.1c7.5-8.4,6.2-18.7,5.9-20.1c0.5-169.9,0.9-339.8,1.4-509.6C794.6,355.1,795.6,344,787.4,334.9z M645.3,534.5c1.2,11.3-5.3,20.5-7.6,23.8c-86.5,125.8-98.3,140.9-121.8,171.2c-3.7,4.8-12.8,16.6-26.8,18.4c-8.1,1-14.9-1.7-18.7-3.5c-4.9-4-12.1-10.1-20.1-18c-36.8-36.3-74.4-93.5-59.6-114.2c2.8-4,8.4-7.7,14.3-9.2c11.3-2.9,21.5,3.2,23.5,4.5c0,0,6.9,4.3,20.4,22.7c0,0,0,0,0,0c1.7,2.4,3.1,4.1,3.5,4.6c1.5,1.8,15.4,18.5,23.5,29.2c2.4,3.2,5.9,7.9,9.9,13.9c14.3-26.8,42.7-66.8,99.6-146.9c4.2-5.9,14.1-19.5,28.9-21c2.6-0.3,12.2-0.9,20.6,5.8C635.7,516.1,644.1,523,645.3,534.5z"/><path class="st2" d="M439.4,335.6c-0.2-40.5-0.5-80.9-0.7-121.4c7.3-32.1,36.1-54.6,67.8-53.9c29.1,0.7,55.1,20.8,63.5,49.7c-0.5,42.3-0.9,84.7-1.4,127c19.8,0.2,39.5,0.5,59.3,0.7c0.2-36.2,0.4-72.5,0.5-108.7c2.3-75.2-57.8-135.9-126.1-135.9c-60.3,0-115.4,47.5-124.9,112.6c0.2,43.8,0.4,87.5,0.6,131.3C398.4,336.5,418.9,336.1,439.4,335.6z"/></g></svg></span>
             <span>Confira o que dizem nossos clientes</span>
       </div>
    `);            
    
    $(`
       div#descricao img[src*="/arquivos/os-beneficios-do-led"], 
       div#descricao img[src*="/arquivos/beneficiosled"],
       div#descricao img[src*="pimgpsh_fullsize_distr"],
       div#descricao img[src*="gratis-pagina-produto-08-04-4545-13-08"]
    `).remove(); 

    $('#descricao .descricao-titulo').each(function(){
       if( $(this).parents('.descricao-conteudo-accordion').length > 0 ){
          return;
       }

       $(this).nextUntil('.descricao-titulo').wrapAll(`<div class="descricao-conteudo" data-referencia="${$(this).attr('data-referencia')}"></div>`);
       $(this).wrap(`<div class="descricao-conteudo-accordion" data-referencia="${$(this).attr('data-referencia')}"></div>`);
       $(this).parent().next('.descricao-conteudo').insertAfter(this);
    });

    if( $('#descricao > div.new__description__text:nth-child(2)').length > 0){
       $('#descricao > p').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
          <div class="descricao-conteudo descricao"></div>
       `);
    } else {
       if($('#descricao > div:nth-child(2)').length > 0){
          $('#descricao > div:nth-child(1) + ~').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
             <div class="descricao-conteudo descricao"></div>
          `);
       } else if ($('#descricao > div:first-child').length > 0) {
          if($('#descricao > div:first-child + *:empty').length == 0){
             $('#descricao > div:first-child').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
                <div class="descricao-conteudo descricao"></div>
             `);
          }else {
             $('#descricao > div:first-child ~ *').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
                <div class="descricao-conteudo descricao"></div>
            `);
          }
       } else {
          if($('#descricao > div:first-child + *:empty').length == 0){

             $('#descricao > p').first().nextUntil('.descricao-conteudo-accordion').prevObject.prevObject.wrapAll(`
                <div class="descricao-conteudo descricao"></div>
             `);
          } else {
             $('#descricao > p').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
                <div class="descricao-conteudo descricao"></div>
             `);
          }
       }
 
    }

    $('#descricao > .descricao-conteudo.descricao').before(`
       <div class="descricao-titulo descricao-titulo-descricao">
             <span class="descricao-icone">
                <svg fill="currentColor" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 32 448 448"><path d="M128 184C114.7 184 104 173.3 104 160C104 146.7 114.7 136 128 136C141.3 136 152 146.7 152 160C152 173.3 141.3 184 128 184zM192 160C192 151.2 199.2 144 208 144H336C344.8 144 352 151.2 352 160C352 168.8 344.8 176 336 176H208C199.2 176 192 168.8 192 160zM192 256C192 247.2 199.2 240 208 240H336C344.8 240 352 247.2 352 256C352 264.8 344.8 272 336 272H208C199.2 272 192 264.8 192 256zM192 352C192 343.2 199.2 336 208 336H336C344.8 336 352 343.2 352 352C352 360.8 344.8 368 336 368H208C199.2 368 192 360.8 192 352zM128 232C141.3 232 152 242.7 152 256C152 269.3 141.3 280 128 280C114.7 280 104 269.3 104 256C104 242.7 114.7 232 128 232zM128 376C114.7 376 104 365.3 104 352C104 338.7 114.7 328 128 328C141.3 328 152 338.7 152 352C152 365.3 141.3 376 128 376zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64H64C46.33 64 32 78.33 32 96z"></path></svg>
             </span>
             <span>Descrição</span>
       </div>
    `);

    $('#descricao > .descricao-titulo.descricao-titulo-descricao, #descricao > .descricao-conteudo.descricao').wrapAll(`
       <div class="descricao-conteudo-accordion accordion-descricao"></div>
    `);

    $('#descricao').prepend(`
        <div class="descrica-tarja">
            <div class="descricao-tarja-titulo">
            Só hoje: <span>Frete expresso grátis</span> para todo brasil!
            </div>
        </div>
    `);

    $('#descricao .descricao-conteudo-accordion.accordion-descricao img[src*="pimgpsh_fullsize_distr"]').parent().remove(); //REMOVER TARJA FRETE LARANJA FRETE GRÁTIS

    $('#descricao *').each(function(){ //REMOVENDO ITENS VAZIO;
       var text = $(this).html();
       if(text == '&nbsp;'){
             $(this).remove();
       }
    });

    $('#descricao table.table.table-striped').each(function(){ //REMOVENDO TABELAS VAZIAS
       if( $(this).find('tr').length < 2 ){
             $(this).remove();
       }
    });

    $('#descricao table td').each(function(){
       const textoTD = $(this).text().toLowerCase();

       if (textoTD == 'ano') {
          $(this).closest('tr').remove();
       }
    });

    $('.descricao-conteudo[data-referencia="Características Técnicas"] > table.table.table-striped > tbody').prepend(`
       <tr style="box-sizing: border-box;">
          <td class="index aaaa" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221);"><strong>Ano</strong></td>
          <td style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221);"><strong style="font-weight: 700 !important;">2023/2024</strong></td>
       </tr>
       <tr style="box-sizing: border-box;">
          <td class="index" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); background-color: rgb(249, 249, 249);"><b>Marca</b></td>
          <td style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); background-color: rgb(249, 249, 249);">Importado</td>
       </tr>
       <tr style="box-sizing: border-box;">
          <td class="index" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); background-color: rgb(249, 249, 249);"><b>Garantia</b></td>
          <td style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); background-color: rgb(249, 249, 249);">6 MESES</td>
       </tr>
    `);

    $('#descricao').addClass('descricao-ativa');

    $(document).on('click', '.descricao-titulo', function(){
       $(this).parent().toggleClass('accordion-active');
       utils.slideToggle($(this).next()[0], 500);
       $(this).parent().find('.carousel-target').trigger('refresh.owl.carousel');

       setTimeout(() => {
          $(this).parent().find('.carousel-target').trigger('refresh.owl.carousel');
       }, 500);
    });
 
    adicionarBeneficiosLED();
    avaliacoesPersonalizadas();
    duvidasRapidas();
    cuidadoMaximoComSuaEncomenda();
    iluminimLEDExplica();
    compareOsModelos();
    ajustarItensInclusos();

    $('.descricao-conteudo-accordion.cuidado-maximo-com-sua-encomenda').insertAfter('.descricao-conteudo-accordion.accordion-descricao');
    $('.descricao-conteudo-accordion.beneficios-led').insertAfter('.descricao-conteudo-accordion[data-referencia="Características Técnicas"]');

    $('.descricao-conteudo').hide();

    if( $('.descricao-conteudo.descricao').text() == '' ){
    
       $('.descricao-conteudo.descricao').parents('.descricao-conteudo-accordion.accordion-descricao').remove();
    
    }

    if(/*ILUMINIM_UTILS.screen.isMobile()*/ ''){
       /*$(`
          .descricao-conteudo-accordion.accordion-descricao .descricao-titulo,
          .descricao-conteudo-accordion[data-referencia="Itens Inclusos"] .descricao-titulo,
          .descricao-conteudo-accordion[data-referencia="Características Técnicas"] .descricao-titulo,
          .descricao-conteudo-accordion.compare-os-modelos .descricao-titulo
       `).click();*/
    } else {
    //    $(`
    //       .descricao-conteudo-accordion.accordion-descricao .descricao-titulo,
    //       .descricao-conteudo-accordion[data-referencia="Itens Inclusos"] .descricao-titulo,
    //       .descricao-conteudo-accordion[data-referencia="Características Técnicas"] .descricao-titulo,
    //       .descricao-conteudo-accordion.compare-os-modelos .descricao-titulo,
    //       .descricao-conteudo-accordion[data-referencia="Confira o que dizem nossos clientes"] .descricao-titulo,
    //       .descricao-conteudo-accordion.cuidado-maximo-com-sua-encomenda .descricao-titulo,
    //       .descricao-conteudo-accordion.duvidas-rapidas .descricao-titulo,
    //       .descricao-conteudo-accordion.accordion-avaliacoes-personalizadas .descricao-titulo,
    //       .descricao-conteudo-accordion.beneficios-led .descricao-titulo
    //    `).click();
    }
}

ajustarDescricao();


