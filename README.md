# Action-Generate-Typescript-Axios-Client

## Inputs

```yaml
inputs:
  openapi-file:
    # openapi 文件路径
    description: openapi file path
    required: false
    default: openapi.yml
  project-name:
    # 项目名称
    description: project name
    required: true
  registry:
    # npm 仓库链接
    description: npm registry url
    required: true
  username:
    # npm 仓库用户名
    description: npm registry username
    required: true
  password:
    # npm 仓库密码
    description: npm registry password
    required: true
  email:
    # npm 仓库邮箱
    description: npm registry user email
    required: true

```

