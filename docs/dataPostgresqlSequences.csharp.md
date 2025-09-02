# `dataPostgresqlSequences` Submodule <a name="`dataPostgresqlSequences` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlSequences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlSequences <a name="DataPostgresqlSequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences postgresql_sequences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DataPostgresqlSequences(Construct Scope, string Id, DataPostgresqlSequencesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig">DataPostgresqlSequencesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLikeAllPatterns` <a name="ResetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAllPatterns"></a>

```csharp
private void ResetLikeAllPatterns()
```

##### `ResetLikeAnyPatterns` <a name="ResetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAnyPatterns"></a>

```csharp
private void ResetLikeAnyPatterns()
```

##### `ResetNotLikeAllPatterns` <a name="ResetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetNotLikeAllPatterns"></a>

```csharp
private void ResetNotLikeAllPatterns()
```

##### `ResetRegexPattern` <a name="ResetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetRegexPattern"></a>

```csharp
private void ResetRegexPattern()
```

##### `ResetSchemas` <a name="ResetSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetSchemas"></a>

```csharp
private void ResetSchemas()
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

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DataPostgresqlSequences.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DataPostgresqlSequences.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DataPostgresqlSequences.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DataPostgresqlSequences.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataPostgresqlSequences resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPostgresqlSequences to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPostgresqlSequences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataPostgresqlSequences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.sequences">Sequences</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList">DataPostgresqlSequencesSequencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatternsInput">LikeAllPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatternsInput">LikeAnyPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatternsInput">NotLikeAllPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPatternInput">RegexPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPattern">RegexPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Sequences`<sup>Required</sup> <a name="Sequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.sequences"></a>

```csharp
public DataPostgresqlSequencesSequencesList Sequences { get; }
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList">DataPostgresqlSequencesSequencesList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LikeAllPatternsInput`<sup>Optional</sup> <a name="LikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatternsInput"></a>

```csharp
public string[] LikeAllPatternsInput { get; }
```

- *Type:* string[]

---

##### `LikeAnyPatternsInput`<sup>Optional</sup> <a name="LikeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatternsInput"></a>

```csharp
public string[] LikeAnyPatternsInput { get; }
```

- *Type:* string[]

---

##### `NotLikeAllPatternsInput`<sup>Optional</sup> <a name="NotLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatternsInput"></a>

```csharp
public string[] NotLikeAllPatternsInput { get; }
```

- *Type:* string[]

---

##### `RegexPatternInput`<sup>Optional</sup> <a name="RegexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPatternInput"></a>

```csharp
public string RegexPatternInput { get; }
```

- *Type:* string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LikeAllPatterns`<sup>Required</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatterns"></a>

```csharp
public string[] LikeAllPatterns { get; }
```

- *Type:* string[]

---

##### `LikeAnyPatterns`<sup>Required</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatterns"></a>

```csharp
public string[] LikeAnyPatterns { get; }
```

- *Type:* string[]

---

##### `NotLikeAllPatterns`<sup>Required</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatterns"></a>

```csharp
public string[] NotLikeAllPatterns { get; }
```

- *Type:* string[]

---

##### `RegexPattern`<sup>Required</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPattern"></a>

```csharp
public string RegexPattern { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlSequencesConfig <a name="DataPostgresqlSequencesConfig" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DataPostgresqlSequencesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string Id = null,
    string[] LikeAllPatterns = null,
    string[] LikeAnyPatterns = null,
    string[] NotLikeAllPatterns = null,
    string RegexPattern = null,
    string[] Schemas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.database">Database</a></code> | <code>string</code> | The PostgreSQL database which will be queried for sequence names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.regexPattern">RegexPattern</a></code> | <code>string</code> | Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The PostgreSQL database which will be queried for sequence names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#database DataPostgresqlSequences#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LikeAllPatterns`<sup>Optional</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAllPatterns"></a>

```csharp
public string[] LikeAllPatterns { get; set; }
```

- *Type:* string[]

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#like_all_patterns DataPostgresqlSequences#like_all_patterns}

---

##### `LikeAnyPatterns`<sup>Optional</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAnyPatterns"></a>

```csharp
public string[] LikeAnyPatterns { get; set; }
```

- *Type:* string[]

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#like_any_patterns DataPostgresqlSequences#like_any_patterns}

---

##### `NotLikeAllPatterns`<sup>Optional</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.notLikeAllPatterns"></a>

```csharp
public string[] NotLikeAllPatterns { get; set; }
```

- *Type:* string[]

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#not_like_all_patterns DataPostgresqlSequences#not_like_all_patterns}

---

##### `RegexPattern`<sup>Optional</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.regexPattern"></a>

```csharp
public string RegexPattern { get; set; }
```

- *Type:* string

Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#regex_pattern DataPostgresqlSequences#regex_pattern}

---

##### `Schemas`<sup>Optional</sup> <a name="Schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#schemas DataPostgresqlSequences#schemas}

---

### DataPostgresqlSequencesSequences <a name="DataPostgresqlSequencesSequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DataPostgresqlSequencesSequences {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataPostgresqlSequencesSequencesList <a name="DataPostgresqlSequencesSequencesList" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DataPostgresqlSequencesSequencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get"></a>

```csharp
private DataPostgresqlSequencesSequencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataPostgresqlSequencesSequencesOutputReference <a name="DataPostgresqlSequencesSequencesOutputReference" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DataPostgresqlSequencesSequencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.objectName">ObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences">DataPostgresqlSequencesSequences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.objectName"></a>

```csharp
public string ObjectName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.internalValue"></a>

```csharp
public DataPostgresqlSequencesSequences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences">DataPostgresqlSequencesSequences</a>

---



