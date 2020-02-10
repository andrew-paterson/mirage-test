import ENV from '../config/environment';

export default function () {
  this.urlPrefix = `${ENV.apiProtocol}${ENV.apiHost}`;
  this.namespace = '/v1/';
 
  // General passThrough
  // this.passthrough();

  // Attempt 1
  // this.namespace = '';
  
  // Attempt 2
  this.passthrough('/**');

  // Attempt 3
  // this.passthrough(`/markdown/markdown-file.md`);

  // Works, but it would be great not to be able to use a relative path
  // this.passthrough(`https://localhost:4200/markdown/markdown-file.md`);

  this.passthrough();
}
