

package com.apitable.space.assembler;

import static java.time.temporal.TemporalAdjusters.lastDayOfMonth;

import cn.hutool.core.collection.CollUtil;
import com.apitable.core.util.DateTimeUtil;
import com.apitable.interfaces.billing.model.SubscriptionFeature;
import com.apitable.interfaces.billing.model.SubscriptionInfo;
import com.apitable.shared.clock.spring.ClockManager;
import com.apitable.space.vo.SpaceSubscribeVo;
import java.time.LocalDate;
import java.time.ZoneOffset;

/**
 * Subscribe Assembler.
 */
public class SubscribeAssembler {

    /**
     * transform vo.
     *
     * @param subscriptionInfo subscription info
     * @return SpaceSubscribeVo
     */
    public SpaceSubscribeVo toVo(SubscriptionInfo subscriptionInfo) {
        SpaceSubscribeVo result = new SpaceSubscribeVo();
        result.setVersion(subscriptionInfo.getVersion());
        result.setProduct(subscriptionInfo.getProduct());
        result.setPlan(subscriptionInfo.getBasePlan());
        result.setOnTrial(subscriptionInfo.onTrial());
        result.setBillingMode(subscriptionInfo.getBillingMode());
        result.setRecurringInterval(subscriptionInfo.getRecurringInterval());
        result.setExpireAt(
            DateTimeUtil.localDateToSecond(subscriptionInfo.getEndDate(), ZoneOffset.UTC));
        result.setDeadline(subscriptionInfo.getEndDate());
        if (CollUtil.isNotEmpty(subscriptionInfo.getAddOnPlans())) {
            result.setAddOnPlans(subscriptionInfo.getAddOnPlans());
        }
        LocalDate now = ClockManager.me().getLocalDateNow();
        int defaultCycleDayOfMonth = now.with(lastDayOfMonth()).getDayOfMonth();
        result.setCycleDayOfMonth(subscriptionInfo.cycleDayOfMonth(defaultCycleDayOfMonth));
        SubscriptionFeature feature = subscriptionInfo.getFeature();
        result.setMaxSeats(feature.getSeat().getValue());
        result.setMaxCapacitySizeInBytes(feature.getCapacitySize().getValue().toBytes());
        result.setMaxSheetNums(feature.getFileNodeNums().getValue());
        result.setMaxRowsPerSheet(feature.getRowsPerSheet().getValue());
        result.setMaxRowsInSpace(feature.getTotalRows().getValue());
        result.setMaxAdminNums(feature.getAdminNums().getValue());
        result.setMaxMirrorNums(feature.getMirrorNums().getValue());
        result.setMaxApiCall(feature.getApiCallNumsPerMonth().getValue());
        result.setApiCallNumsPerMonth(feature.getApiCallNumsPerMonth().getValue());
        result.setMaxGalleryViewsInSpace(feature.getGalleryViewNums().getValue());
        result.setMaxKanbanViewsInSpace(feature.getKanbanViewNums().getValue());
        result.setMaxFormViewsInSpace(feature.getFormNums().getValue());
        result.setMaxGanttViewsInSpace(feature.getGanttViewNums().getValue());
        result.setMaxCalendarViewsInSpace(feature.getCalendarViewNums().getValue());
        result.setFieldPermissionNums(feature.getFieldPermissionNums().getValue());
        result.setNodePermissionNums(feature.getNodePermissionNums().getValue());
        result.setMaxMessageCredits(feature.getMessageCreditNums().getValue());
        result.setMaxAutomationRunNums(feature.getAutomationRunNumsPerMonth().getValue());
        result.setMaxWidgetNums(feature.getWidgetNums().getValue());
        result.setControlFormBrandLogo(feature.getControlFormBrandLogo().getValue());

        result.setIntegrationFeishu(feature.getSocialConnect().getValue());
        result.setIntegrationDingtalk(feature.getSocialConnect().getValue());
        result.setIntegrationWeCom(feature.getSocialConnect().getValue());
        result.setIntegrationOfficePreview(feature.getSocialConnect().getValue());
        result.setRainbowLabel(feature.getRainbowLabel().getValue());
        result.setWatermark(feature.getWatermark().getValue());
        result.setSecuritySettingInviteMember(feature.getAllowInvitation().getValue());
        result.setSecuritySettingApplyJoinSpace(feature.getAllowApplyJoin().getValue());
        result.setSecuritySettingShare(feature.getAllowShare().getValue());
        result.setSecuritySettingExport(feature.getAllowExport().getValue());
        result.setSecuritySettingDownloadFile(feature.getAllowDownload().getValue());
        result.setSecuritySettingCopyCellData(feature.getAllowCopyData().getValue());
        result.setSecuritySettingMobile(feature.getShowMobileNumber().getValue());
        result.setSecuritySettingAddressListIsolation(feature.getContactIsolation().getValue());
        result.setSecuritySettingCatalogManagement(feature.getForbidCreateOnCatalog().getValue());

        result.setMaxRemainTimeMachineDays(feature.getRemainTimeMachineDays().getValue());
        result.setMaxRemainTrashDays(feature.getRemainTrashDays().getValue());
        result.setMaxRemainRecordActivityDays(feature.getRemainRecordActivityDays().getValue());
        result.setMaxAuditQueryDays(feature.getAuditQueryDays().getValue());
        result.setAuditQuery(feature.getAuditQuery().getValue());

        result.setUnExpireGiftCapacity(subscriptionInfo.getGiftCapacity().getValue().toBytes());
        result.setSubscriptionCapacity(subscriptionInfo.getTotalCapacity().getValue().toBytes()
            - subscriptionInfo.getGiftCapacity().getValue().toBytes());
        return result;
    }
}
