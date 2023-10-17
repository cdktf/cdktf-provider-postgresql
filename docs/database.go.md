# `postgresql_database`

Refer to the Terraform Registory for docs: [`postgresql_database`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database).

# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-postgresql.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-postgresql.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database postgresql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.database.Database.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/database"

database.NewDatabase(scope Construct, id *string, config DatabaseConfig) Database
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig">DatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.database.DatabaseConfig">DatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetAllowConnections">ResetAllowConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetConnectionLimit">ResetConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetIsTemplate">ResetIsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetLcCollate">ResetLcCollate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetLcCtype">ResetLcCtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetTablespaceName">ResetTablespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetTemplate">ResetTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.database.Database.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.database.Database.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.database.Database.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.database.Database.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-postgresql.database.Database.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.database.Database.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-postgresql.database.Database.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.Database.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-postgresql.database.Database.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.database.Database.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.database.Database.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAllowConnections` <a name="ResetAllowConnections" id="@cdktf/provider-postgresql.database.Database.resetAllowConnections"></a>

```go
func ResetAllowConnections()
```

##### `ResetConnectionLimit` <a name="ResetConnectionLimit" id="@cdktf/provider-postgresql.database.Database.resetConnectionLimit"></a>

```go
func ResetConnectionLimit()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-postgresql.database.Database.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.database.Database.resetId"></a>

```go
func ResetId()
```

##### `ResetIsTemplate` <a name="ResetIsTemplate" id="@cdktf/provider-postgresql.database.Database.resetIsTemplate"></a>

```go
func ResetIsTemplate()
```

##### `ResetLcCollate` <a name="ResetLcCollate" id="@cdktf/provider-postgresql.database.Database.resetLcCollate"></a>

```go
func ResetLcCollate()
```

##### `ResetLcCtype` <a name="ResetLcCtype" id="@cdktf/provider-postgresql.database.Database.resetLcCtype"></a>

```go
func ResetLcCtype()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-postgresql.database.Database.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetTablespaceName` <a name="ResetTablespaceName" id="@cdktf/provider-postgresql.database.Database.resetTablespaceName"></a>

```go
func ResetTablespaceName()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-postgresql.database.Database.resetTemplate"></a>

```go
func ResetTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.database.Database.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/database"

database.Database_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.database.Database.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/database"

database.Database_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.database.Database.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/database"

database.Database_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/database"

database.Database_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Database to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Database that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Database to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput">AllowConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplateInput">IsTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollateInput">LcCollateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtypeInput">LcCtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput">TablespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnections">AllowConnections</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimit">ConnectionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplate">IsTemplate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollate">LcCollate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtype">LcCtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceName">TablespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.template">Template</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.database.Database.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.database.Database.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.database.Database.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.database.Database.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.database.Database.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.database.Database.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.database.Database.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.database.Database.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.database.Database.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.database.Database.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.database.Database.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowConnectionsInput`<sup>Optional</sup> <a name="AllowConnectionsInput" id="@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput"></a>

```go
func AllowConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktf/provider-postgresql.database.Database.property.connectionLimitInput"></a>

```go
func ConnectionLimitInput() *f64
```

- *Type:* *f64

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-postgresql.database.Database.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.database.Database.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsTemplateInput`<sup>Optional</sup> <a name="IsTemplateInput" id="@cdktf/provider-postgresql.database.Database.property.isTemplateInput"></a>

```go
func IsTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `LcCollateInput`<sup>Optional</sup> <a name="LcCollateInput" id="@cdktf/provider-postgresql.database.Database.property.lcCollateInput"></a>

```go
func LcCollateInput() *string
```

- *Type:* *string

---

##### `LcCtypeInput`<sup>Optional</sup> <a name="LcCtypeInput" id="@cdktf/provider-postgresql.database.Database.property.lcCtypeInput"></a>

```go
func LcCtypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.database.Database.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-postgresql.database.Database.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `TablespaceNameInput`<sup>Optional</sup> <a name="TablespaceNameInput" id="@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput"></a>

