window.onload = function() {
        botoesMusica()
}

// Pass the checkbox name to the function
function getCheckedBoxes(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        checkboxesChecked.push("'" + checkboxes[i].value + "'");
     }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

function gerarPost(){
    textoNovo = ""
    if(document.getElementById("tipoPost").value == "comum"){
        textoNovo = document.getElementById("texto").value.replaceAll("\n", "<br>\\\n                 ").replaceAll("'", "\\'")
        document.getElementById("convertido").innerHTML = textoNovo
    } else if(document.getElementById("tipoPost").value == "musica"){
        textoNovo = document.getElementById("texto").value.replaceAll("\n", "<br>\\\n                 ").replaceAll("><br>", ">").replaceAll("'", "\\'")
        document.getElementById("convertido").innerHTML = textoNovo.replaceAll(">\\", ">")
    }
    return textoNovo
}

function copiarPost(){
    basePost = `{
        'id': <id>>,
        'title': '<titulo>',
        'author': 'Gabe',
        'date': '<data>',
        'nota': '<nota>',
        'body': '<corpo>',
        'tags': <tags>,
        'slug': '<slug>',
        'imagem': '<imagem>',
    }`
    textoNovo = document.getElementById("texto").value
    basePost = basePost.replaceAll("<titulo>", document.getElementById("titulo").value)
    basePost = basePost.replaceAll("<corpo>", gerarPost())
    textoTags = getCheckedBoxes("tags");
    basePost = basePost.replaceAll("<tags>", "[" + textoTags + "]")
    console.log(basePost)
    navigator.clipboard.writeText(basePost);
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