# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-postgresql.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-postgresql.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database postgresql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.database.Database.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new Database(Construct Scope, string Id, DatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig">DatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.database.DatabaseConfig">DatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-postgresql.database.Database.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.database.Database.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-postgresql.database.Database.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.database.Database.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.database.Database.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-postgresql.database.Database.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-postgresql.database.Database.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-postgresql.database.Database.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-postgresql.database.Database.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.database.Database.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.database.Database.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-postgresql.database.Database.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.database.Database.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-postgresql.database.Database.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-postgresql.database.Database.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-postgresql.database.Database.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-postgresql.database.Database.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.database.Database.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowConnections` <a name="ResetAllowConnections" id="@cdktf/provider-postgresql.database.Database.resetAllowConnections"></a>

```csharp
private void ResetAllowConnections()
```

##### `ResetConnectionLimit` <a name="ResetConnectionLimit" id="@cdktf/provider-postgresql.database.Database.resetConnectionLimit"></a>

```csharp
private void ResetConnectionLimit()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-postgresql.database.Database.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.database.Database.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsTemplate` <a name="ResetIsTemplate" id="@cdktf/provider-postgresql.database.Database.resetIsTemplate"></a>

```csharp
private void ResetIsTemplate()
```

##### `ResetLcCollate` <a name="ResetLcCollate" id="@cdktf/provider-postgresql.database.Database.resetLcCollate"></a>

```csharp
private void ResetLcCollate()
```

##### `ResetLcCtype` <a name="ResetLcCtype" id="@cdktf/provider-postgresql.database.Database.resetLcCtype"></a>

```csharp
private void ResetLcCtype()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-postgresql.database.Database.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetTablespaceName` <a name="ResetTablespaceName" id="@cdktf/provider-postgresql.database.Database.resetTablespaceName"></a>

```csharp
private void ResetTablespaceName()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-postgresql.database.Database.resetTemplate"></a>

```csharp
private void ResetTemplate()
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

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

Database.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.database.Database.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.database.Database.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

Database.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.database.Database.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

Database.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

Database.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Database to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Database that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.database.Database.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Database to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput">AllowConnectionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplateInput">IsTemplateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollateInput">LcCollateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtypeInput">LcCtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput">TablespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnections">AllowConnections</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplate">IsTemplate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollate">LcCollate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtype">LcCtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceName">TablespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.template">Template</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.database.Database.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.database.Database.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.database.Database.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.database.Database.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.database.Database.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.database.Database.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.database.Database.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.database.Database.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.database.Database.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.database.Database.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.database.Database.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowConnectionsInput`<sup>Optional</sup> <a name="AllowConnectionsInput" id="@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput"></a>

```csharp
public object AllowConnectionsInput { get; }
```

- *Type:* object

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktf/provider-postgresql.database.Database.property.connectionLimitInput"></a>

```csharp
public double ConnectionLimitInput { get; }
```

- *Type:* double

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-postgresql.database.Database.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.database.Database.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsTemplateInput`<sup>Optional</sup> <a name="IsTemplateInput" id="@cdktf/provider-postgresql.database.Database.property.isTemplateInput"></a>

```csharp
public object IsTemplateInput { get; }
```

- *Type:* object

---

##### `LcCollateInput`<sup>Optional</sup> <a name="LcCollateInput" id="@cdktf/provider-postgresql.database.Database.property.lcCollateInput"></a>

```csharp
public string LcCollateInput { get; }
```

- *Type:* string

---

##### `LcCtypeInput`<sup>Optional</sup> <a name="LcCtypeInput" id="@cdktf/provider-postgresql.database.Database.property.lcCtypeInput"></a>

```csharp
public string LcCtypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.database.Database.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-postgresql.database.Database.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `TablespaceNameInput`<sup>Optional</sup> <a name="TablespaceNameInput" id="@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput"></a>

