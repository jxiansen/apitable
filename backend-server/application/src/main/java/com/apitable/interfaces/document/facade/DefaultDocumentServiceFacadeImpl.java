

package com.apitable.interfaces.document.facade;

import java.util.List;

/**
 * default service facade implements.
 */
public class DefaultDocumentServiceFacadeImpl implements DocumentServiceFacade {

    @Override
    public String getSpaceIdByDocumentName(String documentName) {
        return null;
    }

    @Override
    public void remove(Long userId, List<String> nodeIds) {

    }

    @Override
    public void recover(Long userId, List<String> nodeIds) {

    }

    @Override
    public void cellValueOperate(Long userId, List<String> recoverDocumentNames,
                                 List<String> removeDocumentNames) {

    }
}