```go
func TablespaceNameInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-postgresql.database.Database.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `AllowConnections`<sup>Required</sup> <a name="AllowConnections" id="@cdktf/provider-postgresql.database.Database.property.allowConnections"></a>

```go
func AllowConnections() interface{}
```

- *Type:* interface{}

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-postgresql.database.Database.property.connectionLimit"></a>

```go
func ConnectionLimit() *f64
```

- *Type:* *f64

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-postgresql.database.Database.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.database.Database.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsTemplate`<sup>Required</sup> <a name="IsTemplate" id="@cdktf/provider-postgresql.database.Database.property.isTemplate"></a>

```go
func IsTemplate() interface{}
```

- *Type:* interface{}

---

##### `LcCollate`<sup>Required</sup> <a name="LcCollate" id="@cdktf/provider-postgresql.database.Database.property.lcCollate"></a>

```go
func LcCollate() *string
```

- *Type:* *string

---

##### `LcCtype`<sup>Required</sup> <a name="LcCtype" id="@cdktf/provider-postgresql.database.Database.property.lcCtype"></a>

```go
func LcCtype() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.database.Database.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-postgresql.database.Database.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `TablespaceName`<sup>Required</sup> <a name="TablespaceName" id="@cdktf/provider-postgresql.database.Database.property.tablespaceName"></a>

```go
func TablespaceName() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-postgresql.database.Database.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.database.Database.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-postgresql.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.database.DatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/database"

&database.DatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowConnections: interface{},
	ConnectionLimit: *f64,
	Encoding: *string,
	Id: *string,
	IsTemplate: interface{},
	LcCollate: *string,
	LcCtype: *string,
	Owner: *string,
	TablespaceName: *string,
	Template: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.name">Name</a></code> | <code>*string</code> | The PostgreSQL database name to connect to. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections">AllowConnections</a></code> | <code>interface{}</code> | If false then no one can connect to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit">ConnectionLimit</a></code> | <code>*f64</code> | How many concurrent connections can be made to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding">Encoding</a></code> | <code>*string</code> | Character set encoding to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate">IsTemplate</a></code> | <code>interface{}</code> | If true, then this database can be cloned by any user with CREATEDB privileges. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate">LcCollate</a></code> | <code>*string</code> | Collation order (LC_COLLATE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype">LcCtype</a></code> | <code>*string</code> | Character classification (LC_CTYPE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.owner">Owner</a></code> | <code>*string</code> | The ROLE which owns the database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName">TablespaceName</a></code> | <code>*string</code> | The name of the tablespace that will be associated with the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.template">Template</a></code> | <code>*string</code> | The name of the template from which to create the new database. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The PostgreSQL database name to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#name Database#name}

---

##### `AllowConnections`<sup>Optional</sup> <a name="AllowConnections" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections"></a>

```go
AllowConnections interface{}
```

- *Type:* interface{}

If false then no one can connect to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#allow_connections Database#allow_connections}

---

##### `ConnectionLimit`<sup>Optional</sup> <a name="ConnectionLimit" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit"></a>

```go
ConnectionLimit *f64
```

- *Type:* *f64

How many concurrent connections can be made to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#connection_limit Database#connection_limit}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Character set encoding to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#encoding Database#encoding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTemplate`<sup>Optional</sup> <a name="IsTemplate" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate"></a>

```go
IsTemplate interface{}
```

- *Type:* interface{}

If true, then this database can be cloned by any user with CREATEDB privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#is_template Database#is_template}

---

##### `LcCollate`<sup>Optional</sup> <a name="LcCollate" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate"></a>

```go
LcCollate *string
```

- *Type:* *string

Collation order (LC_COLLATE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#lc_collate Database#lc_collate}

---

##### `LcCtype`<sup>Optional</sup> <a name="LcCtype" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype"></a>

```go
LcCtype *string
```

- *Type:* *string

Character classification (LC_CTYPE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#lc_ctype Database#lc_ctype}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

The ROLE which owns the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#owner Database#owner}

---

##### `TablespaceName`<sup>Optional</sup> <a name="TablespaceName" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName"></a>

```go
TablespaceName *string
```

- *Type:* *string

The name of the tablespace that will be associated with the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#tablespace_name Database#tablespace_name}

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.template"></a>

```go
Template *string
```

- *Type:* *string

The name of the template from which to create the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#template Database#template}

---



