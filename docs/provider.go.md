# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-postgresql.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlProvider <a name="PostgresqlProvider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/provider"

provider.NewPostgresqlProvider(scope Construct, id *string, config PostgresqlProviderConfig) PostgresqlProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig">PostgresqlProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAwsRdsIamAuth` <a name="ResetAwsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamAuth"></a>

```go
func ResetAwsRdsIamAuth()
```

##### `ResetAwsRdsIamProfile` <a name="ResetAwsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProfile"></a>

```go
func ResetAwsRdsIamProfile()
```

##### `ResetAwsRdsIamRegion` <a name="ResetAwsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamRegion"></a>

```go
func ResetAwsRdsIamRegion()
```

##### `ResetClientcert` <a name="ResetClientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetClientcert"></a>

```go
func ResetClientcert()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDatabaseUsername` <a name="ResetDatabaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabaseUsername"></a>

```go
func ResetDatabaseUsername()
```

##### `ResetExpectedVersion` <a name="ResetExpectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetExpectedVersion"></a>

```go
func ResetExpectedVersion()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetHost"></a>

```go
func ResetHost()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetMaxConnections"></a>

```go
func ResetMaxConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPort"></a>

```go
func ResetPort()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetScheme"></a>

```go
func ResetScheme()
```

##### `ResetSslmode` <a name="ResetSslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslmode"></a>

```go
func ResetSslmode()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslMode"></a>

```go
func ResetSslMode()
```

##### `ResetSslrootcert` <a name="ResetSslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslrootcert"></a>

```go
func ResetSslrootcert()
```

##### `ResetSuperuser` <a name="ResetSuperuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSuperuser"></a>

```go
func ResetSuperuser()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetUsername"></a>

```go
func ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/provider"

provider.PostgresqlProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/provider"

provider.PostgresqlProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/provider"

provider.PostgresqlProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput">AwsRdsIamAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput">AwsRdsIamProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput">AwsRdsIamRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput">ClientcertInput</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput">DatabaseUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput">ExpectedVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput">SslmodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput">SslrootcertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuserInput">SuperuserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth">AwsRdsIamAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile">AwsRdsIamProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion">AwsRdsIamRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcert">Clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername">DatabaseUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion">ExpectedVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmode">Sslmode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert">Sslrootcert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuser">Superuser</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AwsRdsIamAuthInput`<sup>Optional</sup> <a name="AwsRdsIamAuthInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput"></a>

```go
func AwsRdsIamAuthInput() interface{}
```

- *Type:* interface{}

---

##### `AwsRdsIamProfileInput`<sup>Optional</sup> <a name="AwsRdsIamProfileInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput"></a>

```go
func AwsRdsIamProfileInput() *string
```

- *Type:* *string

---

##### `AwsRdsIamRegionInput`<sup>Optional</sup> <a name="AwsRdsIamRegionInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput"></a>

```go
func AwsRdsIamRegionInput() *string
```

- *Type:* *string

---

##### `ClientcertInput`<sup>Optional</sup> <a name="ClientcertInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput"></a>

```go
func ClientcertInput() PostgresqlProviderClientcert
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DatabaseUsernameInput`<sup>Optional</sup> <a name="DatabaseUsernameInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput"></a>

```go
func DatabaseUsernameInput() *string
```

- *Type:* *string

---

##### `ExpectedVersionInput`<sup>Optional</sup> <a name="ExpectedVersionInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput"></a>

```go
func ExpectedVersionInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput"></a>

```go
func MaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `SslmodeInput`<sup>Optional</sup> <a name="SslmodeInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput"></a>

```go
func SslmodeInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `SslrootcertInput`<sup>Optional</sup> <a name="SslrootcertInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput"></a>

```go
func SslrootcertInput() *string
```

- *Type:* *string

---

##### `SuperuserInput`<sup>Optional</sup> <a name="SuperuserInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuserInput"></a>

```go
func SuperuserInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `AwsRdsIamAuth`<sup>Optional</sup> <a name="AwsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth"></a>

```go
func AwsRdsIamAuth() interface{}
```

- *Type:* interface{}

---

##### `AwsRdsIamProfile`<sup>Optional</sup> <a name="AwsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile"></a>

```go
func AwsRdsIamProfile() *string
```

- *Type:* *string

---

##### `AwsRdsIamRegion`<sup>Optional</sup> <a name="AwsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion"></a>

```go
func AwsRdsIamRegion() *string
```

- *Type:* *string

---

##### `Clientcert`<sup>Optional</sup> <a name="Clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcert"></a>

```go
func Clientcert() PostgresqlProviderClientcert
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DatabaseUsername`<sup>Optional</sup> <a name="DatabaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername"></a>

```go
func DatabaseUsername() *string
```

- *Type:* *string

---

##### `ExpectedVersion`<sup>Optional</sup> <a name="ExpectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion"></a>

```go
func ExpectedVersion() *string
```

- *Type:* *string

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `Sslmode`<sup>Optional</sup> <a name="Sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmode"></a>

```go
func Sslmode() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `Sslrootcert`<sup>Optional</sup> <a name="Sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert"></a>

```go
func Sslrootcert() *string
```

- *Type:* *string

---

##### `Superuser`<sup>Optional</sup> <a name="Superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuser"></a>

```go
func Superuser() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlProviderClientcert <a name="PostgresqlProviderClientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/provider"

&provider.PostgresqlProviderClientcert {
	Cert: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert">Cert</a></code> | <code>*string</code> | The SSL client certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.key">Key</a></code> | <code>*string</code> | The SSL client certificate private key file path. The file must contain PEM encoded data. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert"></a>

```go
Cert *string
```

- *Type:* *string

The SSL client certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#cert PostgresqlProvider#cert}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.key"></a>

```go
Key *string
```

- *Type:* *string

The SSL client certificate private key file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#key PostgresqlProvider#key}

---

### PostgresqlProviderConfig <a name="PostgresqlProviderConfig" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/provider"

&provider.PostgresqlProviderConfig {
	Alias: *string,
	AwsRdsIamAuth: interface{},
	AwsRdsIamProfile: *string,
	AwsRdsIamRegion: *string,
	Clientcert: github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6.provider.PostgresqlProviderClientcert,
	ConnectTimeout: *f64,
	Database: *string,
	DatabaseUsername: *string,
	ExpectedVersion: *string,
	Host: *string,
	MaxConnections: *f64,
	Password: *string,
	Port: *f64,
	Scheme: *string,
	Sslmode: *string,
	SslMode: *string,
	Sslrootcert: *string,
	Superuser: interface{},
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth">AwsRdsIamAuth</a></code> | <code>interface{}</code> | Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile">AwsRdsIamProfile</a></code> | <code>*string</code> | AWS profile to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion">AwsRdsIamRegion</a></code> | <code>*string</code> | AWS region to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert">Clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | clientcert block. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.database">Database</a></code> | <code>*string</code> | The name of the database to connect to in order to conenct to (defaults to `postgres`). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername">DatabaseUsername</a></code> | <code>*string</code> | Database username associated to the connected user (for user name maps). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion">ExpectedVersion</a></code> | <code>*string</code> | Specify the expected version of PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.host">Host</a></code> | <code>*string</code> | Name of PostgreSQL server address to connect to. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | Maximum number of connections to establish to the database. Zero means unlimited. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.password">Password</a></code> | <code>*string</code> | Password to be used if the PostgreSQL server demands password authentication. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.port">Port</a></code> | <code>*f64</code> | The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#scheme PostgresqlProvider#scheme}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode">Sslmode</a></code> | <code>*string</code> | This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#ssl_mode PostgresqlProvider#ssl_mode}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert">Sslrootcert</a></code> | <code>*string</code> | The SSL server root certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser">Superuser</a></code> | <code>interface{}</code> | Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.username">Username</a></code> | <code>*string</code> | PostgreSQL user name to connect as. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#alias PostgresqlProvider#alias}

---

##### `AwsRdsIamAuth`<sup>Optional</sup> <a name="AwsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth"></a>

```go
AwsRdsIamAuth interface{}
```

- *Type:* interface{}

Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#aws_rds_iam_auth PostgresqlProvider#aws_rds_iam_auth}

---

##### `AwsRdsIamProfile`<sup>Optional</sup> <a name="AwsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile"></a>

```go
AwsRdsIamProfile *string
```

- *Type:* *string

AWS profile to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#aws_rds_iam_profile PostgresqlProvider#aws_rds_iam_profile}

---

##### `AwsRdsIamRegion`<sup>Optional</sup> <a name="AwsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion"></a>

```go
AwsRdsIamRegion *string
```

- *Type:* *string

AWS region to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#aws_rds_iam_region PostgresqlProvider#aws_rds_iam_region}

---

##### `Clientcert`<sup>Optional</sup> <a name="Clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert"></a>

```go
Clientcert PostgresqlProviderClientcert
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

clientcert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#clientcert PostgresqlProvider#clientcert}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout"></a>

```go
ConnectTimeout *f64
```

- *Type:* *f64

Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#connect_timeout PostgresqlProvider#connect_timeout}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The name of the database to connect to in order to conenct to (defaults to `postgres`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#database PostgresqlProvider#database}

---

##### `DatabaseUsername`<sup>Optional</sup> <a name="DatabaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername"></a>

```go
DatabaseUsername *string
```

- *Type:* *string

Database username associated to the connected user (for user name maps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#database_username PostgresqlProvider#database_username}

---

##### `ExpectedVersion`<sup>Optional</sup> <a name="ExpectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion"></a>

```go
ExpectedVersion *string
```

- *Type:* *string

Specify the expected version of PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#expected_version PostgresqlProvider#expected_version}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Name of PostgreSQL server address to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#host PostgresqlProvider#host}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections"></a>

```go
MaxConnections *f64
```

- *Type:* *f64

Maximum number of connections to establish to the database. Zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#max_connections PostgresqlProvider#max_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password to be used if the PostgreSQL server demands password authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#password PostgresqlProvider#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#port PostgresqlProvider#port}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#scheme PostgresqlProvider#scheme}.

---

##### `Sslmode`<sup>Optional</sup> <a name="Sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode"></a>

```go
Sslmode *string
```

- *Type:* *string

This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#sslmode PostgresqlProvider#sslmode}

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#ssl_mode PostgresqlProvider#ssl_mode}.

---

##### `Sslrootcert`<sup>Optional</sup> <a name="Sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert"></a>

```go
Sslrootcert *string
```

- *Type:* *string

The SSL server root certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#sslrootcert PostgresqlProvider#sslrootcert}

---

##### `Superuser`<sup>Optional</sup> <a name="Superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser"></a>

```go
Superuser interface{}
```

- *Type:* interface{}

Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#superuser PostgresqlProvider#superuser}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

PostgreSQL user name to connect as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#username PostgresqlProvider#username}

---



