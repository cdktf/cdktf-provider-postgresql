# `role` Submodule <a name="`role` Submodule" id="@cdktf/provider-postgresql.role"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Role <a name="Role" id="@cdktf/provider-postgresql.role.Role"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role postgresql_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.role.Role.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/role"

role.NewRole(scope Construct, id *string, config RoleConfig) Role
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.role.RoleConfig">RoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.role.RoleConfig">RoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetAssumeRole">ResetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetBypassRowLevelSecurity">ResetBypassRowLevelSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetConnectionLimit">ResetConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetCreateDatabase">ResetCreateDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetCreateRole">ResetCreateRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetEncryptedPassword">ResetEncryptedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout">ResetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetInherit">ResetInherit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetReplication">ResetReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSearchPath">ResetSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSkipDropRole">ResetSkipDropRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSkipReassignOwned">ResetSkipReassignOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetStatementTimeout">ResetStatementTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSuperuser">ResetSuperuser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetValidUntil">ResetValidUntil</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.role.Role.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.role.Role.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.role.Role.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-postgresql.role.Role.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.role.Role.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.role.Role.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-postgresql.role.Role.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.role.Role.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-postgresql.role.Role.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-postgresql.role.Role.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.Role.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-postgresql.role.Role.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-postgresql.role.Role.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.role.Role.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.role.Role.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-postgresql.role.Role.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktf/provider-postgresql.role.Role.resetAssumeRole"></a>

```go
func ResetAssumeRole()
```

##### `ResetBypassRowLevelSecurity` <a name="ResetBypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.Role.resetBypassRowLevelSecurity"></a>

```go
func ResetBypassRowLevelSecurity()
```

##### `ResetConnectionLimit` <a name="ResetConnectionLimit" id="@cdktf/provider-postgresql.role.Role.resetConnectionLimit"></a>

```go
func ResetConnectionLimit()
```

##### `ResetCreateDatabase` <a name="ResetCreateDatabase" id="@cdktf/provider-postgresql.role.Role.resetCreateDatabase"></a>

```go
func ResetCreateDatabase()
```

##### `ResetCreateRole` <a name="ResetCreateRole" id="@cdktf/provider-postgresql.role.Role.resetCreateRole"></a>

```go
func ResetCreateRole()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-postgresql.role.Role.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetEncryptedPassword` <a name="ResetEncryptedPassword" id="@cdktf/provider-postgresql.role.Role.resetEncryptedPassword"></a>

```go
func ResetEncryptedPassword()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.role.Role.resetId"></a>

```go
func ResetId()
```

##### `ResetIdleInTransactionSessionTimeout` <a name="ResetIdleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout"></a>

```go
func ResetIdleInTransactionSessionTimeout()
```

##### `ResetInherit` <a name="ResetInherit" id="@cdktf/provider-postgresql.role.Role.resetInherit"></a>

```go
func ResetInherit()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-postgresql.role.Role.resetLogin"></a>

```go
func ResetLogin()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-postgresql.role.Role.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetReplication` <a name="ResetReplication" id="@cdktf/provider-postgresql.role.Role.resetReplication"></a>

```go
func ResetReplication()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-postgresql.role.Role.resetRoles"></a>

```go
func ResetRoles()
```

##### `ResetSearchPath` <a name="ResetSearchPath" id="@cdktf/provider-postgresql.role.Role.resetSearchPath"></a>

```go
func ResetSearchPath()
```

##### `ResetSkipDropRole` <a name="ResetSkipDropRole" id="@cdktf/provider-postgresql.role.Role.resetSkipDropRole"></a>

```go
func ResetSkipDropRole()
```

##### `ResetSkipReassignOwned` <a name="ResetSkipReassignOwned" id="@cdktf/provider-postgresql.role.Role.resetSkipReassignOwned"></a>

```go
func ResetSkipReassignOwned()
```

##### `ResetStatementTimeout` <a name="ResetStatementTimeout" id="@cdktf/provider-postgresql.role.Role.resetStatementTimeout"></a>

```go
func ResetStatementTimeout()
```

##### `ResetSuperuser` <a name="ResetSuperuser" id="@cdktf/provider-postgresql.role.Role.resetSuperuser"></a>

```go
func ResetSuperuser()
```

##### `ResetValidUntil` <a name="ResetValidUntil" id="@cdktf/provider-postgresql.role.Role.resetValidUntil"></a>

```go
func ResetValidUntil()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.role.Role.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/role"

role.Role_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.role.Role.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/role"

role.Role_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.role.Role.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/role"

role.Role_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/role"

