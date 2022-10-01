module.exports = {
    ci: {
      collect: {
        staticDistDir: './',
        url: ['http://127.0.0.1:80/lighthouse/index.html']
      },
      upload: {
        target:lhci
        //target: 'temporary-public-storage',
      },
    },
  };