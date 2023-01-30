+++
title = "Browser Extension - Stylish"
description = "Tweaking CSS using the Stylish extension"
+++

## The WHY

> I spent quite a lot of time reading stuff online. Longform articles like [Aeon.co](https://aeon.co), technical documentations or just anything else.
>
> And most of the time, the font that were chosed by the developer of the website were just terrible to say the least, and there were also something like annoying *cookie banners*. Well, I need to tool that just do that!

## Installation

> For now, I would just pick the most commonly used browsers

- For *Edge*, go to [here](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en)
- For *Chrome*, go to [here](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en)
- For *Firefox*, go to [here](https://addons.mozilla.org/en-US/firefox/addon/stylish/)

## Usage

> Please note that I heavily use different fonts in my system in order to achieve the tweaks I made. So.. you could either ignore them (as there were tweaks more than the font-related styling) or go to install them.

### For Fun

#### Change How Images Look

> *URLs starting with* -> `http://` `https://`

```css
div img {
    /*
    These were the attributes that change how your images
    shown significantly, so you would need to add these
    right after the closing } tag if you still want a
    normal looking-ish page.

    object-fit: contain;

    transform: scaleX(1);
    border-radius: 23% 7% 23% 7%;
    */
    transform: scaleX(1) scale3d(1.05, 1.05, 1) rotate(0.002turn) perspective(10px);
    border-radius: 7% 23% 7% 23%;

    object-fit: cover;
    background-color: transparent;

    border-width: 4.0px;
    border-style: inset;
    border-style: groove;
    border-color: #c5cdc5;

    filter: contrast(106%) brightness(106%) saturate(1.20) drop-shadow(2px 2px gray);
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
```
