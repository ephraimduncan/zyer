/**
 *
 * @author: Ephraim Atta-Duncan
 * @name: zyer.js (Inspired by Axios)
 * @license: MIT
 *
 */

/**
 * main zyer class.
 */
class zyer {
  constructor() {
    this.zyer = new XMLHttpRequest();
  }

  /**
   *
   * url: The end point you are making the get request to
   * header: [optional](array) if you have headers (authentication and authorization)
   *
   */

  get(url, header = ['Accept', 'application/json']) {
    return new Promise((resolve, reject) => {
      this.zyer.open('GET', url);
      this.zyer.setRequestHeader(...header);

      this.zyer.onload = () => {
        if (this.zyer.status === 200) {
          resolve(JSON.parse(this.zyer.responseText));
        } else {
          reject(
            new Error(
              `zyer: "${url}" failed with status: [${this.zyer.status} ${this.zyer.statusText}]`,
            ),
          );
        }
      };

      this.zyer.send();
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
      this.zyer.open('POST', url);
      this.zyer.setRequestHeader(...header);

      this.zyer.onload = () => {
        if (this.zyer.status === 200) {
          resolve(JSON.parse(this.zyer.responseText));
        } else {
          reject(
            new Error(
              `zyer: "${url}" failed with status: [${this.zyer.status} ${this.zyer.statusText}]`,
            ),
          );
        }
      };
      this.zyer.send(JSON.stringify(data));
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
      this.zyer.open('PUT', url);
      this.zyer.setRequestHeader(...header);

      this.zyer.onload = () => {
        if (this.zyer.status === 200) {
          resolve(JSON.parse(this.zyer.responseText));
        } else {
          reject(
            new Error(
              `zyer: "${url}" failed with status: [${this.zyer.status} ${this.zyer.statusText}]`,
            ),
          );
        }
      };
      this.zyer.send(JSON.stringify(data));
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
      this.zyer.open('DELETE', url);
      this.zyer.setRequestHeader(...header);

      this.zyer.onload = () => {
        if (this.zyer.status === 200) {
          resolve(JSON.parse(this.zyer.responseText));
        } else {
          reject(
            new Error(
              `zyer: "${url}" failed with status: [${this.zyer.status} ${this.zyer.statusText}]`,
            ),
          );
        }
      };
      this.zyer.send();
    });
  }
}
