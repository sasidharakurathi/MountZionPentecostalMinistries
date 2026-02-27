import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class Server {

    private static final int PORT = 8080;
    private static final String BUILD_DIR = "build";

    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        server.createContext("/", new StaticFileHandler());
        server.setExecutor(null); // creates a default executor
        server.start();
        System.out.println("Java React Server is running on http://localhost:" + PORT);
    }

    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            String path = t.getRequestURI().getPath();
            if (path.equals("/")) {
                path = "/index.html";
            }

            File file = new File(BUILD_DIR + path);
            if (!file.exists() && !path.contains(".")) {
                // For React router, fallback to index.html for unknown paths
                file = new File(BUILD_DIR + "/index.html");
            }

            if (!file.exists() || file.isDirectory()) {
                 // Still doesn't exist? Check if a pure file was asked.
                String response = "404 (Not Found)\n";
                t.sendResponseHeaders(404, response.length());
                OutputStream os = t.getResponseBody();
                os.write(response.getBytes());
                os.close();
                return;
            }

            // Simple MIME type guessing
            String mimeType = "text/plain";
            if (path.endsWith(".html")) mimeType = "text/html";
            else if (path.endsWith(".css")) mimeType = "text/css";
            else if (path.endsWith(".js")) mimeType = "application/javascript";
            else if (path.endsWith(".png")) mimeType = "image/png";
            else if (path.endsWith(".jpg") || path.endsWith(".jpeg")) mimeType = "image/jpeg";
            else if (path.endsWith(".svg")) mimeType = "image/svg+xml";
            else if (path.endsWith(".json")) mimeType = "application/json";
            else if (path.endsWith(".ico")) mimeType = "image/x-icon";

            t.getResponseHeaders().set("Content-Type", mimeType);
            t.sendResponseHeaders(200, file.length());

            Path filePath = file.toPath();
            OutputStream os = t.getResponseBody();
            Files.copy(filePath, os);
            os.close();
        }
    }
}
