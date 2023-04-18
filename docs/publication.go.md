# `publication` Submodule <a name="`publication` Submodule" id="@cdktf/provider-postgresql.publication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Publication <a name="Publication" id="@cdktf/provider-postgresql.publication.Publication"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication postgresql_publication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.publication.Publication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/publication"

publication.NewPublication(scope Construct, id *string, config PublicationConfig) Publication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig">PublicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.publication.PublicationConfig">PublicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetAllTables">ResetAllTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetDropCascade">ResetDropCascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetPublishParam">ResetPublishParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetPublishViaPartitionRootParam">ResetPublishViaPartitionRootParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetTables">ResetTables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.publication.Publication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.publication.Publication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.publication.Publication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.publication.Publication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.publication.Publication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.publication.Publication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.publication.Publication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.publication.Publication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.publication.Publication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.publication.Publication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.publication.Publication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.publication.Publication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.publication.Publication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.publication.Publication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.publication.Publication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.publication.Publication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.publication.Publication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllTables` <a name="ResetAllTables" id="@cdktf/provider-postgresql.publication.Publication.resetAllTables"></a>

```go
func ResetAllTables()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-postgresql.publication.Publication.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDropCascade` <a name="ResetDropCascade" id="@cdktf/provider-postgresql.publication.Publication.resetDropCascade"></a>

```go
func ResetDropCascade()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.publication.Publication.resetId"></a>

```go
func ResetId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-postgresql.publication.Publication.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetPublishParam` <a name="ResetPublishParam" id="@cdktf/provider-postgresql.publication.Publication.resetPublishParam"></a>

```go
func ResetPublishParam()
```

##### `ResetPublishViaPartitionRootParam` <a name="ResetPublishViaPartitionRootParam" id="@cdktf/provider-postgresql.publication.Publication.resetPublishViaPartitionRootParam"></a>

```go
func ResetPublishViaPartitionRootParam()
```

##### `ResetTables` <a name="ResetTables" id="@cdktf/provider-postgresql.publication.Publication.resetTables"></a>

```go
func ResetTables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.publication.Publication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/publication"

publication.Publication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.publication.Publication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.publication.Publication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/publication"

publication.Publication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.publication.Publication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.publication.Publication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/publication"

publication.Publication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.publication.Publication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.allTablesInput">AllTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.dropCascadeInput">DropCascadeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.publishParamInput">PublishParamInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.publishViaPartitionRootParamInput">PublishViaPartitionRootParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.tablesInput">TablesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.allTables">AllTables</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.dropCascade">DropCascade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.publishParam">PublishParam</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.publishViaPartitionRootParam">PublishViaPartitionRootParam</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.tables">Tables</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.publication.Publication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.publication.Publication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.publication.Publication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.publication.Publication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.publication.Publication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.publication.Publication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.publication.Publication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.publication.Publication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.publication.Publication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.publication.Publication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.publication.Publication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.publication.Publication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.publication.Publication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.publication.Publication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllTablesInput`<sup>Optional</sup> <a name="AllTablesInput" id="@cdktf/provider-postgresql.publication.Publication.property.allTablesInput"></a>

```go
func AllTablesInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.publication.Publication.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DropCascadeInput`<sup>Optional</sup> <a name="DropCascadeInput" id="@cdktf/provider-postgresql.publication.Publication.property.dropCascadeInput"></a>

```go
func DropCascadeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.publication.Publication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.publication.Publication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-postgresql.publication.Publication.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PublishParamInput`<sup>Optional</sup> <a name="PublishParamInput" id="@cdktf/provider-postgresql.publication.Publication.property.publishParamInput"></a>

```go
func PublishParamInput() *[]*string
```

- *Type:* *[]*string

---

##### `PublishViaPartitionRootParamInput`<sup>Optional</sup> <a name="PublishViaPartitionRootParamInput" id="@cdktf/provider-postgresql.publication.Publication.property.publishViaPartitionRootParamInput"></a>

```go
func PublishViaPartitionRootParamInput() interface{}
```

- *Type:* interface{}

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktf/provider-postgresql.publication.Publication.property.tablesInput"></a>

```go
func TablesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllTables`<sup>Required</sup> <a name="AllTables" id="@cdktf/provider-postgresql.publication.Publication.property.allTables"></a>

```go
func AllTables() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.publication.Publication.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DropCascade`<sup>Required</sup> <a name="DropCascade" id="@cdktf/provider-postgresql.publication.Publication.property.dropCascade"></a>

```go
func DropCascade() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.publication.Publication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.publication.Publication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-postgresql.publication.Publication.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `PublishParam`<sup>Required</sup> <a name="PublishParam" id="@cdktf/provider-postgresql.publication.Publication.property.publishParam"></a>

