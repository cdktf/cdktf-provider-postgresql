# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-postgresql.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlProvider <a name="PostgresqlProvider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new PostgresqlProvider(Construct Scope, string Id, PostgresqlProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig">PostgresqlProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig">PostgresqlProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamAuth">ResetAwsRdsIamAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProfile">ResetAwsRdsIamProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamRegion">ResetAwsRdsIamRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAzureIdentityAuth">ResetAzureIdentityAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetClientcert">ResetClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabaseUsername">ResetDatabaseUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetExpectedVersion">ResetExpectedVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslmode">ResetSslmode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslMode">ResetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslrootcert">ResetSslrootcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSuperuser">ResetSuperuser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAwsRdsIamAuth` <a name="ResetAwsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamAuth"></a>

```csharp
private void ResetAwsRdsIamAuth()
```

##### `ResetAwsRdsIamProfile` <a name="ResetAwsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProfile"></a>

```csharp
private void ResetAwsRdsIamProfile()
```

##### `ResetAwsRdsIamRegion` <a name="ResetAwsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamRegion"></a>

```csharp
private void ResetAwsRdsIamRegion()
```

##### `ResetAzureIdentityAuth` <a name="ResetAzureIdentityAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAzureIdentityAuth"></a>

```csharp
private void ResetAzureIdentityAuth()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAzureTenantId"></a>

```csharp
private void ResetAzureTenantId()
```

##### `ResetClientcert` <a name="ResetClientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetClientcert"></a>

```csharp
private void ResetClientcert()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDatabaseUsername` <a name="ResetDatabaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabaseUsername"></a>

```csharp
private void ResetDatabaseUsername()
```

##### `ResetExpectedVersion` <a name="ResetExpectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetExpectedVersion"></a>

```csharp
private void ResetExpectedVersion()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetMaxConnections"></a>

```csharp
private void ResetMaxConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetScheme"></a>

```csharp
private void ResetScheme()
```

##### `ResetSslmode` <a name="ResetSslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslmode"></a>

```csharp
private void ResetSslmode()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslMode"></a>

```csharp
private void ResetSslMode()
```

##### `ResetSslrootcert` <a name="ResetSslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslrootcert"></a>

```csharp
private void ResetSslrootcert()
```

##### `ResetSuperuser` <a name="ResetSuperuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSuperuser"></a>

```csharp
private void ResetSuperuser()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

PostgresqlProvider.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

PostgresqlProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

PostgresqlProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

PostgresqlProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PostgresqlProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresqlProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresqlProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput">AwsRdsIamAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput">AwsRdsIamProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput">AwsRdsIamRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuthInput">AzureIdentityAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput">ClientcertInput</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput">DatabaseUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput">ExpectedVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput">SslmodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput">SslrootcertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuserInput">SuperuserInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth">AwsRdsIamAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile">AwsRdsIamProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion">AwsRdsIamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuth">AzureIdentityAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcert">Clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername">DatabaseUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion">ExpectedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmode">Sslmode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert">Sslrootcert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuser">Superuser</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AwsRdsIamAuthInput`<sup>Optional</sup> <a name="AwsRdsIamAuthInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput"></a>

```csharp
public object AwsRdsIamAuthInput { get; }
```

- *Type:* object

---

##### `AwsRdsIamProfileInput`<sup>Optional</sup> <a name="AwsRdsIamProfileInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput"></a>

```csharp
public string AwsRdsIamProfileInput { get; }
```

- *Type:* string

---

##### `AwsRdsIamRegionInput`<sup>Optional</sup> <a name="AwsRdsIamRegionInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput"></a>

```csharp
public string AwsRdsIamRegionInput { get; }
```

- *Type:* string

---

##### `AzureIdentityAuthInput`<sup>Optional</sup> <a name="AzureIdentityAuthInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuthInput"></a>

```csharp
public object AzureIdentityAuthInput { get; }
```

- *Type:* object

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureTenantIdInput"></a>

```csharp
public string AzureTenantIdInput { get; }
```

- *Type:* string

---

##### `ClientcertInput`<sup>Optional</sup> <a name="ClientcertInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput"></a>

```csharp
public PostgresqlProviderClientcert ClientcertInput { get; }
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput"></a>

```csharp
public double ConnectTimeoutInput { get; }
```

- *Type:* double

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DatabaseUsernameInput`<sup>Optional</sup> <a name="DatabaseUsernameInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput"></a>

```csharp
public string DatabaseUsernameInput { get; }
```

- *Type:* string

---

##### `ExpectedVersionInput`<sup>Optional</sup> <a name="ExpectedVersionInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput"></a>

