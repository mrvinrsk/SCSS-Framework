function togglePopup(id) {
    var elem = document.getElementById(id);
    var body = document.querySelector('body');

    if (elem !== null) {
        if (elem.style.display === 'none' || !elem.style.display) {
            elem.style.display = 'block';
        } else {
            elem.style.display = 'none';
        }
        body.classList.toggle('noscroll');
    }
}


function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}


/* Accordions */
var accordionToggles = document.getElementsByClassName("accordion__toggle");

for (var i = 0; i < accordionToggles.length; i++) {
    accordionToggles[i].addEventListener('click', function () {
        this.classList.toggle("opened");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = "calc(" + content.scrollHeight + "px" + " + 1.375rem)";
        }
    });
}

window.addEventListener('resize', function () {
    for (var i = 0; i < accordionToggles.length; i++) {
        if (accordionToggles[i].classList.contains('opened')) {
            var content = accordionToggles[i].nextElementSibling;

            content.style.maxHeight = "calc(" + content.scrollHeight + "px" + " + 1.375rem)";
        }
    }
});

function randInt(min, max) {
    return Math.random() * (max - min) + min;
}

/* Obfuscation */
var obfs = document.getElementsByClassName('obf');
const obfsChars = "abcdefghijklmnopqrstuvwxyz";

function updateObfuscation() {
    for (var i = 0; i < obfs.length; i++) {
        var length = obfs[i].innerText.length;
        var str = "";

        for (var j = 0; j < length; j++) {
            var char = obfsChars.charAt(randInt(0, obfsChars.length - 1));
            if (randInt(0, 1) === 1) {
                char = char.toUpperCase();
            }

            str += char;
        }
        obfs[i].innerText = str;
    }

    setTimeout(updateObfuscation, 5);
}

if (obfs.length >= 1) {
    updateObfuscation();
}