module.exports = {
  apps: [{
    name: 'ddos_i1',
    script: 'build/main/index.js',
    instances: '1',
    exec_mode: 'cluster'
  }]
};
