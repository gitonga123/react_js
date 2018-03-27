/**
 * (function(){})();
 * This function executes automatically after the file loads
 */
(function () {
    // Check permissions
    if ("Notification" in window) {
        let permission = Notification.permission;

        if (permission === "denied") {
            return;
        } else if (permission === "granted") {
            return checkVersion();
        }

        Notification.requestPermission().then(function () {
            checkVersion();
        });
    }

    function checkVersion() {
        // Retrieve current version
        let latestVersion = document.querySelector(".js-currentVersion").textContent;
        let currentVersion = localStorage.getItem("conciseVersion");
        
            displayNotification(
                `Click to see what's new in v${latestVersion}`,
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/concise-logo.png",
                "A new version of Concise is available",
                `https://github.com/ConciseCSS/concise.css/releases/v${latestVersion}`
            );

            localStorage.setItem("conciseVersion", latestVersion);
        
    }

    function displayNotification(body, icon, title, link, duration) {
        link = link || 0; // Link is optional
        duration = duration || 5000; // Default duration is 5 seconds

        let options = {
            body: body,
            icon: icon
        };

        let n = new Notification(title, options);

        if (link) {
            n.onclick = function () {
                window.open(link);
            };
        }

        setTimeout(n.close.bind(n), duration);
    }
}());