# `functionResource` Submodule <a name="`functionResource` Submodule" id="@cdktf/provider-postgresql.functionResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionResource <a name="FunctionResource" id="@cdktf/provider-postgresql.functionResource.FunctionResource"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function postgresql_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-postgresql'

new functionResource.FunctionResource(scope: Construct, id: string, config: FunctionResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig">FunctionResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig">FunctionResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.putArg">putArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetArg">resetArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetDropCascade">resetDropCascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetParallel">resetParallel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetReturns">resetReturns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetSecurityDefiner">resetSecurityDefiner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetStrict">resetStrict</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetVolatility">resetVolatility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-postgresql.functionResource.FunctionResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArg` <a name="putArg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg"></a>

```typescript
public putArg(value: IResolvable | FunctionResourceArg[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>[]

---

##### `resetArg` <a name="resetArg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetArg"></a>

```typescript
public resetArg(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDropCascade` <a name="resetDropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDropCascade"></a>

```typescript
public resetDropCascade(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetParallel` <a name="resetParallel" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetParallel"></a>

```typescript
public resetParallel(): void
```

##### `resetReturns` <a name="resetReturns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetReturns"></a>

```typescript
public resetReturns(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetSecurityDefiner` <a name="resetSecurityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetSecurityDefiner"></a>

```typescript
public resetSecurityDefiner(): void
```

##### `resetStrict` <a name="resetStrict" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetStrict"></a>

```typescript
public resetStrict(): void
```

##### `resetVolatility` <a name="resetVolatility" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetVolatility"></a>

```typescript
public resetVolatility(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct"></a>

```typescript
import { functionResource } from '@cdktf/provider-postgresql'

functionResource.FunctionResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement"></a>

```typescript
import { functionResource } from '@cdktf/provider-postgresql'

functionResource.FunctionResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource"></a>

```typescript
import { functionResource } from '@cdktf/provider-postgresql'

functionResource.FunctionResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport"></a>

```typescript
import { functionResource } from '@cdktf/provider-postgresql'

functionResource.FunctionResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg">arg</a></code> | <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput">argInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput">dropCascadeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallelInput">parallelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput">returnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefinerInput">securityDefinerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.strictInput">strictInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatilityInput">volatilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade">dropCascade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallel">parallel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns">returns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefiner">securityDefiner</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.strict">strict</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatility">volatility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arg`<sup>Required</sup> <a name="arg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg"></a>

```typescript
public readonly arg: FunctionResourceArgList;
```

- *Type:* <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a>

---

##### `argInput`<sup>Optional</sup> <a name="argInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput"></a>

```typescript
public readonly argInput: IResolvable | FunctionResourceArg[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>[]

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dropCascadeInput`<sup>Optional</sup> <a name="dropCascadeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput"></a>

```typescript
public readonly dropCascadeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parallelInput`<sup>Optional</sup> <a name="parallelInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallelInput"></a>

```typescript
public readonly parallelInput: string;
```

- *Type:* string

---

##### `returnsInput`<sup>Optional</sup> <a name="returnsInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput"></a>

```typescript
public readonly returnsInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `securityDefinerInput`<sup>Optional</sup> <a name="securityDefinerInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefinerInput"></a>

```typescript
public readonly securityDefinerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strictInput`<sup>Optional</sup> <a name="strictInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.strictInput"></a>

```typescript
public readonly strictInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volatilityInput`<sup>Optional</sup> <a name="volatilityInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatilityInput"></a>

```typescript
public readonly volatilityInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dropCascade`<sup>Required</sup> <a name="dropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade"></a>

```typescript
public readonly dropCascade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parallel`<sup>Required</sup> <a name="parallel" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallel"></a>

```typescript
public readonly parallel: string;
```

- *Type:* string

---

##### `returns`<sup>Required</sup> <a name="returns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns"></a>

```typescript
public readonly returns: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `securityDefiner`<sup>Required</sup> <a name="securityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefiner"></a>

```typescript
public readonly securityDefiner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.strict"></a>

```typescript
public readonly strict: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volatility`<sup>Required</sup> <a name="volatility" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatility"></a>

```typescript
public readonly volatility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionResourceArg <a name="FunctionResourceArg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-postgresql'

const functionResourceArg: functionResource.FunctionResourceArg = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type">type</a></code> | <code>string</code> | The argument type. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default">default</a></code> | <code>string</code> | An expression to be used as default value if the parameter is not specified. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode">mode</a></code> | <code>string</code> | The argument mode. One of: IN, OUT, INOUT, or VARIADIC. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name">name</a></code> | <code>string</code> | The argument name. The name may be required for some languages or depending on the argument mode. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#type FunctionResource#type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

An expression to be used as default value if the parameter is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#default FunctionResource#default}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The argument mode. One of: IN, OUT, INOUT, or VARIADIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#mode FunctionResource#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The argument name. The name may be required for some languages or depending on the argument mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#name FunctionResource#name}

---

### FunctionResourceConfig <a name="FunctionResourceConfig" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-postgresql'

const functionResourceConfig: functionResource.FunctionResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body">body</a></code> | <code>string</code> | Body of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name">name</a></code> | <code>string</code> | Name of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg">arg</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>[]</code> | arg block. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database">database</a></code> | <code>string</code> | The database where the function is located. If not specified, the provider default database is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade">dropCascade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language">language</a></code> | <code>string</code> | Language of theof the function. One of: internal, sql, c, plpgsql. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.parallel">parallel</a></code> | <code>string</code> | If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns">returns</a></code> | <code>string</code> | Function return type. If not specified, it will be calculated based on the output arguments. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema">schema</a></code> | <code>string</code> | Schema where the function is located. If not specified, the provider default schema is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.securityDefiner">securityDefiner</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the function should execute with the permissions of the function owner instead of the permissions of the caller. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.strict">strict</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the function should always return NULL if any of it's inputs is NULL. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.volatility">volatility</a></code> | <code>string</code> | Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Body of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#body FunctionResource#body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#name FunctionResource#name}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg"></a>

```typescript
public readonly arg: IResolvable | FunctionResourceArg[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>[]

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#arg FunctionResource#arg}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database where the function is located. If not specified, the provider default database is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#database FunctionResource#database}

---

##### `dropCascade`<sup>Optional</sup> <a name="dropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade"></a>

```typescript
public readonly dropCascade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#drop_cascade FunctionResource#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Language of theof the function. One of: internal, sql, c, plpgsql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#language FunctionResource#language}

---

##### `parallel`<sup>Optional</sup> <a name="parallel" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.parallel"></a>

```typescript
public readonly parallel: string;
```

- *Type:* string

If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#parallel FunctionResource#parallel}

---

##### `returns`<sup>Optional</sup> <a name="returns" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns"></a>

```typescript
public readonly returns: string;
```

- *Type:* string

Function return type. If not specified, it will be calculated based on the output arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#returns FunctionResource#returns}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Schema where the function is located. If not specified, the provider default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#schema FunctionResource#schema}

---

##### `securityDefiner`<sup>Optional</sup> <a name="securityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.securityDefiner"></a>

```typescript
public readonly securityDefiner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the function should execute with the permissions of the function owner instead of the permissions of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#security_definer FunctionResource#security_definer}

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.strict"></a>

```typescript
public readonly strict: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the function should always return NULL if any of it's inputs is NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#strict FunctionResource#strict}

---

##### `volatility`<sup>Optional</sup> <a name="volatility" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.volatility"></a>

```typescript
public readonly volatility: string;
```

- *Type:* string

Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/function#volatility FunctionResource#volatility}

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionResourceArgList <a name="FunctionResourceArgList" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-postgresql'

new functionResource.FunctionResourceArgList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get"></a>

```typescript
public get(index: number): FunctionResourceArgOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionResourceArg[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>[]

---


### FunctionResourceArgOutputReference <a name="FunctionResourceArgOutputReference" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-postgresql'

new functionResource.FunctionResourceArgOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionResourceArg;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>

---



