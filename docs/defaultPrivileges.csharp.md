# `postgresql_default_privileges`

Refer to the Terraform Registory for docs: [`postgresql_default_privileges`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges).

# `defaultPrivileges` Submodule <a name="`defaultPrivileges` Submodule" id="@cdktf/provider-postgresql.defaultPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultPrivileges <a name="DefaultPrivileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges postgresql_default_privileges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DefaultPrivileges(Construct Scope, string Id, DefaultPrivilegesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig">DefaultPrivilegesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig">DefaultPrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetWithGrantOption"></a>

```csharp
private void ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DefaultPrivileges.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DefaultPrivileges.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DefaultPrivileges.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privilegesInput">PrivilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privileges">Privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privilegesInput"></a>

```csharp
public string[] PrivilegesInput { get; }
```

- *Type:* string[]

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOptionInput"></a>

```csharp
public object WithGrantOptionInput { get; }
```

- *Type:* object

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privileges"></a>

```csharp
public string[] Privileges { get; }
```

- *Type:* string[]

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultPrivilegesConfig <a name="DefaultPrivilegesConfig" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DefaultPrivilegesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string ObjectType,
    string Owner,
    string[] Privileges,
    string Role,
    string Id = null,
    string Schema = null,
    object WithGrantOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.database">Database</a></code> | <code>string</code> | The database to grant default privileges for this role. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.objectType">ObjectType</a></code> | <code>string</code> | The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, type, schema). |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.owner">Owner</a></code> | <code>string</code> | Target role for which to alter default privileges. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.privileges">Privileges</a></code> | <code>string[]</code> | The list of privileges to apply as default privileges. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.role">Role</a></code> | <code>string</code> | The name of the role to which grant default privileges on. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges#id DefaultPrivileges#id}. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.schema">Schema</a></code> | <code>string</code> | The database schema to set default privileges for this role. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | Permit the grant recipient to grant it to others. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database to grant default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges#database DefaultPrivileges#database}

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, type, schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges#object_type DefaultPrivileges#object_type}

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Target role for which to alter default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges#owner DefaultPrivileges#owner}

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.privileges"></a>

```csharp
public string[] Privileges { get; set; }
```

- *Type:* string[]

The list of privileges to apply as default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges#privileges DefaultPrivileges#privileges}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The name of the role to which grant default privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges#role DefaultPrivileges#role}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges#id DefaultPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The database schema to set default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges#schema DefaultPrivileges#schema}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; set; }
```

- *Type:* object

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/default_privileges#with_grant_option DefaultPrivileges#with_grant_option}

---



