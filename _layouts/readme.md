# **Zing**

Zing is a lightweight, simple theme for Jekyll sites.
It has very few features and a few components.

---

## **Docs**

### Light/Dark Mode

Zing comes with a built-in dark mode. You can switch to dark mode in your `config.yml` file.
```
theme-mode: dark
```
There is a `dark.scss` stylesheet where you can customize the dark mode.

• • • • •

### Styling

Many style options can be set in `main.scss`.

Each page has a unique body class for styling, which is the "slugified" version of the page title, prefixed with "pg-".
So, for the About page, the body class would be `pg-about`.

#### Type Utilities

```
<p class="bold">Bold</p>
<p class="regular">Regular</p>
<p class="italic">Italic</p>
<p class="caps">Caps</p>
<p class="left-align">Left align</p>
<p class="center">Center</p>
<p class="right-align">Right align</p>
<p class="justify">Justify Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p>
<p class="nowrap">No wrap</p>
<p class="underline">Underline</p>
<p class="truncate">Truncate</p>
<p class="font-family-inherit">Font Family Inherit</p>
<p class="font-size-inherit">Font Size Inherit</p>
<a class="text-decoration-none">Text Decoration None</a>
```

• • • • •

### Components

There are a few included components.

#### Grid

Zing comes with a simple flexbox grid. If you need support for older browsers, you can easily swap to a float-based grid system.

#### Buttons

There are 2 basic button styles: Primary and Secondary.
```
<a href="#" class="btn">Primary Button</a>
<a href="#" class="btn--secondary">Secondary Button</a>
```
