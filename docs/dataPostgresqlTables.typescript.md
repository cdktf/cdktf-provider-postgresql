# `dataPostgresqlTables` Submodule <a name="`dataPostgresqlTables` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlTables <a name="DataPostgresqlTables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/d/tables postgresql_tables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer"></a>

```typescript
import { dataPostgresqlTables } from '@cdktf/provider-postgresql'

new dataPostgresqlTables.DataPostgresqlTables(scope: Construct, id: string, config: DataPostgresqlTablesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig">DataPostgresqlTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig">DataPostgresqlTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAllPatterns">resetLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAnyPatterns">resetLikeAnyPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetNotLikeAllPatterns">resetNotLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetRegexPattern">resetRegexPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetSchemas">resetSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetTableTypes">resetTableTypes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLikeAllPatterns` <a name="resetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAllPatterns"></a>

```typescript
public resetLikeAllPatterns(): void
```

##### `resetLikeAnyPatterns` <a name="resetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAnyPatterns"></a>

```typescript
public resetLikeAnyPatterns(): void
```

##### `resetNotLikeAllPatterns` <a name="resetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetNotLikeAllPatterns"></a>

```typescript
public resetNotLikeAllPatterns(): void
```

##### `resetRegexPattern` <a name="resetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetRegexPattern"></a>

```typescript
public resetRegexPattern(): void
```

##### `resetSchemas` <a name="resetSchemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetSchemas"></a>

```typescript
public resetSchemas(): void
```

##### `resetTableTypes` <a name="resetTableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetTableTypes"></a>

```typescript
public resetTableTypes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct"></a>

```typescript
import { dataPostgresqlTables } from '@cdktf/provider-postgresql'

dataPostgresqlTables.DataPostgresqlTables.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement"></a>

```typescript
import { dataPostgresqlTables } from '@cdktf/provider-postgresql'

dataPostgresqlTables.DataPostgresqlTables.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource"></a>

```typescript
import { dataPostgresqlTables } from '@cdktf/provider-postgresql'

dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tables">tables</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList">DataPostgresqlTablesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatternsInput">likeAllPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatternsInput">likeAnyPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatternsInput">notLikeAllPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPatternInput">regexPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypesInput">tableTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatterns">likeAllPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPattern">regexPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypes">tableTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tables"></a>

```typescript
public readonly tables: DataPostgresqlTablesTablesList;
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList">DataPostgresqlTablesTablesList</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `likeAllPatternsInput`<sup>Optional</sup> <a name="likeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatternsInput"></a>

```typescript
public readonly likeAllPatternsInput: string[];
```

- *Type:* string[]

---

##### `likeAnyPatternsInput`<sup>Optional</sup> <a name="likeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatternsInput"></a>

```typescript
public readonly likeAnyPatternsInput: string[];
```

- *Type:* string[]

---

##### `notLikeAllPatternsInput`<sup>Optional</sup> <a name="notLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatternsInput"></a>

```typescript
public readonly notLikeAllPatternsInput: string[];
```

- *Type:* string[]

---

##### `regexPatternInput`<sup>Optional</sup> <a name="regexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPatternInput"></a>

```typescript
public readonly regexPatternInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `tableTypesInput`<sup>Optional</sup> <a name="tableTypesInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypesInput"></a>

```typescript
public readonly tableTypesInput: string[];
```

- *Type:* string[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `likeAllPatterns`<sup>Required</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatterns"></a>

```typescript
public readonly likeAllPatterns: string[];
```

- *Type:* string[]

---

##### `likeAnyPatterns`<sup>Required</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatterns"></a>

```typescript
public readonly likeAnyPatterns: string[];
```

- *Type:* string[]

---

##### `notLikeAllPatterns`<sup>Required</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatterns"></a>

```typescript
public readonly notLikeAllPatterns: string[];
```

- *Type:* string[]

---

##### `regexPattern`<sup>Required</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPattern"></a>

```typescript
public readonly regexPattern: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tableTypes`<sup>Required</sup> <a name="tableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypes"></a>

```typescript
public readonly tableTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlTablesConfig <a name="DataPostgresqlTablesConfig" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.Initializer"></a>

```typescript
import { dataPostgresqlTables } from '@cdktf/provider-postgresql'

const dataPostgresqlTablesConfig: dataPostgresqlTables.DataPostgresqlTablesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.database">database</a></code> | <code>string</code> | The PostgreSQL database which will be queried for table names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/d/tables#id DataPostgresqlTables#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAllPatterns">likeAllPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>string[]</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.regexPattern">regexPattern</a></code> | <code>string</code> | Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.schemas">schemas</a></code> | <code>string[]</code> | The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.tableTypes">tableTypes</a></code> | <code>string[]</code> | The PostgreSQL table types which will be queried for table names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The PostgreSQL database which will be queried for table names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/d/tables#database DataPostgresqlTables#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/d/tables#id DataPostgresqlTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `likeAllPatterns`<sup>Optional</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAllPatterns"></a>

```typescript
public readonly likeAllPatterns: string[];
```

- *Type:* string[]

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/d/tables#like_all_patterns DataPostgresqlTables#like_all_patterns}

---

##### `likeAnyPatterns`<sup>Optional</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAnyPatterns"></a>

```typescript
public readonly likeAnyPatterns: string[];
```

- *Type:* string[]

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/d/tables#like_any_patterns DataPostgresqlTables#like_any_patterns}

---

##### `notLikeAllPatterns`<sup>Optional</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.notLikeAllPatterns"></a>

```typescript
public readonly notLikeAllPatterns: string[];
```

- *Type:* string[]

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/d/tables#not_like_all_patterns DataPostgresqlTables#not_like_all_patterns}

---

##### `regexPattern`<sup>Optional</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.regexPattern"></a>

```typescript
public readonly regexPattern: string;
```

- *Type:* string

Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/d/tables#regex_pattern DataPostgresqlTables#regex_pattern}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/d/tables#schemas DataPostgresqlTables#schemas}

---

##### `tableTypes`<sup>Optional</sup> <a name="tableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.tableTypes"></a>

```typescript
public readonly tableTypes: string[];
```

- *Type:* string[]

The PostgreSQL table types which will be queried for table names.

Includes all table types by default. Use 'BASE TABLE' for normal tables only

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/d/tables#table_types DataPostgresqlTables#table_types}

---

### DataPostgresqlTablesTables <a name="DataPostgresqlTablesTables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables.Initializer"></a>

```typescript
import { dataPostgresqlTables } from '@cdktf/provider-postgresql'

const dataPostgresqlTablesTables: dataPostgresqlTables.DataPostgresqlTablesTables = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPostgresqlTablesTablesList <a name="DataPostgresqlTablesTablesList" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer"></a>

```typescript
import { dataPostgresqlTables } from '@cdktf/provider-postgresql'

new dataPostgresqlTables.DataPostgresqlTablesTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get"></a>

```typescript
public get(index: number): DataPostgresqlTablesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPostgresqlTablesTablesOutputReference <a name="DataPostgresqlTablesTablesOutputReference" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer"></a>

```typescript
import { dataPostgresqlTables } from '@cdktf/provider-postgresql'

new dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.tableType">tableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables">DataPostgresqlTablesTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPostgresqlTablesTables;
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables">DataPostgresqlTablesTables</a>

---



