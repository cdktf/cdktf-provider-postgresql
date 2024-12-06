# `dataPostgresqlSequences` Submodule <a name="`dataPostgresqlSequences` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlSequences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlSequences <a name="DataPostgresqlSequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences postgresql_sequences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/datapostgresqlsequences"

datapostgresqlsequences.NewDataPostgresqlSequences(scope Construct, id *string, config DataPostgresqlSequencesConfig) DataPostgresqlSequences
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig">DataPostgresqlSequencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig">DataPostgresqlSequencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAllPatterns">ResetLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAnyPatterns">ResetLikeAnyPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetNotLikeAllPatterns">ResetNotLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetRegexPattern">ResetRegexPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetSchemas">ResetSchemas</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetId"></a>

```go
func ResetId()
```

##### `ResetLikeAllPatterns` <a name="ResetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAllPatterns"></a>

```go
func ResetLikeAllPatterns()
```

##### `ResetLikeAnyPatterns` <a name="ResetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAnyPatterns"></a>

```go
func ResetLikeAnyPatterns()
```

##### `ResetNotLikeAllPatterns` <a name="ResetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetNotLikeAllPatterns"></a>

```go
func ResetNotLikeAllPatterns()
```

##### `ResetRegexPattern` <a name="ResetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetRegexPattern"></a>

```go
func ResetRegexPattern()
```

##### `ResetSchemas` <a name="ResetSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetSchemas"></a>

```go
func ResetSchemas()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPostgresqlSequences resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/datapostgresqlsequences"

datapostgresqlsequences.DataPostgresqlSequences_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/datapostgresqlsequences"

datapostgresqlsequences.DataPostgresqlSequences_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/datapostgresqlsequences"

datapostgresqlsequences.DataPostgresqlSequences_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/datapostgresqlsequences"

datapostgresqlsequences.DataPostgresqlSequences_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataPostgresqlSequences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPostgresqlSequences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPostgresqlSequences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataPostgresqlSequences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.sequences">Sequences</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList">DataPostgresqlSequencesSequencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatternsInput">LikeAllPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatternsInput">LikeAnyPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatternsInput">NotLikeAllPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPatternInput">RegexPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemasInput">SchemasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPattern">RegexPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Sequences`<sup>Required</sup> <a name="Sequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.sequences"></a>

```go
func Sequences() DataPostgresqlSequencesSequencesList
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList">DataPostgresqlSequencesSequencesList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LikeAllPatternsInput`<sup>Optional</sup> <a name="LikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatternsInput"></a>

```go
func LikeAllPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LikeAnyPatternsInput`<sup>Optional</sup> <a name="LikeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatternsInput"></a>

```go
func LikeAnyPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotLikeAllPatternsInput`<sup>Optional</sup> <a name="NotLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatternsInput"></a>

```go
func NotLikeAllPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegexPatternInput`<sup>Optional</sup> <a name="RegexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPatternInput"></a>

```go
func RegexPatternInput() *string
```

- *Type:* *string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemasInput"></a>

```go
func SchemasInput() *[]*string
```

- *Type:* *[]*string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LikeAllPatterns`<sup>Required</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatterns"></a>

```go
func LikeAllPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `LikeAnyPatterns`<sup>Required</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatterns"></a>

```go
func LikeAnyPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `NotLikeAllPatterns`<sup>Required</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatterns"></a>

```go
func NotLikeAllPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `RegexPattern`<sup>Required</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPattern"></a>

```go
func RegexPattern() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlSequencesConfig <a name="DataPostgresqlSequencesConfig" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/datapostgresqlsequences"

&datapostgresqlsequences.DataPostgresqlSequencesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Id: *string,
	LikeAllPatterns: *[]*string,
	LikeAnyPatterns: *[]*string,
	NotLikeAllPatterns: *[]*string,
	RegexPattern: *string,
	Schemas: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.database">Database</a></code> | <code>*string</code> | The PostgreSQL database which will be queried for sequence names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>*[]*string</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>*[]*string</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>*[]*string</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.regexPattern">RegexPattern</a></code> | <code>*string</code> | Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.schemas">Schemas</a></code> | <code>*[]*string</code> | The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The PostgreSQL database which will be queried for sequence names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences#database DataPostgresqlSequences#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LikeAllPatterns`<sup>Optional</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAllPatterns"></a>

```go
LikeAllPatterns *[]*string
```

- *Type:* *[]*string

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences#like_all_patterns DataPostgresqlSequences#like_all_patterns}

---

##### `LikeAnyPatterns`<sup>Optional</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAnyPatterns"></a>

```go
LikeAnyPatterns *[]*string
```

- *Type:* *[]*string

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences#like_any_patterns DataPostgresqlSequences#like_any_patterns}

---

##### `NotLikeAllPatterns`<sup>Optional</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.notLikeAllPatterns"></a>

```go
NotLikeAllPatterns *[]*string
```

- *Type:* *[]*string

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences#not_like_all_patterns DataPostgresqlSequences#not_like_all_patterns}

---

##### `RegexPattern`<sup>Optional</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.regexPattern"></a>

```go
RegexPattern *string
```

- *Type:* *string

Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences#regex_pattern DataPostgresqlSequences#regex_pattern}

---

##### `Schemas`<sup>Optional</sup> <a name="Schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.schemas"></a>

```go
Schemas *[]*string
```

- *Type:* *[]*string

The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/sequences#schemas DataPostgresqlSequences#schemas}

---

### DataPostgresqlSequencesSequences <a name="DataPostgresqlSequencesSequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/datapostgresqlsequences"

&datapostgresqlsequences.DataPostgresqlSequencesSequences {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataPostgresqlSequencesSequencesList <a name="DataPostgresqlSequencesSequencesList" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/datapostgresqlsequences"

datapostgresqlsequences.NewDataPostgresqlSequencesSequencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPostgresqlSequencesSequencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get"></a>

```go
func Get(index *f64) DataPostgresqlSequencesSequencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataPostgresqlSequencesSequencesOutputReference <a name="DataPostgresqlSequencesSequencesOutputReference" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v11/datapostgresqlsequences"

datapostgresqlsequences.NewDataPostgresqlSequencesSequencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPostgresqlSequencesSequencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences">DataPostgresqlSequencesSequences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPostgresqlSequencesSequences
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences">DataPostgresqlSequencesSequences</a>

---



