---
Title: 協同產品設計實習2b-2
Date: 2024-02-29 11:00
Category: 二乙
Tags: Classroom, codespaces, w2
Slug: 2024-cd-2b-w2
Author: kmol
---

2024 Spring 協同產品設計實習的第二週, 主要利用 Github Classroom 進行分組, 並且說明如何利用 Github Codespaces 維護個人與分組網站, 同時導入 LaTeX 轉 pdf 機制, 啟動專題一的製作.

<!-- PELICAN_END_SUMMARY -->

# 利用 Github Classroom 指定分組倉儲
群組專案名稱 pj1, 乙班第一組由組長負責建立 Team 名稱設為 bg1, 在 mdecd2024 帳號下所取得的倉儲名稱將為 pj1-bg1, 設定 Github Pages 之後, 分組倉儲所在位置將為 <https://github.com/mdecd2024/pj1-bg1>, 且分組網站將為 <https://mdecd2024.github.io/pj1-bg1>

由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH.

範例分組倉儲: <https://github.com/mdecd2024/test-ag1>

期中分組作業名稱甲班為 2a, 乙班期中分組作業名稱則為 2b, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 ....

至於乙班第一組組長則必須在期中作業 2b 項下, 建立名稱為 midbg1 的 Team, 其餘乙班各組的期中報告 Team 名稱則分別為 midbg2, midbg3 ....

待各分組的期中報告 Team 與倉儲全部建立就緒後, 則可後續配合期末作業名稱 2a2 與 2b2, 由甲班各組組長建立 Team finalag1, finalag2 ...., 而乙班組長則建立 Team finalbg1, finalbg2 .... 等.

# 有關 LaTeX 轉 pdf
使用 [Github Actions] 執行轉檔: <https://github.com/mdecd2024/test-ag1/blob/main/.github/workflows/main.yml>

倉儲中的 latex 目錄: <https://github.com/mdecd2024/test-ag1/tree/main/latex>

[Github Actions]: https://github.com/features/actions

# Q and A
每週問題與解答, 請轉到 <https://mde.tw/cd2024/content/Q&A.html> 發問或討論.

# 設定網誌
利用 [OBS] 加上廣播系統錄製的: [如何設定個人倉儲中的 Pelican 網誌]

[如何設定個人倉儲中的 Pelican 網誌]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EZMAhRju-rdNrUxk9plOglIBMK2WcO3iL1iK11xipW48Mw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=jogiPc

# Odoo PLM 功能
[簡介 Odoo PLM 用法]

[簡介 Odoo PLM 用法]:https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EcZiPwkDRrRKsk1AZbIEyG0B9bbqkh5X2q_F5LZyU_T3Bw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=l78YjF

# 設定個人網誌系統
利用 <https://github.com/mdecycu/cmsimde_site> 建立的網站, 其動態網站資料位於 config/content.htm, 轉換完成的靜態網站資料位於 content 目錄中.

網誌的原始檔案位於 markdown 目錄, 所使用的網誌系統為 [Pelican], 轉換完成的網誌內容則位於 blog 目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關的設定檔案還有:

pelicanconf.py 與 publishconf.py 等.

為了順利完成上述個人課程網站的網誌設定, 必須根據各用戶所使用的 github 帳號對這三個 .py 檔案進行設定.

[Pelican]: https://getpelican.com/

# OnShape 帳號
若網路順暢, 可以登入 <https://onshape.com> 利用 [MKCad Library] 或 [VEX Part Library] 零件程式庫建立產品系統模型.

[MKCad Library]: https://appstore.onshape.com/apps/Manufacturers%20Models/2ZT7X5D646R3LM3ZND7LGBTYRVM4SVH6CDDGM6I=/description
[VEX Part Library]: https://appstore.onshape.com/apps/Utilities/AXY4DAPNAXVQR7R5AGYM3AE34FEWJ5PI56RG4UI=/description

# 可攜 NX
若要在近端建立模擬用的零組件, 可以使用可攜 NX 套件.

假如希望自行安裝, 可以下載 Installation file: [SiemensNX-2027.3701_wntx64.zip] (need password to download, size 10.7GB)

或直接使用可攜版本, [NX2027.3401_lite_cad2022.7z] (need pasword to download, size 2GB, unziped size 8GB)

[SiemensNX-2027.3701_wntx64.zip]: http://229.cycu.org/SiemensNX-2027.3701_wntx64.zip
[NX2027.3401_lite_cad2022.7z]: http://229.cycu.org/NX2027.3401_lite_cad2022.7z

# CoppeliaSim
[CoppeliaSim 4.5.1 rev1 for IPv6.7z] (169MB, password required to download)

可以結合可攜程式環境: [portable_2024.7z] (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 進行機電系統設計與模擬.

[CoppeliaSim 4.5.1 rev1 for IPv6.7z]: http://229.cycu.org/CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z
[portable_2024.7z]: http://229.cycu.org/portable_2024.7z

# 模型簡化
為了讓機電產品能在 CoppeliaSim 動態場景中順暢模擬, 各零組件必須有效進行簡化, 此一零件簡化過程如何後續對零組件進行應力或其他動態系統分析之前, 必須先簡化零組件外型後再進行網格化的應用相同.

針對以上課程內容, 請利用以下留言系統進行討論:

<div id="disqus_thread"></div>
<script>
/**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://https-mde-tw-eng.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>