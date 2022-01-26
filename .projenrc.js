const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "cyrilgdn/postgresql@~> 1.14",
  cdktfVersion: '^0.9',
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.46.0",
});

project.synth();
