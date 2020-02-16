<%@ page import="org.apache.commons.fileupload.*" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Iterator" %>
<%@ page import="java.io.File" %>
<%@ page contentType="text/html;charset=utf-8"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");

    String temp=getServletContext().getRealPath("/")+"temp";    //臨時目錄
    String loadpath=getServletContext().getRealPath("/")+"dir"; //上傳檔案存放目錄
    DiskFileUpload fu = new DiskFileUpload();
    fu.setSizeMax(1*1024*1024); // 設定容許使用者上傳檔案大小,單位:位元組
    fu.setSizeThreshold(4096);  // 設定最多只容許在記憶體中儲存的資料,單位:位元組
    fu.setRepositoryPath(temp); // 設定一旦檔案大小超過getSizeThreshold()的值時資料存放在硬碟的目錄

    //開始讀取上傳訊息
    List fileItems = fu.parseRequest(request);
    Iterator iter = fileItems.iterator(); // 依次處理每個上傳的檔案

    while (iter.hasNext()) {
        FileItem item = (FileItem) iter.next();// 忽略其他不是檔案域的所有表單訊息
        if (!item.isFormField()) {
            String name = item.getName();//取得上傳檔名,內含路徑
            name = name.substring(name.lastIndexOf("\\")+1);//從全路徑中分析檔名
            // out.println(name);
            long size = item.getSize();
            if ((name == null || name.equals("")) && size == 0)
                continue;
            System.out.println(item.getName() + "    Size=" + item.getSize() + "<br>");//輸出上傳檔案訊息
            //File fNew= new File(loadpath, name);
            //item.write(fNew);
        }
    }
    response.getWriter().print("{success:true,msg:'成功'}");
%>
