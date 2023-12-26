import os
import re
from bs4 import BeautifulSoup

repo_path = "./../"
config_dir = repo_path + "/config/"
class Init(object):
    site_title = "2021 電腦輔助設計實習課程期末評分網站"
def file_get_contents(filename):

    """Return filename content
    """

    # open file in utf-8 and return file content
    with open(filename, encoding="utf-8") as file:
        return file.read()

def _remove_h123_attrs(soup):

    """Remove h1-h3 tag attribute
    """

    tag_order = 0
    for tag in soup.find_all(['h1', 'h2', 'h3']):
        # 假如標註內容沒有字串
        #if len(tag.text) == 0:
        if len(tag.contents) ==0:
            # 且該標註為排序第一
            if tag_order == 0:
                tag.string = "First"
            else:
          # 若該標註非排序第一, 則移除無內容的標題標註
                tag.extract()
        # 針對單一元件的標題標註
        elif len(tag.contents) == 1:
            # 若內容非為純文字, 表示內容為其他標註物件
            if tag.get_text() == "":
                # 且該標註為排序第一
                if tag_order == 0:
                    # 在最前方插入標題
                    tag.insert_before(soup.new_tag('h1', 'First'))
                else:
                    # 移除 h1, h2 或 h3 標註, 只留下內容
                    tag.replaceWithChildren()
            # 表示單一元件的標題標註, 且標題為單一字串者
            else:
                # 判定若其排序第一, 則將 tag.name 為 h2 或 h3 者換為 h1
                if tag_order == 0:
                    tag.name = "h1"
            # 針對其餘單一字串內容的標註, 則保持原樣
        # 針對內容一個以上的標題標註
        #elif len(tag.contents) > 1:
        else:
            # 假如該標註內容長度大於 1
            # 且該標註為排序第一
            if tag_order == 0:
                # 先移除 h1, h2 或 h3 標註, 只留下內容
                #tag.replaceWithChildren()
                # 在最前方插入標題
                tag.insert_before(soup.new_tag('h1', 'First'))
            else:
                # 只保留標題內容,  去除 h1, h2 或 h3 標註
                # 為了與前面的內文區隔, 先在最前面插入 br 標註
                tag.insert_before(soup.new_tag('br'))
                # 再移除非排序第一的 h1, h2 或 h3 標註, 只留下內容
                tag.replaceWithChildren()
        tag_order = tag_order + 1

    return soup


def parse_content():

    """Use bs4 and re module functions to parse content.htm
    """

    # if no content.htm, generate a head 1 and content 1 file
    if not os.path.isfile(config_dir+"content.htm"):
        return "Error: no content.htm"
        '''
        # create content.htm if there is no content.htm
        with open(config_dir + "content.htm", "w", encoding="utf-8") as f:
            f.write("<h1>head 1</h1>content 1")
        '''
    subject = file_get_contents(config_dir+"content.htm")
    # deal with content without content
    if subject == "":
        return "Error: no data in content.htm"

    # initialize the return lists
    head_list = []
    level_list = []
    page_list = []
    # make the soup out of the html content
    soup = BeautifulSoup(subject, 'html.parser')
    # 嘗試解讀各種情況下的標題
    soup = _remove_h123_attrs(soup)
    # 改寫 content.htm 後重新取 subject
    with open(config_dir + "content.htm", "wb") as f:
        f.write(soup.encode("utf-8"))
    subject = file_get_contents(config_dir+"content.htm")
    # get all h1, h2, h3 tags into list
    htag= soup.find_all(['h1', 'h2', 'h3'])
    n = len(htag)
    # get the page content to split subject using each h tag
    temp_data = subject.split(str(htag[0]))
    if len(temp_data) > 2:
        subject = str(htag[0]).join(temp_data[1:])
    else:
        subject = temp_data[1]
    if n >1:
            # i from 1 to i-1
            for i in range(1, len(htag)):
                head_list.append(htag[i-1].text.strip())
                # use name attribute of h* tag to get h1, h2 or h3
                # the number of h1, h2 or h3 is the level of page menu
                level_list.append(htag[i-1].name[1])
                temp_data = subject.split(str(htag[i]))
                if len(temp_data) > 2:
                    subject = str(htag[i]).join(temp_data[1:])
                else:
                    subject = temp_data[1]
                # cut the other page content out of htag from 1 to i-1
                cut = temp_data[0]
                # add the page content
                page_list.append(cut)
    # last i
    # add the last page title
    head_list.append(htag[n-1].text.strip())
    # add the last level
    level_list.append(htag[n-1].name[1])
    temp_data = subject.split(str(htag[n-1]))
    # the last subject
    subject = temp_data[0]
    # cut the last page content out
    cut = temp_data[0]
    # the last page content
    page_list.append(cut)
    return head_list, level_list, page_list


