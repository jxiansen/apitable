

package com.apitable.shared.util;

import com.apitable.core.util.HttpContextUtil;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

/**
 * <p>
 * export util.
 * </p>
 *
 * @author Chambers
 */
public class ExportUtil {

    /**
     * export bytes.
     *
     * @param bytes       bytes
     * @param filename    filename
     * @param contentType content type
     * @throws IOException throws exception if error
     */
    public static void exportBytes(byte[] bytes, String filename, String contentType)
        throws IOException {
        HttpServletResponse response = HttpContextUtil.getResponse();
        OutputStream out = null;
        try {
            if (response != null) {
                if (contentType != null) {
                    response.setContentType(contentType);
                }
                response.setHeader("content-disposition", "attachment;filename=" + filename);
                out = response.getOutputStream();
                out.write(bytes);
            }
        } catch (Exception e) {
            // ignore
        } finally {
            if (out != null) {
                out.close();
            }
        }
    }
}
