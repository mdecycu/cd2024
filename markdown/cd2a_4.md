---
Title: 協同產品設計實習2a-4
Date: 2024-03-15 11:00
Category: 2a
Tags: odoo, Source Tree, w4
Slug: 2024-cd-2a-w4
Author: kmol
---

協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時若導入 Source Tree 協助各組員更清楚看到倉儲改版架構, 另外 Git Branch 的應用.

<!-- PELICAN_END_SUMMARY -->

# 教學影片分組整理並自評
假如你好奇這個概念哪裡來的: 請參考

[反思一](https://github.com/mdecycu/cd2024/discussions/2) and [反思二](https://github.com/mdecycu/mdecycu.github.io/discussions/3), 對於事不關己或者不明白為何團隊中的成員 (這裡指教與學的相關人、事與物), 總讓人提不起興趣, 但若能在過程中找到主要在乎的角色、任務或者緣由, 或許就能從應付著手, 一直到終於了解天下沒有白吃的午餐, 所有的努力付出, 終究不會白費. 

此外, 假如想參考先前學長推甄研究所的相關資訊, 請利用 Team code: n9k585c 進入自行查看.

## w4 2a 分組任務
請各組自行搜尋前面已經發布的教學影片, 分別

- 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上
- 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排
- 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點

# Github 個人與分組倉儲的維護方式
個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 "-" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次.

各組員與分組倉儲的資料, 包括文字資料 (含 LaTeX 報告章節資料)、零組件檔案、零件工程圖或組立圖檔 (含 BOM 與爆炸圖), 以及目前正在整理的教學影片, 或者是各學員將操作流程錄製成的影片或 Wink 資料.

## 第一種介紹的倉儲維護方式 - Replit
有關 Replit 的開發歷史, 可以參考[這裡](https://mdecd2024.github.io/test-ag1/content/AI.html)與 ChatGPT 的對話內容.

Replit 目前所提供的免費帳號, 雖然沒有太多的運算資源, 但並沒有使用時間的限制, 因此若能利用 python3 main.py 執行動態網站, 而且利用 python3 main2.py 執行靜態網站, 只要區分開動態網站與靜態網站的使用, 就可以順利在 Replit 上維護個人與分組的網站內容.

下載 [main2.txt](https://mde.tw/wcm2024/downloads/main2.txt) 與 [static.txt](https://mde.tw/wcm2024/downloads/static.txt), 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. 

說明[如何在 Replit 檢視靜態網站]教學影片

說明[如何下載 replit_main2.7z 並在倉儲中建立兩個檔案]教學影片

[如何在 Replit 檢視靜態網站]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/ERnjR87AyRpCnxB2Md2BWKAB7UyHg1FbBl0lDn8MFS19Cg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=z4WWL6

[如何下載 replit_main2.7z 並在倉儲中建立兩個檔案]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EbuB_eNbGMlErR95cQtPz9gBnFGL_lJtBtS1EXJ_OMUcuA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=7SfxEM

使用 Replit 維護個人網站時, 可以在登入 Github 後, 連線到 Replit 取得雙方認證, import 個人 cd2024 倉儲後, 經過改版就可以將資料推向 Github.

但目前免費 Replit 帳號僅允許開啟一個 Web server 埠號之外, 並無法將一個 Replit 延伸授權至兩個 Github 帳號, 因此若在個人的 Replit 帳號中 import 分組網站, 必須自行設定與 Github 帳號的推送授權, 也就是利用帳號下的 token 或 OpenSSH keys 設定.

首先考量在 Replit 導入的倉儲使用 token 是否可行, 答案是: 不可, 原因是: 任何人只要透過 <https://replit.com/@wcms/cd2024?v=1#.git/config> 就可以看到免費帳號下的任一個倉儲的 .git/config, 若其中帶有個人帳號授權的 token, 任何人都能用來對此倉儲進行改版.

因此剩下的方案就是採用 OpenSSH 的 keys 設定, 在各自的 /home/runner/.ssh 中配置 config 與 id_rsa, 並將 id_rsa 對應的公鑰登錄到 Github 帳號下.

其中由於 Replit 與 Github 都支援 IPv4 網路協定, 因此 config 設定為:

<pre class="brush: jscript">
Host github.com
User git
Hostname github.com
</pre>

上述 config 設定檔案表示, Host 名稱即為 Windows 環境使用 Putty 設定時的 session 名稱, 因此 <https://replit.com/@wcms/cd2024?v=1#.git/config 若採用 OpenSSH 協定對 Github 連線, 則必須將原本的:

<pre class="brush: jscript">
[remote "origin"]
url = https://github.com/mdecycu/cd2024
fetch = +refs/heads/*:refs/remotes/origin/*
</pre>

改為:

<pre class="brush: jscript">
[remote "origin"]
url = git@github.com:mdecycu/cd2024
fetch = +refs/heads/*:refs/remotes/origin/*
</pre>

上列的 "url = git@github.com:mdecycu/cd2024" 表示將透過 SSH (Secure SHell) 協定, 使用 git 作為遠端登入的帳號, 並且根據 config 中的 Host 設定做為代表字串, 連線到 Hostname, 也就是 github.com, 登入後, 利用 id_rsa 與 ":" 後的 mdecycu 帳號下的 OpenSSH 登錄的 public keys 進行比對, 若吻合, 則可以授權對旗下的 cd2024 倉儲進行改版.

只不過 Replit 免費帳號下的 /home/runner/.ssh 會在每次雲端系統整理的時候被系統刪除 (原因不明, 有可能是用來區分付費帳號與免費帳號的使用權限), 但是在系統刪除此一授權的區間, Replit 免費帳號使用者可以透過將設定在 /home/runner/.ssh 目錄下的 config 與 id_rsa 下載到 USB 隨身碟, 一旦發現分組倉儲下的授權被系統移除後, 再利用動態網站將 config.txt 與 id_rsa.txt (因為內建的網站允許 .txt 檔案上傳) 傳到 downloads 目錄下, 然後再利用 python3 ssh.py 將此兩個授權資料放到正確的 /home/runner/.ssh 目錄下, 並設定正確的 id_rsa 檔案存取權限 (必須移除 other 與 group 的 rwx 權限)

上述用來搬遷 (move) config.txt 與 id_rsa.txt, 並設定 id_rsa 檔案屬性的 ssh.py 程式如下:

<pre class="brush: python">
import os
if not os.path.exists("/home/runner/.ssh"): 
    os.makedirs("/home/runner/.ssh") 
os.system("mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa")
os.system("mv ./downloads/config.txt /home/runner/.ssh/config")
os.system("chmod og-rwx /home/runner/.ssh/id_rsa")
</pre>

其中的 os 模組導入後, 可以利用 os.system() 執行系統指令, 且最前面的 if 迴圈可以檢查是否存在 .ssh 目錄, 若已經被系統刪除, 可以透過 os.makedirs 建立此一目錄.