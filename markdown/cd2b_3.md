---
Title: 協同產品設計實習2b-3
Date: 2024-03-07 11:00
Category: 2b
Tags: odoo, codespaces, w3
Slug: 2024-cd-2b-w3
Author: kmol
---

2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作.

<!-- PELICAN_END_SUMMARY -->

# 列出期中分組倉儲與網站
[cd2024 期中分組倉儲與網站]

上列連結使用 [Brython](https://brython.info/) 程式語法, 可直接在網頁中列出特定連結內容, 所採用的程式碼如下:

<pre class="brush: python">
# 從 Brython browser 模組導入 document 與 html
from browser import document, html
# get output html location
brython_div = document["brython_div1"]
div = "a"
org = "mdecd2024"
midterm = "mid" + div + "g"
group_num = 8
for i in range(1,group_num+1):
    site_url = "https://" + org + ".github.io/2" + div + "-" + midterm + str(i)
    repo_url = "https://github.com/" + org + "/2" + div + "-" + midterm + str(i)
    brython_div <= html.A("2"+div+"-"+midterm+str(i), href=site_url)
    brython_div <= " ("
    brython_div <= html.A("repo", href=repo_url)
    brython_div <= ")"
    brython_div <= html.BR()

brython_div <= html.BR()

div = "b"
midterm = "mid" + div + "g"
group_num = 9

for i in range(1,group_num+1):
    site_url = "https://" + org + ".github.io/2" + div + "-" + midterm + str(i)
    repo_url = "https://github.com/" + org + "/2" + div + "-" + midterm + str(i)
    brython_div <= html.A("2"+div+"-"+midterm+str(i), href=site_url)
    brython_div <= " ("
    brython_div <= html.A("repo", href=repo_url)
    brython_div <= ")"
    brython_div <= html.BR()
</pre>

[cd2024 期中分組倉儲與網站]: https://mde.tw/cd2024/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/8ba6fa28317bc7a784d8350e7bc33580/raw/4da5bed66516f7808811839885aedd946e20f17b/list_cd2024_midterm_url.py

# 期中協同分組報告
請參考 <https://github.com/mdecd2024/test-ag1> 中的 latex 目錄與 downloads 目錄中的 <https://github.com/mdecd2024/test-ag1/blob/main/downloads/report_github.txt>

並根據下列教學範例:

說明[如何將組員的個人倉儲納入分組倉儲成為子模組]

[如何將組員的個人倉儲納入分組倉儲成為子模組]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EZbnYCWfEylAmXhpOqXWgZUBMxerlNYRgQsBBjZAQ90lmg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=8nGXOz

說明[如何在 Replit 維護分組倉儲]

[如何在 Replit 維護分組倉儲]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EUlbUzMAyBFHrHX7bLPRKzsB3L-T-D413BPuH6pMSEZmjg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=HjIQab

由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 [miktex-portable.7z](http://229.cycu.org/miktex-portable.7z) (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: [latex_images_github.7z](http://229.cycu.org/latex_images_github.7z) (需要密碼)


2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析)

英文單字查詢: 2021_odoo_reading.html


# 有關 Codespaces 使用

由於 Github Codespaces 免費帳號目前每月[可以使用 120 core hours], 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours.

[可以使用 120 core hours]: https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces

# 使用 Gitpod 維護倉儲與網站
[Gitpod](https://www.gitpod.io/pricing) 與 Codespaces 類似, 也是採用 Visual Studio Code 網際介面, 可讓使用者維護位於 Github 的倉儲, 只是個人的 cd2024 倉儲, 以 Github 帳號登入 Gitpod 之後, 可以直接維護, 但是分組網站是從 Github Classroom mdecd2024 帳號下派任, 與 Replit 環境維護分組網站的方法相同, 必須自行建立 .ssh 下的 id_rsa 與 config, 差別是一旦在 Gitpod 導入的分組網站 SSH 管理權限, 不會像 Replit 免費帳號下, 系統會定期刪除免費帳號使用者的 .ssh 目錄.

在 Gitpod 導入 Github 倉儲後, 路徑位於 /workspace/ 目錄下, 但是 .ssh 目錄則位於 /home/gitpod/.ssh, 當使用者執行 cd 則會進入 /home/gitpod 目錄, 且使用者在 Gitpod 的 Dashboard 可以從 <https://gitpod.io> 進入.

# 電腦教室中的協同設計
cd2024 起, 電腦輔助設計室中的每一台電腦已經各自擁有一個外部 IPv4 網址, 因此各組員可將個人倉儲與分組倉儲 git clone 至隨身碟, 利用 Token 或 SSH session 授權維護倉儲與網站內容.

如何利用 Classic Token 授權維護倉儲與網站

# ODOO 參考資料
<https://www.google.com/search?q=sap+vs+odoo> (與 SAP 及 ODOO 有關的搜尋)

[2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf] or [local download](http://229.cycu.org/2021%20ANALYSIS%20OF%20THE%20ODOO%20SOFTWARE%20CAPABILITIES%20REGARDING%20PRODUCT%20LIFECYCLE%20MANAGEMENT,%20MANUFACTURING%20EXECUTION%20SYSTEMS%20AND%20THEIR%20INTEGRATION.pdf) (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析)

英文單字查詢: [2021_odoo_reading.html](https://0f5839b4-abe3-465d-8e99-c21c6f10d379-00-1lfsoaa18ah3t.kirk.replit.dev/downloads/2021_odoo_reading.html)

[2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf]: https://webthesis.biblio.polito.it/16429/1/tesi.pdf

# 將組員的個人倉儲設為分組倉儲子模組

cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站, 設定的指令為:

git submodule add 組員的個人倉儲網址 組員的學號

例如: 假設組員的 cd2024 個人倉儲位於: https://github.com/scrum-1/cd2024, 且該組員的學號為 41123299, 則該組員必須在進入該組的倉儲目錄後, 執行:

git submodule add https://github.com/scrum-1/cd2024.git 41123299

如此, Github 帳號為 scrum-1 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 這樣設定的好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲.

另外一個使用 Github Classroom 派送分組倉儲的好處, 是 mdecycu 自動成為各分組倉儲的管理者之一, 若各組在改版或解決衝突的過程發生問題, mdecycu 可以協助處理.

一旦分組倉儲帶有以各組員學號作為子模組之後, git clone 倉儲必須使用:

git clone --recurse-submodules 加上各組的倉儲 URL

以第一組期中分組倉儲的 git clone 為例, 並且使用 putty session 名稱 github.com:

git clone --recurse-submodules git@github.com:mdecd2024/2b-midbg1.git

而且若要在分組倉儲中更新各組員的子模組版本, 則必須更換目錄到該組員的學號目錄中並且使用 git pull origin main, 才能取下該組員其 cd2024 個人倉儲的最新內容. 取下組員資料後, 若要新增提交推送, 則必須再更換目錄回分組倉儲後才能執行.

# 有關 LaTeX 轉 pdf
使用 [Github Actions] 執行轉檔: <https://github.com/mdecd2024/test-ag1/blob/main/.github/workflows/main.yml>

倉儲中的 latex 目錄: <https://github.com/mdecd2024/test-ag1/tree/main/latex>

[Github Actions]: https://github.com/features/actions

## 利用可攜程式編譯 LaTeX

下載 [miktex-portable.7z](http://229.cycu.org/miktex-portable.7z) (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB)

下載 [latex_images_github.7z](http://229.cycu.org/latex_images_github.7z) (需要密碼)

協同產品設計實習分組期中報告 LaTeX 範本:

下載 [cd2024_midterm_report_latex_ex.7z](https://mdecd2024.github.io/test-ag1/downloads/cd2024_midterm_report_latex_ex.7z)

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
