

package com.apitable.shared.util.page;

import cn.hutool.core.collection.CollUtil;
import java.util.Collections;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * page info.
 * </p>
 *
 * @author Shawn Deng
 */
@Data
public class PageInfo<T> {

    private long pageNum;

    private long pageSize;

    private long size;

    private long total;

    private long pages;

    private long startRow;

    private long endRow;

    private long prePage;

    private long nextPage;

    private Boolean firstPage = false;

    private Boolean lastPage = false;

    private boolean hasPreviousPage = false;

    private boolean hasNextPage = false;

    private List<T> records = Collections.emptyList();

    public PageInfo() {
        //Do Nothing
    }

    /**
     * constructor.
     *
     * @param pageNum  current page number
     * @param pageSize current page size
     * @param total    total records
     * @param records  records
     */
    public PageInfo(long pageNum, long pageSize, long total, List<T> records) {
        this.pageNum = pageNum;
        this.pageSize = pageSize;
        this.total = total;
        calculateSize(records);

        this.prePage = pageNum - 1;
        calculatePages();
        calculateStartAndEndRow();
        calcPage();
        judgePageBoundary();
    }

    private void calculateSize(List<T> records) {
        if (CollUtil.isEmpty(records)) {
            this.size = 0;
            return;
        }
        long sub = this.total - ((this.pageNum - 1) * this.pageSize);
        if (sub <= 0) {
            this.size = 0;
            return;
        }
        if (sub >= records.size()) {
            this.records = records;
            this.size = records.size();
            return;
        }
        this.records = records.subList(0, (int) sub);
        this.size = sub;
    }

    private void calculatePages() {
        if (getPageSize() == 0) {
            this.pages = 0;
        }
        long pages = getTotal() / getPageSize();
        if (getTotal() % getPageSize() != 0) {
            pages++;
        }
        this.pages = pages;
    }

    private void calculateStartAndEndRow() {
        if (this.pageNum > 0) {
            this.startRow = ((this.pageNum - 1) * this.pageSize) + 1;
        } else {
            this.startRow = 0;
        }

        this.endRow = this.startRow - 1 + this.size;
    }

    private void calcPage() {
        if (pageNum > 1) {
            prePage = pageNum - 1;
        } else {
            prePage = 1;
        }
        if (pageNum < pages) {
            nextPage = pageNum + 1;
        } else {
            nextPage = pages;
        }
    }

    private void judgePageBoundary() {
        firstPage = pageNum == 1;
        lastPage = pageNum == pages || pages == 0;
        hasPreviousPage = pageNum > 1;
        hasNextPage = pageNum < pages;
    }
}
