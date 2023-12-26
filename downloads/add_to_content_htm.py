from bs4 import BeautifulSoup

# ref: https://stackoverflow.com/questions/15233340/getting-rid-of-n-when-using-readlines
# ref: https://stackoverflow.com/questions/3845423/remove-empty-strings-from-a-list-of-strings

# Global parameters setup
repo_path = "Y:/tmp/cad2021_final"
class_name = "2b"
group_file = repo_path + "/downloads/" + class_name + "_grouping.txt"
page_head = "h2"

# 寫入最原始的 content.htm
# origin_html
origin_html = """<h1>About</h1>
<p>Repository: <a href="https://github.com/mdecourse/cad2021_final">https://github.com/mdecourse/cad2021_final</a></p>
<p>Github Pages: <a href="https://mde.tw/cad2021_final">https://mde.tw/cad2021_final</a></p>
<p>Discussion: <a href="https://github.com/mdecourse/cad2021_final/discussions">https://github.com/mdecourse/cad2021_final/discussions</a></p>
<p>課程網站: <a href="https://mde.tw/cad2021">https://mde.tw/cad2021</a></p>
<p>作業網站: <a href="https://mde.tw/cad2021_hw">https://mde.tw/cad2021_hw</a></p>
<p>指定 HW1: <a href="https://mde.tw/cad2021_hw/content/HW1.html">https://mde.tw/cad2021_hw/content/HW1.html</a></p>
<p style="padding-left: 30px;">2b CAD 套件分配結果: <a href="https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt">https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt</a></p>
<p style="padding-left: 30px;">2a CAD 套件分配結果: <a href="https://mde.tw/cad2021/downloads/online/2a_hw1_cad.txt">https://mde.tw/cad2021/downloads/online/2a_hw1_cad.txt</a></p>
<p>隨機從 2a 學員名單中<a href="https://mde.tw/cad2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/b11a88a98655d41055c47f08fe94788f/raw/e174db2172e2afb768f428282ac22901596c2914/cad2021_2a_random_select.py" rel="nofollow">取出 10 個網站</a>進行查核 (<a href="https://mde.tw/cad2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/b11a88a98655d41055c47f08fe94788f/raw/d3c0f7e6ff632b14e98aad9a218425e7b49be160/cad2021_2a_list.py">2a repo and www list</a>)</p>
<p>隨機從 2b 學員名單中<a href="https://mde.tw/cad2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/b11a88a98655d41055c47f08fe94788f/raw/e174db2172e2afb768f428282ac22901596c2914/cad2021_2b_random_select.py" rel="nofollow">取出 10 個網站</a>進行查核 (<a href="https://mde.tw/cad2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/b11a88a98655d41055c47f08fe94788f/raw/e174db2172e2afb768f428282ac22901596c2914/cad2021_2b_list.py">2b repo and www list</a>)</p>
<h1>Final Project</h1>
<h4 dir="auto">cad2021 Final Project</h4>
<h4 dir="auto">電腦輔助設計實習期末學習驗證與評分網站</h4>
<p dir="auto"><a href="http://mde.tw/cad2021_final" rel="nofollow">http://mde.tw/cad2021_final</a></p>
<p dir="auto">倉儲: <a href="https://github.com/mdecourse/cad2021_final">https://github.com/mdecourse/cad2021_final</a></p>
<p dir="auto">本網站自 2021.12.27 起收集各班各分組成員在本學期各項作業與期末專案所完成的成果, 並藉此進行學員的課程學期成績評分.</p>
<p dir="auto">各班之分組依據 <a href="https://mde.tw/cad2021_hw/content/W7%20%E5%88%86%E7%B5%84.html" rel="nofollow">Ｗ7 時自選組員之分組結果</a>.</p>
<h4 dir="auto">W7 分組結果:</h4>
<p dir="auto">2a 總修課人數: 56 = 7x8 表示每組 7 人, 可分為 8 組.</p>
<p dir="auto">2b 總修課人數: 66 = 7x9 + 3 表示有三組可以 8 人一組.</p>
<p dir="auto">W14 參與分組總人數:</p>
<p dir="auto">2a 修課人數: 55 人, 仍分為 8 組. H1 標題為 2a, H2 為 2ag1 ~ 2ag8, 各組員以學號為標題, 依學號遞減排列, 設為 H3 頁面, 各學員則將課程學習成果呈現在各自的 H3 頁面中, 並以 Pull Requests 方式提出拉回合併之請求.</p>
<p dir="auto">2b 修課人數: 64 人, 仍分為 9 組. H1 標題為 2b, H2 為 2bg1 ~ 2bg9, 各組員以學號為標題, 依學號遞減排列, 設為 H3 頁面, 各學員則將課程學習成果呈現在各自的 H3 頁面中, 並以 Pull Requests 方式提出拉回合併之請求.</p>
<h1>Notice</h1>
<p>各組必須先自願或推舉出一位組長與一位副組長負責成為 <a href="https://github.com/mdecourse/cad2021_final">https://github.com/mdecourse/cad2021_final</a>&nbsp; 倉儲的管理雙人組, 組長將設為期末倉儲的管理協同者, 擁有合併或拒絕 Pull Requests 的權限, 各組推選出兩位管理學員後, 請將學號登錄至 <a href="https://github.com/mdecourse/cad2021_final/discussions/2">https://github.com/mdecourse/cad2021_final/discussions/2</a></p>
<p>各學員利用 Pull Requests 將個人的期末評分內容放入本網站的流程:</p>
<ol>
<li>登入自己的 Github 帳號.</li>
<li>fork <a href="https://github.com/mdecourse/cad2021_final">https://github.com/mdecourse/cad2021_final</a> 倉儲到自己的帳號下</li>
<li>將自己帳號下的 cad2021_final&nbsp; 倉儲以 git clone --recurse-submodules url 到近端進行改版.</li>
<li>改版後, 在自己帳號下對 cad2021_final 倉儲提交並推送新版本後, 必須在自季的 cad2021_final 倉儲處建立 Pull Request 後, 請組長與副組長查驗合併後內容無誤後, 且合併至主倉儲與 <a href="https://mde.tw/cad2021_final">https://mde.tw/cad2021_final</a> 網頁中.</li>
<li>若各組員進行 fork 後, <a href="https://github.com/mdecourse/cad2021_final">https://github.com/mdecourse/cad2021_final</a> 倉儲已經被其他組員多次改版, 則該組員必須採用反向 Pull Requests, 將自己帳號下的 cad2021_final 倉儲的版本儘量接近之後處理 Pull Requests 時的 cad2021_final 倉儲版本, 以降低各組組員最後進行 Pull Requests 合併時處理衝突的難度.</li>
<li>各組組長與副組長接到組員已經完成特定階段新增的 Pull Requests 後, 必須設法將其版本內容合併至期末評分網站中.</li>
</ol>
<h1>2a</h1>
<h2>2ag1</h2>
<h2>2ag2</h2>
<h2>2ag3</h2>
<h2>2ag4</h2>
<h2>2ag5</h2>
<h2>2ag6</h2>
<h2>2ag7</h2>
<h1>2b</h1>
<h2>2bg1</h2>
<h2>2bg2</h2>
<h2>2bg3</h2>
<h2>2bg4</h2>
<h2>2bg5</h2>
<h2>2bg6</h2>
<h2>2bg7</h2>
<h2>2bg8</h2>
"""