```csharp
public string TablespaceNameInput { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-postgresql.database.Database.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `AllowConnections`<sup>Required</sup> <a name="AllowConnections" id="@cdktf/provider-postgresql.database.Database.property.allowConnections"></a>

```csharp
public object AllowConnections { get; }
```

- *Type:* object

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-postgresql.database.Database.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; }
```

- *Type:* double

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-postgresql.database.Database.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.database.Database.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsTemplate`<sup>Required</sup> <a name="IsTemplate" id="@cdktf/provider-postgresql.database.Database.property.isTemplate"></a>

```csharp
public object IsTemplate { get; }
```

- *Type:* object

---

##### `LcCollate`<sup>Required</sup> <a name="LcCollate" id="@cdktf/provider-postgresql.database.Database.property.lcCollate"></a>

```csharp
public string LcCollate { get; }
```

- *Type:* string

---

##### `LcCtype`<sup>Required</sup> <a name="LcCtype" id="@cdktf/provider-postgresql.database.Database.property.lcCtype"></a>

```csharp
public string LcCtype { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.database.Database.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-postgresql.database.Database.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `TablespaceName`<sup>Required</sup> <a name="TablespaceName" id="@cdktf/provider-postgresql.database.Database.property.tablespaceName"></a>

```csharp
public string TablespaceName { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-postgresql.database.Database.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.database.Database.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-postgresql.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.database.DatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object AllowConnections = null,
    double ConnectionLimit = null,
    string Encoding = null,
    string Id = null,
    object IsTemplate = null,
    string LcCollate = null,
    string LcCtype = null,
    string Owner = null,
    string TablespaceName = null,
    string Template = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.name">Name</a></code> | <code>string</code> | The PostgreSQL database name to connect to. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections">AllowConnections</a></code> | <code>object</code> | If false then no one can connect to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | How many concurrent connections can be made to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding">Encoding</a></code> | <code>string</code> | Character set encoding to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate">IsTemplate</a></code> | <code>object</code> | If true, then this database can be cloned by any user with CREATEDB privileges. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate">LcCollate</a></code> | <code>string</code> | Collation order (LC_COLLATE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype">LcCtype</a></code> | <code>string</code> | Character classification (LC_CTYPE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.owner">Owner</a></code> | <code>string</code> | The ROLE which owns the database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName">TablespaceName</a></code> | <code>string</code> | The name of the tablespace that will be associated with the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.template">Template</a></code> | <code>string</code> | The name of the template from which to create the new database. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The PostgreSQL database name to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#name Database#name}

---

##### `AllowConnections`<sup>Optional</sup> <a name="AllowConnections" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections"></a>

```csharp
public object AllowConnections { get; set; }
```

- *Type:* object

If false then no one can connect to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#allow_connections Database#allow_connections}

---

##### `ConnectionLimit`<sup>Optional</sup> <a name="ConnectionLimit" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; set; }
```

- *Type:* double

How many concurrent connections can be made to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#connection_limit Database#connection_limit}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Character set encoding to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#encoding Database#encoding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTemplate`<sup>Optional</sup> <a name="IsTemplate" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate"></a>

```csharp
public object IsTemplate { get; set; }
```

- *Type:* object

If true, then this database can be cloned by any user with CREATEDB privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#is_template Database#is_template}

---

##### `LcCollate`<sup>Optional</sup> <a name="LcCollate" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate"></a>

```csharp
public string LcCollate { get; set; }
```

- *Type:* string

Collation order (LC_COLLATE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#lc_collate Database#lc_collate}

---

##### `LcCtype`<sup>Optional</sup> <a name="LcCtype" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype"></a>

```csharp
public string LcCtype { get; set; }
```

- *Type:* string

Character classification (LC_CTYPE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#lc_ctype Database#lc_ctype}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

The ROLE which owns the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#owner Database#owner}

---

##### `TablespaceName`<sup>Optional</sup> <a name="TablespaceName" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName"></a>

```csharp
public string TablespaceName { get; set; }
```

- *Type:* string

The name of the tablespace that will be associated with the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#tablespace_name Database#tablespace_name}

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

The name of the template from which to create the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#template Database#template}

---