role.Role_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Role to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Role that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Role to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRoleInput">AssumeRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput">BypassRowLevelSecurityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabaseInput">CreateDatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRoleInput">CreateRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedInput">EncryptedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput">EncryptedPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput">IdleInTransactionSessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inheritInput">InheritInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.loginInput">LoginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replicationInput">ReplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPathInput">SearchPathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput">SkipDropRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput">SkipReassignOwnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput">StatementTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuserInput">SuperuserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntilInput">ValidUntilInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRole">AssumeRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity">BypassRowLevelSecurity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimit">ConnectionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabase">CreateDatabase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRole">CreateRole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encrypted">Encrypted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPassword">EncryptedPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inherit">Inherit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.login">Login</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replication">Replication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPath">SearchPath</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRole">SkipDropRole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwned">SkipReassignOwned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeout">StatementTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuser">Superuser</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntil">ValidUntil</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.role.Role.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.role.Role.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.role.Role.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.role.Role.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.role.Role.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.role.Role.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.role.Role.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.role.Role.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.role.Role.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.role.Role.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.role.Role.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktf/provider-postgresql.role.Role.property.assumeRoleInput"></a>

```go
func AssumeRoleInput() *string
```

- *Type:* *string

---

##### `BypassRowLevelSecurityInput`<sup>Optional</sup> <a name="BypassRowLevelSecurityInput" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput"></a>

```go
func BypassRowLevelSecurityInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktf/provider-postgresql.role.Role.property.connectionLimitInput"></a>

```go
func ConnectionLimitInput() *f64
```

- *Type:* *f64

---

##### `CreateDatabaseInput`<sup>Optional</sup> <a name="CreateDatabaseInput" id="@cdktf/provider-postgresql.role.Role.property.createDatabaseInput"></a>

```go
func CreateDatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `CreateRoleInput`<sup>Optional</sup> <a name="CreateRoleInput" id="@cdktf/provider-postgresql.role.Role.property.createRoleInput"></a>

```go
func CreateRoleInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-postgresql.role.Role.property.encryptedInput"></a>

```go
func EncryptedInput() *string
```

- *Type:* *string

---

##### `EncryptedPasswordInput`<sup>Optional</sup> <a name="EncryptedPasswordInput" id="@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput"></a>

```go
func EncryptedPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.role.Role.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeoutInput" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput"></a>

```go
func IdleInTransactionSessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `InheritInput`<sup>Optional</sup> <a name="InheritInput" id="@cdktf/provider-postgresql.role.Role.property.inheritInput"></a>

```go
func InheritInput() interface{}
```

- *Type:* interface{}

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-postgresql.role.Role.property.loginInput"></a>

```go
func LoginInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.role.Role.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-postgresql.role.Role.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ReplicationInput`<sup>Optional</sup> <a name="ReplicationInput" id="@cdktf/provider-postgresql.role.Role.property.replicationInput"></a>

```go
func ReplicationInput() interface{}
```

- *Type:* interface{}

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-postgresql.role.Role.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchPathInput`<sup>Optional</sup> <a name="SearchPathInput" id="@cdktf/provider-postgresql.role.Role.property.searchPathInput"></a>

```go
func SearchPathInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkipDropRoleInput`<sup>Optional</sup> <a name="SkipDropRoleInput" id="@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput"></a>

```go
func SkipDropRoleInput() interface{}
```

- *Type:* interface{}

---

##### `SkipReassignOwnedInput`<sup>Optional</sup> <a name="SkipReassignOwnedInput" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput"></a>

```go
func SkipReassignOwnedInput() interface{}
```

- *Type:* interface{}

---

##### `StatementTimeoutInput`<sup>Optional</sup> <a name="StatementTimeoutInput" id="@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput"></a>

```go
func StatementTimeoutInput() *f64
```

- *Type:* *f64

---

##### `SuperuserInput`<sup>Optional</sup> <a name="SuperuserInput" id="@cdktf/provider-postgresql.role.Role.property.superuserInput"></a>

```go
func SuperuserInput() interface{}
```

- *Type:* interface{}

---

##### `ValidUntilInput`<sup>Optional</sup> <a name="ValidUntilInput" id="@cdktf/provider-postgresql.role.Role.property.validUntilInput"></a>

```go
func ValidUntilInput() *string
```

- *Type:* *string

---

##### `AssumeRole`<sup>Required</sup> <a name="AssumeRole" id="@cdktf/provider-postgresql.role.Role.property.assumeRole"></a>

```go
func AssumeRole() *string
```

- *Type:* *string

---

##### `BypassRowLevelSecurity`<sup>Required</sup> <a name="BypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity"></a>

```go
func BypassRowLevelSecurity() interface{}
```

- *Type:* interface{}

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-postgresql.role.Role.property.connectionLimit"></a>

```go
func ConnectionLimit() *f64
```

- *Type:* *f64

---

##### `CreateDatabase`<sup>Required</sup> <a name="CreateDatabase" id="@cdktf/provider-postgresql.role.Role.property.createDatabase"></a>

