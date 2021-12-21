#!/usr/bin/env zx

let openapiGenerator = 'openapi-generator'
if (await $`type ${openapiGenerator}`.exitCode !== 0) {
  openapiGenerator = 'openapi-generator-cli'
}

const {openapi, project, output} = argv

const additionalProperties = [
  `npmName=${project}`,
  'supportsES6=true',
  'withSeparateModelsAndApi=true',
  'withInterfaces=true'
]

$`${openapiGenerator} generate \
  -i ${openapi} \
  -g typescript-axios \
  -o ${output} \
  --model-package 'model' \
  --api-package 'api' \
  -t ${path.join(__dirname, 'typescript-axios')} \
  --additional-properties ${additionalProperties.join(',')}
`
