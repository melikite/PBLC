import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/animation")
public class AnimationTriggerServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        response.getWriter().println("<!DOCTYPE html>");
        response.getWriter().println("<html lang='en'>");
        response.getWriter().println("<head>");
        response.getWriter().println("<meta charset='UTF-8'>");
        response.getWriter().println("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        response.getWriter().println("<title>Animation Trigger</title>");
        response.getWriter().println("</head>");
        response.getWriter().println("<body>");
        response.getWriter().println("<button id='trigger-animation'>Start Animation</button>");
        response.getWriter().println("<iframe id='pen2' src='https://codepen.io/yourpen' style='display:none;'></iframe>");
        response.getWriter().println("<script>");
        response.getWriter().println("document.addEventListener('DOMContentLoaded', () => {");
        response.getWriter().println("const button = document.getElementById('trigger-animation');");
        response.getWriter().println("const pen2 = document.getElementById('pen2');");
        response.getWriter().println("if (button && pen2) {");
        response.getWriter().println("button.addEventListener('click', () => {");
        response.getWriter().println("pen2.contentWindow.postMessage('start-animation', 'https://codepen.io');");
        response.getWriter().println("});");
        response.getWriter().println("} else {");
        response.getWriter().println("console.error('Button or iframe not found. Make sure they exist in the HTML.');");
        response.getWriter().println("}");
        response.getWriter().println("});");
        response.getWriter().println("</script>");
        response.getWriter().println("</body>");
        response.getWriter().println("</html>");
    }
}
