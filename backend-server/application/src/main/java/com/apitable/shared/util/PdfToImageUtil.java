

package com.apitable.shared.util;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import javax.imageio.ImageIO;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.io.RandomAccessReadBuffer;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <p>
 * PDF to Image util.
 * </p>
 *
 * @author Shawn Deng
 */
public class PdfToImageUtil {

    private static final Logger LOG = LoggerFactory.getLogger(PdfToImageUtil.class);

    /**
     * <p>
     * Convert pdf to image.
     * </p>
     *
     * @param pdfIn pdf input stream
     * @return image input stream
     */
    public static InputStream convert(InputStream pdfIn) {
        PDDocument document = null;
        try {
            document = Loader.loadPDF(new RandomAccessReadBuffer(pdfIn));
            PDFRenderer renderer = new PDFRenderer(document);
            BufferedImage image = renderer.renderImage(0, 0.5f);
            ByteArrayOutputStream os = new ByteArrayOutputStream();
            ImageIO.write(image, "JPEG", os);
            return new ByteArrayInputStream(os.toByteArray());
        } catch (IOException e) {
            LOG.error("unable to load pdf", e);
            return null;
        } finally {
            if (document != null) {
                try {
                    document.close();
                } catch (IOException e) {
                    LOG.error("close pd document stream exception", e);
                }
            }
        }
    }
}
