module.exports = {
    ci: {
      collect: {
        staticDistDir: './public',
        url: ['http://127.0.0.1/lighthouse/']
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };