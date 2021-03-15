# BOOK
![](./screenshot.png)
```css
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 20px;
        background-color: black;
        transform: skewY(-45deg) translate(-20px,-10px);
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 20px;
        width: 100%;
        background-color: wheat;
        transform:skewX(-45deg) translate(10px,20px);
    }
```