def render_menu2(head, level, page, sitemap=0):

    """Render menu for static site
    """

    directory = '''
    <div class="site-wrap">

    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

            <header class="site-navbar py-4 bg-white" role="banner">
              <div class="container-fluid">
                <div class="row align-items-center">
                <h1>''' + Init.site_title + '''</h1>
                <div class="pl-4">
                    <form>
                    <input type="text" placeholder="Search" name="q" id="tipue_search_input" pattern=".{2,}" title="At least 2 characters" required>
                    </form>
                </div>
                  <!-- <div class="col-11 col-xl-2">
                    <h1 class="mb-0 site-logo"><a href="index.html" class="text-black h2 mb-0">''' + Init.site_title + '''</a></h1> 
                  </div>
                  -->
                  <div class="col-12 col-md-10 d-none d-xl-block">
                    <nav class="site-navigation position-relative text-right" role="navigation">
    '''

    # 從 level 數列第一個元素作為開端, 第一個一定非 level 1 不可
    current_level = level[0]
    # 若是 sitemap 則僅列出樹狀架構而沒有套用 css3menu 架構
    if sitemap:
        directory += '''<ul>
<li>
<form>
<div class="tipue_search_group">
<input type="text" name="q" id="tipue_search_input" pattern=".{2,}" title="At least 2 characters" required><button type="submit" class="tipue_search_button"><div class="tipue_search_icon">&#9906;</div></button>
</div>
</form>
</li>
        '''
    else:
        directory += '''<ul class='site-menu js-clone-nav mr-auto d-none d-lg-block'>'''
    # 納入主頁與表單
    directory += '''
                        <li class="active has-children"><a href="index.html">Home</a>
                        <ul class="dropdown">
                            <li><a href="sitemap.html">Site Map</a></li>
                            <li><a href="./../reveal/index.html">reveal</a></li>
                            <li><a href="./../blog/index.html">blog</a></li>
                        </ul>
                      </li>
                     '''
    # 逐一配合 level 數列中的各標題階次, 一一建立對應的表單或 sitemap
    for index in range(len(head)):
        # 用 this_level 取出迴圈中逐一處理的頁面對應層級, 注意取出值為 str
        this_level = level[index]
        # 若處理中的層級比上一層級高超過一層, 則將處理層級升級 (處理 h1 後直接接 h3 情況)
        if (int(this_level) - int(current_level)) > 1:
            #this_level = str(int(this_level) - 1)
            # 考慮若納入 h4 也作為標題標註, 相鄰層級可能大於一層, 因此直接用上一層級 + 1
            this_level = str(int(current_level) + 1)
        # 若處理的階次比目前已經處理的階次大, 表示位階較低
        # 其實當 level[0] 完全不會報告此一區塊
        # 從正在處理的標題階次與前一個元素比對, 若階次低, 則要加入另一區段的 unordered list 標頭
        # 兩者皆為 str 會轉為整數後比較
        # 目前的位階在上一個標題之後
        if this_level > current_level:
            directory += "<ul class='dropdown'>"
            # 是否加上 class=has-children, 視下一個而定
            # 目前處理的標題, 並不是最後一個, 因此有下一個標題待處理
            if index < (len(head)-1):
                next_level = level[index+1]
                if this_level < next_level:
                    # 表示要加上 class=dropdown
                    directory += "<li class='has-children'><a href='" + head[index] + ".html'>" + head[index] + "</a>"
                else:
                    directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
            else:
                #表示為最後一個
                directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
        # 假如正在處理的標題與前一個元素同位階, 則必須再判定是否為另一個 h1 的樹狀頭
        # 目前標題與上一個標題相同
        elif this_level == current_level:
            # 是否加上 class=has-children, 視下一個而定
            # 目前處理的標題, 並不是最後一個, 因此有下一個標題待處理
            if index < (len(head)-1):
                next_level = level[index+1]
                if this_level < next_level:
                    # 表示要加上 class=dropdown
                    directory += "<li class='has-children'><a href='" + head[index] + ".html'>" + head[index] + "</a>"
                else:
                    directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
            else:
                #表示為最後一個
                directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
        # 假如正處理的元素比上一個元素位階更高, 必須要先關掉前面的低位階區段
        else:
            directory += "</li>"*(int(current_level) - int(level[index]))
            directory += "</ul>"*(int(current_level) - int(level[index]))
            if index < (len(head)-1):
                next_level = level[index+1]
                if this_level < next_level:
                    # 表示要加上 class=dropdown
                    directory += "<li class='has-children'><a href='" + head[index] + ".html'>" + head[index] + "</a>"
                else:
                    directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
            else:
                #表示為最後一個
                directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
        current_level = this_level
    directory += '''</li>
                      </ul>
                </nav>
              </div>
              <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>
              </div>

            </div>
          </div>

        </header>
    '''
    return directory


