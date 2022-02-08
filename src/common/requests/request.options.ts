export declare type RequestOptions<FilterType = any, KeyType = string> = {
    /**
     * Filter, if applicable
     */
    filter?: FilterType;
    /**
     * Number of records to skip, if supported
     */
    skip?: number;
    /**
     * Include results after last evaluated key, if No-SQL store and supported
     */
    afterKey?: KeyType;
    /**
     * Number of records to return, if supported
     */
    take?: number;
};