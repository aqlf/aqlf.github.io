function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#maisSobreAQLFFr").click(function() {
    scrollToAnchor('botton-aqlf-fr2');
});

$("#voltarTop-fr").click(function() {
    scrollToAnchor('maisSobreAQLFFr2');
});

$("#maisSobreAQLF").click(function() {
    scrollToAnchor('botton-aqlf2');
});

$("#voltarTop").click(function() {
    scrollToAnchor('maisSobreAQLF2');
});


(function(){
    "use strict";

    $('.carousel').carousel();

    $("a").click(function(){
        $(".navbar-collapse").removeClass("in");
    });

})();

(function(){
    "use strict";

    var responsabilidade_civil = $("#responsabilidade_civil");
    var contratos_comerciais_e_civis = $("#contratos_comerciais_e_civis");
    var tributario = $("#tributario");
    var regulatorio = $("#regulatorio");
    var imobiliario = $("#imobiliario");
    var administrativo = $("#administrativo");
    var familia_e_sucessoes = $("#familia_e_sucessoes");
    var trabalhista_e_previdenciário = $("#trabalhista_e_previdenciário");
    var estrangeiro_e_expatriado = $("#estrangeiro_e_expatriado");

    var btn_responsabilidade_civil = $("#btn-responsabilidade_civil");
    var btn_contratos_comerciais_e_civis = $("#btn-contratos_comerciais_e_civis");
    var btn_tributario = $("#btn-tributario");
    var btn_regulatorio = $("#btn-regulatorio");
    var btn_administrativo = $("#btn-administrativo");
    var btn_imobiliario = $("#btn-imobiliario");
    var btn_familia_e_sucessoes = $("#btn-familia_e_sucessoes");
    var btn_trabalhista_e_previdenciário = $("#btn-trabalhista_e_previdenciário");
    var btn_estrangeiro_e_expatriado = $("#btn-estrangeiro_e_expatriado");

    responsabilidade_civil.show();
    contratos_comerciais_e_civis.hide();
    tributario.hide();
    regulatorio.hide();
    imobiliario.hide();
    administrativo.hide();
    familia_e_sucessoes.hide();
    trabalhista_e_previdenciário.hide();
    estrangeiro_e_expatriado.hide();

    btn_responsabilidade_civil.click(function(){
        alterar_active("responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado");
    });
    btn_contratos_comerciais_e_civis.click(function(){
        alterar_active("contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil");
    });
    btn_tributario.click(function(){
        alterar_active("tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis");
    });
    btn_regulatorio.click(function(){
        alterar_active("regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario");
    });
    btn_administrativo.click(function(){
        alterar_active("administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario");
    });
    btn_imobiliario.click(function(){
        alterar_active("imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio");
    });
    btn_familia_e_sucessoes.click(function(){
        alterar_active("familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo");
    });
    btn_trabalhista_e_previdenciário.click(function(){
        alterar_active("trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes");
    });
    btn_estrangeiro_e_expatriado.click(function(){
        alterar_active("estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário");
    });

    var btn2_responsabilidade_civil = $("#btn2-responsabilidade_civil");
    var btn2_contratos_comerciais_e_civis = $("#btn2-contratos_comerciais_e_civis");
    var btn2_tributario = $("#btn2-tributario");
    var btn2_regulatorio = $("#btn2-regulatorio");
    var btn2_administrativo = $("#btn2-administrativo");
    var btn2_imobiliario = $("#btn2-imobiliario");
    var btn2_familia_e_sucessoes = $("#btn2-familia_e_sucessoes");
    var btn2_trabalhista_e_previdenciário = $("#btn2-trabalhista_e_previdenciário");
    var btn2_estrangeiro_e_expatriado = $("#btn2-estrangeiro_e_expatriado");

    btn2_responsabilidade_civil.click(function(){
        alterar_active2("responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado");
    });
    btn2_contratos_comerciais_e_civis.click(function(){
        alterar_active2("contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil");
    });
    btn2_tributario.click(function(){
        alterar_active2("tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis");
    });
    btn2_regulatorio.click(function(){
        alterar_active2("regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario");
    });
    btn2_administrativo.click(function(){
        alterar_active2("administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario");
    });
    btn2_imobiliario.click(function(){
        alterar_active2("imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio");
    });
    btn2_familia_e_sucessoes.click(function(){
        alterar_active2("familia_e_sucessoes", "trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo");
    });
    btn2_trabalhista_e_previdenciário.click(function(){
        alterar_active2("trabalhista_e_previdenciário", "estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes");
    });
    btn2_estrangeiro_e_expatriado.click(function(){
        alterar_active2("estrangeiro_e_expatriado", "responsabilidade_civil", "contratos_comerciais_e_civis", "tributario", "regulatorio", "imobiliario", "administrativo", "familia_e_sucessoes", "trabalhista_e_previdenciário");
    });

})();

