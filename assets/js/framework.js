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


/*var redirects = document.getElementsByClassName('local_redirect');
for (var o = 0; o < redirects.length; o++) {
    var red = redirects[o];
    red.innerHTML = "<a href='#" + red.dataset.localHref + "'><span>#</span></a> " + red.innerText;
}*/

document.querySelectorAll('.local_redirect').forEach(redirect => {
    redirect.innerHTML = "<a href='#" + redirect.dataset.localHref + "'><span>#</span></a> " + redirect.innerText;
});


var placeholders = document.getElementsByClassName('placeholder');
for (var p = 0; p < placeholders.length; p++) {
    var ph = placeholders[p];

    //ph.style.height = window.getComputedStyle(ph, null).getPropertyValue('font-size');
    ph.style.backgroundColor = window.getComputedStyle(ph, null).getPropertyValue('color');
}

/* Tabs */
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

document.querySelectorAll('.tabs .tab').forEach(tab => {
    if (tab.dataset.tabToggle) {
        const toggle = tab.dataset.tabToggle;

        tab.addEventListener('click', function () {
            const ID = makeid(25);
            tab.parentElement.parentElement.dataset.tabTempId = ID;

            /* Reset tabs */
            document.querySelectorAll('.tab').forEach(t => {
                if (tab.parentElement === t.parentElement) {
                    delete t.dataset.tabActive;
                }
            });

            /* Reset tabcontent */
            document.querySelectorAll(".tab-panel").forEach(content => {
                if (tab.parentElement.parentElement === content.parentElement) {
                    if (content.dataset.tabListen) {
                        delete content.dataset.tabActive;
                    }
                }
            });

            /* Open selected tabcontent */
            document.querySelectorAll(".tab-panel").forEach(content => {
                if (tab.parentElement.parentElement === content.parentElement) {
                    if (content.dataset.tabListen) {
                        if (content.dataset.tabListen === toggle) {
                            tab.dataset.tabActive = true;
                            content.dataset.tabActive = true;
                        }
                    }
                }
            });

            delete tab.parentElement.parentElement.dataset.tabTempId;
        });
    }
});


/* Paths */
document.querySelectorAll('.path').forEach(path => {
    path.querySelectorAll('.path-element').forEach(el => {
        if (el.nextElementSibling) {
            let sep = '/';

            if ("pathSeparator" in el.dataset) {
                sep = el.dataset.pathSeparator;
            } else if ("pathSeparator" in path.dataset) {
                sep = path.dataset.pathSeparator;
            }

            el.outerHTML += '<span class="path-separator">' + sep + '</span>';
        }
    });
});