```go
func PublishParam() *[]*string
```

- *Type:* *[]*string

---

##### `PublishViaPartitionRootParam`<sup>Required</sup> <a name="PublishViaPartitionRootParam" id="@cdktf/provider-postgresql.publication.Publication.property.publishViaPartitionRootParam"></a>

```go
func PublishViaPartitionRootParam() interface{}
```

- *Type:* interface{}

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-postgresql.publication.Publication.property.tables"></a>

```go
func Tables() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.publication.Publication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PublicationConfig <a name="PublicationConfig" id="@cdktf/provider-postgresql.publication.PublicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.publication.PublicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/v6/publication"

&publication.PublicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllTables: interface{},
	Database: *string,
	DropCascade: interface{},
	Id: *string,
	Owner: *string,
	PublishParam: *[]*string,
	PublishViaPartitionRootParam: interface{},
	Tables: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#name Publication#name}. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.allTables">AllTables</a></code> | <code>interface{}</code> | Sets the tables list to publish to ALL tables. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.database">Database</a></code> | <code>*string</code> | Sets the database to add the publication for. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.dropCascade">DropCascade</a></code> | <code>interface{}</code> | When true, will also drop all the objects that depend on the publication, and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#id Publication#id}. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.owner">Owner</a></code> | <code>*string</code> | Sets the owner of the publication. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.publishParam">PublishParam</a></code> | <code>*[]*string</code> | Sets which DML operations will be published. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.publishViaPartitionRootParam">PublishViaPartitionRootParam</a></code> | <code>interface{}</code> | Sets whether changes in a partitioned table using the identity and schema of the partitioned table. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.tables">Tables</a></code> | <code>*[]*string</code> | Sets the tables list to publish. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#name Publication#name}.

---

##### `AllTables`<sup>Optional</sup> <a name="AllTables" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.allTables"></a>

```go
AllTables interface{}
```

- *Type:* interface{}

Sets the tables list to publish to ALL tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#all_tables Publication#all_tables}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Sets the database to add the publication for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#database Publication#database}

---

##### `DropCascade`<sup>Optional</sup> <a name="DropCascade" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.dropCascade"></a>

```go
DropCascade interface{}
```

- *Type:* interface{}

When true, will also drop all the objects that depend on the publication, and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#drop_cascade Publication#drop_cascade}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#id Publication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Sets the owner of the publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#owner Publication#owner}

---

##### `PublishParam`<sup>Optional</sup> <a name="PublishParam" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.publishParam"></a>

```go
PublishParam *[]*string
```

- *Type:* *[]*string

Sets which DML operations will be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#publish_param Publication#publish_param}

---

##### `PublishViaPartitionRootParam`<sup>Optional</sup> <a name="PublishViaPartitionRootParam" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.publishViaPartitionRootParam"></a>

```go
PublishViaPartitionRootParam interface{}
```

- *Type:* interface{}

Sets whether changes in a partitioned table using the identity and schema of the partitioned table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#publish_via_partition_root_param Publication#publish_via_partition_root_param}

---

##### `Tables`<sup>Optional</sup> <a name="Tables" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.tables"></a>

```go
Tables *[]*string
```

- *Type:* *[]*string

Sets the tables list to publish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/publication#tables Publication#tables}

---



