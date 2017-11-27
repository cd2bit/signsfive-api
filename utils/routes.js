// need to add a test for this
module.exports.list_routes = function(server){
  return Object.keys(server.router.mounts)
                .filter(function(k){ return server.router.mounts.hasOwnProperty(k); })
                .map(function(k){
                  var val = server.router.mounts[k];
                  return {path: val.spec.path, method: val.spec.method, versions: val.spec.versions};
                });
};
