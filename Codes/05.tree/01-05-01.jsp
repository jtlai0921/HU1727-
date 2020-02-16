<%@ page contentType="text/html;charset=utf-8"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");

    // 獲得node參數，對應的是正在展開的節點id
    String node = request.getParameter("node");
    System.out.println(node);

    String json = "";
    if ("root".equals(node)) {
        json += "[{id:1,text:'節點阿一'},{id:2,text:'節點阿二'}]";
    } else if ("1".equals(node)) {
        json += "[{id:11,text:'節點阿一一'},{id:12,text:'節點阿一二'}]";
    } else if ("2".equals(node)) {
        json += "[{id:21,text:'節點阿二一'},{id:22,text:'節點阿二二'}]";
    } else if ("11".equals(node)) {
        json += "[{id:111,text:'節點阿一一一'},{id:112,text:'節點阿一一二'}]";
    }

    response.getWriter().print(json);
%>
