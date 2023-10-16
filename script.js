function Window_onLoad() {
    window.resizeTo(500, screen.availHeight);
    window.moveTo(screen.availWidth / 4, 0);

    var scriptsFolder = new ActiveXObject("Scripting.FileSystemObject").GetFolder("Shells");
    var scriptList = [];

    var files = new Enumerator(scriptsFolder.Files);

    for (; !files.atEnd(); files.moveNext()) {
        var file = files.item();
        scriptList.push(file.Name);
    }

    var container = document.getElementById("script-container");

    for (var i = 0; i < scriptList.length; i++) {
        var scriptName = scriptList[i];
        var paragraph = document.createElement("p"); // Créez un élément <p>
        var button = document.createElement("button");
        button.innerText = scriptName;
        button.onclick = function () {
            runScript("Shells\\" + scriptName);
        };
        paragraph.appendChild(button); // Ajoutez le bouton à la balise <p>
        container.appendChild(paragraph); // Ajoutez la balise <p> au conteneur
    }
}
 
window.onload=Window_onLoad;

function runScript(scriptPath) {
    var cmd = new ActiveXObject("WScript.Shell");
    cmd.Run(scriptPath, 0, false);
}
