<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="../../../assets/style/CSS/minified/Upgrade.min.css">
    <link rel="stylesheet" href="../../../assets/style/CSS/minified/docs.min.css">

    <script src="../../../assets/js/framework.js" defer></script>
    <script src="https://kit.fontawesome.com/a4ede3fed3.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>
<body>

<main class="container-lg">
    <header class="my-3 my-lg-6">
        <h1 class="heading heading-larger fs-underline mb-1 mb-lg-2">Documentation <span
                    class="badge-warning fsi-small">Beta</span></h1>

        <p>
            This version of the documentation is currently incomplete, but will be constantly updated, it is
            recommended to use the beta version only to see how the documentation will be built in the future.
        </p>
    </header>

    <div class="docu-element" data-docu-title="Accordion"
         data-docu-description="Accordions are simple boxes with a summary and a longer text within it. When you click on an accordion it will open up and show the insides information."
         data-docu-colorable data-needs-js data-beta>
        <div class="example">
            <div class="accordion accordion-main">
                <button class="accordion__toggle">Toggle</button>

                <div class="accordion__content">
                    <p class="accordion__title">Lorem ipsum dolor sit amet, consectetur.</p>
                    <p class="accordion__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque debitis eaque eum
                        illum
                        ipsam laborum magni molestiae odio placeat! Corporis culpa doloremque officiis quas!
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
    document.querySelectorAll('div.docu-element').forEach(function (docuelement) {
        docuelement.innerHTML = '<h1 class="heading fsi-smallest">' + docuelement.dataset.docuTitle + '</h1>' + '<p>' + docuelement.dataset.docuDescription + '</p>' + docuelement.innerHTML;

        var title = docuelement.querySelector('h1.heading');

        var badges = "";

        if ("docuColorable" in docuelement.dataset) {
            badges += "<div style='display: inline-block;' class='tooltip-wrapper'><span class='badge-success-lighter m-0'>Colorable</span><div class='tooltip tooltip-dark'><div class='tooltip-content'><p class='tooltip-title'>Element is customizable</p><p class='tooltip-description'>You have the option to tint this element. Just use the <code>" + docuelement.dataset.docuTitle.toLowerCase() + "-[color]</code> class instead of the <code>" + docuelement.dataset.docuTitle.toLowerCase() + "</code> class. [Color] corresponds in this case to a color from the color scheme of Upgrade, which is also used for text colors and the like. Example: main-dark</p></div></div></div>";
        }
        if ("needsJs" in docuelement.dataset) {
            badges += "<div style='display: inline-block;' class='tooltip-wrapper'><span class='badge-warning m-0'>JavaScript</span><div class='tooltip tooltip-dark'><div class='tooltip-content'><p class='tooltip-title'>Requires JavaScript</p><p class='tooltip-description'>If you plan to use this feature you have to import the <code>framework.js</code> file located in <code>assets/js</code> using a script tag with defer attribute.</p></div></div></div>";
        }
        if ("beta" in docuelement.dataset) {
            badges += "<div style='display: inline-block;' class='tooltip-wrapper'><span class='badge-error-lighter m-0'>Beta</span><div class='tooltip tooltip-dark'><div class='tooltip-content'><p class='tooltip-title'>In Beta State</p><p class='tooltip-description'>This element is currently under development and therefore should not be used on public pages due to possible bugs.</p></div></div></div>";
        }

        title.outerHTML = "<div class='d-flex flex-a-center gx-3 gx-lg-6'>" + title.outerHTML + "<div class='d-flex flex-a-center gx-2 gx-lg-3'>" + badges + "</div></div>";
    });
</script>

</body>
</html>