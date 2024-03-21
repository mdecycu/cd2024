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

# Collaborative Development
[Methods, Tools and Environments for Collaborative Development](https://www.ifi.uzh.ch/dam/jcr:00000000-5162-2abd-0000-000034b0326b/report_2.pdf) [local download](http://229.cycu.org/Methods, Tools and Environments for Collaborative Development.pdf)

協同開發的方法、工具與環境 - by Alexander Filitz 瑞士蘇黎世大學資訊學系

摘要:
1. 軟體工程中的協同開發挑戰
2. 概述全球軟體開發（GSD）中常用的方法、工具和環境
3. 描述的工具主要在強化分散開發者之間的協同合作
4. 說明 GSD 中已知的工具分類方案
5. 其次, 採用一個方案並提供與該類別相關的工具概述
6. 最後，著重於支援軟體工程特定流程的工具

<https://github.com/beatriz5/requirements-engineering-analysis>

<https://www.simplilearn.com/what-is-requirement-analysis-article>

<https://www.lambdatest.com/learning-hub/requirement-analysis>

<https://www.guru99.com/requirements-analysis-and-transformation-techniques.html>

<hr>

<https://carpentries-incubator.github.io/python-intermediate-development-earth-sciences/14-collaboration-using-git/index.html>

<https://www.linkedin.com/pulse/power-collaborative-development-git-esteban-bocic-bravo->

<https://medium.com/@syantien/understanding-git-the-core-of-collaborative-software-development-aedd65fac66>

<https://www.ximian.org/2023/10/version-control-with-git-best-practices-for-collaborative-software-development/>

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