```go
func CreateDatabase() interface{}
```

- *Type:* interface{}

---

##### `CreateRole`<sup>Required</sup> <a name="CreateRole" id="@cdktf/provider-postgresql.role.Role.property.createRole"></a>

```go
func CreateRole() interface{}
```

- *Type:* interface{}

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-postgresql.role.Role.property.encrypted"></a>

```go
func Encrypted() *string
```

- *Type:* *string

---

##### `EncryptedPassword`<sup>Required</sup> <a name="EncryptedPassword" id="@cdktf/provider-postgresql.role.Role.property.encryptedPassword"></a>

```go
func EncryptedPassword() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.role.Role.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdleInTransactionSessionTimeout`<sup>Required</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout"></a>

```go
func IdleInTransactionSessionTimeout() *f64
```

- *Type:* *f64

---

##### `Inherit`<sup>Required</sup> <a name="Inherit" id="@cdktf/provider-postgresql.role.Role.property.inherit"></a>

```go
func Inherit() interface{}
```

- *Type:* interface{}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-postgresql.role.Role.property.login"></a>

```go
func Login() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.role.Role.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-postgresql.role.Role.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-postgresql.role.Role.property.replication"></a>

```go
func Replication() interface{}
```

- *Type:* interface{}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-postgresql.role.Role.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `SearchPath`<sup>Required</sup> <a name="SearchPath" id="@cdktf/provider-postgresql.role.Role.property.searchPath"></a>

```go
func SearchPath() *[]*string
```

- *Type:* *[]*string

---

##### `SkipDropRole`<sup>Required</sup> <a name="SkipDropRole" id="@cdktf/provider-postgresql.role.Role.property.skipDropRole"></a>

```go
func SkipDropRole() interface{}
```

- *Type:* interface{}

---

##### `SkipReassignOwned`<sup>Required</sup> <a name="SkipReassignOwned" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwned"></a>

```go
func SkipReassignOwned() interface{}
```

- *Type:* interface{}

---

##### `StatementTimeout`<sup>Required</sup> <a name="StatementTimeout" id="@cdktf/provider-postgresql.role.Role.property.statementTimeout"></a>

```go
func StatementTimeout() *f64
```

- *Type:* *f64

---

##### `Superuser`<sup>Required</sup> <a name="Superuser" id="@cdktf/provider-postgresql.role.Role.property.superuser"></a>

```go
func Superuser() interface{}
```

- *Type:* interface{}

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktf/provider-postgresql.role.Role.property.validUntil"></a>

```go
func ValidUntil() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.role.Role.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RoleConfig <a name="RoleConfig" id="@cdktf/provider-postgresql.role.RoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.role.RoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/role"

&role.RoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AssumeRole: *string,
	BypassRowLevelSecurity: interface{},
	ConnectionLimit: *f64,
	CreateDatabase: interface{},
	CreateRole: interface{},
	Encrypted: *string,
	EncryptedPassword: interface{},
	Id: *string,
	IdleInTransactionSessionTimeout: *f64,
	Inherit: interface{},
	Login: interface{},
	Password: *string,
	Replication: interface{},
	Roles: *[]*string,
	SearchPath: *[]*string,
	SkipDropRole: interface{},
	SkipReassignOwned: interface{},
	StatementTimeout: *f64,
	Superuser: interface{},
	ValidUntil: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole">AssumeRole</a></code> | <code>*string</code> | Role to switch to at login. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity">BypassRowLevelSecurity</a></code> | <code>interface{}</code> | Determine whether a role bypasses every row-level security (RLS) policy. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit">ConnectionLimit</a></code> | <code>*f64</code> | How many concurrent connections can be made with this role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase">CreateDatabase</a></code> | <code>interface{}</code> | Define a role's ability to create databases. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createRole">CreateRole</a></code> | <code>interface{}</code> | Determine whether this role will be permitted to create new roles. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encrypted">Encrypted</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#encrypted Role#encrypted}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword">EncryptedPassword</a></code> | <code>interface{}</code> | Control whether the password is stored encrypted in the system catalogs. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#id Role#id}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>*f64</code> | Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.inherit">Inherit</a></code> | <code>interface{}</code> | Determine whether a role "inherits" the privileges of roles it is a member of. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.login">Login</a></code> | <code>interface{}</code> | Determine whether a role is allowed to log in. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.password">Password</a></code> | <code>*string</code> | Sets the role's password. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.replication">Replication</a></code> | <code>interface{}</code> | Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.roles">Roles</a></code> | <code>*[]*string</code> | Role(s) to grant to this new role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.searchPath">SearchPath</a></code> | <code>*[]*string</code> | Sets the role's search path. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole">SkipDropRole</a></code> | <code>interface{}</code> | Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned">SkipReassignOwned</a></code> | <code>interface{}</code> | Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout">StatementTimeout</a></code> | <code>*f64</code> | Abort any statement that takes more than the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.superuser">Superuser</a></code> | <code>interface{}</code> | Determine whether the new role is a "superuser". |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.validUntil">ValidUntil</a></code> | <code>*string</code> | Sets a date and time after which the role's password is no longer valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.role.RoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.role.RoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.role.RoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.role.RoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.role.RoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.role.RoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#name Role#name}

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole"></a>

