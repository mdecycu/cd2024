---
Title: 協同產品設計實習2a-1
Date: 2024-02-23 11:00
Category: 二甲
Tags: OnShape, CoppeliaSim, Odoo, w1
Slug: 2024-cd-2a-get-started
Author: kmol
---

2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用.

<!-- PELICAN_END_SUMMARY -->

# 2a 建個人課程倉儲
登入 github.com, 連結到 <https://github.com/mdecycu/cmsimde_site>, 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄.

<https://github.com/mdecycu/cmsimde_site> 與 <https://github.com/mdecycu/cmsite> 的差別為, 目前的 Template 將 cmsimde 當作目錄, 而非 cmsite 中的子模組.

上述[建立個人課程 cd2024 倉儲與網站的操作影片], 建立的範例網站為: <https://scrum-1.github.io/cd2024/>

[建立個人課程 cd2024 倉儲與網站的操作影片]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/ETTxsR2xBJ1Mg1Ikuz0lscEB5heQCnNRxTnzD1OPTkDPEA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=bPQk4F

# 下載可攜套件檔案

下載可攜程式環境: [portable_2024.7z] (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB)

下載 [miktex-portable.7z] (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB)

[portable_2024.7z]: http://229.cycu.org/portable_2024.7z
[miktex-portable.7z]: http://229.cycu.org/miktex-portable.7z

# 將個人倉儲 import 至 Replit
從 Replit 帳號下方的 Account, Connected Services(連線服務區) 點選 Connect 後, 讓 Github 授權 Replit, 將在 Replit 中的倉儲改版後, 有權限推回 Github. [設定 Replit 與 Github 應用授權的說明影片]

[設定 Replit 與 Github 應用授權的說明影片]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EdBPsKV-ktZOtvo4InwdSoEBAM4B239cijCPMAb1qAUAxg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=AUcZgW

在 Replit Editor(編輯器中) 使用 Ctrl + z 執行 undo

在 Replit Editor(編輯器中) 使用 Ctrl + y 執行 redo

# 設定 Github 帳號的雙重認證

[說明如何設定 Github 雙重認證], 其中手機必須先安裝 [Github Mobile], 也可以使用 [Authy App] 作為認證套件, 一旦在 Github 帳號下的 Setting 中的 Password and authentication 啟用雙重認證, 最後必須下載對應的 Recovery codes 並存入隨身碟, 而且要寄到個人的電子郵箱. 

[說明如何設定 Github 雙重認證]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EQkTC4PryY5KrohZdneAygIB1d2FCzwpl2tn8cdyG-Q8Vg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=L28Ued
[Github Mobile]: https://github.com/mobile
[Authy App]: https://authy.com/download/

# 如何 import 倉儲至 Replit 進行改版

[說明如何利用 Replit 對 cd2024 改版]

[說明如何利用 Replit 對 cd2024 改版]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EQIDGG3E8ElOjzeZrCESQzABRJ2tKiSw1T59WDa3x8FU-w?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=E6LSw5

# 設定網誌
利用 [OBS] 加上廣播系統錄製的: [如何設定個人倉儲中的 Pelican 網誌]

[如何設定個人倉儲中的 Pelican 網誌]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EZMAhRju-rdNrUxk9plOglIBMK2WcO3iL1iK11xipW48Mw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=jogiPc

# Odoo PLM 功能
[簡介 Odoo PLM 用法]

[簡介 Odoo PLM 用法]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EcZiPwkDRrRKsk1AZbIEyG0B9bbqkh5X2q_F5LZyU_T3Bw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=l78YjF

# 以上為第一週進度

# Q and A
每週問題與解答, 請轉到 <https://mde.tw/cd2024/content/Q&A.html> 發問或討論.