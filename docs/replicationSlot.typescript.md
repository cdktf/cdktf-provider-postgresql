# `postgresql_replication_slot`

Refer to the Terraform Registory for docs: [`postgresql_replication_slot`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/replication_slot).

# `replicationSlot` Submodule <a name="`replicationSlot` Submodule" id="@cdktf/provider-postgresql.replicationSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReplicationSlot <a name="ReplicationSlot" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/replication_slot postgresql_replication_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer"></a>

```typescript
import { replicationSlot } from '@cdktf/provider-postgresql'

new replicationSlot.ReplicationSlot(scope: Construct, id: string, config: ReplicationSlotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig">ReplicationSlotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig">ReplicationSlotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isConstruct"></a>

```typescript
import { replicationSlot } from '@cdktf/provider-postgresql'

replicationSlot.ReplicationSlot.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformElement"></a>

```typescript
import { replicationSlot } from '@cdktf/provider-postgresql'

replicationSlot.ReplicationSlot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformResource"></a>

```typescript
import { replicationSlot } from '@cdktf/provider-postgresql'

replicationSlot.ReplicationSlot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.pluginInput">pluginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.plugin">plugin</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pluginInput`<sup>Optional</sup> <a name="pluginInput" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.pluginInput"></a>

```typescript
public readonly pluginInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.plugin"></a>

```typescript
public readonly plugin: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ReplicationSlotConfig <a name="ReplicationSlotConfig" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.Initializer"></a>

```typescript
import { replicationSlot } from '@cdktf/provider-postgresql'

const replicationSlotConfig: replicationSlot.ReplicationSlotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/replication_slot#name ReplicationSlot#name}. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.plugin">plugin</a></code> | <code>string</code> | Sets the output plugin to use. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.database">database</a></code> | <code>string</code> | Sets the database to add the replication slot to. |
| <code><a href="#@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/replication_slot#id ReplicationSlot#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/replication_slot#name ReplicationSlot#name}.

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.plugin"></a>

```typescript
public readonly plugin: string;
```

- *Type:* string

Sets the output plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/replication_slot#plugin ReplicationSlot#plugin}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Sets the database to add the replication slot to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/replication_slot#database ReplicationSlot#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.replicationSlot.ReplicationSlotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/replication_slot#id ReplicationSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



