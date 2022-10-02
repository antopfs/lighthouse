module.exports = {
    ci: {
      collect: {
        staticDistDir: './',
        url: ['http://127.0.0.1:80/']
      },
      upload: {
        target: 'temporary-public-storage',
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 0.5}],
          'categories:accessibility': ['error', {minScore: 0.5}],
          'categories:seo': ['error', {minScore: 0.5}]
        }
      },
    },
  };