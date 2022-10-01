module.exports = {
    ci: {
      collect: {
        staticDistDir: './public',
        url: ['http://127.0.0.1:80/lighthouse/build/index.html']
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };