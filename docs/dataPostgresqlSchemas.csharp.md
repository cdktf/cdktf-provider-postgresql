# `dataPostgresqlSchemas` Submodule <a name="`dataPostgresqlSchemas` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlSchemas <a name="DataPostgresqlSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas postgresql_schemas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DataPostgresqlSchemas(Construct Scope, string Id, DataPostgresqlSchemasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig">DataPostgresqlSchemasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeSystemSchemas` <a name="ResetIncludeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetIncludeSystemSchemas"></a>

```csharp
private void ResetIncludeSystemSchemas()
```

##### `ResetLikeAllPatterns` <a name="ResetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAllPatterns"></a>

```csharp
private void ResetLikeAllPatterns()
```

##### `ResetLikeAnyPatterns` <a name="ResetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAnyPatterns"></a>

```csharp
private void ResetLikeAnyPatterns()
```

##### `ResetNotLikeAllPatterns` <a name="ResetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetNotLikeAllPatterns"></a>

```csharp
private void ResetNotLikeAllPatterns()
```

##### `ResetRegexPattern` <a name="ResetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetRegexPattern"></a>

```csharp
private void ResetRegexPattern()
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

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DataPostgresqlSchemas.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DataPostgresqlSchemas.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DataPostgresqlSchemas.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

DataPostgresqlSchemas.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataPostgresqlSchemas resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPostgresqlSchemas to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPostgresqlSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataPostgresqlSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput">IncludeSystemSchemasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput">LikeAllPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput">LikeAnyPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput">NotLikeAllPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput">RegexPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas">IncludeSystemSchemas</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern">RegexPattern</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeSystemSchemasInput`<sup>Optional</sup> <a name="IncludeSystemSchemasInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput"></a>

```csharp
public object IncludeSystemSchemasInput { get; }
```

- *Type:* object

---

##### `LikeAllPatternsInput`<sup>Optional</sup> <a name="LikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput"></a>

```csharp
public string[] LikeAllPatternsInput { get; }
```

- *Type:* string[]

---

##### `LikeAnyPatternsInput`<sup>Optional</sup> <a name="LikeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput"></a>

```csharp
public string[] LikeAnyPatternsInput { get; }
```

- *Type:* string[]

---

##### `NotLikeAllPatternsInput`<sup>Optional</sup> <a name="NotLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput"></a>

```csharp
public string[] NotLikeAllPatternsInput { get; }
```

- *Type:* string[]

---

##### `RegexPatternInput`<sup>Optional</sup> <a name="RegexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput"></a>

```csharp
public string RegexPatternInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeSystemSchemas`<sup>Required</sup> <a name="IncludeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas"></a>

```csharp
public object IncludeSystemSchemas { get; }
```

- *Type:* object

---

##### `LikeAllPatterns`<sup>Required</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns"></a>

```csharp
public string[] LikeAllPatterns { get; }
```

- *Type:* string[]

---

##### `LikeAnyPatterns`<sup>Required</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns"></a>

```csharp
public string[] LikeAnyPatterns { get; }
```

- *Type:* string[]

---

##### `NotLikeAllPatterns`<sup>Required</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns"></a>

```csharp
public string[] NotLikeAllPatterns { get; }
```

- *Type:* string[]

---

##### `RegexPattern`<sup>Required</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern"></a>

```csharp
public string RegexPattern { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlSchemasConfig <a name="DataPostgresqlSchemasConfig" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new DataPostgresqlSchemasConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string Id = null,
    object IncludeSystemSchemas = null,
    string[] LikeAllPatterns = null,
    string[] LikeAnyPatterns = null,
    string[] NotLikeAllPatterns = null,
    string RegexPattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database">Database</a></code> | <code>string</code> | The PostgreSQL database which will be queried for schema names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas">IncludeSystemSchemas</a></code> | <code>object</code> | Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns">LikeAllPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns">LikeAnyPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns">NotLikeAllPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern">RegexPattern</a></code> | <code>string</code> | Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The PostgreSQL database which will be queried for schema names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#database DataPostgresqlSchemas#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeSystemSchemas`<sup>Optional</sup> <a name="IncludeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas"></a>

```csharp
public object IncludeSystemSchemas { get; set; }
```

- *Type:* object

Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#include_system_schemas DataPostgresqlSchemas#include_system_schemas}

---

##### `LikeAllPatterns`<sup>Optional</sup> <a name="LikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns"></a>

```csharp
public string[] LikeAllPatterns { get; set; }
```

- *Type:* string[]

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#like_all_patterns DataPostgresqlSchemas#like_all_patterns}

---

##### `LikeAnyPatterns`<sup>Optional</sup> <a name="LikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns"></a>

```csharp
public string[] LikeAnyPatterns { get; set; }
```

- *Type:* string[]

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#like_any_patterns DataPostgresqlSchemas#like_any_patterns}

---

##### `NotLikeAllPatterns`<sup>Optional</sup> <a name="NotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns"></a>

```csharp
public string[] NotLikeAllPatterns { get; set; }
```

- *Type:* string[]

Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#not_like_all_patterns DataPostgresqlSchemas#not_like_all_patterns}

---

##### `RegexPattern`<sup>Optional</sup> <a name="RegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern"></a>

```csharp
public string RegexPattern { get; set; }
```

- *Type:* string

Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#regex_pattern DataPostgresqlSchemas#regex_pattern}

---



