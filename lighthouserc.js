module.exports = {
    ci: {
      collect: {
        staticDistDir: './public',
        url: ['http://localhost:8080/index.html']
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };