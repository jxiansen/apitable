

package com.apitable.sql.script.enhance;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.jetbrains.annotations.NotNull;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.EncodedResource;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
import org.springframework.jdbc.datasource.init.ScriptException;
import org.springframework.jdbc.datasource.init.ScriptUtils;
import org.springframework.lang.Nullable;
import org.springframework.util.Assert;
import org.springframework.util.StringUtils;

public class ResourceDatabasePopulatorEnhance extends ResourceDatabasePopulator {

    private List<Resource> scripts = new ArrayList<>();

    @Nullable
    private String sqlScriptEncoding;

    private String separator = ScriptUtils.DEFAULT_STATEMENT_SEPARATOR;

    private String[] commentPrefixes = ScriptUtils.DEFAULT_COMMENT_PREFIXES;

    private String blockCommentStartDelimiter = ScriptUtils.DEFAULT_BLOCK_COMMENT_START_DELIMITER;

    private String blockCommentEndDelimiter = ScriptUtils.DEFAULT_BLOCK_COMMENT_END_DELIMITER;

    private boolean continueOnError = false;

    private boolean ignoreFailedDrops = false;

    private final TablePrefixHandler tablePrefixHandler;

    public ResourceDatabasePopulatorEnhance(String tablePrefix) {
        this.tablePrefixHandler = new TablePrefixHandler(tablePrefix);
    }

    @Override
    public void populate(@NotNull Connection connection) throws ScriptException {
        Assert.notNull(connection, "'connection' must not be null");
        for (Resource script : this.scripts) {
            EncodedResource encodedScript = new EncodedResource(script, this.sqlScriptEncoding);
            tablePrefixHandler.executeSqlScript(connection, encodedScript, this.continueOnError,
                this.ignoreFailedDrops,
                this.commentPrefixes, this.separator, this.blockCommentStartDelimiter,
                this.blockCommentEndDelimiter);
        }
    }

    @Override
    public void addScript(@NotNull Resource script) {
        super.addScript(script);
        this.scripts.add(script);
    }

    @Override
    public void addScripts(@NotNull Resource... scripts) {
        super.addScripts(scripts);
        this.scripts.addAll(Arrays.asList(scripts));
    }

    @Override
    public void setScripts(@NotNull Resource... scripts) {
        super.setScripts(scripts);
        this.scripts = new ArrayList<>(Arrays.asList(scripts));
    }

    @Override
    public void setContinueOnError(boolean continueOnError) {
        super.setContinueOnError(continueOnError);
        this.continueOnError = continueOnError;
    }

    @Override
    public void setIgnoreFailedDrops(boolean ignoreFailedDrops) {
        super.setIgnoreFailedDrops(ignoreFailedDrops);
        this.ignoreFailedDrops = ignoreFailedDrops;
    }

    @Override
    public void setCommentPrefix(@NotNull String commentPrefix) {
        super.setCommentPrefix(commentPrefix);
        this.commentPrefixes = new String[] {commentPrefix};
    }

    @Override
    public void setSeparator(@NotNull String separator) {
        super.setSeparator(separator);
        this.separator = separator;
    }

    @Override
    public void setBlockCommentStartDelimiter(@NotNull String blockCommentStartDelimiter) {
        super.setBlockCommentStartDelimiter(blockCommentStartDelimiter);
        this.blockCommentStartDelimiter = blockCommentStartDelimiter;
    }

    @Override
    public void setBlockCommentEndDelimiter(@NotNull String blockCommentEndDelimiter) {
        super.setBlockCommentEndDelimiter(blockCommentEndDelimiter);
        this.blockCommentEndDelimiter = blockCommentEndDelimiter;
    }

    @Override
    public void setSqlScriptEncoding(@Nullable String sqlScriptEncoding) {
        super.setSqlScriptEncoding(sqlScriptEncoding);
        this.sqlScriptEncoding =
            (StringUtils.hasText(sqlScriptEncoding) ? sqlScriptEncoding : null);
    }
}
