import sys


from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QApplication


from PyQt5.QtWebEngineWidgets import QWebEnginePage, QWebEngineView


class WebEnginePage(QWebEnginePage):
    def certificateError(self, error):
        error.ignoreCertificateError()
        return True


def main(args):
    app = QApplication(args)
    webview = QWebEngineView()
    page = WebEnginePage()
    webview.setPage(page)
    webview.load(QUrl("https://localhost:9445"))
    webview.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    main(sys.argv)