```csharp
public string ExpectedVersionInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput"></a>

```csharp
public double MaxConnectionsInput { get; }
```

- *Type:* double

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `SslmodeInput`<sup>Optional</sup> <a name="SslmodeInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput"></a>

```csharp
public string SslmodeInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `SslrootcertInput`<sup>Optional</sup> <a name="SslrootcertInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput"></a>

```csharp
public string SslrootcertInput { get; }
```

- *Type:* string

---

##### `SuperuserInput`<sup>Optional</sup> <a name="SuperuserInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuserInput"></a>

```csharp
public object SuperuserInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AwsRdsIamAuth`<sup>Optional</sup> <a name="AwsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth"></a>

```csharp
public object AwsRdsIamAuth { get; }
```

- *Type:* object

---

##### `AwsRdsIamProfile`<sup>Optional</sup> <a name="AwsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile"></a>

```csharp
public string AwsRdsIamProfile { get; }
```

- *Type:* string

---

##### `AwsRdsIamRegion`<sup>Optional</sup> <a name="AwsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion"></a>

```csharp
public string AwsRdsIamRegion { get; }
```

- *Type:* string

---

##### `AzureIdentityAuth`<sup>Optional</sup> <a name="AzureIdentityAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuth"></a>

```csharp
public object AzureIdentityAuth { get; }
```

- *Type:* object

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `Clientcert`<sup>Optional</sup> <a name="Clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcert"></a>

```csharp
public PostgresqlProviderClientcert Clientcert { get; }
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; }
```

