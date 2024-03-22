---
Title: 協同產品設計實習2a-5 (統整網誌)
Date: 2024-03-22 11:00
Category: 2a
Tags: pelican, nx, w5
Slug: 2024-cd-2a-w5
Author: kmol
---

協同產品設計實習的第五週, 教學內容為先前影片整理、分組網誌的統整與 NX 零組件繪圖.

<!-- PELICAN_END_SUMMARY -->

# ODOO PLM 論文中英並列任務

由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 

若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 [miktex-portable.7z](http://229.cycu.org/miktex-portable.7z) (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: [latex_images_github.7z](http://229.cycu.org/latex_images_github.7z) (需要密碼)


[2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf](https://webthesis.biblio.polito.it/16429/1/tesi.pdf) or [local](http://229.cycu.org/2021%20ANALYSIS%20OF%20THE%20ODOO%20SOFTWARE%20CAPABILITIES%20REGARDING%20PRODUCT%20LIFECYCLE%20MANAGEMENT,%20MANUFACTURING%20EXECUTION%20SYSTEMS%20AND%20THEIR%20INTEGRATION.pdf) download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析)

英文單字查詢: [2021_odoo_reading.html](https://mde.tw/cd2024/downloads/2021_odoo_reading.html)

# 教學影片分組整理並自評
請各組自行搜尋前面已經發布的教學影片, 分別

- 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上
- 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排
- 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點

以下為相關教學影片:

cd2024 2a 1 blog setup 1

<iframe width="1120" height="630" src="https://www.youtube.com/embed/boTF4TcdFLg?si=IQShBJntywf6t0Y6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

cd2024 2a 2 odoo plm簡介 2

<iframe width="1120" height="630" src="https://www.youtube.com/embed/uaiWkj7uqyY?si=9GEA8e3s5sfnoIvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

cd2024 2a w2 3 如何建立各組的 Team midag1 並利用 Codespaces 維護內容 3

<iframe width="1120" height="630" src="https://www.youtube.com/embed/mx8A_qwlTik?si=ce4S1xw8vGy1NpX6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

cd2024 2a w2 4 利用 Replit 管理 Github Classroom 分組倉儲 4

<iframe width="1120" height="630" src="https://www.youtube.com/embed/rLGfbspp2r4?si=0kepthKS1hd9t0zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

cd2024 2a w2 5 如何利用近端可攜環境與外部 IPv4 開啟動態網站 5

<iframe width="1120" height="630" src="https://www.youtube.com/embed/vY2wRD4qwUk?si=vOlv0JHgdtiX4MwJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

cd2024 2a w3 如何將學員倉儲設為分組倉儲的子模組 6

<iframe width="1120" height="630" src="https://www.youtube.com/embed/n9uB9-WSd6w?si=wpLm9vYlVtNa72rY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

cd2024 2a w3 利用分組協同建立 LaTeX 報告 7

<iframe width="1120" height="630" src="https://www.youtube.com/embed/-tSx_Vg6kfk?si=4UL2fLBHAyaN7opl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# 如何統整組員子模組中的協同設計網誌
當各組員每週的協同設計網誌文章放在個別的 cd2024 倉儲的 markdown 目錄中, 只要修改分組倉儲中的 pelicalconf.py, 使用 Pelican 設定中的 [PATH](https://docs.getpelican.com/en/stable/settings.html#PATH) 與 OUTPUT_PATH 變數, 指定網誌統整目錄, 就可以在分組倉儲中納入所有組員在子模組中所編寫的協同網誌.

實際的設定操作 [pelicanconf_py.txt](https://mde.tw/cd2024/downloads/pelicanconf_py.txt), 是利用 pelicanconf.py 中的程式設定段, 將子模組中 markdown 目錄的 .md 動態複製到分組倉儲中的 combined_directory, 並避開分組倉儲與學員子模組倉儲中的 pages 目錄下的 .md 檔案後, 再進行網誌轉檔, 並且所產生的網誌超文件將存入所設定的 blog 目錄.

完成設定後的網誌轉檔指令為: pelican -s local_publishconf.py 表示要利用 local_publishconf.py 的設定進行轉檔, 且先前有關 pelicanconf.py 的設定也將導入執行.

過程中, 各組員必須將個別的網誌 .md 檔案名稱加上前綴字串, 例如: "學號_" 加上獨一無二的網誌 Slug 字串名稱, 且 Category 使用該組員的學號作為標示. 之後各組統整轉檔時, 才不至於發生相同網誌文章檔案名稱衝突的錯誤, 且從各分組網誌的 Categories 中即可找到各組員所編寫的所有網誌內容.

# 利用 NX1872 協同繪製零組件
從電腦輔助設計室中的電腦 C:\Program Files\Siemens\NX1872 取得所需的 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動.

電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12, 若在電腦教室則可利用下列批次檔案啟動 NX, 若在各自的電腦或隨身碟帶有各版次的 NX 資料, 只需要透過網路取得授權, 就可直接從 USB 中執行各版次的 NX.

下載[NX2027_lite](http://229.cycu.org/NX2027.3401_lite_cad2022.7z) (需要密碼, 解開後約 8G)

使用不同版本 NX 執行繪圖, 該如何協同設計?

start_USB_nx1872.bat 可以啟動 USB 隨身碟中的 NX1872.

<pre class="brush:jscript">
@echo off
set Disk=z
subst %Disk%: "NX1872"
%Disk%:
set SPLM_LICENSE_SERVER=28000@NX_license_server_IP
set UGII_LANG=english
set UGS_LICENSE_BUNDLE=ACD11,ACD10
set ugii=%Disk%:\ugii
path = %ugii%;%path%
start ugraf -nx
</pre>

start_cadlab_nx1872.bat 可以利用 C: 安裝的 NX1872 啟動.

<pre class="brush:jscript">
@echo off
set Disk=z
subst %Disk%: "NX1872"
%Disk%:
set SPLM_LICENSE_SERVER=28000@NX_license_server_IP
set UGII_LANG=english
set UGS_LICENSE_BUNDLE=ACD11,ACD10
set ugii=C:\Program Files\Siemens\NX1872\ugii
path = %ugii%;%path%
start ugraf -nx
</pre>

start_cadlab_nx2206.bat 可以利用 D: 安裝的 NX2206 啟動.

<pre class="brush:jscript">
@echo off
set Disk=z
subst %Disk%: "NX1872"
%Disk%:
set SPLM_LICENSE_SERVER=28000@NX_license_server_IP
set UGII_LANG=english
set UGS_LICENSE_BUNDLE=ACD11,ACD10
set ugii=D:\Program Files\Siemens\2206\ugii
path = %ugii%;%path%
start ugraf -nx
</pre>

start_cadlab_nx12.bat 可以利用 D: 安裝的 NX12 啟動.

<pre class="brush:jscript">
@echo off
set Disk=z
subst %Disk%: "NX1872"
%Disk%:
set SPLM_LICENSE_SERVER=28000@NX_license_server_IP
set UGII_LANG=english
set UGS_LICENSE_BUNDLE=ACD11,ACD10
set ugii="D:\Program Files\Siemens\NX 12.0\ugii"
path = %ugii%;%path%
start ugraf -nx
</pre>

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
