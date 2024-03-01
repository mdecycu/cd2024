---
Title: 協同產品設計實習2b-3
Date: 2024-03-07 11:00
Category: 2b
Tags: odoo, codespaces, w3
Slug: 2024-cd-2b-w3
Author: kmol
---

2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動專題一的製作.

<!-- PELICAN_END_SUMMARY -->

# 有關 Codespaces 使用

由於 Github Codespaces 免費帳號目前每月[可以使用 120 core hours], 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours.

[可以使用 120 core hours]: https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces

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
