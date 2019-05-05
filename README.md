# @bndynet/dialog-themes

[DEMO](https://bndynet.github.io/dialog-themes/)

Themes for [@bndynet/dialog](https://github.com/bndynet/dialog)

## Usage

```html
<html>
    <head>
        <!-- required -->
        <link href="https://unpkg.com/@bndynet/dialog/dist/dialog.css" rel="stylesheet" type="text/css" />
        <script src="https://unpkg.com/@bndynet/dialog/dist/dialog.umd.js"></script>

        <!-- themes -->
        <link href="https://unpkg.com/@bndynet/dialog-themes/dist/dialog-dark.css" rel="stylesheet" type="text/css" />
    </head>

    <body>
        <script>
            dialog.setup({
                theme: 'dialog-dark',
                //...
            });
        </script>
    </body>
</html>
```

## Development

1. Clone this repo.
1. `npm install` in root directory.
1. Add new theme file in **src** folder and the file name MUST be same with **classname**.
1. Add theme name(classname) to demo site in **index.html** file.

    ```javascript
    var themes = ["your-theme", "dialog-dark", "default"];
    ```

1. `npm start` to open demo site.