import path from 'path';

export default {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  resolvers: [
    {
      alias(id: string) {
        return id.replace(/^@\//, '/@/');
      },
    },
  ],
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        'preprocess-custom-color': 'green'
      }
    }
  },
};
