var tipuesearch = {"pages":[{"title":"About","text":"2024 CD 網誌 課程倉儲: https://github.com/mdecycu/cd2024 內容管理: https://mde.tw/cd2024/ 課程投影片: https://mde.tw/cd2024/reveal 課程網誌: https://mde.tw/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"協同產品設計實習2b-5 (統整網誌)","text":"協同產品設計實習的第五週, 教學內容為分組網誌的統整與 NX 零組件繪圖. 如何統整組員子模組中的協同設計網誌 當各組員每週的協同設計網誌文章放在個別的 cd2024 倉儲的 markdown 目錄中, 只要修改分組倉儲中的 publishconf.py, 使用 Pelican 設定中的 PATH 與 OUTPUT_PATH 變數, 指定網誌統整目錄, 就可以在分組倉儲中納入所有組員在子模組中所編寫的協同網誌. 實際的設定操作 pelicanconf_py.txt , 是利用 pelicanconf.py 中的程式設定段, 將子模組中 markdown 目錄的 .md 動態複製到分組倉儲中的 combined_directory 後, 再進行網誌轉檔, 並且所產生的網誌超文件將存入所設定的 blog 目錄. 完成設定後的網誌轉檔指令為: pelican -s local_publishconf.py 表示要利用 local_publishconf.py 的設定進行轉檔, 且先前有關 pelicanconf.py 的設定也將導入執行. 過程中, 各組員必須將個別的網誌 .md 檔案名稱加上前綴字串, 例如: \"學號_\" 加上獨一無二的網誌 Slug 字串名稱, 且 Category 使用該組員的學號作為標示. 之後各組統整轉檔時, 才不至於發生相同網誌文章檔案名稱衝突的錯誤, 且從各分組網誌的 Categories 中即可找到各組員所編寫的所有網誌內容. 利用 NX1872 協同繪製零組件 從電腦輔助設計室中的電腦 C:\\Program Files\\Siemens\\NX1872 取得所需的 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. 電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12, 若在電腦教室則可利用下列批次檔案啟動 NX, 若在各自的電腦或隨身碟帶有各版次的 NX 資料, 只需要透過網路取得授權, 就可直接從 USB 中執行各版次的 NX. 下載 NX2027_lite (需要密碼, 解開後約 8G) 使用不同版本 NX 執行繪圖, 該如何協同設計? start_USB_nx1872.bat 可以啟動 USB 隨身碟中的 NX1872. @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=%Disk%:\\ugii path = %ugii%;%path% start ugraf -nx start_cadlab_nx1872.bat 可以利用 C: 安裝的 NX1872 啟動. @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=C:\\Program Files\\Siemens\\NX1872\\ugii path = %ugii%;%path% start ugraf -nx start_cadlab_nx2206.bat 可以利用 D: 安裝的 NX2206 啟動. @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=D:\\Program Files\\Siemens\\2206\\ugii path = %ugii%;%path% start ugraf -nx start_cadlab_nx12.bat 可以利用 D: 安裝的 NX12 啟動. @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=\"D:\\Program Files\\Siemens\\NX 12.0\\ugii\" path = %ugii%;%path% start ugraf -nx Collaborative Development Methods, Tools and Environments for Collaborative Development local download 協同開發的方法、工具與環境 - by Alexander Filitz 瑞士蘇黎世大學資訊學系 摘要: 1. 軟體工程中的協同開發挑戰 2. 概述全球軟體開發（GSD）中常用的方法、工具和環境 3. 描述的工具主要在強化分散開發者之間的協同合作 4. 說明 GSD 中已知的工具分類方案 5. 其次, 採用一個方案並提供與該類別相關的工具概述 6. 最後，著重於支援軟體工程特定流程的工具 https://github.com/beatriz5/requirements-engineering-analysis https://www.simplilearn.com/what-is-requirement-analysis-article https://www.lambdatest.com/learning-hub/requirement-analysis https://www.guru99.com/requirements-analysis-and-transformation-techniques.html https://carpentries-incubator.github.io/python-intermediate-development-earth-sciences/14-collaboration-using-git/index.html https://www.linkedin.com/pulse/power-collaborative-development-git-esteban-bocic-bravo- https://medium.com/@syantien/understanding-git-the-core-of-collaborative-software-development-aedd65fac66 https://www.ximian.org/2023/10/version-control-with-git-best-practices-for-collaborative-software-development/ Replit 檢視靜態網站 從 w3 開始, 原先可以讓倉儲的動態網站與靜態網站共用 443 https 的方式, 也就是利用 SStatic 後查驗靜態網站的功能已經失效, 必須將靜態網站的檢視與動態編輯網站的啟動分開, 才能在將 Replit 網站與網誌改版的內容, 在推向 Github 倉儲之前進行查驗. 執行動態網站伺服器 cd2024 的動態網站, 主要用來編輯 config/content.htm 檔案內容, 並可透過 Convert 功能將所編輯的網頁內容, 透過 h1, h2 與 h3 標題分頁後, 會轉為 content 目錄中的頁面超文件檔案. 先前執行動態網站編輯的程式為 main.py: from cmsimde import flaskapp from gevent.pywsgi import WSGIServer #flaskapp.app.run(host=\"0.0.0.0\", debug=True) # Start dynamic server http_server = WSGIServer(('0.0.0.0', 8080), flaskapp.app) http_server.serve_forever() 執行 main.py 的方式, 可以依照 .replit 的設定, 直接利用 Run 按鍵執行. 也可以在 Shell 頁面中, 利用 python3 main.py 執行, 只是透過 Run 按鍵執行, 伺服器啟動之後會顯示在 Webview 頁面, 但是在 Shell 執行 python3 main.py 則必須自行以手動方式帶出伺服器連結. 執行靜態網站伺服器 如前所述, 靜態網站其實就是位於 content 目錄中的各個 html 檔案, 且圖片可引自 images 目錄, 而近端檔案連結則可引自 downloads 目錄. 當使用者將 config/content.htm 轉為 content 目錄中的靜態網站後, 若能在推向 Github 之前, 確認各頁面或網誌的內容無誤後, 再推向遠端. 而執行靜態網站伺服器的方法, 則是在 Shell 執行 python main2.py, 也就是在導入 static.py 之後啟動靜態網站. main2.py 程式內容: # Run static server import static from gevent.pywsgi import WSGIServer http_server = WSGIServer(('0.0.0.0', 8080), static.app) http_server.serve_forever() 其中的 static.py 為: from flask import Flask, send_from_directory app = Flask(__name__) # Route to serve the index.html file @app.route('/') def index(): return send_from_directory('.', 'index.html') # Route to serve static files from the ./cmsimde/static directory @app.route('/cmsimde/static/<path:filename>') def serve_static(filename): return send_from_directory('cmsimde/static', filename) # Route to serve other HTML files from the root directory @app.route('<path:filename>') def serve_html(filename): return send_from_directory('.', filename) if __name__ == '__main__': app.run(debug=True) 註: 利用 pre 標註引用資料時, 若內容帶有 < 與 > 時必須避免執行使用小於與大於符號, 而必須使用 HTML Character Codes , 以免額外產生不必要的標註符號. 當使用者希望執行靜態網頁伺服器時, 在 Shell 中執行 python3 main2.py, 經過上述設定, 在 Replit 的免費帳號環境中, 一個帳號只能啟用動態伺服器或靜態伺服器. 也就是動態伺服器或靜態伺服器在特定時刻中, 僅能擇一啟動. CoppeliaSim 檔案格式 下載 copsim_midterm_cube2_xml.7z CoppeliaSim 目前提供二位元與 XML 場景格式 XML 場景支援儲存為單一檔案或多個模型與影像檔案 4.5.1 之後的版本, 其設定資料並非在套件目錄, 而是儲存在操作系統的 AppData/Roaming 目錄中 4.5.1 版儲存為多 XML 檔案格式時, 無法帶出場景中的 png 圖檔, 4.6.0 版之後才修正此一錯誤 目前能夠支援 IPv4 與 IPv6 網際場景模擬的版本僅修改至 4.5.1 版 XML 檔案應用廣泛, 協同產品設計過程可能需要利用程式方法處理零組件與模擬場景互相轉換取得的 XML 格式檔案 Sourcetree https://www.sourcetreeapp.com/ SourceTree_portable.7z (需要下載密碼) 其中必須要在啟動可攜程式時, 利用下列指令將 Sourcetree 先前設定存入操作系統: Xcopy %Disk%:\\home_ipv6\\AppData\\Local\\Atlassian C:\\users\\%USERNAME%\\AppData\\Local\\Atlassian /E /H /C /I /Y Git branch Git 分支 Odoo PLM Odoo PLM 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"2b","url":"./2024-cd-2b-w5.html"},{"title":"協同產品設計實習2a-4","text":"協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時可導入 SourceTree 協助各組員更清楚看到倉儲改版歷程, 另外 Git Branch 的應用, 也可減少各學員階段性改版內容完成之前, 推向 Github 分組倉儲過程的合併次數. 教學影片分組整理並自評 假如你好奇這個概念哪裡來的: 請參考 反思一 and 反思二 . 對於事不關己或者不明白為何團隊中的成員 (這裡指教與學的相關人、事與物), 總讓人提不起興趣, 但若能在過程中找到主要在乎的角色、任務或者緣由, 或許就能從應付著手, 一直到終於了解天下沒有白吃的午餐, 所有的努力付出, 終究不會白費. 此外, 假如想參考先前學長推甄研究所的相關資訊, 請利用 Team code: n9k585c 進入自行查看. w4 2a 分組任務 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 Github 個人與分組倉儲的維護方式 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 \"-\" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. 各組員與分組倉儲的資料, 包括文字資料 (含 LaTeX 報告章節資料)、零組件檔案、零件工程圖或組立圖檔 (含 BOM 與爆炸圖), 以及目前正在整理的教學影片, 或者是各學員將操作流程錄製成的影片或 Wink 資料. 第一種介紹的倉儲維護方式 - Replit 有關 Replit 的開發歷史, 可以參考 這裡 與 ChatGPT 的對話內容. Replit 目前所提供的免費帳號, 雖然沒有太多的運算資源, 但並沒有使用時間的限制, 因此若能利用 python3 main.py 執行動態網站, 而且利用 python3 main2.py 執行靜態網站, 只要區分開動態網站與靜態網站的使用, 就可以順利在 Replit 上維護個人與分組的網站內容. 下載 main2.txt 與 static.txt , 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. 說明 如何在 Replit 檢視靜態網站 教學影片 說明 如何下載 replit_main2.7z 並在倉儲中建立兩個檔案 教學影片 使用 Replit 維護個人網站時, 可以在登入 Github 後, 連線到 Replit 取得雙方認證, import 個人 cd2024 倉儲後, 經過改版就可以將資料推向 Github. 但目前免費 Replit 帳號僅允許開啟一個 Web server 埠號之外, 並無法將一個 Replit 延伸授權至兩個 Github 帳號, 因此若在個人的 Replit 帳號中 import 分組網站, 必須自行設定與 Github 帳號的推送授權, 也就是利用帳號下的 token 或 OpenSSH keys 設定. 首先考量在 Replit 導入的倉儲使用 token 是否可行, 答案是: 不可, 原因是: 任何人只要透過 https://replit.com/@wcms/cd2024?v=1#.git/config 就可以看到免費帳號下的任一個倉儲的 .git/config, 若其中帶有個人帳號授權的 token, 任何人都能用來對此倉儲進行改版. 因此剩下的方案就是採用 OpenSSH 的 keys 設定, 在各自的 /home/runner/.ssh 中配置 config 與 id_rsa, 並將 id_rsa 對應的公鑰登錄到 Github 帳號下. 其中由於 Replit 與 Github 都支援 IPv4 網路協定, 因此 config 設定為: Host github.com User git Hostname github.com 上述 config 設定檔案表示, Host 名稱即為 Windows 環境使用 Putty 設定時的 session 名稱, 因此 https://replit.com/@wcms/cd2024?v=1#.git/config 若採用 OpenSSH 協定對 Github 連線, 則必須將原本的: [remote \"origin\"] url = https://github.com/mdecycu/cd2024 fetch = +refs/heads/*:refs/remotes/origin/* 改為: [remote \"origin\"] url = git@github.com:mdecycu/cd2024 fetch = +refs/heads/*:refs/remotes/origin/* 上列的 \"url = git@github.com:mdecycu/cd2024\" 表示將透過 SSH (Secure SHell) 協定, 使用 git 作為遠端登入的帳號, 並且根據 config 中的 Host 設定做為代表字串, 連線到 Hostname, 也就是 github.com, 登入後, 利用 id_rsa 與 \":\" 後的 mdecycu 帳號下的 OpenSSH 登錄的 public keys 進行比對, 若吻合, 則可以授權對旗下的 cd2024 倉儲進行改版. 只不過 Replit 免費帳號下的 /home/runner/.ssh 會在每次雲端系統整理的時候被系統刪除 (原因不明, 有可能是用來區分付費帳號與免費帳號的使用權限), 但是在系統刪除此一授權的區間, Replit 免費帳號使用者可以透過將設定在 /home/runner/.ssh 目錄下的 config 與 id_rsa 下載到 USB 隨身碟, 一旦發現分組倉儲下的授權被系統移除後, 再利用動態網站將 config.txt 與 id_rsa.txt (因為內建的網站允許 .txt 檔案上傳) 傳到 downloads 目錄下, 然後再利用 python3 ssh.py 將此兩個授權資料放到正確的 /home/runner/.ssh 目錄下, 並設定正確的 id_rsa 檔案存取權限 (必須移除 other 與 group 的 rwx 權限) 上述用來搬遷 (move) config.txt 與 id_rsa.txt, 並設定 id_rsa 檔案屬性的 ssh.py 程式如下: import os if not os.path.exists(\"/home/runner/.ssh\"): os.makedirs(\"/home/runner/.ssh\") os.system(\"mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa\") os.system(\"mv ./downloads/config.txt /home/runner/.ssh/config\") os.system(\"chmod og-rwx /home/runner/.ssh/id_rsa\") 其中的 os 模組導入後, 可以利用 os.system() 執行系統指令, 且最前面的 if 迴圈可以檢查是否存在 .ssh 目錄, 若已經被系統刪除, 可以透過 os.makedirs 建立此一目錄. 第二種介紹的倉儲維護方式 - Codespaces 位於 https://github.com/codespaces , 是 Github 帳號下個倉儲的延伸功能, 每一個免費 Github 帳號每個月有 120 core-hours 的使用限制, 每一個免費 codespace 最小配置 2core, 可以提升至 4core. Codespaces 的網際介面為 Visual Studio Code, 支援多終端機、多埠號伺服, 且可從各倉儲的 Code 頁面中直接啟動, 並直接使用 Github 帳號的管理授權, 因此使用者登入 Github 帳號後, 可以直接利用 Codespaces 管理個人與分組倉儲, 無需額外再設定倉儲的管理授權. 在 Codespaces 執行動態網站的指令為 python3 main.py, 而執行靜態網站則必須從表單新增一個終端機, 然後利用 python3 -m http.server 執行靜態網站, 一旦網站啟動, Visual Studio Code 就會將內埠號轉為 443 並且利用編碼產生伺服器的網路符號名稱. 第三種介紹的倉儲維護方式 - Gitpod 位於 https://gitpod.io , 是一套類似 Codespaces 的雲端 IDE 服務系統, 可以直接採 Github 帳號登入, 免費使用授權時間為每月 50 小時, 若採 Github 帳號登入, 則可以直接導入該帳號下的個人倉儲進行維護. 但是若導入分組倉儲, 則必須自行設定推送授權, 由於 Gitpod 並無像 Replit 帳號下的固定連線網址, 因此前述取得對分組倉儲的授權, 可以採 token 與 SSH 等兩種方式, 但目前並未測試是否設定完成的 /home/gitpod/.ssh 目錄, 是否會遭系統刪除. Gitpod 與 Codespaces 相同, 支援多終端機 (Terminal) 與多埠號, 使用者可以同時執行個人與分組倉儲的動態與靜態網站. 在 Gitpod 執行動態網站的指令為 python3 main.py, 而執行靜態網站則必須從表單新增一個終端機, 然後利用 python3 -m http.server 執行靜態網站, 一旦網站啟動, Visual Studio Code 就會將內埠號轉為 443 並且利用編碼產生伺服器的網路符號名稱. 第四種介紹的倉儲維護方式 - localhost localhost 採用的是 portable_2024 可攜程式系統, 啟動後, 可以用來執行個人與分組的倉儲維護, 只是若在 Windows 系統可以選擇較簡單的 token 綁定授權, 或者使用 Putty 設定的 SSH 使用授權, 唯一必須注意的是, Putty 所建立的 session 資料會直接登錄到操作系統的登錄檔案 (Registry), 使用者必須將此 session 以 .reg 的格式匯出, 存在隨身碟, 並在每次要使用此一授權時, 以滑鼠在實體檔案路徑下的 my_putty_session.reg (不能使用虛擬的檔案路徑, 例如: 不能點擊位於 Y: 目錄下的 .reg 登錄設定檔案) localhost 中的可攜程式系統還帶有 CoppeliaSim、NX 可攜與啟動批次檔案、ShareX、Wink 以及 Solvespace 等檔案, 其中的 CoppeliaSim 用於控制系統設計與模擬, 而 NX 則用於各組員協同繪製目標產品的零組件, ShareX 與 Wink 則用來建立操作流程影片, Solvespace 則可用於平面機構模擬以及初步的零組件尺寸規劃用. 在 localhost 執行動態網站的指令為 python cmsimde/wsgi.py, 也可以透過 cms.bat 執行上列指令. 而執行靜態網站則可以在另一個命令列中, 利用 python3 -m http.server 執行靜態網站, 一旦網站啟動, Python 就以內建的 8000 作為伺服器埠號, 並在 http://localhost:8000 中伺服. 利用 NX1872 協同繪製零組件 註: 目前可下載最新的 NX 版本 為 2312.4001, 惟系上授權伺服器僅配置到 2206, 必須更新授權後才可以支援 2212、2306 與 2312 版本 (Siemens 每半年發布一個 NX 新版本). 從電腦輔助設計室中的電腦 C:\\Program Files\\Siemens\\NX1872 取得所需的 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. 電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12, 若在電腦教室則可利用下列批次檔案啟動 NX, 若在各自的電腦或隨身碟帶有各版次的 NX 資料, 只需要透過網路取得授權, 就可直接從 USB 中執行各版次的 NX. 下載 NX2027_lite (需要密碼, 解開後約 8G) 使用不同版本 NX 執行繪圖, 該如何協同設計? start_USB_nx1872.bat 可以啟動 USB 隨身碟中的 NX1872. @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=%Disk%:\\ugii path = %ugii%;%path% start ugraf -nx 當使用 USB 隨身碟上的 NX1872 檔案資料啟動 NX 時, 採用 subst z: \"NX1872\" 表示將 \"NX1872\" 目錄透過 subst 指令, 讓 Windows 操作系統視為 z: 槽, 所以要關閉 NX 且取消 subst 設定, 必須執行下列的 stop.bat 指令批次檔案. @echo off set Disk=z path=%PATH%; taskkill /IM ugraf.exe /F REM 終止虛擬硬碟與目錄的對應 subst %Disk%: /D REM 關閉 cmd 指令視窗 taskkill /IM cmd.exe /F EXIT 下列 start_cadlab_nx1872.bat 則可以利用 C: 安裝的 NX1872 啟動. 必須特別注意的是, 無論使用 USB 或電腦安裝的套件啟動, 相關設定檔案均會存在電腦的 AppData 目錄中. 就 NX1872 而言, 這些設定檔案會存在 C:\\Users\\Admin\\AppData\\Local\\Siemens\\NX1872 目錄中, 使用者必須在啟動可攜時將先前的設定轉存至對應的目錄下. 亦即, 必須在完成 NX 設定當下, 將 AppData\\Local\\Siemens\\NX1872 目錄設定資料複製到隨身碟, 並利用 Xcopy 指令, 在啟動隨身程式系統時, 將先前的設定複製到特定的位置中. 例如: Xcopy %Disk%:\\home_ipv6\\AppData\\Local\\Siemens\\NX1872 C:\\users\\%USERNAME%\\AppData\\Local\\Siemens\\NX1872 /E /H /C /I /Y 就可讓 NX 啟動時使用先前的設定內容. 至於 Xcopy 指令的 /E 表示要複製包含空白目錄的所有目錄與子目錄 E 代表 Entire /H 表示要複製隱藏檔案與系統檔案 H 代表 Hidden /C 表示即使發生錯誤也要繼續複製 C 代表 Continue /I 表示如果目標不存在並且複製多個檔案, 則判定該目標為目錄, I 可能代表 If /Y 表示同意複製資料過程中的所有可能詢問回應, Y 代表一律回答 Yes set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=C:\\Program Files\\Siemens\\NX1872\\ugii path = %ugii%;%path% start ugraf -nx start_cadlab_nx2206.bat 可以利用 D: 安裝的 NX2206 啟動. set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=D:\\Program Files\\Siemens\\2206\\ugii path = %ugii%;%path% start ugraf -nx start_cadlab_nx12.bat 可以利用 D: 安裝的 NX12 啟動. @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=\"D:\\Program Files\\Siemens\\NX 12.0\\ugii\" path = %ugii%;%path% start ugraf -nx 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"2a","url":"./2024-cd-2a-w4.html"},{"title":"協同產品設計實習2b-4","text":"協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時若導入 Source Tree 協助各組員更清楚看到倉儲改版架構, 另外 Git Branch 的應用. Odoo 參考文章中英並列 教學影片: 以第六組為例, 利用 Codespaces 維護倉儲內容 教學影片: 如何利用 Github Actions 編譯 LaTeX 得到分組 pdf 報告 教學影片: 如何利用 Gitpod 加上 token 取得分組倉儲權限 Replit 靜態網站檢視 下載 main2.txt 與 static.txt , 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. 說明 如何在 Replit 檢視靜態網站 教學影片 說明 如何下載 replit_main2.7z 並在倉儲中建立兩個檔案 教學影片 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"2b","url":"./2024-cd-2b-w4.html"},{"title":"協同產品設計實習2a-3","text":"2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. 列出期中分組倉儲與網站 cd2024 期中分組倉儲與網站 上列連結使用 [Brython] 程式語法, 可直接在網頁中列出特定連結內容, 所採用的程式碼如下: # 從 Brython browser 模組導入 document 與 html from browser import document, html # get output html location brython_div = document[\"brython_div1\"] div = \"a\" org = \"mdecd2024\" midterm = \"mid\" + div + \"g\" group_num = 8 for i in range(1,group_num+1): site_url = \"https://\" + org + \".github.io/2\" + div + \"-\" + midterm + str(i) repo_url = \"https://github.com/\" + org + \"/2\" + div + \"-\" + midterm + str(i) brython_div <= html.A(\"2\"+div+\"-\"+midterm+str(i), href=site_url) brython_div <= \" (\" brython_div <= html.A(\"repo\", href=repo_url) brython_div <= \")\" brython_div <= html.BR() brython_div <= html.BR() div = \"b\" midterm = \"mid\" + div + \"g\" group_num = 9 for i in range(1,group_num+1): site_url = \"https://\" + org + \".github.io/2\" + div + \"-\" + midterm + str(i) repo_url = \"https://github.com/\" + org + \"/2\" + div + \"-\" + midterm + str(i) brython_div <= html.A(\"2\"+div+\"-\"+midterm+str(i), href=site_url) brython_div <= \" (\" brython_div <= html.A(\"repo\", href=repo_url) brython_div <= \")\" brython_div <= html.BR() 期中協同分組報告 請參考 https://github.com/mdecd2024/test-ag1 中的 latex 目錄與 downloads 目錄中的 https://github.com/mdecd2024/test-ag1/blob/main/downloads/report_github.txt 並根據下列教學範例: 說明 如何將 41123130 的個人倉儲設為 2a-midag2 分組倉儲的子模組 說明 如何將組員的個人倉儲納入分組倉儲成為子模組 說明 如何在 Replit 維護分組倉儲 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: latex_images_github.7z (需要密碼) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 有關 Codespaces 使用 由於 Github Codespaces 免費帳號目前每月 可以使用 120 core hours , 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 使用 Gitpod 維護倉儲與網站 Gitpod 與 Codespaces 類似, 也是採用 Visual Studio Code 網際介面, 可讓使用者維護位於 Github 的倉儲, 只是個人的 cd2024 倉儲, 以 Github 帳號登入 Gitpod 之後, 可以直接維護, 但是分組網站是從 Github Classroom mdecd2024 帳號下派任, 與 Replit 環境維護分組網站的方法相同, 必須自行建立 .ssh 下的 id_rsa 與 config, 差別是一旦在 Gitpod 導入的分組網站 SSH 管理權限, 不會像 Replit 免費帳號下, 系統會定期刪除免費帳號使用者的 .ssh 目錄. 在 Gitpod 導入 Github 倉儲後, 路徑位於 /workspace/ 目錄下, 但是 .ssh 目錄則位於 /home/gitpod/.ssh, 當使用者執行 cd 則會進入 /home/gitpod 目錄, 且使用者在 Gitpod 的 Dashboard 可以從 https://gitpod.io 進入. 說明 使用 Gitpod 維護個人網站 說明 使用 Gitpod 維護分組網站 電腦教室中的協同設計 cd2024 起, 電腦輔助設計室中的每一台電腦已經各自擁有一個外部 IPv4 網址, 因此各組員可將個人倉儲與分組倉儲 git clone 至隨身碟, 利用 Token 或 SSH session 授權維護倉儲與網站內容. 如何利用 Classic Token 授權維護倉儲與網站 ODOO 參考資料 https://www.google.com/search?q=sap+vs+odoo (與 SAP 及 ODOO 有關的搜尋) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 將組員的個人倉儲設為分組倉儲子模組 cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站, 設定的指令為: git submodule add 組員的個人倉儲網址 組員的學號 例如: 假設組員的 cd2024 個人倉儲位於: https://github.com/scrum-1/cd2024, 且該組員的學號為 41123299, 則該組員必須在進入該組的倉儲目錄後, 執行: git submodule add https://github.com/scrum-1/cd2024.git 41123299 如此, Github 帳號為 scrum-1 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 這樣設定的好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲. 另外一個使用 Github Classroom 派送分組倉儲的好處, 是 mdecycu 自動成為各分組倉儲的管理者之一, 若各組在改版或解決衝突的過程發生問題, mdecycu 可以協助處理. 一旦分組倉儲帶有以各組員學號作為子模組之後, git clone 倉儲必須使用: git clone --recurse-submodules 加上各組的倉儲 URL 以第一組期中分組倉儲的 git clone 為例, 並且使用 putty session 名稱 github.com: git clone --recurse-submodules git@github.com:mdecd2024/2b-midbg1.git 而且若要在分組倉儲中更新各組員的子模組版本, 則必須更換目錄到該組員的學號目錄中並且使用 git pull origin main, 才能取下該組員其 cd2024 個人倉儲的最新內容. 取下組員資料後, 若要新增提交推送, 則必須再更換目錄回分組倉儲後才能執行. 有關 LaTeX 轉 pdf 在 Windows 環境, 說明 如何利用 LaTeX 協同建立分組報告 使用 Github Actions 執行轉檔: https://github.com/mdecd2024/test-ag1/blob/main/.github/workflows/main.yml 倉儲中的 latex 目錄: https://github.com/mdecd2024/test-ag1/tree/main/latex 利用可攜程式編譯 LaTeX 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 下載 latex_images_github.7z (需要密碼) 協同產品設計實習分組期中報告 LaTeX 範本: 下載 cd2024_midterm_report_latex_ex.7z 41123124 詢問: 我下載了miktex-protable的資料夾之後，沿著readme的步驟打開到miktex-portable\\texmfs\\install\\miktex\\bin\\x64這個位置，但裡面有非常多exe檔案，請問我應該用哪個進行編輯。還有Latex是一種製作類似word的C語言還是一種軟體? 回答: 首先, 有關利用 xelatex 編譯分組 pdf 報告的說明影片, 在第三週的網誌中有詳細說明, 大約在 影片 中的 1:15 ~ 3:30 說明, 只要將 miktex_portable 中的 xelatex.exe 路徑放入可攜程式啟動後的命令搜尋路徑, 就可以使用 xelatex.exe 編譯 .tex 文件. 產生對應的 .pdf 檔案. 另外, LaTeX 文件之所以能用在多人協同編輯流程, 是因為 .tex 中的設定與文件內容都是純文字, 因此在解決衝突時, 可以清楚看到衝突分隔符號, 並加以處理. 所以各組員可以在線上或操作系統使用任何純文字編輯套件, 但必須注意編輯後所得到的 .tex 的結果必須是純文字檔案, 而不是其他帶有特定非 LaTeX 格式的 xml 檔案資料. 最後, LaTeX 是植基於 TeX 的文件編譯系統, 使用者按照 TeX 的語法格式在文章中設定文件內各種資料的編排方式, TeX 或 LaTeX 系統會按照此一 .tex 中的設定, 產生最接近使用者需求的資料, 其中包括文字內容的間隔排列, 數學公式的編排與引用, 圖文章節目錄的製作等, 都是經由 TeX 編譯系統經過計算而得. 有關 TeX 的詳細說明, 請參考 https://en.wikipedia.org/wiki/TeX 的中文說明. 設定網誌 利用 [OBS] 加上廣播系統錄製的: 如何設定個人倉儲中的 Pelican 網誌 Odoo PLM 功能 簡介 Odoo PLM 用法 設定個人網誌系統 利用 https://github.com/mdecycu/cmsimde_site 建立的網站, 其動態網站資料位於 config/content.htm, 轉換完成的靜態網站資料位於 content 目錄中. 網誌的原始檔案位於 markdown 目錄, 所使用的網誌系統為 Pelican , 轉換完成的網誌內容則位於 blog 目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關的設定檔案還有: pelicanconf.py 與 publishconf.py 等. 為了順利完成上述個人課程網站的網誌設定, 必須根據各用戶所使用的 github 帳號對這三個 .py 檔案進行設定. OnShape 帳號 若網路順暢, 可以登入 https://onshape.com 利用 MKCad Library 或 VEX Part Library 零件程式庫建立產品系統模型. CoppeliaSim CoppeliaSim 4.5.1 rev1 for IPv6.7z (169MB, password required to download) 可以結合可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 進行機電系統設計與模擬. 模型簡化 為了讓機電產品能在 CoppeliaSim 動態場景中順暢模擬, 各零組件必須有效進行簡化, 此一零件簡化過程如何後續對零組件進行應力或其他動態系統分析之前, 必須先簡化零組件外型後再進行網格化的應用相同. 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"2a","url":"./2024-cd-2a-w3.html"},{"title":"協同產品設計實習2b-3","text":"2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. 列出期中分組倉儲與網站 cd2024 期中分組倉儲與網站 上列連結使用 Brython 程式語法, 可直接在網頁中列出特定連結內容, 所採用的程式碼如下: # 從 Brython browser 模組導入 document 與 html from browser import document, html # get output html location brython_div = document[\"brython_div1\"] div = \"a\" org = \"mdecd2024\" midterm = \"mid\" + div + \"g\" group_num = 8 for i in range(1,group_num+1): site_url = \"https://\" + org + \".github.io/2\" + div + \"-\" + midterm + str(i) repo_url = \"https://github.com/\" + org + \"/2\" + div + \"-\" + midterm + str(i) brython_div <= html.A(\"2\"+div+\"-\"+midterm+str(i), href=site_url) brython_div <= \" (\" brython_div <= html.A(\"repo\", href=repo_url) brython_div <= \")\" brython_div <= html.BR() brython_div <= html.BR() div = \"b\" midterm = \"mid\" + div + \"g\" group_num = 9 for i in range(1,group_num+1): site_url = \"https://\" + org + \".github.io/2\" + div + \"-\" + midterm + str(i) repo_url = \"https://github.com/\" + org + \"/2\" + div + \"-\" + midterm + str(i) brython_div <= html.A(\"2\"+div+\"-\"+midterm+str(i), href=site_url) brython_div <= \" (\" brython_div <= html.A(\"repo\", href=repo_url) brython_div <= \")\" brython_div <= html.BR() 期中協同分組報告 請參考 https://github.com/mdecd2024/test-ag1 中的 latex 目錄與 downloads 目錄中的 https://github.com/mdecd2024/test-ag1/blob/main/downloads/report_github.txt 並根據下列教學範例: 說明 如何將組員的個人倉儲納入分組倉儲成為子模組 說明 如何在 Replit 維護分組倉儲 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: latex_images_github.7z (需要密碼) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 有關 Codespaces 使用 由於 Github Codespaces 免費帳號目前每月 可以使用 120 core hours , 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 使用 Gitpod 維護倉儲與網站 Gitpod 與 Codespaces 類似, 也是採用 Visual Studio Code 網際介面, 可讓使用者維護位於 Github 的倉儲, 只是個人的 cd2024 倉儲, 以 Github 帳號登入 Gitpod 之後, 可以直接維護, 但是分組網站是從 Github Classroom mdecd2024 帳號下派任, 與 Replit 環境維護分組網站的方法相同, 必須自行建立 .ssh 下的 id_rsa 與 config, 差別是一旦在 Gitpod 導入的分組網站 SSH 管理權限, 不會像 Replit 免費帳號下, 系統會定期刪除免費帳號使用者的 .ssh 目錄. 在 Gitpod 導入 Github 倉儲後, 路徑位於 /workspace/ 目錄下, 但是 .ssh 目錄則位於 /home/gitpod/.ssh, 當使用者執行 cd 則會進入 /home/gitpod 目錄, 且使用者在 Gitpod 的 Dashboard 可以從 https://gitpod.io 進入. 說明 使用 Gitpod 維護個人網站 說明 使用 Gitpod 維護分組網站 電腦教室中的協同設計 cd2024 起, 電腦輔助設計室中的每一台電腦已經各自擁有一個外部 IPv4 網址, 因此各組員可將個人倉儲與分組倉儲 git clone 至隨身碟, 利用 Token 或 SSH session 授權維護倉儲與網站內容. 如何利用 Classic Token 授權維護倉儲與網站 ODOO 參考資料 https://www.google.com/search?q=sap+vs+odoo (與 SAP 及 ODOO 有關的搜尋) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 將組員的個人倉儲設為分組倉儲子模組 cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站, 設定的指令為: git submodule add 組員的個人倉儲網址 組員的學號 例如: 假設組員的 cd2024 個人倉儲位於: https://github.com/scrum-1/cd2024, 且該組員的學號為 41123299, 則該組員必須在進入該組的倉儲目錄後, 執行: git submodule add https://github.com/scrum-1/cd2024.git 41123299 如此, Github 帳號為 scrum-1 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 這樣設定的好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲. 另外一個使用 Github Classroom 派送分組倉儲的好處, 是 mdecycu 自動成為各分組倉儲的管理者之一, 若各組在改版或解決衝突的過程發生問題, mdecycu 可以協助處理. 一旦分組倉儲帶有以各組員學號作為子模組之後, git clone 倉儲必須使用: git clone --recurse-submodules 加上各組的倉儲 URL 以第一組期中分組倉儲的 git clone 為例, 並且使用 putty session 名稱 github.com: git clone --recurse-submodules git@github.com:mdecd2024/2b-midbg1.git 而且若要在分組倉儲中更新各組員的子模組版本, 則必須更換目錄到該組員的學號目錄中並且使用 git pull origin main, 才能取下該組員其 cd2024 個人倉儲的最新內容. 取下組員資料後, 若要新增提交推送, 則必須再更換目錄回分組倉儲後才能執行. 有關 LaTeX 轉 pdf 使用 Github Actions 執行轉檔: https://github.com/mdecd2024/test-ag1/blob/main/.github/workflows/main.yml 倉儲中的 latex 目錄: https://github.com/mdecd2024/test-ag1/tree/main/latex 說明 如何利用 LaTeX 編寫分組期中報告 利用可攜程式編譯 LaTeX 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 下載 latex_images_github.7z (需要密碼) 協同產品設計實習分組期中報告 LaTeX 範本: 下載 cd2024_midterm_report_latex_ex.7z 設定網誌 利用 [OBS] 加上廣播系統錄製的: 如何設定個人倉儲中的 Pelican 網誌 Odoo PLM 功能 簡介 Odoo PLM 用法 設定個人網誌系統 利用 https://github.com/mdecycu/cmsimde_site 建立的網站, 其動態網站資料位於 config/content.htm, 轉換完成的靜態網站資料位於 content 目錄中. 網誌的原始檔案位於 markdown 目錄, 所使用的網誌系統為 Pelican , 轉換完成的網誌內容則位於 blog 目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關的設定檔案還有: pelicanconf.py 與 publishconf.py 等. 為了順利完成上述個人課程網站的網誌設定, 必須根據各用戶所使用的 github 帳號對這三個 .py 檔案進行設定. OnShape 帳號 若網路順暢, 可以登入 https://onshape.com 利用 MKCad Library 或 VEX Part Library 零件程式庫建立產品系統模型. CoppeliaSim CoppeliaSim 4.5.1 rev1 for IPv6.7z (169MB, password required to download) 可以結合可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 進行機電系統設計與模擬. 模型簡化 為了讓機電產品能在 CoppeliaSim 動態場景中順暢模擬, 各零組件必須有效進行簡化, 此一零件簡化過程如何後續對零組件進行應力或其他動態系統分析之前, 必須先簡化零組件外型後再進行網格化的應用相同. 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"2b","url":"./2024-cd-2b-w3.html"},{"title":"協同產品設計實習2a-2","text":"協同產品設計實習的第二週, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲: https://github.com/mdecd2024/test-ag1 期中分組作業名稱甲班為 2a, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... 根據上述規劃, 甲班第一分組的期中協同倉儲將位於: https://github.com/mdecd2024/2a-midag1 , 第一組的期中報告網站將位於: https://mdecd2024.github.io/2a-midag1 . 說明 甲班第一組組長如何建立 midag1 Team , 並利用 Codespaces 維護 2a-midag1 分組倉儲 說明如何 利用 Replit 管理從 Classroom 取得的分組倉儲 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等. 利用 Codespaces 維護倉儲與網站 說明 如何利用 Github Codespaces 維護網站內容 由於 Github Codespaces 免費帳號目前每月 可以使用 120 core hours , 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 在近端執行動態網站 說明 如何利用近端可攜系統維護分組網站 ODOO 參考資料 https://www.google.com/search?q=sap+vs+odoo (與 SAP 及 ODOO 有關的搜尋) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"2a","url":"./2024-cd-2a-w2.html"},{"title":"協同產品設計實習2b-2","text":"2024 Spring 協同產品設計實習的第二週, 主要利用 Github Classroom 進行分組, 並且說明如何利用 Github Codespaces 維護個人與分組網站. 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲: https://github.com/mdecd2024/test-ag1 期中分組作業名稱甲班為 2a, 乙班期中分組作業名稱則為 2b, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... 至於乙班第一組組長則必須在期中作業 2b 項下, 建立名稱為 midbg1 的 Team, 其餘乙班各組的期中報告 Team 名稱則分別為 midbg2, midbg3 .... 說明 乙班第一組組長如何建立 midbg1 的過程1 說明 乙班第一組組長如何建立 midbg1 的過程2 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則可後續配合期末作業名稱 2a2 與 2b2, 由甲班各組組長建立 Team finalag1, finalag2 ...., 而乙班組長則建立 Team finalbg1, finalbg2 .... 等. 根據上述規劃, 乙班第一分組的期中協同倉儲將位於: https://github.com/mdecd2024/2b-midbg1 , 第一組的期中報告網站將位於: https://mdecd2024.github.io/2b-midbg1 . 至於乙班第一分組的期末協同倉儲將位於: https://github.com/mdecd2024/2b2-finalbg1 , 且對應的期末報告網站將位於: https://mdecd2024.github.io/2b2-finalbg1 . 利用 Codespaces 維護倉儲與網站 說明 如何利用 Github Codespaces 維護網站內容 設定網誌 利用 [OBS] 加上廣播系統錄製的: 如何設定個人倉儲中的 Pelican 網誌 Odoo PLM 功能 簡介 Odoo PLM 用法 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"2b","url":"./2024-cd-2b-w2.html"},{"title":"協同產品設計實習2a-1","text":"2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用. 2a 建個人課程倉儲 登入 github.com, 連結到 https://github.com/mdecycu/cmsimde_site , 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄. https://github.com/mdecycu/cmsimde_site 與 https://github.com/mdecycu/cmsite 的差別為, 目前的 Template 將 cmsimde 當作目錄, 而非 cmsite 中的子模組. 上述 建立個人課程 cd2024 倉儲與網站的操作影片 , 建立的範例網站為: https://scrum-1.github.io/cd2024/ 下載可攜套件檔案 下載可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 將個人倉儲 import 至 Replit 從 Replit 帳號下方的 Account, Connected Services(連線服務區) 點選 Connect 後, 讓 Github 授權 Replit, 將在 Replit 中的倉儲改版後, 有權限推回 Github. 設定 Replit 與 Github 應用授權的說明影片 在 Replit Editor(編輯器中) 使用 Ctrl + z 執行 undo 在 Replit Editor(編輯器中) 使用 Ctrl + y 執行 redo 設定 Github 帳號的雙重認證 說明如何設定 Github 雙重認證 , 其中手機必須先安裝 Github Mobile , 也可以使用 Authy App 作為認證套件, 一旦在 Github 帳號下的 Setting 中的 Password and authentication 啟用雙重認證, 最後必須下載對應的 Recovery codes 並存入隨身碟, 而且要寄到個人的電子郵箱. 如何 import 倉儲至 Replit 進行改版 說明如何利用 Replit 對 cd2024 改版 設定網誌 利用 [OBS] 加上廣播系統錄製的: 如何設定個人倉儲中的 Pelican 網誌 Odoo PLM 功能 簡介 Odoo PLM 用法 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"2a","url":"./2024-cd-2a-get-started.html"},{"title":"協同產品設計實習2b-1","text":"2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用. 2b 建個人課程倉儲 登入 github.com, 連結到 https://github.com/mdecycu/cmsimde_site , 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄. https://github.com/mdecycu/cmsimde_site 與 https://github.com/mdecycu/cmsite 的差別為, 目前的 Template 將 cmsimde 當作目錄, 而非 cmsite 中的子模組. 上述 建立個人課程 cd2024 倉儲與網站的操作影片 , 建立的範例網站為: https://scrum-1.github.io/cd2024/ 下載可攜套件檔案 下載可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 將個人倉儲 import 至 Replit 從 Replit 帳號下方的 Account, Connected Services(連線服務區) 點選 Connect 後, 讓 Github 授權 Replit, 將在 Replit 中的倉儲改版後, 有權限推回 Github. 設定 Replit 與 Github 應用授權的說明影片 在 Replit Editor(編輯器中) 使用 Ctrl + z 執行 undo 在 Replit Editor(編輯器中) 使用 Ctrl + y 執行 redo 設定 Github 帳號的雙重認證 說明如何設定 Github 雙重認證 , 其中手機必須先安裝 Github Mobile , 也可以使用 Authy App 作為認證套件, 一旦在 Github 帳號下的 Setting 中的 Password and authentication 啟用雙重認證, 最後必須下載對應的 Recovery codes 並存入隨身碟, 而且要寄到個人的電子郵箱. 如何 import 倉儲至 Replit 進行改版 說明如何利用 Replit 對 cd2024 改版 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"2b","url":"./2024-cd-2b-get-started.html"},{"title":"2024 Spring CD 課程","text":"2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用. ODOO https://national-formosa-university.odoo.com 管理者為 50703199 At mde dot nfu dot tw https://github.com/odoo/odoo 直接在雲端使用 Odoo, 以及學習如何安裝 Community Odoo 版本, 並了解其模組開發架構. 類別與標籤 類別分為\"二甲\"、\"二乙\"、表示是各班上課內容網誌類別, 至於標籤則列出該週的主要上課內容關鍵字. 至於 \"Misc\"類別則是額外的雜項網誌內容. CAD2023 專案 電腦輔助設計與實習 如何建立機電模擬系統中的零組件(電腦輔助參數繪圖, 設計參數的應用為何?)? 如何轉檔後進入模擬場景(零組件轉出或轉進不同套件的原因為何?各種 3D 零組件格式的差異為何?)? 如何根據機電模型組合 import 進入場景的零組件(為何設計組件在 CAD 已經完成組立, 為何轉入模擬場景還需要重新進行組立?)? 場景中的開放機構與封閉機構, 分別如何建立動態模擬設定(學習如何使用 CoppeliaSim)? 場景中的零件如何簡化? 如何移動旋轉或縮放(學習如何使用 CoppeliaSim)? 如何利用磁力或撞擊力對球施力(學習如何使用 CoppeliaSim)? 感測器如何偵測物體的距離(學習如何使用 CoppeliaSim)? 鋼球受力後, 可在軌道上運動 若另有一機構可移動軌道高低與方位, 是否可以設法設計出一個投籃機構, 加上對行走出的位置控制, 建立一個投籃對陣機器裝置? 協同產品設計實習 上述從產品\"構想\"開始到可利用程式控制瀏覽器中進行模擬的場景\"虛擬產品\", 若可設定為一項產品開發到驗收成果的 lifecycle, 該如何利用協同設計的方式在 Odoo PLM 模組中紀錄此一\"產品\"生命週期的各項細節, 進而了解 PLM 系統在協同產品開發流程中的應用與價值. Q and A 問題與解答","tags":"Misc","url":"./2024-Spring-Collaborative-Product-Design.html"}]};