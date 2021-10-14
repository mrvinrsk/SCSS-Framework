<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Upgrade - Changelog</title>

    <link rel="stylesheet" href="../assets/style/CSS/minified/Upgrade.min.css">
    <link rel="stylesheet" href="../assets/style/CSS/minified/changelog.min.css">

    <script src="../assets/js/framework.js" defer></script>
    <script src="https://kit.fontawesome.com/d2e7155937.js" crossorigin="anonymous"></script>
    <script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>
</head>
<body>

<?php include_once "./assets/elements/navigator.html"; ?>

<main class="container-md d-flex flex-d-column gy-3 gy-lg-6 py-2 py-lg-8">
    <div class="wrapper bg-success" id="added">
        <p class="heading-large fw-bold"><i class="fas fa-plus fsi-small"></i>Added</p>

        <ul>
            <li>
                Design elements whose functionality requires the JavaScript framework are now marked with a badge in the
                documentation.
            </li>
        </ul>
    </div>

    <div class="wrapper bg-warning-dark" id="changed">
        <p class="heading-large fw-bold"><i class="fas fa-pen fsi-small"></i>Changed</p>

        <ul>
            <li>Selections in form-inputs are now finally right colored.</li>
        </ul>
    </div>

    <div class="wrapper bg-error" id="removed">
        <p class="heading-large fw-bold"><i class="fas fa-minus fsi-small"></i>Removed</p>

        <div class="blank mt-2 mt-lg-4">
            <i class="fas fa-times-circle blank__icon fsi-xl"></i>

            <p class="blank__title">Nothing</p>
            <p class="blank__description">
                Nothing was removed in this release.
            </p>
        </div>
    </div>
</main>

<script async>
    const pj = requirejs(['../package.json'], function () {
        console.log('loaded');
    });
    console.log(pj.version);
</script>

</body>
</html>