(function(){
    "use strict";

    var responsabilidade_civil = $("#responsabilidade_civil_fr");
    var contratos_comerciais_e_civis = $("#contratos_comerciais_e_civis_fr");
    var tributario = $("#tributario_fr");
    var regulatorio = $("#regulatorio_fr");
    var imobiliario = $("#imobiliario_fr");
    var administrativo = $("#administrativo_fr");
    var familia_e_sucessoes = $("#familia_e_sucessoes_fr");
    var trabalhista_e_previdenciário = $("#trabalhista_e_previdenciário_fr");
    var estrangeiro_e_expatriado = $("#estrangeiro_e_expatriado_fr");

    responsabilidade_civil.show();
    contratos_comerciais_e_civis.hide();
    tributario.hide();
    regulatorio.hide();
    imobiliario.hide();
    administrativo.hide();
    familia_e_sucessoes.hide();
    trabalhista_e_previdenciário.hide();
    estrangeiro_e_expatriado.hide();

    var btn_responsabilidade_civil = $("#btn-responsabilidade_civil_fr");
    var btn_contratos_comerciais_e_civis = $("#btn-contratos_comerciais_e_civis_fr");
    var btn_tributario = $("#btn-tributario_fr");
    var btn_regulatorio = $("#btn-regulatorio_fr");
    var btn_administrativo = $("#btn-administrativo_fr");
    var btn_imobiliario = $("#btn-imobiliario_fr");
    var btn_familia_e_sucessoes = $("#btn-familia_e_sucessoes_fr");
    var btn_trabalhista_e_previdenciário = $("#btn-trabalhista_e_previdenciário_fr");
    var btn_estrangeiro_e_expatriado = $("#btn-estrangeiro_e_expatriado_fr");

    btn_responsabilidade_civil.click(function(){
        alterar_active("responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr");
    });
    btn_contratos_comerciais_e_civis.click(function(){
        alterar_active("contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr");
    });
    btn_tributario.click(function(){
        alterar_active("tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr");
    });
    btn_regulatorio.click(function(){
        alterar_active("regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr");
    });
    btn_administrativo.click(function(){
        alterar_active("administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr");
    });
    btn_imobiliario.click(function(){
        alterar_active("imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr");
    });
    btn_familia_e_sucessoes.click(function(){
        alterar_active("familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr");
    });
    btn_trabalhista_e_previdenciário.click(function(){
        alterar_active("trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr");
    });
    btn_estrangeiro_e_expatriado.click(function(){
        alterar_active("estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr");
    });

    var btn2_responsabilidade_civil = $("#btn2-responsabilidade_civil_fr");
    var btn2_contratos_comerciais_e_civis = $("#btn2-contratos_comerciais_e_civis_fr");
    var btn2_tributario = $("#btn2-tributario_fr");
    var btn2_regulatorio = $("#btn2-regulatorio_fr");
    var btn2_administrativo = $("#btn2-administrativo_fr");
    var btn2_imobiliario = $("#btn2-imobiliario_fr");
    var btn2_familia_e_sucessoes = $("#btn2-familia_e_sucessoes_fr");
    var btn2_trabalhista_e_previdenciário = $("#btn2-trabalhista_e_previdenciário_fr");
    var btn2_estrangeiro_e_expatriado = $("#btn2-estrangeiro_e_expatriado_fr");

    btn2_responsabilidade_civil.click(function(){
        alterar_active2("responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr");
    });
    btn2_contratos_comerciais_e_civis.click(function(){
        alterar_active2("contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr");
    });
    btn2_tributario.click(function(){
        alterar_active2("tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr");
    });
    btn2_regulatorio.click(function(){
        alterar_active2("regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr");
    });
    btn2_administrativo.click(function(){
        alterar_active2("administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr");
    });
    btn2_imobiliario.click(function(){
        alterar_active2("imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr");
    });
    btn2_familia_e_sucessoes.click(function(){
        alterar_active2("familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr");
    });
    btn2_trabalhista_e_previdenciário.click(function(){
        alterar_active2("trabalhista_e_previdenciário_fr", "estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr");
    });
    btn2_estrangeiro_e_expatriado.click(function(){
        alterar_active2("estrangeiro_e_expatriado_fr", "responsabilidade_civil_fr", "contratos_comerciais_e_civis_fr", "tributario_fr", "regulatorio_fr", "imobiliario_fr", "administrativo_fr", "familia_e_sucessoes_fr", "trabalhista_e_previdenciário_fr");
    });

})();

function alterar_active(dir1, dir2, dir3, dir4, dir5, dir6, dir7, dir8, dir9){

    "use strict";

    var d1 = $("#"+dir1);
    var d2 = $("#"+dir2);
    var d3 = $("#"+dir3);
    var d4 = $("#"+dir4);
    var d5 = $("#"+dir5);
    var d6 = $("#"+dir6);
    var d7 = $("#"+dir7);
    var d8 = $("#"+dir8);
    var d9 = $("#"+dir9);

    d9.slideUp();
    d8.slideUp();
    d7.slideUp();
    d6.slideUp();
    d5.slideUp();
    d4.slideUp();
    d3.slideUp();
    d2.slideUp();
    d1.slideDown();

}

function alterar_active2(dir1, dir2, dir3, dir4, dir5, dir6, dir7, dir8, dir9){

    "use strict";

    var d1 = $("#"+dir1);
    var d2 = $("#"+dir2);
    var d3 = $("#"+dir3);
    var d4 = $("#"+dir4);
    var d5 = $("#"+dir5);
    var d6 = $("#"+dir6);
    var d7 = $("#"+dir7);
    var d8 = $("#"+dir8);
    var d9 = $("#"+dir9);

    d9.hide();
    d8.hide();
    d7.hide();
    d6.hide();
    d5.hide();
    d4.hide();
    d3.hide();
    d2.hide();
    d1.fadeIn();
}








