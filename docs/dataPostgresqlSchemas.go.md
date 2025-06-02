# `dataPostgresqlSchemas` Submodule <a name="`dataPostgresqlSchemas` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlSchemas <a name="DataPostgresqlSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas postgresql_schemas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/datapostgresqlschemas"

datapostgresqlschemas.NewDataPostgresqlSchemas(scope Construct, id *string, config DataPostgresqlSchemasConfig) DataPostgresqlSchemas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig">DataPostgresqlSchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig">DataPostgresqlSchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetIncludeSystemSchemas">ResetIncludeSystemSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAllPatterns">ResetLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAnyPatterns">ResetLikeAnyPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetNotLikeAllPatterns">ResetNotLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetRegexPattern">ResetRegexPattern</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeSystemSchemas` <a name="ResetIncludeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetIncludeSystemSchemas"></a>

```go
func ResetIncludeSystemSchemas()
```

##### `ResetLikeAllPatterns` <a name="ResetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAllPatterns"></a>

```go
func ResetLikeAllPatterns()
```

##### `ResetLikeAnyPatterns` <a name="ResetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAnyPatterns"></a>

```go
func ResetLikeAnyPatterns()
```

##### `ResetNotLikeAllPatterns` <a name="ResetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetNotLikeAllPatterns"></a>

```go
func ResetNotLikeAllPatterns()
```

##### `ResetRegexPattern` <a name="ResetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetRegexPattern"></a>

```go
func ResetRegexPattern()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPostgresqlSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/datapostgresqlschemas"

datapostgresqlschemas.DataPostgresqlSchemas_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/datapostgresqlschemas"

datapostgresqlschemas.DataPostgresqlSchemas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/datapostgresqlschemas"

datapostgresqlschemas.DataPostgresqlSchemas_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/datapostgresqlschemas"

datapostgresqlschemas.DataPostgresqlSchemas_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataPostgresqlSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPostgresqlSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPostgresqlSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataPostgresqlSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput">IncludeSystemSchemasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput">LikeAllPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput">LikeAnyPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput">NotLikeAllPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput">RegexPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas">IncludeSystemSchemas</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern">RegexPattern</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeSystemSchemasInput`<sup>Optional</sup> <a name="IncludeSystemSchemasInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput"></a>

```go
func IncludeSystemSchemasInput() interface{}
```

- *Type:* interface{}

---

##### `LikeAllPatternsInput`<sup>Optional</sup> <a name="LikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput"></a>

```go
func LikeAllPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LikeAnyPatternsInput`<sup>Optional</sup> <a name="LikeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput"></a>

```go
func LikeAnyPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotLikeAllPatternsInput`<sup>Optional</sup> <a name="NotLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput"></a>

```go
func NotLikeAllPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegexPatternInput`<sup>Optional</sup> <a name="RegexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput"></a>

```go
func RegexPatternInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeSystemSchemas`<sup>Required</sup> <a name="IncludeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas"></a>

```go
func IncludeSystemSchemas() interface{}
```

- *Type:* interface{}

---

##### `LikeAllPatterns`<sup>Required</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns"></a>

```go
func LikeAllPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `LikeAnyPatterns`<sup>Required</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns"></a>

```go
func LikeAnyPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `NotLikeAllPatterns`<sup>Required</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns"></a>

```go
func NotLikeAllPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `RegexPattern`<sup>Required</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern"></a>

```go
func RegexPattern() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlSchemasConfig <a name="DataPostgresqlSchemasConfig" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v12/datapostgresqlschemas"

&datapostgresqlschemas.DataPostgresqlSchemasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Id: *string,
	IncludeSystemSchemas: interface{},
	LikeAllPatterns: *[]*string,
	LikeAnyPatterns: *[]*string,
	NotLikeAllPatterns: *[]*string,
	RegexPattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database">Database</a></code> | <code>*string</code> | The PostgreSQL database which will be queried for schema names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas">IncludeSystemSchemas</a></code> | <code>interface{}</code> | Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>*[]*string</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>*[]*string</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>*[]*string</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern">RegexPattern</a></code> | <code>*string</code> | Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The PostgreSQL database which will be queried for schema names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#database DataPostgresqlSchemas#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeSystemSchemas`<sup>Optional</sup> <a name="IncludeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas"></a>

```go
IncludeSystemSchemas interface{}
```

- *Type:* interface{}

Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#include_system_schemas DataPostgresqlSchemas#include_system_schemas}

---

##### `LikeAllPatterns`<sup>Optional</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns"></a>

```go
LikeAllPatterns *[]*string
```

- *Type:* *[]*string

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#like_all_patterns DataPostgresqlSchemas#like_all_patterns}

---

##### `LikeAnyPatterns`<sup>Optional</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns"></a>

```go
LikeAnyPatterns *[]*string
```

- *Type:* *[]*string

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#like_any_patterns DataPostgresqlSchemas#like_any_patterns}

---

##### `NotLikeAllPatterns`<sup>Optional</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns"></a>

```go
NotLikeAllPatterns *[]*string
```

- *Type:* *[]*string

Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#not_like_all_patterns DataPostgresqlSchemas#not_like_all_patterns}

---

##### `RegexPattern`<sup>Optional</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern"></a>

```go
RegexPattern *string
```

- *Type:* *string

Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#regex_pattern DataPostgresqlSchemas#regex_pattern}

---



