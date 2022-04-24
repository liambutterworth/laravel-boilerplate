<!doctype html>

<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8" />

        <title>Nate Roher Tree Service</title>

        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}" />
        <!-- <link rel="stylesheet" href="//basehold.it/24" /> -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
    </head>

    <body>
        <div id="app"></div>

        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
