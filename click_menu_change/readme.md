# Click Menu Button Effect Change
![](./01.png)
![](./02.png)

```less
 // closed
.menu.closed .line:nth-child(1){
    transform: translateY(20px) rotate(45deg) !important;
}
.menu.closed .line:nth-child(2){
    opacity: 0!important;
}
.menu.closed .line:nth-child(3){
    transform: translateY(-20px) rotate(-45deg)!important;
}
```

```js
let btn = document.querySelector('.menu');

btn.addEventListener('click', function() {
    this.classList.toggle('closed')
})
```