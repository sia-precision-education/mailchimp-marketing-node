/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.80
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient';


/**
 * Conversations service.
 * @module api/ConversationsApi
 */

/**
 * Constructs a new ConversationsApi.
 * @alias module:api/ConversationsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
class ConversationsApi {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * List conversations
   * Get a list of conversations for the account. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren't available using this endpoint.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
   * @param {module:model/String} opts.hasUnreadMessages Whether the conversation has any unread messages.
   * @param {String} opts.listId The unique id for the list.
   * @param {String} opts.campaignId The unique id for the campaign.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TrackedConversations} and HTTP response
   */
  public listWithHttpInfo(opts: ListOptions = {}): Promise<{ data: TrackedConversations }> {
    const postBody = null;
    const pathParams = {};
    const queryParams = {
      fields: this.apiClient.buildCollectionParam(opts.fields, 'csv'),
      exclude_fields: this.apiClient.buildCollectionParam(opts.excludeFields, 'csv'),
      count: opts.count,
      offset: opts.offset,
      has_unread_messages: opts.hasUnreadMessages,
      list_id: opts.listId,
      campaign_id: opts.campaignId
    };
    const headerParams = {};
    const formParams = {};
    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    return this.apiClient.callApi(
      '/conversations', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * List conversations
   * Get a list of conversations for the account. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren't available using this endpoint.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
   * @param {module:model/String} opts.hasUnreadMessages Whether the conversation has any unread messages.
   * @param {String} opts.listId The unique id for the list.
   * @param {String} opts.campaignId The unique id for the campaign.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TrackedConversations}
   */
  public list(opts: ListOptions = {}): Promise<TrackedConversations> {
    return this.listWithHttpInfo(opts).then(response_and_data => response_and_data.data);
  }

  /**
   * Get conversation
   * Get details about an individual conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren't available using this endpoint.
   * @param {String} conversationId The unique id for the conversation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Conversation} and HTTP response
   */
  public getWithHttpInfo(conversationId: string, opts: GetOptions = {}): Promise<{ data: Conversation }> {
    if (!conversationId) {
      throw new Error("Missing the required parameter 'conversationId' when calling getWithHttpInfo");
    }

    const pathParams = { conversation_id: conversationId };
    const queryParams = {
      fields: this.apiClient.buildCollectionParam(opts.fields, 'csv'),
      exclude_fields: this.apiClient.buildCollectionParam(opts.excludeFields, 'csv')
    };
    const headerParams = {};
    const formParams = {};
    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    return this.apiClient.callApi(
      '/conversations/{conversation_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Get conversation
   * Get details about an individual conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren't available using this endpoint.
   * @param {String} conversationId The unique id for the conversation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Conversation}
   */
  public get(conversationId: string, opts: GetOptions = {}): Promise<Conversation> {
    return this.getWithHttpInfo(conversationId, opts).then(response_and_data => response_and_data.data);
  }

  /**
   * List messages
   * Get messages from a specific conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren't available using this endpoint.
   * @param {String} conversationId The unique id for the conversation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {module:model/String} opts.isRead Whether a conversation message has been marked as read.
   * @param {Date} opts.beforeTimestamp Restrict the response to messages created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   * @param {Date} opts.sinceTimestamp Restrict the response to messages created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionOfConversationMessages} and HTTP response
   */
  public getConversationMessagesWithHttpInfo(conversationId: string, opts: MessageOptions = {}): Promise<{ data: CollectionOfConversationMessages }> {
    if (!conversationId) {
      throw new Error("Missing the required parameter 'conversationId' when calling getConversationMessagesWithHttpInfo");
    }

    const pathParams = { conversation_id: conversationId };
    const queryParams = {
      fields: this.apiClient.buildCollectionParam(opts.fields, 'csv'),
      exclude_fields: this.apiClient.buildCollectionParam(opts.excludeFields, 'csv'),
      is_read: opts.isRead,
      before_timestamp: opts.beforeTimestamp,
      since_timestamp: opts.sinceTimestamp
    };
    const headerParams = {};
    const formParams = {};
    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    return this.apiClient.callApi(
      '/conversations/{conversation_id}/messages', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * List messages
   * Get messages from a specific conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren't available using this endpoint.
   * @param {String} conversationId The unique id for the conversation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {module:model/String} opts.isRead Whether a conversation message has been marked as read.
   * @param {Date} opts.beforeTimestamp Restrict the response to messages created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   * @param {Date} opts.sinceTimestamp Restrict the response to messages created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionOfConversationMessages}
   */
  public getConversationMessages(conversationId: string, opts: MessageOptions = {}): Promise<CollectionOfConversationMessages> {
    return this.getConversationMessagesWithHttpInfo(conversationId, opts).then(response_and_data => response_and_data.data);
  }

  /**
   * Get message
   * Get an individual message in a conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren't available using this endpoint.
   * @param {String} conversationId The unique id for the conversation.
   * @param {String} messageId The unique id for the conversation message.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConversationMessage} and HTTP response
   */
  public getConversationMessageWithHttpInfo(conversationId: string, messageId: string, opts: GetOptions = {}): Promise<{ data: ConversationMessage }> {
    if (!conversationId) {
      throw new Error("Missing the required parameter 'conversationId' when calling getConversationMessageWithHttpInfo");
    }
    if (!messageId) {
      throw new Error("Missing the required parameter 'messageId' when calling getConversationMessageWithHttpInfo");
    }

    const pathParams = { conversation_id: conversationId, message_id: messageId };
    const queryParams = {
      fields: this.apiClient.buildCollectionParam(opts.fields, 'csv'),
      exclude_fields: this.apiClient.buildCollectionParam(opts.excludeFields, 'csv')
    };
    const headerParams = {};
    const formParams = {};
    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    return this.apiClient.callApi(
      '/conversations/{conversation_id}/messages/{message_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Get message
   * Get an individual message in a conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren't available using this endpoint.
   * @param {String} conversationId The unique id for the conversation.
   * @param {String} messageId The unique id for the conversation message.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConversationMessage}
   */
  public getConversationMessage(conversationId: string, messageId: string, opts: GetOptions = {}): Promise<ConversationMessage> {
    return this.getConversationMessageWithHttpInfo(conversationId, messageId, opts).then(response_and_data => response_and_data.data);
  }
}

export default ConversationsApi;
