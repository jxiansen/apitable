

package com.apitable.shared.util;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.function.Function;

/**
 * <p>
 * DB Util.
 * </p>
 *
 * @author Chambers
 */
public class DBUtil {

    public static <T, R> List<R> batchSelectByFieldIn(Collection<T> fieldValues,
                                                      Function<List<T>, List<R>> queryFunction) {
        return DBUtil.batchSelectByFieldIn(fieldValues, queryFunction, 1000);
    }

    /**
     * batch select by field in.
     *
     * @param fieldValues   field values
     * @param queryFunction query function
     * @param batchSize     batch size
     * @param <T>           T
     * @param <R>           R
     * @return result list
     */
    public static <T, R> List<R> batchSelectByFieldIn(Collection<T> fieldValues,
                                                      Function<List<T>, List<R>> queryFunction,
                                                      int batchSize) {
        List<R> resultList = new ArrayList<>();
        int totalItems = fieldValues.size();
        int startIndex = 0;

        Iterator<T> iterator = fieldValues.iterator();

        while (startIndex < totalItems) {
            int endIndex = startIndex + batchSize;
            List<T> batchFieldValues = new ArrayList<>();

            for (int i = startIndex; i < endIndex && iterator.hasNext(); i++) {
                batchFieldValues.add(iterator.next());
            }

            List<R> batchResult = queryFunction.apply(batchFieldValues);
            resultList.addAll(batchResult);

            startIndex += batchSize;
        }

        return resultList;
    }
}