def render_menu3(head, level, page, sitemap=0):

    """Render menu for static sitemap
    """

    directory = ""
    current_level = level[0]
    if sitemap:
        directory += "<ul>"
    else:
        # before add tipue search function
        #directory += "<ul id='css3menu1' class='topmenu'>"
        directory += "<ul id='css3menu1' class='topmenu'><div class=\"tipue_search_group\"><input style=\"width: 6vw;\" type=\"text\" name=\"q\" id=\"tipue_search_input\" pattern=\".{2,}\" title=\"Press enter key to search\" required></div>"
    for index in range(len(head)):
        this_level = level[index]
        # 若處理中的層級比上一層級高超過一層, 則將處理層級升級 (處理 h1 後直接接 h3 情況)
        if (int(this_level) - int(current_level)) > 1:
            #this_level = str(int(this_level) - 1)
            this_level = str(int(current_level) + 1)
        if this_level > current_level:
            directory += "<ul>"
            #directory += "<li><a href='/get_page/"+head[index]+"'>"+head[index]+"</a>"
            # 改為連結到 content/標題.html
            directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
        elif this_level == current_level:
            if this_level == 1:
                if sitemap:
                    # 改為連結到 content/標題.html
                    #directory += "<li><a href='/get_page/"+head[index]+"'>"+head[index]+"</a>"
                    directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
                else:
                    #directory += "<li class='topmenu'><a href='/get_page/"+head[index]+"'>"+head[index]+"</a>"
                    directory += "<li class='topmenu'><a href='content/" + head[index] + ".html'>" + head[index] + "</a>"
            else:
                #directory += "<li><a href='/get_page/"+head[index]+"'>"+head[index]+"</a>"
                directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
        else:
            directory += "</li>"*(int(current_level) - int(level[index]))
            directory += "</ul>"*(int(current_level) - int(level[index]))
            if this_level == 1:
                if sitemap:
                    #directory += "<li><a href='/get_page/"+head[index]+"'>"+head[index]+"</a>"
                    directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
                else:
                    #directory += "<li class='topmenu'><a href='/get_page/"+head[index]+"'>"+head[index]+"</a>"
                    directory += "<li class='topmenu'><a href='" + head[index] + ".html'>" + head[index] + "</a>"
            else:
                #directory += "<li><a href='/get_page/"+head[index]+"'>"+head[index]+"</a>"
                directory += "<li><a href='" + head[index] + ".html'>" + head[index] + "</a>"
        current_level = this_level
    directory += "</li></ul>"
    return directory


