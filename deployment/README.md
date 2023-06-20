# Deployment
Uses AWS CodeBuild to compose Docker container in AWS for easy deployment.

## Initial Setup
- Install and configure `awscli`
- set up **dev**:
  - Create the `CodeBuildServiceRole-resumeWebsiteDev` role by running the following from the `deployment/dev` directory:
```bash
aws cloudformation create-stack \
--stack-name resume-site-dev \
--template-body file://CodeBuildServiceRole \
--parameters \
    ParameterKey=CodeBuildServiceRoleName, \
    ParameterValue=CodeBuildServiceRole-resumeWebsiteDev
```
  - Run the following command from the `deployment/dev` directory:
```bash
aws codebuild create-project --cli-input-json file://buildspec.json
```
- set up **prod**:
  - Create the `CodeBuildServiceRole-resumeWebsite` role by running the following from the `deployment/prod` directory:
```bash
aws cloudformation create-stack \
--stack-name resume-site \
--template-body file://CodeBuildServiceRole \
--parameters \
    ParameterKey=CodeBuildServiceRoleName, \
    ParameterValue=CodeBuildServiceRole-resumeWebsite
```
  - Run the following command from the `deployment/prod` directory:
```bash
aws codebuild create-project --cli-input-json file://buildspec.json
```

## Deployment


## Uninstall
- remove **dev**
    - remove the CodeBuild project:
```bash
aws codebuild delete-project --name Resume-website-dev
```
- remove the CodeBuild role:
```bash
aws cloudformation delete-stack --stack-name resume-site-dev
```
- remove **prod**
    - remove the CodeBuild project:


```bash
aws codebuild delete-project --name Resume-website
```

  - remove the CodeBuild role:

```bash
aws cloudformation delete-stack --stack-name resume-site
```