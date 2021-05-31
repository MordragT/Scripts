signons = `[
]`;
if (logins = prompt("Logins JSON: [{},{}]", signons)) {
    try {
        logins = JSON.parse(logins);
        for (i = 0; lg = logins[i]; i++) { if (!lg.origin) { lg.origin = lg.hostname } }
        ChromeUtils.import("resource://gre/modules/LoginHelper.jsm");
        LoginHelper.maybeImportLogins(logins);
    } catch (e) { console.log(e); }
}