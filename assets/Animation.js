/*
    @conf.el = selector;
    @conf.valor = Number;
    @conf.atributo = String do style;
    @conf.tipo = "px" || "%" || "pt" etc || null || undefined
    @conf.crescent = Boolean;
    @conf.time = Number;
    @conf.total = function() return total || Number;
*/
function animation(conf){
    var valor = typeof(conf.inicial) == 'number' ? conf.inicial : conf.inicial();
    var linear = setInterval(function(){
        conf.crescent ? valor += conf.valor : valor -= conf.valor;
        conf.el['style'][conf.atributo] = valor + conf.tipo;
        if(typeof(conf.total) == "number"){
            if(conf.crescent){
                if (valor >= conf.total){ clearInterval(linear); }
            }else{
                if (valor <= conf.total){ clearInterval(linear); }
            }
        }else{
            if(conf.crescent){
                if (valor >= conf.total()){ clearInterval(linear); }
            }else{
                if (valor <= conf.total()){ clearInterval(linear); }
            }
        }
    },conf.time);
}