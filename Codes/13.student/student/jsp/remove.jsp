<%@ page contentType="application/json;charset=utf-8" import="com.mossle.student.*" %><%
    request.setCharacterEncoding("utf-8");
    response.setCharacterEncoding("utf-8");

    String id = request.getParameter("id");
    StudentDao dao = StudentDao.getInstance();
    dao.remove(Long.parseLong(id));

    out.print("{success:true,msg:'移除成功'}");
%>