# `defaultPrivileges` Submodule <a name="`defaultPrivileges` Submodule" id="@cdktf/provider-postgresql.defaultPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultPrivileges <a name="DefaultPrivileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges postgresql_default_privileges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer"></a>

```typescript
import { defaultPrivileges } from '@cdktf/provider-postgresql'

new defaultPrivileges.DefaultPrivileges(scope: Construct, id: string, config: DefaultPrivilegesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig">DefaultPrivilegesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig">DefaultPrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetWithGrantOption">resetWithGrantOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetWithGrantOption` <a name="resetWithGrantOption" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DefaultPrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct"></a>

```typescript
import { defaultPrivileges } from '@cdktf/provider-postgresql'

defaultPrivileges.DefaultPrivileges.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement"></a>

```typescript
import { defaultPrivileges } from '@cdktf/provider-postgresql'

defaultPrivileges.DefaultPrivileges.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource"></a>

```typescript
import { defaultPrivileges } from '@cdktf/provider-postgresql'

defaultPrivileges.DefaultPrivileges.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport"></a>

```typescript
import { defaultPrivileges } from '@cdktf/provider-postgresql'

defaultPrivileges.DefaultPrivileges.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DefaultPrivileges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DefaultPrivileges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DefaultPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DefaultPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privilegesInput">privilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOptionInput">withGrantOptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privileges">privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOption">withGrantOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: string[];
```

- *Type:* string[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="withGrantOptionInput" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOptionInput"></a>

```typescript
public readonly withGrantOptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `withGrantOption`<sup>Required</sup> <a name="withGrantOption" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultPrivilegesConfig <a name="DefaultPrivilegesConfig" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.Initializer"></a>

```typescript
import { defaultPrivileges } from '@cdktf/provider-postgresql'

const defaultPrivilegesConfig: defaultPrivileges.DefaultPrivilegesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.database">database</a></code> | <code>string</code> | The database to grant default privileges for this role. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.objectType">objectType</a></code> | <code>string</code> | The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, routine, type, schema). |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.owner">owner</a></code> | <code>string</code> | Target role for which to alter default privileges. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.privileges">privileges</a></code> | <code>string[]</code> | The list of privileges to apply as default privileges. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.role">role</a></code> | <code>string</code> | The name of the role to which grant default privileges on. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#id DefaultPrivileges#id}. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.schema">schema</a></code> | <code>string</code> | The database schema to set default privileges for this role. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.withGrantOption">withGrantOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Permit the grant recipient to grant it to others. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database to grant default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#database DefaultPrivileges#database}

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, routine, type, schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#object_type DefaultPrivileges#object_type}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Target role for which to alter default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#owner DefaultPrivileges#owner}

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

The list of privileges to apply as default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#privileges DefaultPrivileges#privileges}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The name of the role to which grant default privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#role DefaultPrivileges#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#id DefaultPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The database schema to set default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#schema DefaultPrivileges#schema}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/default_privileges#with_grant_option DefaultPrivileges#with_grant_option}

---



