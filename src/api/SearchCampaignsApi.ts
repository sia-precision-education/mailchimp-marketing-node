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
import { Campaigns } from '../types/mailchimp';

/**
 * SearchCampaigns service.
 * @module api/SearchCampaignsApi
 */

// Define an interface for the options parameter
interface SearchOptions {
  fields?: string[];
  excludeFields?: string[];
}

/**
 * Constructs a new SearchCampaignsApi.
 * @alias module:api/SearchCampaignsApi
 * @class
 */
class SearchCampaignsApi {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Search campaigns
   * Search all campaigns for the specified query terms.
   * @param {string} query The search query used to filter results.
   * @param {Object} opts Optional parameters
   * @param {Array.<string>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<string>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise<Campaigns>} a Promise, with an object containing data of type Campaigns and HTTP response
   */
  public searchWithHttpInfo(query: string, opts: SearchOptions = {}): Promise<Campaigns> {
    const postBody = null;

    // verify the required parameter 'query' is set
    if (query === undefined || query === null) {
      throw new Error("Missing the required parameter 'query' when calling ");
    }

    const pathParams = {};

    const queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts.fields, 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts.excludeFields, 'csv'),
      'query': query
    };
    const headerParams = {};

    const formParams = {};

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json', 'application/problem+json'];
    const returnType = 'application/json';

    return this.apiClient.callApi(
      '/search-campaigns', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Search campaigns
   * Search all campaigns for the specified query terms.
   * @param {string} query The search query used to filter results.
   * @param {Object} opts Optional parameters
   * @param {Array.<string>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<string>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise<Campaigns>} a Promise, with data of type Campaigns
   */
  public search(query: string, opts: SearchOptions = {}): Promise<Campaigns> {
    return this.searchWithHttpInfo(query, opts)
      .then(response_and_data => response_and_data.data);
  }
}

export default SearchCampaignsApi;