def search_content(head, page, search):

    """Search content
    """

    find = lambda searchList, elem: [[i for i, x in enumerate(searchList) if x == e] for e in elem]
    search_result = find(head, [search])[0]
    page_order = []
    page_content = []
    for i in range(len(search_result)):
        # 印出次序
        page_order.append(search_result[i])
        # 標題為 head[search_result[i]]
        #  頁面內容則為 page[search_result[i]]
        page_content.append(page[search_result[i]])
        # 從 page[次序] 印出頁面內容
    # 準備傳回 page_order 與 page_content 等兩個數列
    return page_order, page_content


def sitemap2(head):

    """Sitemap for static content generation
    """

    edit = 0
    not_used_head, level, page = parse_content()
    directory = render_menu2(head, level, page)
    # 先改為使用 render_menu3 而非 render_menu2
    sitemap = render_menu3(head, level, page, sitemap=1)
    # add tipue search id
    return set_css2() + "<div class='container-fluid'><nav>" + directory + \
             "</nav><section><h1>Site Map</h1><div id=\"tipue_search_content\"></div>" + sitemap + \
             "</section></div></body></html>"


def syntaxhighlight():

    """Return syntaxhighlight needed scripts
    """

    return '''
<script type="text/javascript" src="/static/syntaxhighlighter/shCore.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushBash.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushDiff.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushJScript.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushJava.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushPython.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushSql.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushHaxe.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushXml.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushPhp.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushPowerShell.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushLua.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushCpp.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushCss.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushCSharp.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushDart.js"></script>
<script type="text/javascript" src="/static/syntaxhighlighter/shBrushRust.js"></script>
<link type="text/css" rel="stylesheet" href="/static/syntaxhighlighter/css/shCoreDefault.css"/>
<script type="text/javascript">SyntaxHighlighter.all();</script>
<!-- 暫時不用
<script src="/static/fengari-web.js"></script>
<script type="text/javascript" src="/static/Cango-13v08-min.js"></script>
<script type="text/javascript" src="/static/CangoAxes-4v01-min.js"></script>
<script type="text/javascript" src="/static/gearUtils-05.js"></script>
-->
<!-- for Brython 暫時不用
<script src="https://scrum-3.github.io/web/brython/brython.js"></script>
<script src="https://scrum-3.github.io/web/brython/brython_stdlib.js"></script>
-->
<style>
img.add_border {
    border: 3px solid blue;
}
</style>
'''


def syntaxhighlight2():

    """Return syntaxhighlight for static pages
    """

    return '''
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shCore.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushBash.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushDiff.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushJScript.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushJava.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushPython.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushSql.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushHaxe.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushXml.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushPhp.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushPowerShell.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushLua.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushCpp.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushCss.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushCSharp.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushDart.js"></script>
<script type="text/javascript" src="./../cmsimde/static/syntaxhighlighter/shBrushRust.js"></script>
<link type="text/css" rel="stylesheet" href="./../cmsimde/static/syntaxhighlighter/css/shCoreDefault.css"/>
<script type="text/javascript">SyntaxHighlighter.all();</script>
<!-- 暫時不用
<script src="./../cmsimde/static/fengari-web.js"></script>
<script type="text/javascript" src="./../cmsimde/static/Cango-13v08-min.js"></script>
<script type="text/javascript" src="./../cmsimde/static/CangoAxes-4v01-min.js"></script>
<script type="text/javascript" src="./../cmsimde/static/gearUtils-05.js"></script>
-->
<!-- for Brython 暫時不用
<script src="https://scrum-3.github.io/web/brython/brython.js"></script>
<script src="https://scrum-3.github.io/web/brython/brython_stdlib.js"></script>
-->
<style>
img.add_border {
    border: 3px solid blue;
}
</style>
'''


