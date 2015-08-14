/* jshint node: true */
module.exports = {
  production: {
    store: {
      type: 'ssh',
      remoteDir: '/root/garage-fe/',
      host: 'garage',
      username: 'root',
      privateKeyFile: '/home/charlie/.ssh/garage_deploy_key',
    },
    assets: {
      type: 'rsync',
      dest: 'root@garage:~/garage-fe/',
      ssh: true,
      port: 22,
      gzip: false,
      privateKey: '~/.ssh/garage_deploy_key',
      args: ['-avz', '--no-p']
    }
  }
};
