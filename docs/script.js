function changeTheme(sender) {
    var value = sender.value;
    document.body.className = value;
}

function addCssFile(filename) {
    var el = document.createElement("link");
    el.setAttribute("rel", "stylesheet");
    el.setAttribute("type", "text/css");
    if (
        (location.hostname === "127.0.0.1" || location.hostname === "localhost")
        && typeof themeSiteUrl === 'undefined'
    ) {
        el.setAttribute("href", "../dist/" + filename);
    } else {
        el.setAttribute("href", "https://unpkg.com/@bndynet/dialog-themes/dist/" + filename);
    }
    document.head.appendChild(el);
}

var configFile = 'config.json';
if (typeof themeSiteUrl !== 'undefined') {
    configFile = themeSiteUrl + configFile;
}
fetch(configFile).then(function(response) {
    return response.json();
}).then(function(json) {
    var elThemes = document.getElementById("ddlThemes");
    var themes = json.themes;
    for (var theme of themes) {
        if (theme !== "default") {
            addCssFile(theme + ".css");
        }
        var option = document.createElement("option");
        option.innerText = theme;
        option.value = theme === "default" ? "" : theme;
        elThemes.appendChild(option);
    }
    changeTheme(document.getElementById("ddlThemes"));
});