def set_css2():

    """Set css for static site
    """

    static_head = '''
        <head>
        <title>''' + Init.site_title + '''</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700,900" rel="stylesheet">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/fonts/icomoon/style.css">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/css/bootstrap.min.css">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/css/magnific-popup.css">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/css/jquery-ui.css">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/css/owl.carousel.min.css">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/css/owl.theme.default.min.css">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/css/bootstrap-datepicker.css">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/fonts/flaticon/font/flaticon.css">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/css/aos.css">
        <link rel="stylesheet" href="./../cmsimde/static/chimper/css/style.css">
        <link rel="shortcut icon" href="./../cmsimde/static/favicons.png">

        <style type='text/css'>
            .site-section {
            background-color: #FFFF;
            padding: 40px 40px;
            }
            body > div > div.dropdown.open {
                display: block;
            }
        </style>
    '''
    outstring = '''<!DOCTYPE html><html>''' + static_head + '''
        <!-- <script src="./../cmsimde/static/jquery.js"></script> -->
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
        <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>
        <link rel="stylesheet" href="./../cmsimde/static/tipuesearch/css/normalize.min.css">
        <script src="./../cmsimde/static/tipuesearch/tipuesearch_set.js"></script>
        <script src="tipuesearch_content.js"></script>
        <link rel="stylesheet" href="./../cmsimde/static/tipuesearch/css/tipuesearch.css">
        <script src="./../cmsimde/static/tipuesearch/tipuesearch.js"></script>
        <!-- for Wink3 -->
        <link rel="stylesheet" type="text/css" href="./../cmsimde/static/winkPlayer.css" />
        <script type="text/javascript" src="./../cmsimde/static/winkPlayer.js"></script>
        <script>
            /* original tipuesearch
            $(document).ready(function() {
                 $('#tipue_search_input').tipuesearch();
            });
            */
            // customed doSearch
            function doSearch() {
                $('#tipue_search_input').tipuesearch({
                    newWindow: true, 
                    minimumLength: 2,
                    wholeWords: false, // for search 中文
                });
            }
            $(document).ready(doSearch);
        </script>
        ''' + syntaxhighlight2()

    outstring += '''
</head>
<body>
'''
    return outstring


def checkMath():

    """Use LaTeX Equation rendering
    """
    outstring = '''
<!-- 啟用 LaTeX equations 編輯 -->
  <!-- <script>
  MathJax = {
    tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]}
  };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>-->
    '''
    return outstring


