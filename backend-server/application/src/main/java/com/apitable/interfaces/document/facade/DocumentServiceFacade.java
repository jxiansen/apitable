

package com.apitable.interfaces.document.facade;

import java.util.List;

/**
 * document service facade.
 */
public interface DocumentServiceFacade {

    String getSpaceIdByDocumentName(String documentName);

    void remove(Long userId, List<String> nodeIds);

    void recover(Long userId, List<String> nodeIds);

    void cellValueOperate(Long userId, List<String> recoverDocumentNames,
                          List<String> removeDocumentNames);
}
