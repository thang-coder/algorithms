require('es6-promise').polyfill();
require('isomorphic-fetch');

const MARKDOWN_RAW = 'markdown/raw';

// polyfill for https://nodejs.org/api/assert.html#assert_assert_value_message
const assert = assert || ((truthy, err) => {
  if (!truthy)
  {
    throw new Error(err);
  }
});

/**
* Wrap around GitHub API
*/
export default class GitHub
{
  static instance = new GitHub();

  post(target, { body })
  {
    let configurations = {
        method: 'POST',
        body
    };

    const targetConfigurations = {
      // syntax of computed property name: [expression] : value
      [MARKDOWN_RAW]: {
        headers: new Headers({
        'content-type': 'text/plain'
        })
      }
    };

    configurations = Object.assign(configurations, targetConfigurations[target]);

    return configurations;
  }

  /**
  * @param {string} markdown text to be sent to GitHub Markdown Raw API
  * @return {promise} that resolves with an HTML string
  */
  static ConvertToHtml(markdown)
  {
    assert(GitHub.instance, 'Cannot access static instance.');
    return GitHub.instance.post(MARKDOWN_RAW, { body: markdown });
  }
}