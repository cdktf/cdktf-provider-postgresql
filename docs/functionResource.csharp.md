# `functionResource` Submodule <a name="`functionResource` Submodule" id="@cdktf/provider-postgresql.functionResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionResource <a name="FunctionResource" id="@cdktf/provider-postgresql.functionResource.FunctionResource"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function postgresql_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new FunctionResource(Construct Scope, string Id, FunctionResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig">FunctionResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig">FunctionResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-postgresql.functionResource.FunctionResource.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArg` <a name="PutArg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg"></a>

```csharp
private void PutArg(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg.parameter.value"></a>

- *Type:* object

---

##### `ResetArg` <a name="ResetArg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetArg"></a>

```csharp
private void ResetArg()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDropCascade` <a name="ResetDropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDropCascade"></a>

```csharp
private void ResetDropCascade()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetLanguage"></a>

```csharp
private void ResetLanguage()
```

##### `ResetParallel` <a name="ResetParallel" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetParallel"></a>

```csharp
private void ResetParallel()
```

##### `ResetReturns` <a name="ResetReturns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetReturns"></a>

```csharp
private void ResetReturns()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetSecurityDefiner` <a name="ResetSecurityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetSecurityDefiner"></a>

```csharp
private void ResetSecurityDefiner()
```

##### `ResetStrict` <a name="ResetStrict" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetStrict"></a>

```csharp
private void ResetStrict()
```

##### `ResetVolatility` <a name="ResetVolatility" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetVolatility"></a>

```csharp
private void ResetVolatility()
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

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

FunctionResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

FunctionResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

FunctionResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

FunctionResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FunctionResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg">Arg</a></code> | <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput">ArgInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput">DropCascadeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallelInput">ParallelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput">ReturnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefinerInput">SecurityDefinerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.strictInput">StrictInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatilityInput">VolatilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade">DropCascade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallel">Parallel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns">Returns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefiner">SecurityDefiner</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.strict">Strict</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatility">Volatility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arg`<sup>Required</sup> <a name="Arg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg"></a>

```csharp
public FunctionResourceArgList Arg { get; }
```

- *Type:* <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a>

---

##### `ArgInput`<sup>Optional</sup> <a name="ArgInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput"></a>

```csharp
public object ArgInput { get; }
```

