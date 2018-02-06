// need to add a test for this
module.exports.list_routes = (server) => {
  return Object.keys(server.router.mounts)
            .filter((k) => server.router.mounts.hasOwnProperty(k))
              .map((k) => {
                const val = server.router.mounts[k]
                const { path, method, versions } = val.spec
                return {
                  path,
                  method,
                  versions
                }
              })
}
