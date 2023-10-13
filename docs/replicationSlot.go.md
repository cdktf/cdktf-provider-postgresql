# `postgresql_replication_slot`

Refer to the Terraform Registory for docs: [`postgresql_replication_slot`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/replication_slot).

# `replicationSlot` Submodule <a name="`replicationSlot` Submodule" id="@cdktf/provider-postgresql.replicationSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReplicationSlot <a name="ReplicationSlot" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/replication_slot postgresql_replication_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/replicationslot"

replicationslot.NewReplicationSlot(scope Construct, id *string, config ReplicationSlotConfig) ReplicationSlot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig">ReplicationSlotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig">ReplicationSlotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/replicationslot"

replicationslot.ReplicationSlot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/replicationslot"

replicationslot.ReplicationSlot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/replicationslot"

replicationslot.ReplicationSlot_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.pluginInput">PluginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.plugin">Plugin</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PluginInput`<sup>Optional</sup> <a name="PluginInput" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.pluginInput"></a>

```go
func PluginInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.plugin"></a>

```go
func Plugin() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ReplicationSlotConfig <a name="ReplicationSlotConfig" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-postgresql-go/postgresql/replicationslot"

&replicationslot.ReplicationSlotConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Plugin: *string,
	Database: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/replication_slot#name ReplicationSlot#name}. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.plugin">Plugin</a></code> | <code>*string</code> | Sets the output plugin to use. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.database">Database</a></code> | <code>*string</code> | Sets the database to add the replication slot to. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/replication_slot#id ReplicationSlot#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/replication_slot#name ReplicationSlot#name}.

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.plugin"></a>

```go
Plugin *string
```

- *Type:* *string

Sets the output plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/replication_slot#plugin ReplicationSlot#plugin}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Sets the database to add the replication slot to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/replication_slot#database ReplicationSlot#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/replication_slot#id ReplicationSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



