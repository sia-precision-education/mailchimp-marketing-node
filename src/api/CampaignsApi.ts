import ApiClient from '../ApiClient';

export default class CampaignsApi {
  private apiClient: typeof ApiClient;

  constructor(apiClient?: typeof ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Delete campaign
   * Remove a campaign from your Mailchimp account.
   */
  async remove(campaignId: string): Promise<void> {
    if (!campaignId) {
      throw new Error("Missing required parameter 'campaignId'");
    }

    const pathParams = { campaign_id: campaignId };
    const queryParams = {};
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns/{campaign_id}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      null,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response.data;
  }

  /**
   * List campaigns
   * Get all campaigns in an account.
   */
  async list(opts: ListCampaignsOptions = {}): Promise<ApiResponse<Campaign[]>> {
    const queryParams = {
      fields: this.apiClient.buildCollectionParam(opts.fields, 'csv'),
      exclude_fields: this.apiClient.buildCollectionParam(opts.excludeFields, 'csv'),
      count: opts.count,
      offset: opts.offset,
      type: opts.type,
      status: opts.status,
      before_send_time: opts.beforeSendTime,
      since_send_time: opts.sinceSendTime,
      before_create_time: opts.beforeCreateTime,
      since_create_time: opts.sinceCreateTime,
      list_id: opts.listId,
      folder_id: opts.folderId,
      member_id: opts.memberId,
      sort_field: opts.sortField,
      sort_dir: opts.sortDir,
    };

    const pathParams = {};
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      null,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response;
  }

  /**
   * Get campaign info
   * Get information about a specific campaign.
   */
  async get(campaignId: string, opts: { fields?: string[]; excludeFields?: string[] } = {}): Promise<ApiResponse<Campaign>> {
    if (!campaignId) {
      throw new Error("Missing required parameter 'campaignId'");
    }

    const pathParams = { campaign_id: campaignId };
    const queryParams = {
      fields: this.apiClient.buildCollectionParam(opts.fields, 'csv'),
      exclude_fields: this.apiClient.buildCollectionParam(opts.excludeFields, 'csv'),
    };
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns/{campaign_id}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      null,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response;
  }

  /**
   * Schedule campaign
   * Schedule a campaign for delivery.
   */
  async schedule(campaignId: string, body: ScheduleBody): Promise<void> {
    if (!campaignId || !body) {
      throw new Error("Missing required parameters");
    }

    const pathParams = { campaign_id: campaignId };
    const queryParams = {};
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns/{campaign_id}/actions/schedule',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      body,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response.data;
  }

  /**
   * Send campaign
   * Send a Mailchimp campaign.
   */
  async send(campaignId: string): Promise<void> {
    if (!campaignId) {
      throw new Error("Missing required parameter 'campaignId'");
    }

    const pathParams = { campaign_id: campaignId };
    const queryParams = {};
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns/{campaign_id}/actions/send',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      null,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response.data;
  }

  /**
   * Send test email
   * Send a test email.
   */
  async sendTestEmail(campaignId: string, body: TestEmailBody): Promise<void> {
    if (!campaignId || !body) {
      throw new Error("Missing required parameters");
    }

    const pathParams = { campaign_id: campaignId };
    const queryParams = {};
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns/{campaign_id}/actions/test',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      body,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response.data;
  }

  /**
   * Create a new Mailchimp campaign.
   */
  async create(body: CreateCampaignParameters): Promise<ApiResponse<Campaigns>> {
    if (!body) {
      throw new Error("Missing required parameter 'body'");
    }

    const pathParams = {};
    const queryParams = {};
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      body,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response.data;
  }

  /**
   * Update campaign settings
   * Update some or all of the settings for a specific campaign.
   */
  async update(campaignId: string, body: Partial<CreateCampaignParameters>): Promise<ApiResponse<Campaigns>> {
    if (!campaignId || !body) {
      throw new Error("Missing required parameters");
    }

    const pathParams = { campaign_id: campaignId };
    const queryParams = {};
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns/{campaign_id}',
      'PATCH',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      body,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response.data;
  }

  /**
   * Set campaign content
   * Set the content for a campaign.
   */
  async setContent(campaignId: string, body: SetContentParams): Promise<ApiResponse<CampaignContentSuccessResponse>> {
    if (!campaignId || !body) {
      throw new Error("Missing required parameters");
    }

    const pathParams = { campaign_id: campaignId };
    const queryParams = {};
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns/{campaign_id}/content',
      'PUT',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      body,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response.data;
  }

  /**
   * Get campaign content
   * Get the HTML and plain-text content for a campaign.
   */
  async getContent(campaignId: string, opts: GetCampaignContentOptions = {}): Promise<ApiResponse<CampaignContentSuccessResponse>> {
    if (!campaignId) {
      throw new Error("Missing required parameter 'campaignId'");
    }

    const pathParams = { campaign_id: campaignId };
    const queryParams = {
      fields: this.apiClient.buildCollectionParam(opts.fields, 'csv'),
      exclude_fields: this.apiClient.buildCollectionParam(opts.excludeFields, 'csv'),
    };
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns/{campaign_id}/content',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      null,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response.data;
  }

  /**
   * Get campaign send checklist
   * Review the send checklist for a campaign, and resolve any issues before sending.
   */
  async getSendChecklist(campaignId: string, opts: GetSendChecklistOptions = {}): Promise<ApiResponse<SendChecklist>> {
    if (!campaignId) {
      throw new Error("Missing required parameter 'campaignId'");
    }

    const pathParams = { campaign_id: campaignId };
    const queryParams = {
      fields: this.apiClient.buildCollectionParam(opts.fields, 'csv'),
      exclude_fields: this.apiClient.buildCollectionParam(opts.excludeFields, 'csv'),
    };
    const headerParams = {};
    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    const response = await this.apiClient.callApi(
      '/campaigns/{campaign_id}/send-checklist',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      null,
      authNames,
      contentTypes,
      accepts,
      returnType
    );

    return response.data;
  }

  // Additional methods can be added following the same pattern...
}