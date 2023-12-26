# Global parameters setup
repo_path = "Y:/tmp/cad2021_final"
class_name = "2a"
group_file = repo_path + "/downloads/" + class_name + "_grouping.txt"
page_head = "h2"

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
grp = []
print("<h1>" + class_name + "</h1>")
for i in range(len(grp_title)):
    # 分別列出各組組序
    grp.append(grp_title[i])
grp = sorted(grp)
#print(grp)
for i in grp:
    print("<h2>" + i + "</h2>")
