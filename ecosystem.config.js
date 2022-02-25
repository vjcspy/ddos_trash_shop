module.exports = {
  apps: [{
    name: 'ddos_i1',
    script: 'build/main/index.js',
    instances: 'max',
    exec_mode: 'cluster'
  }]
};
