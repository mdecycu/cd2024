---
Title: 協同產品設計實習2b-6
Date: 2024-03-28 11:00
Category: 2b
Tags: coppeliasim, nx, w6
Slug: 2024-cd-2b-w6
Author: kmol
---

協同產品設計實習的第六週, 說明協同 NX 零組件繪圖以及 CoppeliaSim 場景模擬相關檔案格式.

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

# ODOO, NX, Sourcetree, Github and Replit
利用 ODOO PLM, Siemens NX, Sourcetree, Github 分組倉儲與 Replit 打造協同產品開發環境

下載 [Siemens NX1872.7z] (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872)

[Siemens NX1872.7z]: https://nfuedu-my.sharepoint.com/:u:/g/personal/yen_nfu_edu_tw/EehhlaMDzTxAlOBppbPSoPwBCzsOQxvshtNL8xJel-zbJQ?e=YwKvdH

下載 [Sourcetree_portable.7z] (需要密碼)

其他工具包括 CoppeliaSim, SciTE, Portablegit, Putty, Zoomit, Python, Solvespace 以及 Process Explorer 等.

[Sourcetree_portable.7z]: http://229.cycu.org/SourceTree_portable.7z

配置重點: NX, Sourcetree 與 CoppeliaSim 設定檔案與管理分組倉儲的權限, 必須存至可攜系統, 並分別從可攜系統啟動後的命令列中啟動.

下載 [Solvespace_model _2d_for_cd2024_w6.7z](https://mde.tw/cd2024/downloads/Solvespace_model _2d_for_cd2024_w6.7z)

# Replit 檢視靜態網站
從 w3 開始, 原先可以讓倉儲的動態網站與靜態網站共用 443 https 的方式, 也就是利用 SStatic 後查驗靜態網站的功能已經失效, 必須將靜態網站的檢視與動態編輯網站的啟動分開, 才能在將 Replit 網站與網誌改版的內容, 在推向 Github 倉儲之前進行查驗.

## 執行動態網站伺服器

cd2024 的動態網站, 主要用來編輯 config/content.htm 檔案內容, 並可透過 Convert 功能將所編輯的網頁內容, 透過 h1, h2 與 h3 標題分頁後, 會轉為 content 目錄中的頁面超文件檔案.

先前執行動態網站編輯的程式為 main.py:

<pre class="brush: python">
from cmsimde import flaskapp
from gevent.pywsgi import WSGIServer

#flaskapp.app.run(host="0.0.0.0", debug=True)
# Start dynamic server
http_server = WSGIServer(('0.0.0.0', 8080), flaskapp.app)
http_server.serve_forever()
</pre>

執行 main.py 的方式, 可以依照 .replit 的設定, 直接利用 Run 按鍵執行. 也可以在 Shell 頁面中, 利用 python3 main.py 執行, 只是透過 Run 按鍵執行, 伺服器啟動之後會顯示在 Webview 頁面, 但是在 Shell 執行 python3 main.py 則必須自行以手動方式帶出伺服器連結.

## 執行靜態網站伺服器
如前所述, 靜態網站其實就是位於 content 目錄中的各個 html 檔案, 且圖片可引自 images 目錄, 而近端檔案連結則可引自 downloads 目錄. 當使用者將 config/content.htm 轉為 content 目錄中的靜態網站後, 若能在推向 Github 之前, 確認各頁面或網誌的內容無誤後, 再推向遠端.

而執行靜態網站伺服器的方法, 則是在 Shell 執行 python main2.py, 也就是在導入 static.py 之後啟動靜態網站.

main2.py 程式內容:

<pre class="brush: python">
# Run static server
import static
from gevent.pywsgi import WSGIServer

http_server = WSGIServer(('0.0.0.0', 8080), static.app)
http_server.serve_forever()
</pre>

其中的 static.py 為:

<pre class="brush: python">
from flask import Flask, send_from_directory

app = Flask(__name__)

# Route to serve the index.html file
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

# Route to serve static files from the ./cmsimde/static directory
@app.route('/cmsimde/static/&lt;path:filename&gt;')
def serve_static(filename):
    return send_from_directory('cmsimde/static', filename)

# Route to serve other HTML files from the root directory
@app.route('&lt;path:filename&gt;')
def serve_html(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    app.run(debug=True)
</pre>

註: 利用 pre 標註引用資料時, 若內容帶有 &lt; 與 &gt; 時必須避免執行使用小於與大於符號, 而必須使用 [HTML Character Codes](https://html.com/character-codes/), 以免額外產生不必要的標註符號.

當使用者希望執行靜態網頁伺服器時, 在 Shell 中執行 python3 main2.py, 經過上述設定, 在 Replit 的免費帳號環境中, 一個帳號只能啟用動態伺服器或靜態伺服器. 也就是動態伺服器或靜態伺服器在特定時刻中, 僅能擇一啟動.

# CoppeliaSim 檔案格式
下載 [copsim_midterm_cube2_xml.7z](https://mde.tw/cd2024/downloads/copsim_midterm_cube2_xml.7z)

1. CoppeliaSim 目前提供二位元與 XML 場景格式
2. XML 場景支援儲存為單一檔案或多個模型與影像檔案
3. 4.5.1 之後的版本, 其設定資料並非在套件目錄, 而是儲存在操作系統的 AppData/Roaming 目錄中
4. 4.5.1 版儲存為多 XML 檔案格式時, 無法帶出場景中的 png 圖檔, 4.6.0 版之後才修正此一錯誤
5. 目前能夠支援 IPv4 與 IPv6 網際場景模擬的版本僅修改至 4.5.1 版
6. XML 檔案應用廣泛, 協同產品設計過程可能需要利用程式方法處理零組件與模擬場景互相轉換取得的 XML 格式檔案

# Sourcetree
<https://www.sourcetreeapp.com/>

[SourceTree_portable.7z](https://229.cycu.org/SourceTree_portable.7z) (需要下載密碼)

其中必須要在啟動可攜程式時, 利用下列指令將 Sourcetree 先前設定存入操作系統:

<pre class="brush: jscript">
Xcopy %Disk%:\home_ipv6\AppData\Local\Atlassian C:\users\%USERNAME%\AppData\Local\Atlassian /E /H /C /I /Y
</pre>

# Git branch
[Git 分支](https://git-scm.com/book/zh-tw/v2/%E4%BD%BF%E7%94%A8-Git-%E5%88%86%E6%94%AF-%E7%B0%A1%E8%BF%B0%E5%88%86%E6%94%AF)

# Odoo PLM
[Odoo PLM](https://www.odoo.com/documentation/17.0/applications/inventory_and_mrp/plm.html)

[2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf](https://webthesis.biblio.polito.it/16429/1/tesi.pdf) or [local](http://229.cycu.org/2021%20ANALYSIS%20OF%20THE%20ODOO%20SOFTWARE%20CAPABILITIES%20REGARDING%20PRODUCT%20LIFECYCLE%20MANAGEMENT,%20MANUFACTURING%20EXECUTION%20SYSTEMS%20AND%20THEIR%20INTEGRATION.pdf) download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析)

英文單字查詢: [2021_odoo_reading.html](https://mde.tw/cd2024/downloads/2021_odoo_reading.html)

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
