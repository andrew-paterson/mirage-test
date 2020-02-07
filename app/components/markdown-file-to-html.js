import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['dataTestComponent:data-test-component'],
  dataTestComponent: 'markdown-content',
  
  didInsertElement() {
    fetch(this.get('filePath')).then(response => {
      response.text().then(result => {
        this.set('markdown', result);
      });
    });
  }
});