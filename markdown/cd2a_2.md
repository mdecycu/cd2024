---
Title: 協同產品設計實習2a-2
Date: 2024-03-01 11:00
Category: 2a
Tags: Codespaces, w2
Slug: 2024-cd-2a-w2
Author: kmol
---

協同產品設計實習的第二週, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容.

<!-- PELICAN_END_SUMMARY -->

# 利用 Github Classroom 指定分組倉儲
由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH.

根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案.

範例分組倉儲: <https://github.com/mdecd2024/test-ag1>

期中分組作業名稱甲班為 2a, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 ....

根據上述規劃, 甲班第一分組的期中協同倉儲將位於: <https://github.com/mdecd2024/2a-midag1>, 第一組的期中報告網站將位於: <https://mdecd2024.github.io/2a-midag1>.

說明[甲班第一組組長如何建立 midag1 Team], 並利用 Codespaces 維護 2a-midag1 分組倉儲

[甲班第一組組長如何建立 midag1 Team]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EfhTxuf_qX5NqlZBu3n764wBy1d1un0pOZaItSW2Lao2nw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=QRghBy

說明如何[利用 Replit 管理從 Classroom 取得的分組倉儲]

[利用 Replit 管理從 Classroom 取得的分組倉儲]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EQm-H5Jrv-lMqpKgjWeXhxsBTEZudKJx1M_NQJQumPZttA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=6Ib0iC

待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等.

# 利用 Codespaces 維護倉儲與網站

說明[如何利用 Github Codespaces 維護網站內容]

[如何利用 Github Codespaces 維護網站內容]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EX2nKmkIMX9EtahHjCFmVg4Bp_6wwEvoKsos6LbRHFl6NA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=qD4FMu

由於 Github Codespaces 免費帳號目前每月[可以使用 120 core hours], 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours.

[可以使用 120 core hours]: https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces

# ODOO 參考資料
<https://www.google.com/search?q=sap+vs+odoo> (與 SAP 及 ODOO 有關的搜尋)

[2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf] or [local download](http://229.cycu.org/2021%20ANALYSIS%20OF%20THE%20ODOO%20SOFTWARE%20CAPABILITIES%20REGARDING%20PRODUCT%20LIFECYCLE%20MANAGEMENT,%20MANUFACTURING%20EXECUTION%20SYSTEMS%20AND%20THEIR%20INTEGRATION.pdf) (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析)

英文單字查詢: [2021_odoo_reading.html](https://0f5839b4-abe3-465d-8e99-c21c6f10d379-00-1lfsoaa18ah3t.kirk.replit.dev/downloads/2021_odoo_reading.html)

[2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf]: https://webthesis.biblio.polito.it/16429/1/tesi.pdf

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