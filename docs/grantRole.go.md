# `grantRole` Submodule <a name="`grantRole` Submodule" id="@cdktf/provider-postgresql.grantRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantRole <a name="GrantRole" id="@cdktf/provider-postgresql.grantRole.GrantRole"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant_role postgresql_grant_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.grantRole.GrantRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/grantrole"

grantrole.NewGrantRole(scope Construct, id *string, config GrantRoleConfig) GrantRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig">GrantRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.grantRole.GrantRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grantRole.GrantRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.grantRole.GrantRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig">GrantRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.resetWithAdminOption">ResetWithAdminOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.grantRole.GrantRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.grantRole.GrantRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.grantRole.GrantRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.grantRole.GrantRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.grantRole.GrantRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.grantRole.GrantRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.grantRole.GrantRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-postgresql.grantRole.GrantRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.grantRole.GrantRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.grantRole.GrantRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-postgresql.grantRole.GrantRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.grantRole.GrantRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-postgresql.grantRole.GrantRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-postgresql.grantRole.GrantRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grantRole.GrantRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grantRole.GrantRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grantRole.GrantRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-postgresql.grantRole.GrantRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grantRole.GrantRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-postgresql.grantRole.GrantRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.grantRole.GrantRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.grantRole.GrantRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-postgresql.grantRole.GrantRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grantRole.GrantRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.grantRole.GrantRole.resetId"></a>

```go
func ResetId()
```

##### `ResetWithAdminOption` <a name="ResetWithAdminOption" id="@cdktf/provider-postgresql.grantRole.GrantRole.resetWithAdminOption"></a>

```go
func ResetWithAdminOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GrantRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.grantRole.GrantRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/grantrole"

grantrole.GrantRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.grantRole.GrantRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.grantRole.GrantRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/grantrole"

grantrole.GrantRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.grantRole.GrantRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.grantRole.GrantRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/grantrole"

grantrole.GrantRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.grantRole.GrantRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.grantRole.GrantRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/grantrole"

grantrole.GrantRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GrantRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.grantRole.GrantRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.grantRole.GrantRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GrantRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.grantRole.GrantRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GrantRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grantRole.GrantRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GrantRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.grantRoleInput">GrantRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.withAdminOptionInput">WithAdminOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.grantRole">GrantRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.withAdminOption">WithAdminOption</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GrantRoleInput`<sup>Optional</sup> <a name="GrantRoleInput" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.grantRoleInput"></a>

```go
func GrantRoleInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `WithAdminOptionInput`<sup>Optional</sup> <a name="WithAdminOptionInput" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.withAdminOptionInput"></a>

```go
func WithAdminOptionInput() interface{}
```

- *Type:* interface{}

---

##### `GrantRole`<sup>Required</sup> <a name="GrantRole" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.grantRole"></a>

```go
func GrantRole() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `WithAdminOption`<sup>Required</sup> <a name="WithAdminOption" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.withAdminOption"></a>

```go
func WithAdminOption() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.grantRole.GrantRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantRoleConfig <a name="GrantRoleConfig" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/grantrole"

&grantrole.GrantRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GrantRole: *string,
	Role: *string,
	Id: *string,
	WithAdminOption: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.grantRole">GrantRole</a></code> | <code>*string</code> | The name of the role that is granted to role. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.role">Role</a></code> | <code>*string</code> | The name of the role to grant grant_role. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant_role#id GrantRole#id}. |
| <code><a href="#@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.withAdminOption">WithAdminOption</a></code> | <code>interface{}</code> | Permit the grant recipient to grant it to others. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GrantRole`<sup>Required</sup> <a name="GrantRole" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.grantRole"></a>

```go
GrantRole *string
```

- *Type:* *string

The name of the role that is granted to role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant_role#grant_role GrantRole#grant_role}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

The name of the role to grant grant_role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant_role#role GrantRole#role}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant_role#id GrantRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `WithAdminOption`<sup>Optional</sup> <a name="WithAdminOption" id="@cdktf/provider-postgresql.grantRole.GrantRoleConfig.property.withAdminOption"></a>

```go
WithAdminOption interface{}
```

- *Type:* interface{}

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant_role#with_admin_option GrantRole#with_admin_option}

---



