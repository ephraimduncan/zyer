/**
 *
 * @author: Ephraim Atta-Duncan
 * @name: Zyre.js (Inspired by Axios)
 * @license: MIT
 *
 */

/**
 * main Zyre class.
 */
class zyre {
  constructor() {
    this.zyre = new XMLHttpRequest();
  }

  /**
   *
   * url: The end point you are making the get request to
   * header: [optional](array) if you have headers (authentication and authorization)
   *
   */

  get(url, header = ['Accept', 'application/json']) {
    return new Promise((resolve, reject) => {
      this.zyre.open('GET', url);
      this.zyre.setRequestHeader(...header);

      this.zyre.onload = () => {
        if (this.zyre.status === 200) {
          resolve(JSON.parse(this.zyre.responseText));
        } else {
          reject(
            new Error(
              `zyre: "${url}" failed with status: [${this.zyre.status} ${this.zyre.statusText}]`,
            ),
          );
        }
      };

      this.zyre.send();
    });
  }

  /**
   *
   * url: The end point you are making the post request to
   * data: (object) The data you are sending to the endpoint
   * header: [optional](array) if you have headers (authentication and authorization)
   *
   */
  post(url, data, header = ['Content-type', 'application/json']) {
    return new Promise((resolve, reject) => {
      this.zyre.open('POST', url);
      this.zyre.setRequestHeader(...header);

      this.zyre.onload = () => {
        if (this.zyre.status === 200) {
          resolve(JSON.parse(this.zyre.responseText));
        } else {
          reject(
            new Error(
              `zyre: "${url}" failed with status: [${this.zyre.status} ${this.zyre.statusText}]`,
            ),
          );
        }
      };
      this.zyre.send(JSON.stringify(data));
    });
  }

  /**
   *
   * url: The end point you are making the update request to
   * data: (object) The data you are sending to the endpoint
   * header: [optional](array) if you have headers (authentication and authorization)
   *
   */
  put(url, data, header = ['Content-type', 'application/json']) {
    return new Promise((resolve, reject) => {
      this.zyre.open('PUT', url);
      this.zyre.setRequestHeader(...header);

      this.zyre.onload = () => {
        if (this.zyre.status === 200) {
          resolve(JSON.parse(this.zyre.responseText));
        } else {
          reject(
            new Error(
              `zyre: "${url}" failed with status: [${this.zyre.status} ${this.zyre.statusText}]`,
            ),
          );
        }
      };
      this.zyre.send(JSON.stringify(data));
    });
  }

  /**
   *
   * url: The end point you are making the delete request to
   * header: [optional](array) if you have headers (authentication and authorization)
   *
   */

  delete(url, header = ['Content-type', 'application/json']) {
    return new Promise((resolve, reject) => {
      this.zyre.open('DELETE', url);
      this.zyre.setRequestHeader(...header);

      this.zyre.onload = () => {
        if (this.zyre.status === 200) {
          resolve(JSON.parse(this.zyre.responseText));
        } else {
          reject(
            new Error(
              `zyre: "${url}" failed with status: [${this.zyre.status} ${this.zyre.statusText}]`,
            ),
          );
        }
      };
      this.zyre.send();
    });
  }
}
