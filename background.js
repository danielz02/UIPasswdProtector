let sensitiveWebsite = ["https://login.uillinois.edu/",
                        "https://shibboleth.illinois.edu/",
                        "https://sts.illinois.edu/"]; // hard code for now, convert to Json file later

/**
 * Very stupid prototype :D
 * TODO: Pop up Cisco Anyconnect with proper user settings
 * TODO: Remove hard coding and fetch the Json file from GitHub
 * TODO: VPN/Proxy detection
 * TODO: Unit test
 * Let's call it a day.
 */
chrome.tabs.onCreated.addListener(function (tab) {
    for (let url in sensitiveWebsite) {
        if (url.match(tab.url)) {
            window.alert("Check if your are using third-party VPN to prevent your account from being scrambled");
        }
    }
});
