module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    //
    // Use profiler-enabled React builds
    //
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    };

    //
    // Disable mangling for easier profiling
    // WARNING: This increases bundle size, DO NOT DO THIS in production!
    //
    const terser = config.optimization.minimizer.find(
      (plugin) =>
        typeof plugin.options !== 'undefined' && typeof plugin.options.terserOptions !== 'undefined'
    );
    if (terser) {
      terser.options.terserOptions = {
        ...terser.options.terserOptions,
        keep_classnames: true,
        keep_fnames: true,
      };
    }

    return config;
  },
};
