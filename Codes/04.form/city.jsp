<%@ page contentType="text/html;charset=utf-8"%><%request.setCharacterEncoding("UTF-8");%>
<%!
    String province = "[['河北','河北'],['內蒙古','內蒙古']]";
    String cityHebei = "[" +
        "['唐山','唐山']," +
        "['秦皇島','秦皇島']," +
        "['承德','承德']," +
        "['張家口','張家口']" +
    "]";
    String cityNeimenggu = "[" +
        "['呼和浩特','呼和浩特']," +
        "['包頭','包頭']" +
    "]";
    String countyTangshan = "[" +
        "['路南區','路南區']," +
        "['路北區','路北區']," +
        "['開平區','開平區']," +
        "['古冶區','古冶區']," +
        "['豐潤區','豐潤區']," +
        "['豐南區','豐南區']," +
        "['玉田','玉田']," +
        "['遵化','遵化']," +
        "['遷西','遷西']," +
        "['遷安','遷安']," +
        "['灤縣','灤縣']," +
        "['灤南','灤南']," +
        "['樂亭','樂亭']," +
        "['唐海','唐海']" +
    "]";
    String countyUnknow = "[['不知道','不知道']]";
%>
<%

String type = request.getParameter("type");
if ("province".equals(type)) {
    response.getWriter().print(province);
} else if ("city".equals(type)) {
    String province = java.net.URLDecoder.decode(request.getParameter("id"), "UTF-8");
    System.out.println(province);
    if ("河北".equals(province)) {
        response.getWriter().print(cityHebei);
    } else if ("內蒙古".equals(province)) {
        response.getWriter().print(cityNeimenggu);
    }
} else if ("county".equals(type)) {
    String city = java.net.URLDecoder.decode(request.getParameter("id"), "UTF-8");
    System.out.println(city);
    if ("唐山".equals(city)) {
        response.getWriter().print(countyTangshan);
    } else {
        response.getWriter().print(countyUnknow);
    }

}
%>