- *Type:* double

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DatabaseUsername`<sup>Optional</sup> <a name="DatabaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername"></a>

```csharp
public string DatabaseUsername { get; }
```

- *Type:* string

---

##### `ExpectedVersion`<sup>Optional</sup> <a name="ExpectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion"></a>

```csharp
public string ExpectedVersion { get; }
```

- *Type:* string

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `Sslmode`<sup>Optional</sup> <a name="Sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmode"></a>

```csharp
public string Sslmode { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `Sslrootcert`<sup>Optional</sup> <a name="Sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert"></a>

```csharp
public string Sslrootcert { get; }
```

- *Type:* string

---

##### `Superuser`<sup>Optional</sup> <a name="Superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuser"></a>

```csharp
public object Superuser { get; }
```

- *Type:* object

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlProviderClientcert <a name="PostgresqlProviderClientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new PostgresqlProviderClientcert {
    string Cert,
    string Key,
    object Sslinline = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert">Cert</a></code> | <code>string</code> | The SSL client certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.key">Key</a></code> | <code>string</code> | The SSL client certificate private key file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.sslinline">Sslinline</a></code> | <code>object</code> | Must be set to true if you are inlining the cert/key instead of using a file path. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

The SSL client certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#cert PostgresqlProvider#cert}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The SSL client certificate private key file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#key PostgresqlProvider#key}

---

##### `Sslinline`<sup>Optional</sup> <a name="Sslinline" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.sslinline"></a>

```csharp
public object Sslinline { get; set; }
```

- *Type:* object

Must be set to true if you are inlining the cert/key instead of using a file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#sslinline PostgresqlProvider#sslinline}

---

### PostgresqlProviderConfig <a name="PostgresqlProviderConfig" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new PostgresqlProviderConfig {
    string Alias = null,
    object AwsRdsIamAuth = null,
    string AwsRdsIamProfile = null,
    string AwsRdsIamRegion = null,
    object AzureIdentityAuth = null,
    string AzureTenantId = null,
    PostgresqlProviderClientcert Clientcert = null,
    double ConnectTimeout = null,
    string Database = null,
    string DatabaseUsername = null,
    string ExpectedVersion = null,
    string Host = null,
    double MaxConnections = null,
    string Password = null,
    double Port = null,
    string Scheme = null,
    string Sslmode = null,
    string SslMode = null,
    string Sslrootcert = null,
    object Superuser = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth">AwsRdsIamAuth</a></code> | <code>object</code> | Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile">AwsRdsIamProfile</a></code> | <code>string</code> | AWS profile to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion">AwsRdsIamRegion</a></code> | <code>string</code> | AWS region to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.azureIdentityAuth">AzureIdentityAuth</a></code> | <code>object</code> | Use MS Azure identity OAuth token (see: https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-sign-in-azure-ad-authentication). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | MS Azure tenant ID (see: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config.html). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert">Clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | clientcert block. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.database">Database</a></code> | <code>string</code> | The name of the database to connect to in order to conenct to (defaults to `postgres`). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername">DatabaseUsername</a></code> | <code>string</code> | Database username associated to the connected user (for user name maps). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion">ExpectedVersion</a></code> | <code>string</code> | Specify the expected version of PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.host">Host</a></code> | <code>string</code> | Name of PostgreSQL server address to connect to. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections">MaxConnections</a></code> | <code>double</code> | Maximum number of connections to establish to the database. Zero means unlimited. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.password">Password</a></code> | <code>string</code> | Password to be used if the PostgreSQL server demands password authentication. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.port">Port</a></code> | <code>double</code> | The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#scheme PostgresqlProvider#scheme}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode">Sslmode</a></code> | <code>string</code> | This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#ssl_mode PostgresqlProvider#ssl_mode}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert">Sslrootcert</a></code> | <code>string</code> | The SSL server root certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser">Superuser</a></code> | <code>object</code> | Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.username">Username</a></code> | <code>string</code> | PostgreSQL user name to connect as. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#alias PostgresqlProvider#alias}

---

##### `AwsRdsIamAuth`<sup>Optional</sup> <a name="AwsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth"></a>

```csharp
public object AwsRdsIamAuth { get; set; }
```

- *Type:* object

Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#aws_rds_iam_auth PostgresqlProvider#aws_rds_iam_auth}

---

##### `AwsRdsIamProfile`<sup>Optional</sup> <a name="AwsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile"></a>

```csharp
public string AwsRdsIamProfile { get; set; }
```

- *Type:* string

AWS profile to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#aws_rds_iam_profile PostgresqlProvider#aws_rds_iam_profile}

---

##### `AwsRdsIamRegion`<sup>Optional</sup> <a name="AwsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion"></a>

```csharp
public string AwsRdsIamRegion { get; set; }
```

- *Type:* string

AWS region to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#aws_rds_iam_region PostgresqlProvider#aws_rds_iam_region}

---

##### `AzureIdentityAuth`<sup>Optional</sup> <a name="AzureIdentityAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.azureIdentityAuth"></a>

```csharp
public object AzureIdentityAuth { get; set; }
```

- *Type:* object

Use MS Azure identity OAuth token (see: https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-sign-in-azure-ad-authentication).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#azure_identity_auth PostgresqlProvider#azure_identity_auth}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

MS Azure tenant ID (see: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#azure_tenant_id PostgresqlProvider#azure_tenant_id}

---

##### `Clientcert`<sup>Optional</sup> <a name="Clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert"></a>

```csharp
public PostgresqlProviderClientcert Clientcert { get; set; }
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

clientcert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#clientcert PostgresqlProvider#clientcert}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; set; }
```

- *Type:* double

Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#connect_timeout PostgresqlProvider#connect_timeout}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The name of the database to connect to in order to conenct to (defaults to `postgres`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#database PostgresqlProvider#database}

---

##### `DatabaseUsername`<sup>Optional</sup> <a name="DatabaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername"></a>

```csharp
public string DatabaseUsername { get; set; }
```

- *Type:* string

Database username associated to the connected user (for user name maps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#database_username PostgresqlProvider#database_username}

---

##### `ExpectedVersion`<sup>Optional</sup> <a name="ExpectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion"></a>

```csharp
public string ExpectedVersion { get; set; }
```

- *Type:* string

Specify the expected version of PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#expected_version PostgresqlProvider#expected_version}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Name of PostgreSQL server address to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#host PostgresqlProvider#host}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections"></a>

```csharp
public double MaxConnections { get; set; }
```

- *Type:* double

Maximum number of connections to establish to the database. Zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#max_connections PostgresqlProvider#max_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password to be used if the PostgreSQL server demands password authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#password PostgresqlProvider#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#port PostgresqlProvider#port}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#scheme PostgresqlProvider#scheme}.

---

##### `Sslmode`<sup>Optional</sup> <a name="Sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode"></a>

```csharp
public string Sslmode { get; set; }
```

- *Type:* string

This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#sslmode PostgresqlProvider#sslmode}

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#ssl_mode PostgresqlProvider#ssl_mode}.

---

##### `Sslrootcert`<sup>Optional</sup> <a name="Sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert"></a>

```csharp
public string Sslrootcert { get; set; }
```

- *Type:* string

The SSL server root certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#sslrootcert PostgresqlProvider#sslrootcert}

---

##### `Superuser`<sup>Optional</sup> <a name="Superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser"></a>

```csharp
public object Superuser { get; set; }
```

- *Type:* object

Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#superuser PostgresqlProvider#superuser}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

PostgreSQL user name to connect as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs#username PostgresqlProvider#username}

---



