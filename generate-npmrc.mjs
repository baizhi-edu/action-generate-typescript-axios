#!/usr/bin/env zx

const {registry, username, password, email} = argv

const registryPath = registry.replace(/^.*?:/, '')

fs.writeFileSync('.npmrc', `
registry=${registry}
always-auth=true
${registryPath}:username=${username}
${registryPath}:_password=${password}
${registryPath}:email=${email}
`.trim())
