---
Title: 協同產品設計實習2b-1
Date: 2024-02-22 11:00
Category: 二乙
Tags: OnShape, CoppeliaSim, Odoo, w1
Slug: 2024-cd-2b-get-started
Author: kmol
---

2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用.

<!-- PELICAN_END_SUMMARY -->

# 建個人課程倉儲
登入 github.com, 連結到 <https://github.com/mdecycu/cmsimde_site>, 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄.

<https://github.com/mdecycu/cmsimde_site> 與 <https://github.com/mdecycu/cmsite> 的差別為, 目前的 Template 將 cmsimde 當作目錄, 而非 cmsite 中的子模組.

上述[建立個人課程 cd2024 倉儲與網站的操作影片], 建立的範例網站為: <https://scrum-1.github.io/cd2024/>

[建立個人課程 cd2024 倉儲與網站的操作影片]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/ETTxsR2xBJ1Mg1Ikuz0lscEB5heQCnNRxTnzD1OPTkDPEA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=bPQk4F

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

# Github 與 Replit

# Q and A
問題與解答
