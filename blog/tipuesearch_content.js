var tipuesearch = {"pages":[{"title":"About","text":"2024 CD 網誌 課程倉儲: https://github.com/mdecycu/cd2024 內容管理: https://mde.tw/cd2024/ 課程投影片: https://mde.tw/cd2024/reveal 課程網誌: https://mde.tw/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"協同產品設計實習2b-1","text":"2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用. 2b 建個人課程倉儲 登入 github.com, 連結到 https://github.com/mdecycu/cmsimde_site , 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄. https://github.com/mdecycu/cmsimde_site 與 https://github.com/mdecycu/cmsite 的差別為, 目前的 Template 將 cmsimde 當作目錄, 而非 cmsite 中的子模組. 上述 建立個人課程 cd2024 倉儲與網站的操作影片 , 建立的範例網站為: https://scrum-1.github.io/cd2024/ 下載可攜套件檔案 下載可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 設定個人網誌系統 利用 https://github.com/mdecycu/cmsimde_site 建立的網站, 其動態網站資料位於 config/content.htm, 轉換完成的靜態網站資料位於 content 目錄中. 網誌的原始檔案位於 markdown 目錄, 所使用的網誌系統為 Pelican , 轉換完成的網誌內容則位於 blog 目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關的設定檔案還有: pelicanconf.py 與 publishconf.py 等. 為了順利完成上述個人課程網站的網誌設定, 必須根據各用戶所使用的 github 帳號對這三個 .py 檔案進行設定. OnShape 帳號 若網路順暢, 可以登入 https://onshape.com 利用 MKCad Library 或 VEX Part Library 零件程式庫建立產品系統模型. 可攜 NX 若要在近端建立模擬用的零組件, 可以使用可攜 NX 套件. 假如希望自行安裝, 可以下載 Installation file: SiemensNX-2027.3701_wntx64.zip (need password to download, size 10.7GB) 或直接使用可攜版本, NX2027.3401_lite_cad2022.7z (need pasword to download, size 2GB, unziped size 8GB) CoppeliaSim CoppeliaSim 4.5.1 rev1 for IPv6.7z (169MB, password required to download) 可以結合可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 進行機電系統設計與模擬. 模型簡化 為了讓機電產品能在 CoppeliaSim 動態場景中順暢模擬, 各零組件必須有效進行簡化, 此一零件簡化過程如何後續對零組件進行應力或其他動態系統分析之前, 必須先簡化零組件外型後再進行網格化的應用相同. Github 與 Replit Q and A 問題與解答","tags":"二乙","url":"./2024-cd-2b-get-started.html"},{"title":"2024 Spring CD 課程","text":"2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用. ODOO https://national-formosa-university.odoo.com 管理者為 50703199 At mde dot nfu dot tw https://github.com/odoo/odoo 直接在雲端使用 Odoo, 以及學習如何安裝 Community Odoo 版本, 並了解其模組開發架構. 類別與標籤 類別分為\"二甲\"、\"二乙\"、表示是各班上課內容網誌類別, 至於標籤則列出該週的主要上課內容關鍵字. 至於 \"Misc\"類別則是額外的雜項網誌內容. CAD2023 專案 電腦輔助設計與實習 如何建立機電模擬系統中的零組件(電腦輔助參數繪圖, 設計參數的應用為何?)? 如何轉檔後進入模擬場景(零組件轉出或轉進不同套件的原因為何?各種 3D 零組件格式的差異為何?)? 如何根據機電模型組合 import 進入場景的零組件(為何設計組件在 CAD 已經完成組立, 為何轉入模擬場景還需要重新進行組立?)? 場景中的開放機構與封閉機構, 分別如何建立動態模擬設定(學習如何使用 CoppeliaSim)? 場景中的零件如何簡化? 如何移動旋轉或縮放(學習如何使用 CoppeliaSim)? 如何利用磁力或撞擊力對球施力(學習如何使用 CoppeliaSim)? 感測器如何偵測物體的距離(學習如何使用 CoppeliaSim)? 鋼球受力後, 可在軌道上運動 若另有一機構可移動軌道高低與方位, 是否可以設法設計出一個投籃機構, 加上對行走出的位置控制, 建立一個投籃對陣機器裝置? 協同產品設計實習 上述從產品\"構想\"開始到可利用程式控制瀏覽器中進行模擬的場景\"虛擬產品\", 若可設定為一項產品開發到驗收成果的 lifecycle, 該如何利用協同設計的方式在 Odoo PLM 模組中紀錄此一\"產品\"生命週期的各項細節, 進而了解 PLM 系統在協同產品開發流程中的應用與價值. Q and A 問題與解答","tags":"Misc","url":"./2024-Spring-Collaborative-Product-Design.html"}]};