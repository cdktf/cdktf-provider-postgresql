# `functionResource` Submodule <a name="`functionResource` Submodule" id="@cdktf/provider-postgresql.functionResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionResource <a name="FunctionResource" id="@cdktf/provider-postgresql.functionResource.FunctionResource"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function postgresql_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/functionresource"

functionresource.NewFunctionResource(scope Construct, id *string, config FunctionResourceConfig) FunctionResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig">FunctionResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig">FunctionResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.putArg">PutArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetArg">ResetArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetDropCascade">ResetDropCascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetParallel">ResetParallel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetReturns">ResetReturns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetSecurityDefiner">ResetSecurityDefiner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetStrict">ResetStrict</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetVolatility">ResetVolatility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutArg` <a name="PutArg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg"></a>

```go
func PutArg(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArg` <a name="ResetArg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetArg"></a>

```go
func ResetArg()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDropCascade` <a name="ResetDropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDropCascade"></a>

```go
func ResetDropCascade()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetId"></a>

```go
func ResetId()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetLanguage"></a>

```go
func ResetLanguage()
```

##### `ResetParallel` <a name="ResetParallel" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetParallel"></a>

```go
func ResetParallel()
```

##### `ResetReturns` <a name="ResetReturns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetReturns"></a>

```go
func ResetReturns()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetSecurityDefiner` <a name="ResetSecurityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetSecurityDefiner"></a>

```go
func ResetSecurityDefiner()
```

##### `ResetStrict` <a name="ResetStrict" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetStrict"></a>

```go
func ResetStrict()
```

##### `ResetVolatility` <a name="ResetVolatility" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetVolatility"></a>

```go
func ResetVolatility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/functionresource"

functionresource.FunctionResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/functionresource"

functionresource.FunctionResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/functionresource"

functionresource.FunctionResource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/functionresource"

functionresource.FunctionResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FunctionResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FunctionResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FunctionResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg">Arg</a></code> | <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput">ArgInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput">DropCascadeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallelInput">ParallelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput">ReturnsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefinerInput">SecurityDefinerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.strictInput">StrictInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatilityInput">VolatilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade">DropCascade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallel">Parallel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns">Returns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefiner">SecurityDefiner</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.strict">Strict</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatility">Volatility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arg`<sup>Required</sup> <a name="Arg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg"></a>

```go
func Arg() FunctionResourceArgList
```

- *Type:* <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a>

---

##### `ArgInput`<sup>Optional</sup> <a name="ArgInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput"></a>

```go
func ArgInput() interface{}
```

- *Type:* interface{}

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DropCascadeInput`<sup>Optional</sup> <a name="DropCascadeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput"></a>

```go
func DropCascadeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParallelInput`<sup>Optional</sup> <a name="ParallelInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallelInput"></a>

```go
func ParallelInput() *string
```

- *Type:* *string

---

##### `ReturnsInput`<sup>Optional</sup> <a name="ReturnsInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput"></a>

```go
func ReturnsInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `SecurityDefinerInput`<sup>Optional</sup> <a name="SecurityDefinerInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefinerInput"></a>

```go
func SecurityDefinerInput() interface{}
```

- *Type:* interface{}

---

##### `StrictInput`<sup>Optional</sup> <a name="StrictInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.strictInput"></a>

```go
func StrictInput() interface{}
```

- *Type:* interface{}

---

##### `VolatilityInput`<sup>Optional</sup> <a name="VolatilityInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatilityInput"></a>

```go
func VolatilityInput() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DropCascade`<sup>Required</sup> <a name="DropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade"></a>

```go
func DropCascade() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parallel`<sup>Required</sup> <a name="Parallel" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallel"></a>

```go
func Parallel() *string
```

- *Type:* *string

---

##### `Returns`<sup>Required</sup> <a name="Returns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns"></a>

```go
func Returns() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SecurityDefiner`<sup>Required</sup> <a name="SecurityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefiner"></a>

```go
func SecurityDefiner() interface{}
```

- *Type:* interface{}

---

##### `Strict`<sup>Required</sup> <a name="Strict" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.strict"></a>

```go
func Strict() interface{}
```

- *Type:* interface{}

---

##### `Volatility`<sup>Required</sup> <a name="Volatility" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatility"></a>

```go
func Volatility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionResourceArg <a name="FunctionResourceArg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/functionresource"

&functionresource.FunctionResourceArg {
	Type: *string,
	Default: *string,
	Mode: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type">Type</a></code> | <code>*string</code> | The argument type. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default">Default</a></code> | <code>*string</code> | An expression to be used as default value if the parameter is not specified. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode">Mode</a></code> | <code>*string</code> | The argument mode. One of: IN, OUT, INOUT, or VARIADIC. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name">Name</a></code> | <code>*string</code> | The argument name. The name may be required for some languages or depending on the argument mode. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type"></a>

```go
Type *string
```

- *Type:* *string

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#type FunctionResource#type}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default"></a>

```go
Default *string
```

- *Type:* *string

An expression to be used as default value if the parameter is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#default FunctionResource#default}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The argument mode. One of: IN, OUT, INOUT, or VARIADIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#mode FunctionResource#mode}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name"></a>

```go
Name *string
```

- *Type:* *string

The argument name. The name may be required for some languages or depending on the argument mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#name FunctionResource#name}

---

### FunctionResourceConfig <a name="FunctionResourceConfig" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/functionresource"

&functionresource.FunctionResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Body: *string,
	Name: *string,
	Arg: interface{},
	Database: *string,
	DropCascade: interface{},
	Id: *string,
	Language: *string,
	Parallel: *string,
	Returns: *string,
	Schema: *string,
	SecurityDefiner: interface{},
	Strict: interface{},
	Volatility: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body">Body</a></code> | <code>*string</code> | Body of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name">Name</a></code> | <code>*string</code> | Name of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg">Arg</a></code> | <code>interface{}</code> | arg block. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database">Database</a></code> | <code>*string</code> | The database where the function is located. If not specified, the provider default database is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade">DropCascade</a></code> | <code>interface{}</code> | Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language">Language</a></code> | <code>*string</code> | Language of theof the function. One of: internal, sql, c, plpgsql. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.parallel">Parallel</a></code> | <code>*string</code> | If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns">Returns</a></code> | <code>*string</code> | Function return type. If not specified, it will be calculated based on the output arguments. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema">Schema</a></code> | <code>*string</code> | Schema where the function is located. If not specified, the provider default schema is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.securityDefiner">SecurityDefiner</a></code> | <code>interface{}</code> | If the function should execute with the permissions of the function owner instead of the permissions of the caller. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.strict">Strict</a></code> | <code>interface{}</code> | If the function should always return NULL if any of it's inputs is NULL. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.volatility">Volatility</a></code> | <code>*string</code> | Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

Body of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#body FunctionResource#body}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#name FunctionResource#name}

---

##### `Arg`<sup>Optional</sup> <a name="Arg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg"></a>

```go
Arg interface{}
```

- *Type:* interface{}

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#arg FunctionResource#arg}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database where the function is located. If not specified, the provider default database is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#database FunctionResource#database}

---

##### `DropCascade`<sup>Optional</sup> <a name="DropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade"></a>

```go
DropCascade interface{}
```

- *Type:* interface{}

Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#drop_cascade FunctionResource#drop_cascade}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language"></a>

```go
Language *string
```

- *Type:* *string

Language of theof the function. One of: internal, sql, c, plpgsql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#language FunctionResource#language}

---

##### `Parallel`<sup>Optional</sup> <a name="Parallel" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.parallel"></a>

```go
Parallel *string
```

- *Type:* *string

If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#parallel FunctionResource#parallel}

---

##### `Returns`<sup>Optional</sup> <a name="Returns" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns"></a>

```go
Returns *string
```

- *Type:* *string

Function return type. If not specified, it will be calculated based on the output arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#returns FunctionResource#returns}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Schema where the function is located. If not specified, the provider default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#schema FunctionResource#schema}

---

##### `SecurityDefiner`<sup>Optional</sup> <a name="SecurityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.securityDefiner"></a>

```go
SecurityDefiner interface{}
```

- *Type:* interface{}

If the function should execute with the permissions of the function owner instead of the permissions of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#security_definer FunctionResource#security_definer}

---

##### `Strict`<sup>Optional</sup> <a name="Strict" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.strict"></a>

```go
Strict interface{}
```

- *Type:* interface{}

If the function should always return NULL if any of it's inputs is NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#strict FunctionResource#strict}

---

##### `Volatility`<sup>Optional</sup> <a name="Volatility" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.volatility"></a>

```go
Volatility *string
```

- *Type:* *string

Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#volatility FunctionResource#volatility}

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionResourceArgList <a name="FunctionResourceArgList" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/functionresource"

functionresource.NewFunctionResourceArgList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionResourceArgList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get"></a>

```go
func Get(index *f64) FunctionResourceArgOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FunctionResourceArgOutputReference <a name="FunctionResourceArgOutputReference" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/functionresource"

functionresource.NewFunctionResourceArgOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionResourceArgOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



