var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is the webpage of the  Collaborative Product Design and Practice  course in the Department of Mechanical Design Engineering, National Formosa University, Taiwan. \n MS Team code:\xa0 p0961sy  (for @nfu users only) \n Literature Review: \n Mechatronic Product Design: \n 2019.02  Collaborative design process and product knowledge methodology for mechatronic systems \n 2021.01  A process for designing innovative mechatronic products \n 2023.10  A review of digital twin technology for electromechanical products: Evolution focus throughout key lifecycle phases \n mechatronic_product_collaborative_design_papers_for_cd2024.7z  (password required to download) \n 2004_Introduction to Physical Modeling with Modelica.pdf  (password required to download) \n 行事曆 \n  全頁檢視  \n', 'tags': '', 'url': 'About.html'}, {'title': 'Tools', 'text': 'Siemens MCAD (MCAD): \n Solid Edge \n NX \n Linkage Synthesis and Simulation (Linkage): \n Pyslvs-UI \n Solvespace \n Dynamic Modeling and Simulation (Modeling): \n Bond Graphs \n Modelica \n Control System Design and Simulation (Control): \n CoppeliaSim \n Webots \n Web-based Content Management System (WCMS): \n Github \n cmsite \n Replit \n s.cycu.org \n', 'tags': '', 'url': 'Tools.html'}, {'title': 'English', 'text': '     check_dict_from_cdict_net.py  \n get_txt_from_pdf.py  \n 2004_Introduction to Physical Modeling with Modelica.pdf  (password required to download) \n words_2004_Introduction to Physical Modeling with Modelica.html \n 2019.02\xa0 Collaborative design process and product knowledge methodology for mechatronic systems \n words_Collaborative design process and product knowledge methodology for mechatronic systems.html \n 2021.01\xa0 A process for designing innovative mechatronic products \n words_A process for designing innovative mechatronic products.html \n 2023.10\xa0 A review of digital twin technology for electromechanical products: Evolution focus throughout key lifecycle phases \n words_A review of digital twin technology for electromechanical products.html \n Modelica Language Specification Version 3.5.pdf \n words_Modelica_language_spec_3.5.html \n Modelica Tutorial.pdf \n words_Modelica_tutorial.html \n \n', 'tags': '', 'url': 'English.html'}, {'title': 'MCAD', 'text': 'Siemens NX: \n Installation file:  SiemensNX-2027.3701_wntx64.zip \xa0(need password to download, size 10.7GB) \n NX2027.3401_lite_cad2022.7z \xa0(need pasword to download, size 2GB, unziped size\xa08GB) \n NX 可攜版的 user default 設定將配合啟動批次檔案中的 set UGII_LOCAL_USER_DEFAULTS=%cd%\\NX_user.dpv 將設定資料存入. \n 因此有關是否參與 Siemens Product Excellence Program 可以經由下列流程進行設定: \n File - Utilities - Customer Defaults - Gateway - General - Miscellaneous - Product Excellence Program \n 選擇是否參加後, 若可攜套件中無前述批次檔案中的 NX_user.dpv 則可透過 Manage current settings 以 Export 將設定存入 NX_user.dpv. \n 可攜 NX 啟動批次檔案中有超過四百個啟動環境變數設定, 使用者可針對實際需求進行修改後重新啟動. \n Win10_2022_nx_web_based_server.7z  (need password to download, 33GB) \n Siemens Solid Edge: \n 下載  Solid Edge Community Edition \n 下載 \xa0 \xa0可放入 USB 隨身碟可在電腦輔助設計室中使用的可攜 Solid Edge 2023 學生版 (need password to download) \n', 'tags': '', 'url': 'MCAD.html'}, {'title': 'Linkage', 'text': 'Linkage Synthesis and Simulation (Linkage): \n Pyslvs-UI: \n https://github.com/KmolYuan/Pyslvs-UI \xa0 \n Solvespace: \n solvespace/solvespace: Parametric 2d/3d CAD (github.com) \xa0 \n', 'tags': '', 'url': 'Linkage.html'}, {'title': 'Modeling', 'text': 'Bond Graphs: \n Bond Graph Modeling \n Metamodeling \n https://github.com/reduce-algebra/mtt \n https://github.com/BondGraphTools \n https://www.20sim.com/ \n download  demo  (password required to download) \n Intro to 20sim.pdf \n Conceptual design of controlled electro–mechanical systems.pdf  (2019) \n Modeling and Control of Complex Physical Systems.pdf \n words_Modeling and Control of Complex systems.html \n Mechatronics by Bond Graphs.pdf \n words_Mechatronics by Bond Graphs.html \n Modelica: \n https://openmodelica.org/ \n https://github.com/OpenModelica \n Dymola \n https://github.com/CATIA-Systems/Modelica-Arduino \n \n', 'tags': '', 'url': 'Modeling.html'}, {'title': 'Mujoco', 'text': 'For Python: \n https://mujoco.readthedocs.io/en/stable/python.html \n pip install mujoco \n hello.xml \n <mujoco>\n  <worldbody>\n        <light diffuse=".5 .5 .5" pos="0 0 3" dir="0 0 -1"/>\n    <geom type="plane" size="1 1 0.1" rgba=".9 0 0 1"/>\n    <body pos="0 0 1">\n      <joint type="free"/>\n      <geom type="box" size=".1 .2 .3" rgba="0 .9 0 1"/>\n    </body>\n  </worldbody>\n</mujoco>\n \n python   -m   mujoco.viewer   --mjcf= hello.xml \n mujoco_ex1.py \n import time\n\nimport mujoco\nimport mujoco.viewer\n\nm = mujoco.MjModel.from_xml_path(\'hello.xml\')\nd = mujoco.MjData(m)\n\nwith mujoco.viewer.launch_passive(m, d) as viewer:\n  # Close the viewer automatically after 30 wall-seconds.\n  start = time.time()\n  while viewer.is_running() and time.time() - start < 30:\n    step_start = time.time()\n\n    # mj_step can be replaced with code that also evaluates\n    # a policy and applies a control signal before stepping the physics.\n    mujoco.mj_step(m, d)\n\n    # Example modification of a viewer option: toggle contact points every two seconds.\n    with viewer.lock():\n      viewer.opt.flags[mujoco.mjtVisFlag.mjVIS_CONTACTPOINT] = int(d.time % 2)\n\n    # Pick up changes to the physics state, apply perturbations, update options from GUI.\n    viewer.sync()\n\n    # Rudimentary time keeping, will drift relative to wall clock.\n    time_until_next_step = m.opt.timestep - (time.time() - step_start)\n    if time_until_next_step > 0:\n      time.sleep(time_until_next_step) \n For C: \n https://mujoco.readthedocs.io/en/stable/overview.html \n mujoco_ex1.c \n #include "mujoco.h"\n#include "stdio.h"\n\nchar error[1000];\nmjModel* m;\nmjData* d;\n\nint main(void)\n{\n   // load model from file and check for errors\n   m = mj_loadXML("hello.xml", NULL, error, 1000);\n   if( !m )\n   {\n      printf("%s\\n", error);\n      return 1;\n   }\n\n   // make data corresponding to model\n   d = mj_makeData(m);\n\n   // run simulation for 10 seconds\n   while( d->time<10 )\n      mj_step(m, d);\n\n   // free model and data\n   mj_deleteData(d);\n   mj_deleteModel(m);\n\n   return 0;\n} \n', 'tags': '', 'url': 'Mujoco.html'}, {'title': 'Control', 'text': 'Control System Design and Simulation (Control): \n CoppeliaSim 4.5.1 rev1 for IPv6.7z \xa0 (169MB, password required to download) \n Webots_cd2024.7z \xa0 (338 MB, password required to download) \n https://cyberbotics.com/doc/reference/index \xa0 \n Making Images with Mathematics \n About CoppeliaSim and Modelical ( ref ): \n Control loops of servo motor-position & velocity control in OpenModelica, OpenModelica can provide  FMI  for model exchange, Is it possible to import this in CoppeliaSim to check the control loops? \n CoppeliaSim offers many relatively neutral interfaces that can be used to integrate or accomodate for external tools, either via\xa0 communication interfaces , either via \xa0 import/export . If the file format is relatively simple, then one can easily write an \xa0 add-on \xa0 for import/export \n The OpenModelica Integrated Modeling, Simulation and Optimization Environment.pdf \n words_TheOpenModelicaIntegratedModelingSimulationandOptimizationEnvironment.html \n Co-Simulation vs. Model-Exchange\xa0FMU \n References: \n https://www.youtube.com/@JBVCreative/playlists \n Ball return system for the basketball shooting robot \n https://github.com/topics/mouse-controller \n https://github.com/mdecycu/VisualMouse \n Modeling Mechatronic Systems Using The Sidops+ Language.pdf \n words_Modeling_Mechatronic_Systems_Using_The_Sidops_Language.html \n', 'tags': '', 'url': 'Control.html'}, {'title': 'WCMS', 'text': 'Operating Systems: \n Ubuntu2204_deaktop_vdi.7z  (need password to downlaod, size 4.5GB) \n win10_21h2.vdi  (need password to download, size 11.4GB) \n Web-based Content Management System (WCMS): \n Github:  https://github.com \n cmsite:\xa0 https://github.com/mdecycu/cmsite \xa0 \n Replit:  https://replit.com \xa0 \n s.cycu.org:  https://s.cycu.org \xa0 \n https://leo-editor.github.io/leo-editor/ \n pip install leo==6.6.4 ( for xml import ) \n @settings \n @data import-xml-tags \n @data import-html-tags \n', 'tags': '', 'url': 'WCMS.html'}, {'title': 'Portable', 'text': 'Portable packages: \n Portablegit \n SourceTree \n Putty \n Filezilla \n ShareX \n Kdiff3 \n TinyC \n MSYS2 \n Python \n ProcessExplorer \n Wink3 \n Zoomit \n OBS \n', 'tags': '', 'url': 'Portable.html'}, {'title': 'Putty', 'text': 'Putty is a free SSH client. \n Session Registry for Putty: \n 電腦\\HKEY_CURRENT_USER\\SOFTWARE\\SimonTatham \n', 'tags': '', 'url': 'Putty.html'}, {'title': 'Github', 'text': '2FA:  Two-Factor Authentication \n Github Pages:  https://pages.github.com/ \n SSH and GPG keys: \n putty:  https://www.putty.org/ \n https://github.com/Bioruebe/UniExtract2 \n ssh-keygen \n Pull Requests \n Github Classroom:  https://classroom.github.com \n \n', 'tags': '', 'url': 'Github.html'}, {'title': 'cmsimde', 'text': 'ubuntu \n 使用 cmsimde 作為網際內容管理系統的倉儲, 在 Ubuntu 伺服器中進行協同, 由於是自建主機因此可用性與 localhost 相同, 斷線機率取決於工作站室中虛擬主機的網路與電力供應是否穩定: \n 1. 利用 " sudo update-rc.d stunnel4 defaults " 將 s.cycu.org 中的 stunnel4 設為與系統同步啟動. \n 2. 當 server.py 已經啟動, 使用者登入後可以利用以下指令, 列出各使用者啟動網頁編輯所對應的 PID (Process ID): \n ps -axo pid,comm,uname | grep "python3" \n 各用戶若希望刪除已經啟動的 Process, 可以找到所啟動的 PID 後, 以下列指令關閉服務 (若 PID = 1234): \n kill 1234 \n 其中, 系統管理者可以刪除所有 Processes, 而各用戶只能刪除各自所啟動的 Process. \n 3. 假如自己所分派到的網路 port 遭到占用, 可以利用下列指令查出使用該埠號的使用者帳號: \n 例如要查詢埠號 9210 埠號的使用情形, 指令為\xa0 lsof -i :9210, 其中 ls 為 list, of 為 open file, -i 中的 i 為 internet, :9210 表示要求列出與 port 9210 有關 internet 使用相關的資料. \n', 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': '當 Edge 瀏覽器中判定 Replit 啟動 cmsite 編輯網站為不安全的釣魚網站時: \n Settings - Privacy, search and services - Security -\xa0 Microsoft Defender SmartScreen 選擇關閉 \n \n 使用下列 PyQt5 程式就能自帶瀏覽器開啟 cmsimde 內部啟動的編輯網站  https://localhost:9445 \n browser.py \n import sys\n\n\nfrom PyQt5.QtCore import QUrl\nfrom PyQt5.QtWidgets import QApplication\n\n\nfrom PyQt5.QtWebEngineWidgets import QWebEnginePage, QWebEngineView\n\n\nclass WebEnginePage(QWebEnginePage):\n    def certificateError(self, error):\n        error.ignoreCertificateError()\n        return True\n\n\ndef main(args):\n    app = QApplication(args)\n    webview = QWebEngineView()\n    page = WebEnginePage()\n    webview.setPage(page)\n    webview.load(QUrl("https://localhost:9445"))\n    webview.show()\n    sys.exit(app.exec_())\n\n\nif __name__ == "__main__":\n    main(sys.argv) \n .replit env user and email setup: \n GIT_AUTHOR_NAME = "username"\nGIT_AUTHOR_EMAIL = "email"\nGIT_COMMITTER_NAME = "username"\nGIT_COMMITTER_EMAIL = "email"\n \n /home/runner/repository_name \n /home/runner/.ssh/id_rsa \n /home/runner/.ssh/id_rsa.pub \n /home/runner/.ssh/config \n config: \n Host github.com\nUser git\nHostname github.com\n# git@github.com:github_username/repository_name.git \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Projects', 'text': 'Perpetual Motion Simulator: \n cad2023_w14.7z \xa0(password required to download) \n project1_w14_simple.7z \xa0(password required to download) \n cad2023_w14_perpetual_motion_simulator_template.py \xa0(password required to download) \n \n triangle_perpetual_motion_simulator.7z \xa0 (password required to download) \n \n Steel ball balancing platform: \n \n \n ball_beam_balancing_PID_control_coppeliasim_1d_and_2d.7z  ( password required to download) \n \n 2023 Senior Project: \n Application of Finite Element Method to Quadruped Robot Design \n https://github.com/mdecycu/pj40922 \n \n https://github.com/Xgorobot/Autonomous-Xgo-Dog-Robot-Controller \n https://github.com/Xgorobot/RaspberryPi-CM4 \n https://www.xgorobot.com/ \n \n https://downloadfree3d.com/3d-models/electronics/robot-electronics/xgo-robot/ \n xgo-roboy.zip  (password required to download) \n https://www.elecfreaks.com/elecfreaks-xgo-robot-dog-kit-v2-for-micro-bit.html \n https://wiki.elecfreaks.com/en/microbit/robot/xgo-robot-kit-v2/ \n \n \n', 'tags': '', 'url': 'Projects.html'}, {'title': 'Football', 'text': 'https://github.com/mdecd2023/2a3-pj3ag4 \n https://mdecd2023.github.io/2a3-pj3ag4 \n cd2023_pj3ag4_zmq_football4.7z  (password required to download) \n', 'tags': '', 'url': 'Football.html'}, {'title': 'Basketball', 'text': 'Single four-wheeler basketball shooting game: \n Four-wheeler design \n Top picking and shooting mechanism design \n https://github.com/Asadullah-Dal17/Yolov4-Detector-and-Distance-Estimator \xa0 ( opencv & numpy ) \n https://www.mysteinbach.ca/game-zone/1461/3d-basketball/ \n Design of a RoboCup shooting mechanism.pdf  \n Robot design handbook.pdf \n AUTOMATIC SHOOTING MECHANISMAND ROBOT HAVING THE SAME.pdf \n https://www.citruscircuits.org/bb17.html \n A METHOD TO DETECT, COLLECT AND RETRIEVE A BALL \n \n Five four-wheelers basketball game: \n \n', 'tags': '', 'url': 'Basketball.html'}, {'title': 'Golf', 'text': '\n', 'tags': '', 'url': 'Golf.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};