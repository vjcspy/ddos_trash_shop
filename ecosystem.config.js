module.exports = {
  apps: [{
    name: 'ddos_i1',
    script: 'build/main/index.js',
    instances: '4',
    exec_mode: 'cluster'
  }]
};
