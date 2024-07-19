


package com.apitable.automation.service;

/**
 * interface for action type.
 */
public interface IAutomationActionTypeService {

    String getActionTypeIdByEndpoint(String endpoint);

    /**
     * weather is send email action.
     *
     * @param actionTypeId action type
     * @return boolean
     */
    boolean isSendEmailAction(String actionTypeId);
}