def get_page2(heading, head, edit, get_page_content = None):

    """Get page content and replace certain string for static site
    """

    not_used_head, level, page = parse_content()
    # 直接在此將 /images/ 換為 ./../images/, /downloads/ 換為 ./../downloads/, 以 content 為基準的相對目錄設定

    page = [w.replace('src="/images/', 'src="./../images/') for w in page]
    page = [w.replace('href="/downloads/', 'href="./../downloads/') for w in page]
    # 假如有 src="/static/ace/ 則換為 src="./../static/ace/
    page = [w.replace('src="/static/', 'src="./../cmsimde/static/') for w in page]
    # 假如有 src=/downloads 則換為 src=./../../downloads
    page = [w.replace('src="/downloads', 'src="./../downloads') for w in page]
    # 假如有 pythonpath:['/static/' 則換為 ./../cmsimde/static/
    page = [w.replace("pythonpath:['/static/'", "pythonpath:['./../cmsimde/static/'") for w in page]
    # 針對 wink3 假如有 data-dirname="/static" 換為 data-dirname="./../cmsimde/static"
    page = [w.replace("data-dirname=\"/static\"", "data-dirname=\"./../cmsimde/static\"") for w in page]
    # 假如有 /get_page 則需額外使用 regex 進行字串代換, 表示要在靜態網頁直接取網頁 (尚未完成)
    #page = [w.replace('/get_page', '') for w in page]

    directory = render_menu2(head, level, page)
    if heading is None:
        heading = head[0]
    # 因為同一 heading 可能有多頁, 因此不可使用 head.index(heading) 搜尋 page_order
    page_order_list, page_content_list = search_content(head, page, heading)
    if get_page_content != None:
        get_page_content.extend(page_content_list)
    return_content = ""
    pagedata = ""
    outstring = ""
    outstring_duplicate = ""
    pagedata_duplicate = ""
    outstring_list = []
    for i in range(len(page_order_list)):
        page_order = page_order_list[i]
        if page_order == 0:
            last_page = ""
        else:
            #last_page = head[page_order-1]+ " << <a href='/get_page/" + head[page_order-1] + "'>Previous</a>"
            last_page = head[page_order-1] + " << <a href='"+head[page_order-1] + ".html'>Previous</a>"
        if page_order == len(head) - 1:
            # no next page
            next_page = ""
        else:
            #next_page = "<a href='/get_page/"+head[page_order+1] + "'>Next</a> >> " + head[page_order+1]
            next_page = "<a href='" + head[page_order+1] + ".html'>Next</a> >> " + head[page_order+1]
        if len(page_order_list) > 1:
            return_content += last_page + " " + next_page + "<br /><h1>" + \
                                      heading + "</h1>" + page_content_list[i] + \
                                      "<br />" + last_page + " "+ next_page + "<br /><hr>"
            pagedata_duplicate = "<h"+level[page_order] + ">" + heading + "</h" + level[page_order]+">"+page_content_list[i]
        else:
            return_content += last_page + " " + next_page + "<br /><h1>" + \
                                      heading + "</h1>" + page_content_list[i] + \
                                      "<br />" + last_page + " " + next_page

        pagedata += "<h" + level[page_order] + ">" + heading + \
                          "</h" + level[page_order] + ">" + page_content_list[i]

    # edit=0 for viewpage
    if edit == 0:
        return set_css2() + '''<div class='container-fluid'><nav>
        '''+ \
        directory + "<div id=\"tipue_search_content\">" + return_content + \
        '''</div>

    <!-- footer -->
      <div class="container">
        <div class="row pt-3 mx-auto">
            <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
        </div>
      </div>
    <!-- for footer -->

        </div> <!-- for site wrap -->
            <!-- <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script> -->
            <script src="../cmsimde/static/chimper/js/jquery-migrate-3.0.1.min.js"></script>
            <script src="../cmsimde/static/chimper/js/jquery-ui.js"></script>
            <script src="../cmsimde/static/chimper/js/popper.min.js"></script>
            <script src="../cmsimde/static/chimper/js/bootstrap.min.js"></script>
            <script src="../cmsimde/static/chimper/js/owl.carousel.min.js"></script>
            <script src="../cmsimde/static/chimper/js/jquery.stellar.min.js"></script>
            <script src="../cmsimde/static/chimper/js/jquery.countdown.min.js"></script>
            <script src="../cmsimde/static/chimper/js/jquery.magnific-popup.min.js"></script>
            <script src="../cmsimde/static/chimper/js/bootstrap-datepicker.min.js"></script>
            <script src="../cmsimde/static/chimper/js/aos.js"></script>
            <!--
            <script src="../cmsimde/static/chimper/js/typed.js"></script>
                    <script>
                    var typed = new Typed('.typed-words', {
                    strings: ["Web Apps"," WordPress"," Mobile Apps"],
                    typeSpeed: 80,
                    backSpeed: 80,
                    backDelay: 4000,
                    startDelay: 1000,
                    loop: true,
                    showCursor: true
                    });
                    </script>
            -->
            <script src="../cmsimde/static/chimper/js/main.js"></script>
        ''' + checkMath() + '''</body></html>
        '''


