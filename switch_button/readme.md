# IOS switch button by CSS
without JavaScript, **only use CSS3**
![](https://migi.me/uploads/2020/07/ios-toggle-switch-001.jpg)
---
there are two animation
- click switch, it will move from left to right ,background will change to green
- and then ,click angian, it will move from right to left,background will change to gray

it is sure taht i wont use JavaScript API, only by CSS3


## Layout
```html
<label>
    <input type="checkbox">
</label>
```
```css
    label {
            background-color: #ddd;
            border-radius: 25px;
            position: relative;
        }
             
    input {
            visibility: hidden;
        }

    input::after {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: white;
            visibility: visible;
        }
```


## Animation
利用伪类选择器触发动画
### checked属性
### ::after Selector
只要点击了伪类选择器，就会触发其父级的input的checked属性，选中或没选中
如下：选中了就移动，没选中就不移动
再给input加上transition过渡，就会出现移动效果
```css
    input{
         transition: all 0.5s;
        }

    input:checked::after {
        transform: translateX(50px);
        }
```

## BakcgroundColor
无法通过checked伪类选择器的状态，去控制外层父元素
可以通过input::before, 使其大小充满父级label当作背景
### ::before 
```css
    input::before {
            visibility: visible; /* input is hidden*/
            content: '';
            position: absolute; /* based on label */
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.5s;
        }

    input:checked::before {
            background-color: green;
        }
```