'''
# 起始讀 a 班時從上述 html 寫入 content.htm
# 但是讀 b 班資料時則須蓋掉, 以現存 content.htm 為主
file_location = repo_path + "/config/content.htm"
# 將動態網頁檔案內容讀出, 存入 data 變數區
with open(file_location, "w", encoding="utf-8") as f:
    f.write(origin_html)
'''

def get_html(grp_title, student_id):

    '''根據學號, 從 downloads 目錄取出該學員的期末報告網頁 
    '''
    # repo_path from config setup
    # grp_title and student_id as input paramenters
    html_location = repo_path + "/downloads/" + student_id + "_html.txt"
    # consider no file on html_location
    try:
        with open(html_location, "r", encoding="utf-8") as f:
            student_html = f.read()
        # get student_html
        #print(student_html)
        # 動態網頁檔案所在路徑
        file_location = repo_path + "/config/content.htm"
        # 將動態網頁檔案內容讀出, 存入 data 變數區
        with open(file_location, "r", encoding="utf-8") as f:
            data = f.read()
        # get current content.htm data
        #print(data)
        # 利用 data 建立 soup
        soup = BeautifulSoup(data, "lxml")
        # 利用 student_html 建立 soup
        soup2 = BeautifulSoup(student_html, "lxml")
        # 插入的 student_html 會多出 <html><body></body></html>
        # 最後存檔前必須移除
        for i in soup.find_all(page_head):
            if i.text == grp_title:
                # 取 soup2 中的 tag
                for j in soup2:
                # 在 soup 中對應 <h2>1ag1</h2> tag 之後插入 j tag
                    i.insert_after(j)
        output = str(soup)
        #print(output)
        output = output.replace("<html><body>", "")
        output = output.replace("</body></html>", "")
        output = output.replace("// <![CDATA[", "")
        output = output.replace("// ]]>", "")
        #output = output.replace("&gt;", "")
        output = output.replace("<p></p>", "")
        return output
    except:
        #print("no file found for " + str(student_id))
        return ""

'''設法讀出各班各組學員學號資料
'''
with open(group_file, encoding="utf-8") as f:
    data = f.read().splitlines()
data = list(filter(None, data))
#print(data)
grp_count = 0
grp_title = []
grp_mem = []
grp_big = []
for i in data:
    if class_name in i:
        mem_count = 0
        grp_count += 1
        grp = i
        # 納入各組組序標題
        grp_title.append(i)
        # 若 grp_mem 有值, 表示已經讀完各組學員名單
        # 就可以將該組全員名單納入 grp_big 數列中
        # 然後 grp_mem 重新設為空數列, 準備納入下一組員名單
        if len(grp_mem) > 1:
            grp_big.append(grp_mem)
            grp_mem = []
        #print("組別:", grp_count, grp)
    else:
        # 讀完各組組序標題後, 將逐一將組員名單納入 grp_mem 數列中
        grp_mem.append(i)
        mem_count += 1
        student_id = i
        #print("學員:", mem_count, student_id)
# 離開組序標題後, 必須納入最後一組學員名單
grp_big.append(grp_mem)
# 查驗是否正確讀入各班組員名單
#print(grp_title, grp_big)
for i in range(len(grp_title)):
    # 分別讀出各組組序與排序後的組員學號
    #print(grp_title[i], sorted(grp_big[i]))
    stud_list = sorted(grp_big[i])
    # j is student id for each member
    for j in stud_list:
        content = get_html(grp_title[i], j)
        if content != "":
            print(j)
            #print(content)
            file_location = repo_path + "/config/content.htm"
            with open(file_location, "w", encoding="utf-8") as f:
                f.write(content)
