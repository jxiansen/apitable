

package com.apitable.core.support.tree;

import java.util.List;

/**
 * <p>
 *  the tree builder's abstract class, defined the base step of building tree.
 * </p>
 */
public abstract class AbstractTreeBuildFactory<T> {

    /**
     * the process of building the tree.
     *
     * @param nodes the list of nodes
     * @return List
     */
    public List<T> doTreeBuild(List<T> nodes) {

        // the node processing work before building tree
        List<T> readyToBuild = beforeBuild(nodes);

        // the main process of building tree
        List<T> buildProcess = executeBuilding(readyToBuild);

        // the post of processing step
        return afterBuild(buildProcess);
    }

    /**
     * Processing before the build.
     *
     * @param nodes the list of nodes
     * @return List
     */
    protected abstract List<T> beforeBuild(List<T> nodes);

    /**
     * the build process.
     *
     * @param nodes the list of nodes
     * @return List
     */
    protected abstract List<T> executeBuilding(List<T> nodes);

    /**
     * processing after the build.
     *
     * @param nodes the list of nodes
     * @return List
     */
    protected abstract List<T> afterBuild(List<T> nodes);
}
