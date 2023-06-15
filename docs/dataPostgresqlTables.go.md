# `data_postgresql_tables`

Refer to the Terraform Registory for docs: [`data_postgresql_tables`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables).

# `dataPostgresqlTables` Submodule <a name="`dataPostgresqlTables` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlTables <a name="DataPostgresqlTables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables postgresql_tables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v7/datapostgresqltables"

datapostgresqltables.NewDataPostgresqlTables(scope Construct, id *string, config DataPostgresqlTablesConfig) DataPostgresqlTables
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig">DataPostgresqlTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig">DataPostgresqlTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAllPatterns">ResetLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAnyPatterns">ResetLikeAnyPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetNotLikeAllPatterns">ResetNotLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetRegexPattern">ResetRegexPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetSchemas">ResetSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetTableTypes">ResetTableTypes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetId"></a>

```go
func ResetId()
```

##### `ResetLikeAllPatterns` <a name="ResetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAllPatterns"></a>

```go
func ResetLikeAllPatterns()
```

##### `ResetLikeAnyPatterns` <a name="ResetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAnyPatterns"></a>

```go
func ResetLikeAnyPatterns()
```

##### `ResetNotLikeAllPatterns` <a name="ResetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetNotLikeAllPatterns"></a>

```go
func ResetNotLikeAllPatterns()
```

##### `ResetRegexPattern` <a name="ResetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetRegexPattern"></a>

```go
func ResetRegexPattern()
```

##### `ResetSchemas` <a name="ResetSchemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetSchemas"></a>

```go
func ResetSchemas()
```

##### `ResetTableTypes` <a name="ResetTableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetTableTypes"></a>

```go
func ResetTableTypes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v7/datapostgresqltables"

datapostgresqltables.DataPostgresqlTables_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v7/datapostgresqltables"

datapostgresqltables.DataPostgresqlTables_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v7/datapostgresqltables"

datapostgresqltables.DataPostgresqlTables_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tables">Tables</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList">DataPostgresqlTablesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatternsInput">LikeAllPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatternsInput">LikeAnyPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatternsInput">NotLikeAllPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPatternInput">RegexPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemasInput">SchemasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypesInput">TableTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPattern">RegexPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypes">TableTypes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tables"></a>

```go
func Tables() DataPostgresqlTablesTablesList
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList">DataPostgresqlTablesTablesList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LikeAllPatternsInput`<sup>Optional</sup> <a name="LikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatternsInput"></a>

```go
func LikeAllPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LikeAnyPatternsInput`<sup>Optional</sup> <a name="LikeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatternsInput"></a>

```go
func LikeAnyPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotLikeAllPatternsInput`<sup>Optional</sup> <a name="NotLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatternsInput"></a>

```go
func NotLikeAllPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegexPatternInput`<sup>Optional</sup> <a name="RegexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPatternInput"></a>

```go
func RegexPatternInput() *string
```

- *Type:* *string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemasInput"></a>

```go
func SchemasInput() *[]*string
```

- *Type:* *[]*string

---

##### `TableTypesInput`<sup>Optional</sup> <a name="TableTypesInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypesInput"></a>

```go
func TableTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LikeAllPatterns`<sup>Required</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatterns"></a>

```go
func LikeAllPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `LikeAnyPatterns`<sup>Required</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatterns"></a>

```go
func LikeAnyPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `NotLikeAllPatterns`<sup>Required</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatterns"></a>

```go
func NotLikeAllPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `RegexPattern`<sup>Required</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPattern"></a>

```go
func RegexPattern() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TableTypes`<sup>Required</sup> <a name="TableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypes"></a>

```go
func TableTypes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlTablesConfig <a name="DataPostgresqlTablesConfig" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v7/datapostgresqltables"

&datapostgresqltables.DataPostgresqlTablesConfig {
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
	TableTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.database">Database</a></code> | <code>*string</code> | The PostgreSQL database which will be queried for table names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>*[]*string</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>*[]*string</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>*[]*string</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.regexPattern">RegexPattern</a></code> | <code>*string</code> | Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.schemas">Schemas</a></code> | <code>*[]*string</code> | The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.tableTypes">TableTypes</a></code> | <code>*[]*string</code> | The PostgreSQL table types which will be queried for table names. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The PostgreSQL database which will be queried for table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#database DataPostgresqlTables#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LikeAllPatterns`<sup>Optional</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAllPatterns"></a>

```go
LikeAllPatterns *[]*string
```

- *Type:* *[]*string

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_all_patterns DataPostgresqlTables#like_all_patterns}

---

##### `LikeAnyPatterns`<sup>Optional</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAnyPatterns"></a>

```go
LikeAnyPatterns *[]*string
```

- *Type:* *[]*string

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_any_patterns DataPostgresqlTables#like_any_patterns}

---

##### `NotLikeAllPatterns`<sup>Optional</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.notLikeAllPatterns"></a>

```go
NotLikeAllPatterns *[]*string
```

- *Type:* *[]*string

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#not_like_all_patterns DataPostgresqlTables#not_like_all_patterns}

---

##### `RegexPattern`<sup>Optional</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.regexPattern"></a>

```go
RegexPattern *string
```

- *Type:* *string

Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#regex_pattern DataPostgresqlTables#regex_pattern}

---

##### `Schemas`<sup>Optional</sup> <a name="Schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.schemas"></a>

```go
Schemas *[]*string
```

- *Type:* *[]*string

The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#schemas DataPostgresqlTables#schemas}

---

##### `TableTypes`<sup>Optional</sup> <a name="TableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.tableTypes"></a>

```go
TableTypes *[]*string
```

- *Type:* *[]*string

The PostgreSQL table types which will be queried for table names.

Includes all table types by default. Use 'BASE TABLE' for normal tables only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#table_types DataPostgresqlTables#table_types}

---

### DataPostgresqlTablesTables <a name="DataPostgresqlTablesTables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v7/datapostgresqltables"

&datapostgresqltables.DataPostgresqlTablesTables {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataPostgresqlTablesTablesList <a name="DataPostgresqlTablesTablesList" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v7/datapostgresqltables"

datapostgresqltables.NewDataPostgresqlTablesTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPostgresqlTablesTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get"></a>

```go
func Get(index *f64) DataPostgresqlTablesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataPostgresqlTablesTablesOutputReference <a name="DataPostgresqlTablesTablesOutputReference" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v7/datapostgresqltables"

datapostgresqltables.NewDataPostgresqlTablesTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPostgresqlTablesTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables">DataPostgresqlTablesTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPostgresqlTablesTables
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables">DataPostgresqlTablesTables</a>

---



