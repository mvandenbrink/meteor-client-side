(function() {
  var _ = Package['underscore']._;
  var config = this.__meteor_runtime_config__ || {};

  __meteor_runtime_config__ = _.defaults(
    {}, 
    {
      meteorEnv: {},
      DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000'
    },
    config
  );
}).call(this);
