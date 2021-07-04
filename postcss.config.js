const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const nesting = require('tailwindcss/nesting');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const prod = mode === 'production';

module.exports = {
  plugins: [
    nesting(),
    tailwindcss(),
    autoprefixer(),

    prod &&
      cssnano({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }),
  ],
};
