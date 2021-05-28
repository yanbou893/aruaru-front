<template>
  <footer>
　　<ul class="footer-menu">
     <nuxt-link to="/about" style="text-decoration: none ;color:white"><li>About</li></nuxt-link>
     <li> ｜</li>
     <nuxt-link to="/kiyaku" style="text-decoration: none ;color:white"><li>利用規約</li></nuxt-link>
     <li> ｜</li>
     <nuxt-link to="/poricy" style="text-decoration: none ;color:white"><li>ポリシー</li></nuxt-link>
     <li> ｜</li>
     <nuxt-link to="/contact" style="text-decoration: none ;color:white"><li>ご意見・ご要望</li></nuxt-link>
    </ul>
    <p>© 2020 JP Geeks.</p>
  </footer>
</template>
<style>
footer{
    width: 100%;
    height: 100px;
    background-color: #174a5c;
    color: white;
    text-align: center;
}
ul.footer-menu li {
display: inline;
}
</style>