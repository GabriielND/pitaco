window.onload = function() {
        botoesMusica()
}

function gerarPost(){
    textoNovo = ""
    console.log(document.getElementById("tipoPost").value)
    if(document.getElementById("tipoPost").value == "comum"){
        textoNovo = document.getElementById("texto").value.replaceAll("\n", "<br>\\\n                 ").replaceAll("'", "\\'")
        document.getElementById("convertido").innerHTML = textoNovo
    } else if(document.getElementById("tipoPost").value == "musica"){
        textoNovo = document.getElementById("texto").value.replaceAll("\n", "<br>\\\n                 ").replaceAll("><br>", ">").replaceAll("'", "\\'")
        document.getElementById("convertido").innerHTML = textoNovo.replaceAll(">\\", ">")
    }
}

function copiarPost(){
    navigator.clipboard.writeText(textoNovo);
}

function botoesMusica(){
    template = "<ul class=\"favs\"><div><em class=\"musicStar\">t</em><p>Favoritas</p></div>\n\
                <li></li>\n\
                </ul>\n\
                <ul class=\"favs\" id=\"mencoes\">\n\
                <div><em class=\"musicStar\">p</em><p>Menções Honrosas</p></div>\n\
                <li></li>\n\
                </ul>\n\
                <div class=\"track\">\n\
                <h2></h2>\n\
                <p></p></div>"
    if(document.getElementById("tipoPost").value == "musica"){
        document.getElementById("addTrack").style = "display: block;"
        document.getElementById("addFav").style = "display: block;"
        console.log(document.getElementById("texto").value)
        if(document.getElementById("texto").value=="<empty string>" || document.getElementById("texto").value==""){
            document.getElementById("texto").value = template.replaceAll("                 ", "")
        }
    } else{
        document.getElementById("addTrack").style = "display: none;"
        document.getElementById("addFav").style = "display: none;"
        if(document.getElementById("texto").value=template)document.getElementById("texto").value=""
    }
}

// function addTrack(){
//     document.getElementById("texto").value = document.getElementById("texto").value + "\n<div class=\"track\">\n<h2></h2>\n<p></p></div>"
// }

function addMarks(texto) {
//IE support
if (document.selection) {
    document.getElementById("texto").focus();
    const sel = document.selection.createRange();
    sel.text = texto;
}
//MOZILLA and others
else if (document.getElementById("texto").selectionStart || document.getElementById("texto").selectionStart == '0') {
    var startPos = document.getElementById("texto").selectionStart;
    var endPos = document.getElementById("texto").selectionEnd;
    document.getElementById("texto").value = document.getElementById("texto").value.substring(0, startPos)
        + texto
        + document.getElementById("texto").value.substring(endPos, document.getElementById("texto").value.length);
} else {
    document.getElementById("texto").value += texto;
    }
}