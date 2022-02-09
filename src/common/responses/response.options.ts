export declare type PaginatedResponse<ResponseType, KeyType = string> = {
    /**
     * Items collection, can be empty but should not be null / undefined
     */
    items: ResponseType[];
    /**
     * Number of records skipped when paginated response was retrieved (if available)
     */
    skip?: number;
    /**
     * The starting key for the page (key not included) if pagination using No-SQL (e.g. DynamoDB)
     */
    startKey?: KeyType;
    /**
     * The number of records included (if paginated)
     */
    take?: number;
    /**
     * The total number of records in the database, beyond pagination (if available)
     */
    total?: number;
};
