# `dataPostgresqlSchemas` Submodule <a name="`dataPostgresqlSchemas` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlSchemas <a name="DataPostgresqlSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas postgresql_schemas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer"></a>

```typescript
import { dataPostgresqlSchemas } from '@cdktf/provider-postgresql'

new dataPostgresqlSchemas.DataPostgresqlSchemas(scope: Construct, id: string, config: DataPostgresqlSchemasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig">DataPostgresqlSchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig">DataPostgresqlSchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetIncludeSystemSchemas">resetIncludeSystemSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAllPatterns">resetLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAnyPatterns">resetLikeAnyPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetNotLikeAllPatterns">resetNotLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetRegexPattern">resetRegexPattern</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeSystemSchemas` <a name="resetIncludeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetIncludeSystemSchemas"></a>

```typescript
public resetIncludeSystemSchemas(): void
```

##### `resetLikeAllPatterns` <a name="resetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAllPatterns"></a>

```typescript
public resetLikeAllPatterns(): void
```

##### `resetLikeAnyPatterns` <a name="resetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAnyPatterns"></a>

```typescript
public resetLikeAnyPatterns(): void
```

##### `resetNotLikeAllPatterns` <a name="resetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetNotLikeAllPatterns"></a>

```typescript
public resetNotLikeAllPatterns(): void
```

##### `resetRegexPattern` <a name="resetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetRegexPattern"></a>

```typescript
public resetRegexPattern(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPostgresqlSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct"></a>

```typescript
import { dataPostgresqlSchemas } from '@cdktf/provider-postgresql'

dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement"></a>

```typescript
import { dataPostgresqlSchemas } from '@cdktf/provider-postgresql'

dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource"></a>

```typescript
import { dataPostgresqlSchemas } from '@cdktf/provider-postgresql'

dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport"></a>

```typescript
import { dataPostgresqlSchemas } from '@cdktf/provider-postgresql'

dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPostgresqlSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPostgresqlSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPostgresqlSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPostgresqlSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput">includeSystemSchemasInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput">likeAllPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput">likeAnyPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput">notLikeAllPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput">regexPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas">includeSystemSchemas</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns">likeAllPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern">regexPattern</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeSystemSchemasInput`<sup>Optional</sup> <a name="includeSystemSchemasInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput"></a>

```typescript
public readonly includeSystemSchemasInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `likeAllPatternsInput`<sup>Optional</sup> <a name="likeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput"></a>

```typescript
public readonly likeAllPatternsInput: string[];
```

- *Type:* string[]

---

##### `likeAnyPatternsInput`<sup>Optional</sup> <a name="likeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput"></a>

```typescript
public readonly likeAnyPatternsInput: string[];
```

- *Type:* string[]

---

##### `notLikeAllPatternsInput`<sup>Optional</sup> <a name="notLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput"></a>

```typescript
public readonly notLikeAllPatternsInput: string[];
```

- *Type:* string[]

---

##### `regexPatternInput`<sup>Optional</sup> <a name="regexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput"></a>

```typescript
public readonly regexPatternInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeSystemSchemas`<sup>Required</sup> <a name="includeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas"></a>

```typescript
public readonly includeSystemSchemas: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `likeAllPatterns`<sup>Required</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns"></a>

```typescript
public readonly likeAllPatterns: string[];
```

- *Type:* string[]

---

##### `likeAnyPatterns`<sup>Required</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns"></a>

```typescript
public readonly likeAnyPatterns: string[];
```

- *Type:* string[]

---

##### `notLikeAllPatterns`<sup>Required</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns"></a>

```typescript
public readonly notLikeAllPatterns: string[];
```

- *Type:* string[]

---

##### `regexPattern`<sup>Required</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern"></a>

```typescript
public readonly regexPattern: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlSchemasConfig <a name="DataPostgresqlSchemasConfig" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.Initializer"></a>

```typescript
import { dataPostgresqlSchemas } from '@cdktf/provider-postgresql'

const dataPostgresqlSchemasConfig: dataPostgresqlSchemas.DataPostgresqlSchemasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database">database</a></code> | <code>string</code> | The PostgreSQL database which will be queried for schema names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas">includeSystemSchemas</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns">likeAllPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern">regexPattern</a></code> | <code>string</code> | Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The PostgreSQL database which will be queried for schema names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#database DataPostgresqlSchemas#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeSystemSchemas`<sup>Optional</sup> <a name="includeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas"></a>

```typescript
public readonly includeSystemSchemas: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#include_system_schemas DataPostgresqlSchemas#include_system_schemas}

---

##### `likeAllPatterns`<sup>Optional</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns"></a>

```typescript
public readonly likeAllPatterns: string[];
```

- *Type:* string[]

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#like_all_patterns DataPostgresqlSchemas#like_all_patterns}

---

##### `likeAnyPatterns`<sup>Optional</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns"></a>

```typescript
public readonly likeAnyPatterns: string[];
```

- *Type:* string[]

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#like_any_patterns DataPostgresqlSchemas#like_any_patterns}

---

##### `notLikeAllPatterns`<sup>Optional</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns"></a>

```typescript
public readonly notLikeAllPatterns: string[];
```

- *Type:* string[]

Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#not_like_all_patterns DataPostgresqlSchemas#not_like_all_patterns}

---

##### `regexPattern`<sup>Optional</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern"></a>

```typescript
public readonly regexPattern: string;
```

- *Type:* string

Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#regex_pattern DataPostgresqlSchemas#regex_pattern}

---