- *Type:* object

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DropCascadeInput`<sup>Optional</sup> <a name="DropCascadeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput"></a>

```csharp
public object DropCascadeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParallelInput`<sup>Optional</sup> <a name="ParallelInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallelInput"></a>

```csharp
public string ParallelInput { get; }
```

- *Type:* string

---

##### `ReturnsInput`<sup>Optional</sup> <a name="ReturnsInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput"></a>

```csharp
public string ReturnsInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SecurityDefinerInput`<sup>Optional</sup> <a name="SecurityDefinerInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefinerInput"></a>

```csharp
public object SecurityDefinerInput { get; }
```

- *Type:* object

---

##### `StrictInput`<sup>Optional</sup> <a name="StrictInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.strictInput"></a>

```csharp
public object StrictInput { get; }
```

- *Type:* object

---

##### `VolatilityInput`<sup>Optional</sup> <a name="VolatilityInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatilityInput"></a>

```csharp
public string VolatilityInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DropCascade`<sup>Required</sup> <a name="DropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade"></a>

```csharp
public object DropCascade { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parallel`<sup>Required</sup> <a name="Parallel" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallel"></a>

```csharp
public string Parallel { get; }
```

- *Type:* string

---

##### `Returns`<sup>Required</sup> <a name="Returns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns"></a>

```csharp
public string Returns { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SecurityDefiner`<sup>Required</sup> <a name="SecurityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefiner"></a>

```csharp
public object SecurityDefiner { get; }
```

- *Type:* object

---

##### `Strict`<sup>Required</sup> <a name="Strict" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.strict"></a>

```csharp
public object Strict { get; }
```

- *Type:* object

---

##### `Volatility`<sup>Required</sup> <a name="Volatility" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatility"></a>

```csharp
public string Volatility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionResourceArg <a name="FunctionResourceArg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new FunctionResourceArg {
    string Type,
    string Default = null,
    string Mode = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type">Type</a></code> | <code>string</code> | The argument type. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default">Default</a></code> | <code>string</code> | An expression to be used as default value if the parameter is not specified. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode">Mode</a></code> | <code>string</code> | The argument mode. One of: IN, OUT, INOUT, or VARIADIC. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name">Name</a></code> | <code>string</code> | The argument name. The name may be required for some languages or depending on the argument mode. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#type FunctionResource#type}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

An expression to be used as default value if the parameter is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#default FunctionResource#default}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The argument mode. One of: IN, OUT, INOUT, or VARIADIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#mode FunctionResource#mode}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The argument name. The name may be required for some languages or depending on the argument mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#name FunctionResource#name}

---

### FunctionResourceConfig <a name="FunctionResourceConfig" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new FunctionResourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Body,
    string Name,
    object Arg = null,
    string Database = null,
    object DropCascade = null,
    string Id = null,
    string Language = null,
    string Parallel = null,
    string Returns = null,
    string Schema = null,
    object SecurityDefiner = null,
    object Strict = null,
    string Volatility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body">Body</a></code> | <code>string</code> | Body of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name">Name</a></code> | <code>string</code> | Name of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg">Arg</a></code> | <code>object</code> | arg block. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database">Database</a></code> | <code>string</code> | The database where the function is located. If not specified, the provider default database is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade">DropCascade</a></code> | <code>object</code> | Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language">Language</a></code> | <code>string</code> | Language of theof the function. One of: internal, sql, c, plpgsql. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.parallel">Parallel</a></code> | <code>string</code> | If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns">Returns</a></code> | <code>string</code> | Function return type. If not specified, it will be calculated based on the output arguments. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema">Schema</a></code> | <code>string</code> | Schema where the function is located. If not specified, the provider default schema is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.securityDefiner">SecurityDefiner</a></code> | <code>object</code> | If the function should execute with the permissions of the function owner instead of the permissions of the caller. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.strict">Strict</a></code> | <code>object</code> | If the function should always return NULL if any of it's inputs is NULL. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.volatility">Volatility</a></code> | <code>string</code> | Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Body of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#body FunctionResource#body}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#name FunctionResource#name}

---

##### `Arg`<sup>Optional</sup> <a name="Arg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg"></a>

```csharp
public object Arg { get; set; }
```

- *Type:* object

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#arg FunctionResource#arg}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database where the function is located. If not specified, the provider default database is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#database FunctionResource#database}

---

##### `DropCascade`<sup>Optional</sup> <a name="DropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade"></a>

```csharp
public object DropCascade { get; set; }
```

- *Type:* object

Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#drop_cascade FunctionResource#drop_cascade}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Language of theof the function. One of: internal, sql, c, plpgsql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#language FunctionResource#language}

---

##### `Parallel`<sup>Optional</sup> <a name="Parallel" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.parallel"></a>

```csharp
public string Parallel { get; set; }
```

- *Type:* string

If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#parallel FunctionResource#parallel}

---

##### `Returns`<sup>Optional</sup> <a name="Returns" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns"></a>

```csharp
public string Returns { get; set; }
```

- *Type:* string

Function return type. If not specified, it will be calculated based on the output arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#returns FunctionResource#returns}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Schema where the function is located. If not specified, the provider default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#schema FunctionResource#schema}

---

##### `SecurityDefiner`<sup>Optional</sup> <a name="SecurityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.securityDefiner"></a>

```csharp
public object SecurityDefiner { get; set; }
```

- *Type:* object

If the function should execute with the permissions of the function owner instead of the permissions of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#security_definer FunctionResource#security_definer}

---

##### `Strict`<sup>Optional</sup> <a name="Strict" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.strict"></a>

```csharp
public object Strict { get; set; }
```

- *Type:* object

If the function should always return NULL if any of it's inputs is NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#strict FunctionResource#strict}

---

##### `Volatility`<sup>Optional</sup> <a name="Volatility" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.volatility"></a>

```csharp
public string Volatility { get; set; }
```

- *Type:* string

Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#volatility FunctionResource#volatility}

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionResourceArgList <a name="FunctionResourceArgList" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new FunctionResourceArgList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get"></a>

```csharp
private FunctionResourceArgOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionResourceArgOutputReference <a name="FunctionResourceArgOutputReference" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new FunctionResourceArgOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



