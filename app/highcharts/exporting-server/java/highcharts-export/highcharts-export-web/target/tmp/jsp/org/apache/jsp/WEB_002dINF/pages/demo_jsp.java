package org.apache.jsp.WEB_002dINF.pages;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class demo_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList<String>(3);
    _jspx_dependants.add("/WEB-INF/jspf/config.js");
    _jspx_dependants.add("/WEB-INF/jspf/callback.js");
    _jspx_dependants.add("/WEB-INF/jspf/lexl.svg");
  }

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("<title>Highcharts export server</title>\n");
      out.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"resources/css/demo.css\" />\n");
      out.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"resources/css/codemirror.css\" />\n");
      out.write("<script src=\"resources/js//jquery-1.11.0.min.js\"></script>\n");
      out.write("<script src=\"resources/js/codemirror-compressed.js\"></script>\n");
      out.write("<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,700,400italic\" type=\"text/css\" />\n");
      out.write("<script>\n");
      out.write("\tvar editors = [];\n");
      out.write("\n");
      out.write("\t$(document).ready(function() {\n");
      out.write("\n");
      out.write("\t\tvar enableEditor = function(id) {\n");
      out.write("\t\t\tif (id === 'options') {\n");
      out.write("\t\t\t\teditors[0] = CodeMirror.fromTextArea($('textarea#options')[0], {\n");
      out.write("\t\t\t\t\tlineNumbers : true,\n");
      out.write("\t\t\t\t\tmatchBrackets : true,\n");
      out.write("\t\t\t\t\ttabMode : \"indent\",\n");
      out.write("\t\t\t\t\tmode : \"text/javascript\",\n");
      out.write("\t\t\t\t\tlineWrapping : true\n");
      out.write("\t\t\t\t});\n");
      out.write("\t\t\t} else {\n");
      out.write("\t\t\t\t// options for svg editor\n");
      out.write("\t\t\t\teditors[1] = CodeMirror.fromTextArea($('textarea#svg')[0], {\n");
      out.write("\t\t\t\t\tlineNumbers : true,\n");
      out.write("\t\t\t\t\tmode : {\n");
      out.write("\t\t\t\t\t\tname : \"xml\",\n");
      out.write("\t\t\t\t\t\talignCDATA : true\n");
      out.write("\t\t\t\t\t},\n");
      out.write("\t\t\t\t\tmatchBrackets : true,\n");
      out.write("\t\t\t\t\ttabMode : \"indent\",\n");
      out.write("\t\t\t\t\tlineWrapping : true\n");
      out.write("\t\t\t\t});\n");
      out.write("\t\t\t}\n");
      out.write("\t\t};\n");
      out.write("\n");
      out.write("\t\t$('#preview').click(function () {\n");
      out.write("\t\t\trunPOST();\n");
      out.write("\t\t\treturn false;\n");
      out.write("\t\t});\n");
      out.write("\n");
      out.write("\t\t// attach eventhandler to radio fields\n");
      out.write("\t\t$('input[type=\"radio\"]').change(function() {\n");
      out.write("\t\t\tvar checked = this.id, other, html;\n");
      out.write("\t\t\t// which editor is checked/ should be visible\n");
      out.write("\t\t\tchecked === 'svg' ? other = 'options' : other = 'svg';\n");
      out.write("\t\t\t// get html source from the div outside of the form\n");
      out.write("\t\t\t$('div#' + checked).html($('div#toggle').html());\n");
      out.write("\t\t\t/* move the html of the previous editor outside the form,\n");
      out.write("\t\t\tremove first Codemirror wrapper */\n");
      out.write("\t\t\t$('div#' + other + ' div.CodeMirror-wrap').remove();\n");
      out.write("\n");
      out.write("\t\t\t$('div#toggle').html($('div#' + other).html());\n");
      out.write("\t\t\t// empty the container which held the previous editor.\n");
      out.write("\t\t\t$('div#' + other).html('');\n");
      out.write("\t\t\t// enable codemirror for texarea\n");
      out.write("\t\t\tenableEditor(checked);\n");
      out.write("\n");
      out.write("\t\t});\n");
      out.write("\n");
      out.write("\t\t// default radio #config is selected\n");
      out.write("\t\t$('input#options').prop('checked', true);\n");
      out.write("\n");
      out.write("\t\tenableEditor('options');\n");
      out.write("\n");
      out.write("\t\t// callback editor\n");
      out.write("\t\teditors[3] = CodeMirror.fromTextArea($('textarea#callback')[0], {\n");
      out.write("\t\t\tid : 'test',\n");
      out.write("\t\t\tlineNumbers : true,\n");
      out.write("\t\t\tmatchBrackets : true,\n");
      out.write("\t\t\ttabMode : \"indent\",\n");
      out.write("\t\t\tmode : \"text/javascript\",\n");
      out.write("\t\t\tlineWrapping : true\n");
      out.write("\t\t});\n");
      out.write("\n");
      out.write("\t});\n");
      out.write("\n");
      out.write("\t/**\n");
      out.write("\t * Preview an async generated image\n");
      out.write("\t */\n");
      out.write("\tfunction preview (filename) {\n");
      out.write("\t\tif ($('#type').val() === 'application/pdf') {\n");
      out.write("\n");
      out.write("    \t\t$('#container').html('<iframe style=\"width:600px;height:400px\" src=\"./' + filename + '\"></iframe>')\n");
      out.write("    \t} else {\n");
      out.write("    \t\t$('#container').html('<img src=\"./' + filename + '\"/>');\n");
      out.write("    \t}\n");
      out.write("\t}\n");
      out.write("\n");
      out.write("\t/**\n");
      out.write("\t * Run a post and receive back an image URL async\n");
      out.write("\t */\n");
      out.write("    function runPOST() {\n");
      out.write("\n");
      out.write("    \tvar dataString = 'async=true',\n");
      out.write("    \t\txdr,\n");
      out.write("\t\t\tidx;\n");
      out.write("\n");
      out.write("    \t$('#container').html('Loading....');\n");
      out.write("\n");
      out.write("\t\tfor(idx = 0; idx < editors.length; idx++) {\n");
      out.write("\t\t\t// ensure saving to textarea before serializing the form\n");
      out.write("\t\t\tif(editors[idx]) {\n");
      out.write("\t\t\t\teditors[idx].save();\n");
      out.write("\t\t\t}\n");
      out.write("\t\t}\n");
      out.write("\n");
      out.write("\t\t$.each($('#exportForm').serializeArray(), function (i, pair) {\n");
      out.write("    \t\tdataString += '&' + pair.name + '=' + pair.value;\n");
      out.write("    \t});\n");
      out.write("\n");
      out.write("    \tif (window.XDomainRequest) {\n");
      out.write("            xdr = new XDomainRequest();\n");
      out.write("            xdr.open(\"post\", './?' + dataString);\n");
      out.write("            xdr.onload = function () {\n");
      out.write("                preview(xdr.responseText);\n");
      out.write("            };\n");
      out.write("            xdr.send();\n");
      out.write("        } else {\n");
      out.write("            $.ajax({\n");
      out.write("                type: 'POST',\n");
      out.write("                data: dataString,\n");
      out.write("                url: './',\n");
      out.write("                success: function (data) {\n");
      out.write("                \tpreview(data);\n");
      out.write("                },\n");
      out.write("                error: function (err) {\n");
      out.write("                    $('#container').html('Error: ' + err.statusText);\n");
      out.write("                }\n");
      out.write("            });\n");
      out.write("        }\n");
      out.write("\n");
      out.write("    }\n");
      out.write("</script>\n");
      out.write(" <script src="js/vendor/modernizr.2.8.3.custom.min.js"></script></head>\n");
      out.write("<body>\n");
      out.write("\t<div id=\"top\">\n");
      out.write("\t\t<a href=\"http://www.highcharts.com\" title=\"Highcharts Home Page\"\n");
      out.write("\t\t\tid=\"logo\"><img alt=\"Highcharts Home Page\"\n");
      out.write("\t\t\tsrc=\"http://www.highcharts.com/templates/highsoft_colorful/images/logo.svg\" border=\"0\"></a>\n");
      out.write("\t</div>\n");
      out.write("\n");
      out.write("\t<div id=\"wrap\">\n");
      out.write("\t\t<form id=\"exportForm\" action=\"./\" method=\"POST\">\n");
      out.write("\n");
      out.write("\t\t\t<h1>Highcharts Export Server</h1>\n");
      out.write("\t\t\n");
      out.write("\t\t\t<p>This page allows you to experiment with different options for the export server.</p>\n");
      out.write("\n");
      out.write("\t\t\t<div>\n");
      out.write("\t\t\t\t<input id=\"options\" title=\"Highcharts config object\" type=\"radio\"\n");
      out.write("\t\t\t\t\tname=\"content\" value=\"options\"> \n");
      out.write("\t\t\t\t<label for=\"options\"\n");
      out.write("\t\t\t\t\tclass=\"radio\">Highcharts config object (JSON)</label> \n");
      out.write("\t\t\t</div>\n");
      out.write("\n");
      out.write("\t\t\t<div>\n");
      out.write("\t\t\t\t<input id=\"svg\" title=\"svg xml content\" type=\"radio\" name=\"content\"\n");
      out.write("\t\t\t\t\tvalue=\"svg\"> \n");
      out.write("\t\t\t\t<label for=\"svg\" class=\"radio\">SVG\n");
      out.write("\t\t\t\t\t(XML) </label>\n");
      out.write("\t\t\t</div>\n");
      out.write("\n");
      out.write("\t\t\t<div id=\"options\">\n");
      out.write("\t\t\t\t<label id=\"options\" for=\"options\">Options</label>\n");
      out.write("\t\t\t\t<div class=\"info\">Your Highcharts\n");
      out.write("\t\t\t\t\tconfiguration object.</div>\n");
      out.write("\t\t\t\t<textarea id=\"options\" name=\"options\" rows=\"12\" cols=\"30\">");
      out.write("{\n");
      out.write("\txAxis: {\n");
      out.write("\t\tcategories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', \n");
      out.write("\t\t\t'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\n");
      out.write("\t},\n");
      out.write("\tseries: [{\n");
      out.write("\t\tdata: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, \n");
      out.write("\t\t\t135.6, 148.5, 216.4, 194.1, 95.6, 54.4]\n");
      out.write("\t}]\n");
      out.write("};\n");
      out.write("</textarea>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div id=\"svg\"></div>\n");
      out.write("\t\t\t<label for=\"type\">Image file format</label> \n");
      out.write("\t\t\t<select name=\"type\" id=\"type\">\n");
      out.write("\t\t\t\t<option value=\"image/png\">image/png</option>\n");
      out.write("\t\t\t\t<option value=\"image/jpeg\">image/jpeg</option>\n");
      out.write("\t\t\t\t<option value=\"image/svg+xml\">image/svg+xml</option>\n");
      out.write("\t\t\t\t<option value=\"application/pdf\">application/pdf</option>\n");
      out.write("\t\t\t</select>\n");
      out.write("\n");
      out.write("\t\t\t<label for=\"width\">Width</label>\n");
      out.write("\t\t\t<div class=\"info\">The exact pixel width of the exported image.\n");
      out.write("\t\t\t\tDefaults to <code>chart.width</code> or <code>600px</code>. Maximum width is <code>2000px</code>.</div>\n");
      out.write("\t\t\t\n");
      out.write("\t\t\t<input id=\"width\" name=\"width\" type=\"text\" value=\"\" /> <br/> \n");
      out.write("\n");
      out.write("\t\t\t<label for=\"scale\">Scale</label>\n");
      out.write("\t\t\t<div class=\"info\">A scaling factor for a higher image\n");
      out.write("\t\t\t\tresolution. Maximum scaling is set to 4x. Remember that the width parameter has a higher\n");
      out.write("\t\t\t\tprecedence over scaling.</div>\n");
      out.write("\t\t\t<input id=\"scale\" name=\"scale\" \ttype=\"text\" value=\"\" />\n");
      out.write("\n");
      out.write("\t\t\t\n");
      out.write("\t\t\t\n");
      out.write("\t\t\t<label for=\"constructor\">Constructor</label>\n");
      out.write("\t\t\t<div class=\"info\">\n");
      out.write("\t\t\t\tEither <code>Chart</code> or <code>StockChart</code> depending on what product you use.\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<select name=\"constr\">\n");
      out.write("\t\t\t\t<option value=\"Chart\">Chart</option>\n");
      out.write("\t\t\t\t<option value=\"StockChart\">StockChart</option>\n");
      out.write("\t\t\t</select> </br> <br /> <label for=\"callback\">Callback</label>\n");
      out.write("\t\t\t<div class=\"info\">The callback will be fired after\n");
      out.write("\t\t\t\tthe chart is created.</div>\n");
      out.write("\t\t\t<textarea id=\"callback\" name=\"callback\" rows=\"12\" cols=\"30\" />");
      out.write("function(chart) {\n");
      out.write("\tchart.renderer.label('This label is added in the callback', 100, 100)\n");
      out.write("\t.attr({\n");
      out.write("\t\tfill : '#90ed7d',\n");
      out.write("\t\tpadding: 10,\n");
      out.write("\t\tr: 10,\n");
      out.write("\t\tzIndex: 10\n");
      out.write("\t})\n");
      out.write("\t.css({\n");
      out.write("\t\tcolor: 'black',\n");
      out.write("\t\twidth: '100px'\n");
      out.write("\t})\n");
      out.write("\t.add();\n");
      out.write("}");
      out.write("\n");
      out.write("\t\t\t</textarea>\n");
      out.write("\n");
      out.write("\n");
      out.write("\t\t\t<input id=\"submit\" type=\"submit\" value=\"Download\">\n");
      out.write("\t\t\t<input id=\"preview\" type=\"submit\" value=\"Preview\" />\n");
      out.write("\t\t</form>\n");
      out.write("\t</div>\n");
      out.write("\t<div id=\"result\">\n");
      out.write("\t\t<h4>Preview</h4>\n");
      out.write("\t\t<div id=\"container\"></div>\n");
      out.write("\t</div>\n");
      out.write("\n");
      out.write("\t<div id=\"toggle\">\n");
      out.write("\t\t<label id=\"svg\" for=\"svg\">Svg Content</label>\n");
      out.write("\t\t<div id=\"oneline\" class=\"info\">Paste in 'raw' svg markup.</div>\n");
      out.write("\t\t<textarea id=\"svg\" name=\"svg\" rows=\"12\" cols=\"30\">");
      out.write("<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"837\" height=\"300\">\n");
      out.write("  <defs>\n");
      out.write("    <clipPath id=\"highcharts-8\">\n");
      out.write("      <rect rx=\"0\" ry=\"0\" fill=\"none\" x=\"0\" y=\"0\" width=\"9999\" height=\"300\" stroke-width=\"0.000001\"></rect>\n");
      out.write("    </clipPath>\n");
      out.write("    <clipPath id=\"highcharts-9\">\n");
      out.write("      <rect fill=\"none\" x=\"0\" y=\"0\" width=\"767\" height=\"197\"></rect>\n");
      out.write("    </clipPath>\n");
      out.write("  </defs>\n");
      out.write("  <rect rx=\"5\" ry=\"5\" fill=\"#FFFFFF\" x=\"0\" y=\"0\" width=\"837\" height=\"300\" stroke-width=\"0.000001\"></rect>\n");
      out.write("  <g class=\"highcharts-grid\"></g>\n");
      out.write("  <g class=\"highcharts-grid\">\n");
      out.write("    <path fill=\"none\" d=\"M 60 198.5 L 827 198.5\" stroke=\"#C0C0C0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 60 158.5 L 827 158.5\" stroke=\"#C0C0C0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 60 119.5 L 827 119.5\" stroke=\"#C0C0C0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 60 79.5 L 827 79.5\" stroke=\"#C0C0C0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 60 40.5 L 827 40.5\" stroke=\"#C0C0C0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 60 237.5 L 827 237.5\" stroke=\"#C0C0C0\" stroke-width=\"1\"></path>\n");
      out.write("  </g>\n");
      out.write("  <g class=\"highcharts-axis\">\n");
      out.write("    <path fill=\"none\" d=\"M 187.5 237 L 187.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 251.5 237 L 251.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 315.5 237 L 315.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 379.5 237 L 379.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 442.5 237 L 442.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 506.5 237 L 506.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 570.5 237 L 570.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 634.5 237 L 634.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 698.5 237 L 698.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 762.5 237 L 762.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 826.5 237 L 826.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 123.5 237 L 123.5 242\" stroke=\"#C0D0E0\" stroke-width=\"1\"></path>\n");
      out.write("    <path fill=\"none\" d=\"M 60 237.5 L 827 237.5\" stroke=\"#C0D0E0\" stroke-width=\"1\" visibility=\"visible\"></path>\n");
      out.write("  </g>\n");
      out.write("  <g class=\"highcharts-axis\">\n");
      out.write("    <text x=\"24\" y=\"138.5\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:12px;color:#6d869f;font-weight:bold;fill:#6d869f;\" transform=\"rotate(270 24 138)\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"24\">Y-values</tspan>\n");
      out.write("    </text>\n");
      out.write("  </g>\n");
      out.write("  <g class=\"highcharts-series-group\">\n");
      out.write("    <g class=\"highcharts-series\" visibility=\"visible\" transform=\"translate(60,40)\" clip-path=\"url(#highcharts-9)\">\n");
      out.write("      <path fill=\"none\" d=\"M 31.958333333333332 173.4 L 95.875 140.7 L 159.79166666666666 113.2 L 223.70833333333334 95.2 L 287.625 83.5 L 351.54166666666663 58.3 L 415.4583333333333 90.1 L 479.37499999999994 80 L 543.2916666666666 26.5 L 607.2083333333334 44 L 671.125 121.7 L 735.0416666666666 154.1\" stroke=\"black\" stroke-width=\"5\" stroke-opacity=\"0.049999999999999996\" transform=\"translate(1, 1)\"></path>\n");
      out.write("      <path fill=\"none\" d=\"M 31.958333333333332 173.4 L 95.875 140.7 L 159.79166666666666 113.2 L 223.70833333333334 95.2 L 287.625 83.5 L 351.54166666666663 58.3 L 415.4583333333333 90.1 L 479.37499999999994 80 L 543.2916666666666 26.5 L 607.2083333333334 44 L 671.125 121.7 L 735.0416666666666 154.1\" stroke=\"black\" stroke-width=\"3\" stroke-opacity=\"0.09999999999999999\" transform=\"translate(1, 1)\"></path>\n");
      out.write("      <path fill=\"none\" d=\"M 31.958333333333332 173.4 L 95.875 140.7 L 159.79166666666666 113.2 L 223.70833333333334 95.2 L 287.625 83.5 L 351.54166666666663 58.3 L 415.4583333333333 90.1 L 479.37499999999994 80 L 543.2916666666666 26.5 L 607.2083333333334 44 L 671.125 121.7 L 735.0416666666666 154.1\" stroke=\"black\" stroke-width=\"1\" stroke-opacity=\"0.15\" transform=\"translate(1, 1)\"></path>\n");
      out.write("      <path fill=\"none\" d=\"M 31.958333333333332 173.4 L 95.875 140.7 L 159.79166666666666 113.2 L 223.70833333333334 95.2 L 287.625 83.5 L 351.54166666666663 58.3 L 415.4583333333333 90.1 L 479.37499999999994 80 L 543.2916666666666 26.5 L 607.2083333333334 44 L 671.125 121.7 L 735.0416666666666 154.1\" stroke=\"#4572A7\" stroke-width=\"2\"></path>\n");
      out.write("    </g>\n");
      out.write("    <g class=\"highcharts-markers\" visibility=\"visible\" transform=\"translate(60,40)\" clip-path=\"none\">\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 735.0416666666666 150.1 C 740.3696666666666 150.1 740.3696666666666 158.1 735.0416666666666 158.1 C 729.7136666666667 158.1 729.7136666666667 150.1 735.0416666666666 150.1 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 671.125 117.7 C 676.453 117.7 676.453 125.7 671.125 125.7 C 665.797 125.7 665.797 117.7 671.125 117.7 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 607.2083333333334 40 C 612.5363333333333 40 612.5363333333333 48 607.2083333333334 48 C 601.8803333333334 48 601.8803333333334 40 607.2083333333334 40 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 543.2916666666666 22.5 C 548.6196666666666 22.5 548.6196666666666 30.5 543.2916666666666 30.5 C 537.9636666666667 30.5 537.9636666666667 22.5 543.2916666666666 22.5 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 479.37499999999994 76 C 484.7029999999999 76 484.7029999999999 84 479.37499999999994 84 C 474.04699999999997 84 474.04699999999997 76 479.37499999999994 76 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 415.4583333333333 86.1 C 420.7863333333333 86.1 420.7863333333333 94.1 415.4583333333333 94.1 C 410.13033333333334 94.1 410.13033333333334 86.1 415.4583333333333 86.1 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 351.54166666666663 54.3 C 356.8696666666666 54.3 356.8696666666666 62.3 351.54166666666663 62.3 C 346.21366666666665 62.3 346.21366666666665 54.3 351.54166666666663 54.3 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 287.625 79.5 C 292.953 79.5 292.953 87.5 287.625 87.5 C 282.297 87.5 282.297 79.5 287.625 79.5 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 223.70833333333334 91.2 C 229.03633333333335 91.2 229.03633333333335 99.2 223.70833333333334 99.2 C 218.38033333333334 99.2 218.38033333333334 91.2 223.70833333333334 91.2 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 159.79166666666666 109.2 C 165.11966666666666 109.2 165.11966666666666 117.2 159.79166666666666 117.2 C 154.46366666666665 117.2 154.46366666666665 109.2 159.79166666666666 109.2 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 95.875 136.7 C 101.203 136.7 101.203 144.7 95.875 144.7 C 90.547 144.7 90.547 136.7 95.875 136.7 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("      <path fill=\"#4572A7\" d=\"M 31.958333333333332 169.4 C 37.28633333333333 169.4 37.28633333333333 177.4 31.958333333333332 177.4 C 26.630333333333333 177.4 26.630333333333333 169.4 31.958333333333332 169.4 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("    </g>\n");
      out.write("  </g>\n");
      out.write("  <text x=\"419\" y=\"25\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:16px;color:#3e576f;fill:#3e576f;\" text-anchor=\"middle\" class=\"highcharts-title\">\n");
      out.write("    <tspan x=\"419\">Chart title</tspan>\n");
      out.write("  </text>\n");
      out.write("  <g class=\"highcharts-legend\" transform=\"translate(378,260)\">\n");
      out.write("    <rect rx=\"5\" ry=\"5\" fill=\"none\" x=\"0.5\" y=\"0.5\" width=\"81\" height=\"24\" stroke-width=\"1\" stroke=\"#909090\" visibility=\"visible\"></rect>\n");
      out.write("    <g clip-path=\"url(#highcharts-8)\">\n");
      out.write("      <g>\n");
      out.write("        <g class=\"highcharts-legend-item\" transform=\"translate(8,3)\">\n");
      out.write("          <path fill=\"none\" d=\"M 0 11 L 16 11\" stroke-width=\"2\" stroke=\"#4572A7\"></path>\n");
      out.write("          <path fill=\"#4572A7\" d=\"M 8 7 C 13.328 7 13.328 15 8 15 C 2.6719999999999997 15 2.6719999999999997 7 8 7 Z\" stroke=\"#FFFFFF\" stroke-width=\"0.000001\"></path>\n");
      out.write("          <text x=\"21\" y=\"15\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:12px;cursor:pointer;color:#3e576f;fill:#3e576f;\" text-anchor=\"start\">\n");
      out.write("            <tspan x=\"21\">Series 1</tspan>\n");
      out.write("          </text>\n");
      out.write("        </g>\n");
      out.write("      </g>\n");
      out.write("    </g>\n");
      out.write("  </g>\n");
      out.write("  <g class=\"highcharts-axis-labels\">\n");
      out.write("    <text x=\"91.95833333333333\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"91.95833333333333\">Jan</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"155.87499999999997\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"155.87499999999997\">Feb</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"219.79166666666666\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"219.79166666666666\">Mar</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"283.7083333333333\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"283.7083333333333\">Apr</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"347.625\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"347.625\">May</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"411.54166666666663\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"411.54166666666663\">Jun</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"475.4583333333333\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"475.4583333333333\">Jul</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"539.3749999999999\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"539.3749999999999\">Aug</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"603.2916666666666\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"603.2916666666666\">Sep</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"667.2083333333333\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"667.2083333333333\">Oct</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"731.125\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"731.125\">Nov</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"795.0416666666666\" y=\"251\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:44px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"middle\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"795.0416666666666\">Dec</tspan>\n");
      out.write("    </text>\n");
      out.write("  </g>\n");
      out.write("  <g class=\"highcharts-axis-labels\">\n");
      out.write("    <text x=\"52\" y=\"243.1\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:364px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"end\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"52\">0</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"52\" y=\"203.70000000000002\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:364px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"end\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"52\">50</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"52\" y=\"164.29999999999998\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:364px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"end\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"52\">100</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"52\" y=\"124.9\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:364px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"end\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"52\">150</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"52\" y=\"85.5\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:364px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"end\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"52\">200</tspan>\n");
      out.write("    </text>\n");
      out.write("    <text x=\"52\" y=\"46.1\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:11px;width:364px;color:#666;line-height:14px;fill:#666;\" text-anchor=\"end\" visibility=\"visible\">\n");
      out.write("      <tspan x=\"52\">250</tspan>\n");
      out.write("    </text>\n");
      out.write("  </g>\n");
      out.write("  <g class=\"highcharts-tooltip\" style=\"padding:0;white-space:nowrap;\" visibility=\"hidden\">\n");
      out.write("    <rect rx=\"5\" ry=\"5\" fill=\"none\" x=\"0\" y=\"0\" width=\"10\" height=\"10\" stroke-width=\"5\" fill-opacity=\"0.85\" stroke=\"black\" stroke-opacity=\"0.049999999999999996\" transform=\"translate(1, 1)\"></rect>\n");
      out.write("    <rect rx=\"5\" ry=\"5\" fill=\"none\" x=\"0\" y=\"0\" width=\"10\" height=\"10\" stroke-width=\"3\" fill-opacity=\"0.85\" stroke=\"black\" stroke-opacity=\"0.09999999999999999\" transform=\"translate(1, 1)\"></rect>\n");
      out.write("    <rect rx=\"5\" ry=\"5\" fill=\"none\" x=\"0\" y=\"0\" width=\"10\" height=\"10\" stroke-width=\"1\" fill-opacity=\"0.85\" stroke=\"black\" stroke-opacity=\"0.15\" transform=\"translate(1, 1)\"></rect>\n");
      out.write("    <rect rx=\"5\" ry=\"5\" fill=\"rgb(255,255,255)\" x=\"0\" y=\"0\" width=\"10\" height=\"10\" stroke-width=\"2\" fill-opacity=\"0.85\"></rect>\n");
      out.write("    <text x=\"5\" y=\"18\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:12px;color:#333333;fill:#333333;\"></text>\n");
      out.write("  </g>\n");
      out.write("  <text x=\"827\" y=\"295\" style=\"font-family:'lucida grande', 'lucida sans unicode', verdana, arial, helvetica, sans-serif;font-size:10px;cursor:pointer;color:#909090;fill:#909090;\" text-anchor=\"end\">\n");
      out.write("    <tspan x=\"827\">Highcharts.com</tspan>\n");
      out.write("  </text>\n");
      out.write("  <g class=\"highcharts-tracker\">\n");
      out.write("    <g visibility=\"visible\" transform=\"translate(60,40)\" clip-path=\"url(#highcharts-9)\">\n");
      out.write("      <path fill=\"none\" d=\"M 21.958333333333332 173.4 L 31.958333333333332 173.4 L 95.875 140.7 L 159.79166666666666 113.2 L 223.70833333333334 95.2 L 287.625 83.5 L 351.54166666666663 58.3 L 415.4583333333333 90.1 L 479.37499999999994 80 L 543.2916666666666 26.5 L 607.2083333333334 44 L 671.125 121.7 L 735.0416666666666 154.1 L 745.0416666666666 154.1\" stroke-linejoin=\"bevel\" visibility=\"visible\" stroke-opacity=\"0.000001\" stroke=\"rgb(192,192,192)\" stroke-width=\"22\" style=\"\"></path>\n");
      out.write("    </g>\n");
      out.write("  </g>\n");
      out.write("</svg>\n");
      out.write("\n");
      out.write("\t\t</textarea>\n");
      out.write("\t</div>\n");
      out.write("</body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