```go
AssumeRole *string
```

- *Type:* *string

Role to switch to at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#assume_role Role#assume_role}

---

##### `BypassRowLevelSecurity`<sup>Optional</sup> <a name="BypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity"></a>

```go
BypassRowLevelSecurity interface{}
```

- *Type:* interface{}

Determine whether a role bypasses every row-level security (RLS) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#bypass_row_level_security Role#bypass_row_level_security}

---

##### `ConnectionLimit`<sup>Optional</sup> <a name="ConnectionLimit" id="@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit"></a>

```go
ConnectionLimit *f64
```

- *Type:* *f64

How many concurrent connections can be made with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#connection_limit Role#connection_limit}

---

##### `CreateDatabase`<sup>Optional</sup> <a name="CreateDatabase" id="@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase"></a>

```go
CreateDatabase interface{}
```

- *Type:* interface{}

Define a role's ability to create databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#create_database Role#create_database}

---

##### `CreateRole`<sup>Optional</sup> <a name="CreateRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.createRole"></a>

```go
CreateRole interface{}
```

- *Type:* interface{}

Determine whether this role will be permitted to create new roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#create_role Role#create_role}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-postgresql.role.RoleConfig.property.encrypted"></a>

```go
Encrypted *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#encrypted Role#encrypted}.

---

##### `EncryptedPassword`<sup>Optional</sup> <a name="EncryptedPassword" id="@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword"></a>

```go
EncryptedPassword interface{}
```

- *Type:* interface{}

Control whether the password is stored encrypted in the system catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#encrypted_password Role#encrypted_password}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.role.RoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleInTransactionSessionTimeout`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout"></a>

```go
IdleInTransactionSessionTimeout *f64
```

- *Type:* *f64

Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}

---

##### `Inherit`<sup>Optional</sup> <a name="Inherit" id="@cdktf/provider-postgresql.role.RoleConfig.property.inherit"></a>

```go
Inherit interface{}
```

- *Type:* interface{}

Determine whether a role "inherits" the privileges of roles it is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#inherit Role#inherit}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-postgresql.role.RoleConfig.property.login"></a>

```go
Login interface{}
```

- *Type:* interface{}

Determine whether a role is allowed to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#login Role#login}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-postgresql.role.RoleConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Sets the role's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#password Role#password}

---

##### `Replication`<sup>Optional</sup> <a name="Replication" id="@cdktf/provider-postgresql.role.RoleConfig.property.replication"></a>

```go
Replication interface{}
```

- *Type:* interface{}

Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#replication Role#replication}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-postgresql.role.RoleConfig.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

Role(s) to grant to this new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#roles Role#roles}

---

##### `SearchPath`<sup>Optional</sup> <a name="SearchPath" id="@cdktf/provider-postgresql.role.RoleConfig.property.searchPath"></a>

```go
SearchPath *[]*string
```

- *Type:* *[]*string

Sets the role's search path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#search_path Role#search_path}

---

##### `SkipDropRole`<sup>Optional</sup> <a name="SkipDropRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole"></a>

```go
SkipDropRole interface{}
```

- *Type:* interface{}

Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#skip_drop_role Role#skip_drop_role}

---

##### `SkipReassignOwned`<sup>Optional</sup> <a name="SkipReassignOwned" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned"></a>

```go
SkipReassignOwned interface{}
```

- *Type:* interface{}

Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#skip_reassign_owned Role#skip_reassign_owned}

---

##### `StatementTimeout`<sup>Optional</sup> <a name="StatementTimeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout"></a>

```go
StatementTimeout *f64
```

- *Type:* *f64

Abort any statement that takes more than the specified number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#statement_timeout Role#statement_timeout}

---

##### `Superuser`<sup>Optional</sup> <a name="Superuser" id="@cdktf/provider-postgresql.role.RoleConfig.property.superuser"></a>

```go
Superuser interface{}
```

- *Type:* interface{}

Determine whether the new role is a "superuser".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#superuser Role#superuser}

---

##### `ValidUntil`<sup>Optional</sup> <a name="ValidUntil" id="@cdktf/provider-postgresql.role.RoleConfig.property.validUntil"></a>

```go
ValidUntil *string
```

- *Type:* *string

Sets a date and time after which the role's password is no longer valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/resources/role#valid_until Role#valid_until}

---



