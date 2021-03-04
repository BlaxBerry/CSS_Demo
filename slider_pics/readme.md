# slider pics by CSS
without JavaScript, **only use CSS3**
![](./screenshort.png)
![](https://cdn9.52xs.com.cn/d/article/20201127/253857.jpg)
##   seamless 无缝衔接
```html
 <ul>
            <!-- start -->
            <li><img src="images/01.jpeg"></li>
            <li><img src="images/02.jpeg"></li>
            <li><img src="images/03.jpeg"></li>
            <li><img src="images/04.jpeg"></li>
            <li><img src="images/05.jpeg"></li>
            <li><img src="images/06.jpeg"></li>
            <!-- end -->
            <li><img src="images/01.jpeg"></li>
            <li><img src="images/02.jpeg"></li>
        </ul>
```
---

## animatin effects
```css
 @keyframes slide {
            0% {
                left: 0
            }
            100% {
                left: -3264px
            }
        }
```
### stop animation
```css
  ul:hover {
            animation-play-state: paused;
        }
```
---

## higlignt
```css
        /* when mouse move let all become dark */
        ul:hover img {
            opacity: 0.5;
        }
        
        /* which one */
        li:hover img {
            opacity: 1;
        }
```
