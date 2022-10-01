module.exports = {
    ci: {
      collect: {
        staticDistDir: './public',
        url: ['http://localhost:8080']
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };