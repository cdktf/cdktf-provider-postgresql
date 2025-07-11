# `server` Submodule <a name="`server` Submodule" id="@cdktf/provider-postgresql.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktf/provider-postgresql.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server postgresql_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.server.Server.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/server"

server.NewServer(scope Construct, id *string, config ServerConfig) Server
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.server.ServerConfig">ServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.server.ServerConfig">ServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetDropCascade">ResetDropCascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetServerOwner">ResetServerOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetServerType">ResetServerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetServerVersion">ResetServerVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.server.Server.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.server.Server.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.server.Server.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.server.Server.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.server.Server.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.server.Server.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-postgresql.server.Server.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.server.Server.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.server.Server.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-postgresql.server.Server.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.server.Server.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.server.Server.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.server.Server.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.server.Server.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.server.Server.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.server.Server.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.server.Server.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-postgresql.server.Server.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-postgresql.server.Server.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.server.Server.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.server.Server.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.server.Server.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-postgresql.server.Server.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.server.Server.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-postgresql.server.Server.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.server.Server.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.server.Server.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-postgresql.server.Server.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.server.Server.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDropCascade` <a name="ResetDropCascade" id="@cdktf/provider-postgresql.server.Server.resetDropCascade"></a>

```go
func ResetDropCascade()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.server.Server.resetId"></a>

```go
func ResetId()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-postgresql.server.Server.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetServerOwner` <a name="ResetServerOwner" id="@cdktf/provider-postgresql.server.Server.resetServerOwner"></a>

```go
func ResetServerOwner()
```

##### `ResetServerType` <a name="ResetServerType" id="@cdktf/provider-postgresql.server.Server.resetServerType"></a>

```go
func ResetServerType()
```

##### `ResetServerVersion` <a name="ResetServerVersion" id="@cdktf/provider-postgresql.server.Server.resetServerVersion"></a>

```go
func ResetServerVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.server.Server.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/server"

server.Server_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.server.Server.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.server.Server.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/server"

server.Server_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.server.Server.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/server"

server.Server_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.server.Server.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/server"

server.Server_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.server.Server.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.server.Server.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Server to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.server.Server.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Server that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.server.Server.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Server to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.dropCascadeInput">DropCascadeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.fdwNameInput">FdwNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverOwnerInput">ServerOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverTypeInput">ServerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverVersionInput">ServerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.dropCascade">DropCascade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.fdwName">FdwName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverOwner">ServerOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverType">ServerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverVersion">ServerVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.server.Server.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.server.Server.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.server.Server.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.server.Server.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.server.Server.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.server.Server.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.server.Server.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.server.Server.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.server.Server.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.server.Server.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.server.Server.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.server.Server.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.server.Server.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.server.Server.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DropCascadeInput`<sup>Optional</sup> <a name="DropCascadeInput" id="@cdktf/provider-postgresql.server.Server.property.dropCascadeInput"></a>

```go
func DropCascadeInput() interface{}
```

- *Type:* interface{}

---

##### `FdwNameInput`<sup>Optional</sup> <a name="FdwNameInput" id="@cdktf/provider-postgresql.server.Server.property.fdwNameInput"></a>

```go
func FdwNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.server.Server.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-postgresql.server.Server.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-postgresql.server.Server.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `ServerOwnerInput`<sup>Optional</sup> <a name="ServerOwnerInput" id="@cdktf/provider-postgresql.server.Server.property.serverOwnerInput"></a>

```go
func ServerOwnerInput() *string
```

- *Type:* *string

---

##### `ServerTypeInput`<sup>Optional</sup> <a name="ServerTypeInput" id="@cdktf/provider-postgresql.server.Server.property.serverTypeInput"></a>

```go
func ServerTypeInput() *string
```

- *Type:* *string

---

##### `ServerVersionInput`<sup>Optional</sup> <a name="ServerVersionInput" id="@cdktf/provider-postgresql.server.Server.property.serverVersionInput"></a>

```go
func ServerVersionInput() *string
```

- *Type:* *string

---

##### `DropCascade`<sup>Required</sup> <a name="DropCascade" id="@cdktf/provider-postgresql.server.Server.property.dropCascade"></a>

```go
func DropCascade() interface{}
```

- *Type:* interface{}

---

##### `FdwName`<sup>Required</sup> <a name="FdwName" id="@cdktf/provider-postgresql.server.Server.property.fdwName"></a>

```go
func FdwName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.server.Server.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-postgresql.server.Server.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-postgresql.server.Server.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `ServerOwner`<sup>Required</sup> <a name="ServerOwner" id="@cdktf/provider-postgresql.server.Server.property.serverOwner"></a>