def generate_pages():

    """Convert content.htm to static html files in  content directory
    """
    # 必須決定如何處理重複標題頁面的轉檔
    # 確定程式檔案所在目錄, 在 Windows 有最後的反斜線
    #_curdir = os.path.join(os.getcwd(), os.path.dirname(__file__))
    #_curdir is now repo_path
    # 根據 content.htm 內容, 逐一產生各頁面檔案
    # 在此也要同時配合 render_menu2, 產生對應的 anchor 連結
    head, level, page = parse_content()
    # 處理重複標題 head 數列， 重複標題則按照次序加上 1, 2, 3...
    newhead = []
    for i, v in enumerate(head):
        # 各重複標題總數
        totalcount = head.count(v)
        # 目前重複標題出現總數
        count = head[:i].count(v)
        # 針對重複標題者, 附加目前重複標題出現數 +1, 未重複採原標題
        newhead.append(v + "-" + str(count + 1) if totalcount > 1 else v)
    # 刪除 content 目錄中所有 html 檔案
    filelist = [ f for f in os.listdir(repo_path + "/content/") if f.endswith(".html") ]
    for f in filelist:
        os.remove(os.path.join(repo_path + "/content/", f))
    # 這裡需要建立專門寫出 html 的 write_page
    # index.html
    with open(repo_path + "/content/index.html", "w", encoding="utf-8") as f:
        f.write(get_page2(None, newhead, 0))
    # sitemap
    with open(repo_path + "/content/sitemap.html", "w", encoding="utf-8") as f:
        # 為了修改為動態與靜態網頁雙向轉檔, 這裡需要 newhead pickle
        # sitemap2 需要 newhead
        f.write(sitemap2(newhead))
    # 以下轉檔, 改用 newhead 數列

    def visible(element):
        if element.parent.name in ['style', 'script', '[document]', 'head', 'title']:
            return False
        elif re.match('<!--.*-->', str(element.encode('utf-8'))):
            return False
        return True

    search_content = []
    for i in range(len(newhead)):
        # 在此必須要將頁面中的 /images/ 字串換為 images/, /downloads/ 換為 downloads/
        # 因為 Flask 中靠 /images/ 取檔案, 但是一般 html 則採相對目錄取檔案
        # 此一字串置換在 get_page2 中進行
        # 加入 tipue search 模式
        get_page_content = []
        html_doc = get_page2(newhead[i], newhead, 0, get_page_content)
        """
        # html = "<meta property='head' content='H1'>"
        soup = BeautifulSoup(html)
        title = soup.find("meta", property="head")
        print(title["content"])
        """
        html_doc = html_doc.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<meta property="head" content="H'+str(level[i])+'">')
        soup = BeautifulSoup(" ".join(get_page_content), "lxml")
        search_content.append({"title": newhead[i], "text": " ".join(filter(visible, soup.findAll(text=True))), "tags": "", "url": newhead[i] + ".html"})
        with open(repo_path + "/content/" + newhead[i] + ".html", "w", encoding="utf-8") as f:
            # 增加以 newhead 作為輸入
            f.write(html_doc)
    # GENERATE js file
    with open(repo_path + "/content/tipuesearch_content.js", "w", encoding="utf-8") as f:
        f.write("var tipuesearch = {\"pages\": " + str(search_content) + "};")
    # generate each page html under content directory
    return "已經將網站轉為靜態網頁. <a href='/'>Home</a>"
# seperate page need heading and edit variables, if edit=1, system will enter edit mode
# single page edit will use ssavePage to save content, it means seperate save page

generate_pages()
