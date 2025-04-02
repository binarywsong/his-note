import{_ as i,c as a,o as t,ae as n}from"./chunks/framework.DO_qJNgM.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bug/bug.md","filePath":"bug/bug.md"}'),e={name:"bug/bug.md"};function h(p,s,l,k,d,F){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="操作系统时区相差过大" tabindex="-1">操作系统时区相差过大 <a class="header-anchor" href="#操作系统时区相差过大" aria-label="Permalink to &quot;操作系统时区相差过大&quot;">​</a></h2><p>报错：<code>The difference between the request time and the server&#39;s time is too large.</code><br> 解决方法：检查并同步时间。<br></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    //查看系统时间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hwclock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //查看硬件时间</span></span></code></pre></div><p>然后配置自动时间同步：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ntp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ntpdate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  //安装工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ntpdate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cn.pool.ntp.org</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //同步到时间服务器：ml-citation{ref=&quot;3,5&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data=&quot;citationList&quot;}</span></span></code></pre></div><p>启用NTP服务长期同步：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ntpd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hwclock</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --systohc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hwclock</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span></span></code></pre></div><p>Linux的时间就与本机的时间一致了。<br></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //创建文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    //回到根目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  //显示所有</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //删除文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 755</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/his/front/goods</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  //赋予权限</span></span></code></pre></div>`,10)]))}const o=i(e,[["render",h]]);export{c as __pageData,o as default};