```go
func ServerOwner() *string
```

- *Type:* *string

---

##### `ServerType`<sup>Required</sup> <a name="ServerType" id="@cdktf/provider-postgresql.server.Server.property.serverType"></a>

```go
func ServerType() *string
```

- *Type:* *string

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-postgresql.server.Server.property.serverVersion"></a>

```go
func ServerVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.server.Server.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktf/provider-postgresql.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.server.ServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/server"

&server.ServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FdwName: *string,
	ServerName: *string,
	DropCascade: interface{},
	Id: *string,
	Options: *map[string]*string,
	ServerOwner: *string,
	ServerType: *string,
	ServerVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.fdwName">FdwName</a></code> | <code>*string</code> | The name of the foreign-data wrapper that manages the server. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.serverName">ServerName</a></code> | <code>*string</code> | The name of the foreign server to be created. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.dropCascade">DropCascade</a></code> | <code>interface{}</code> | Automatically drop objects that depend on the server (such as user mappings), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | This clause specifies the options for the server. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.serverOwner">ServerOwner</a></code> | <code>*string</code> | The user name of the new owner of the foreign server. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.serverType">ServerType</a></code> | <code>*string</code> | Optional server type, potentially useful to foreign-data wrappers. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.serverVersion">ServerVersion</a></code> | <code>*string</code> | Optional server version, potentially useful to foreign-data wrappers. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.server.ServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.server.ServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.server.ServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.server.ServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.server.ServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.server.ServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.server.ServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FdwName`<sup>Required</sup> <a name="FdwName" id="@cdktf/provider-postgresql.server.ServerConfig.property.fdwName"></a>

```go
FdwName *string
```

- *Type:* *string

The name of the foreign-data wrapper that manages the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#fdw_name Server#fdw_name}

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-postgresql.server.ServerConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

The name of the foreign server to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#server_name Server#server_name}

---

##### `DropCascade`<sup>Optional</sup> <a name="DropCascade" id="@cdktf/provider-postgresql.server.ServerConfig.property.dropCascade"></a>

```go
DropCascade interface{}
```

- *Type:* interface{}

Automatically drop objects that depend on the server (such as user mappings), and in turn all objects that depend on those objects.

Drop RESTRICT is the default

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#drop_cascade Server#drop_cascade}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.server.ServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-postgresql.server.ServerConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

This clause specifies the options for the server.

The options typically define the connection details of the server, but the actual names and values are dependent on the server's foreign-data wrapper

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#options Server#options}

---

##### `ServerOwner`<sup>Optional</sup> <a name="ServerOwner" id="@cdktf/provider-postgresql.server.ServerConfig.property.serverOwner"></a>

```go
ServerOwner *string
```

- *Type:* *string

The user name of the new owner of the foreign server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#server_owner Server#server_owner}

---

##### `ServerType`<sup>Optional</sup> <a name="ServerType" id="@cdktf/provider-postgresql.server.ServerConfig.property.serverType"></a>

```go
ServerType *string
```

- *Type:* *string

Optional server type, potentially useful to foreign-data wrappers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#server_type Server#server_type}

---

##### `ServerVersion`<sup>Optional</sup> <a name="ServerVersion" id="@cdktf/provider-postgresql.server.ServerConfig.property.serverVersion"></a>

```go
ServerVersion *string
```

- *Type:* *string

Optional server version, potentially useful to foreign-data wrappers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/server#server_version Server#server_version}

---



