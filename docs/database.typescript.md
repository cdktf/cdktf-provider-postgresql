# `postgresql_database`

Refer to the Terraform Registory for docs: [`postgresql_database`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database).

# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-postgresql.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-postgresql.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database postgresql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.database.Database.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-postgresql'

new database.Database(scope: Construct, id: string, config: DatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig">DatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.database.DatabaseConfig">DatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetAllowConnections">resetAllowConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetConnectionLimit">resetConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetIsTemplate">resetIsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetLcCollate">resetLcCollate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetLcCtype">resetLcCtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetTablespaceName">resetTablespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.database.Database.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.database.Database.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.database.Database.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.database.Database.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowConnections` <a name="resetAllowConnections" id="@cdktf/provider-postgresql.database.Database.resetAllowConnections"></a>

```typescript
public resetAllowConnections(): void
```

##### `resetConnectionLimit` <a name="resetConnectionLimit" id="@cdktf/provider-postgresql.database.Database.resetConnectionLimit"></a>

```typescript
public resetConnectionLimit(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-postgresql.database.Database.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.database.Database.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsTemplate` <a name="resetIsTemplate" id="@cdktf/provider-postgresql.database.Database.resetIsTemplate"></a>

```typescript
public resetIsTemplate(): void
```

##### `resetLcCollate` <a name="resetLcCollate" id="@cdktf/provider-postgresql.database.Database.resetLcCollate"></a>

```typescript
public resetLcCollate(): void
```

##### `resetLcCtype` <a name="resetLcCtype" id="@cdktf/provider-postgresql.database.Database.resetLcCtype"></a>

```typescript
public resetLcCtype(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-postgresql.database.Database.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetTablespaceName` <a name="resetTablespaceName" id="@cdktf/provider-postgresql.database.Database.resetTablespaceName"></a>

```typescript
public resetTablespaceName(): void
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-postgresql.database.Database.resetTemplate"></a>

```typescript
public resetTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.database.Database.isConstruct"></a>

```typescript
import { database } from '@cdktf/provider-postgresql'

database.Database.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.database.Database.isTerraformElement"></a>

```typescript
import { database } from '@cdktf/provider-postgresql'

database.Database.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.database.Database.isTerraformResource"></a>

```typescript
import { database } from '@cdktf/provider-postgresql'

database.Database.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput">allowConnectionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimitInput">connectionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplateInput">isTemplateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollateInput">lcCollateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtypeInput">lcCtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput">tablespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnections">allowConnections</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplate">isTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollate">lcCollate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtype">lcCtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceName">tablespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.template">template</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.database.Database.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.database.Database.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.database.Database.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.database.Database.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.database.Database.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.database.Database.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.database.Database.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.database.Database.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.database.Database.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.Database.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.database.Database.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowConnectionsInput`<sup>Optional</sup> <a name="allowConnectionsInput" id="@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput"></a>

```typescript
public readonly allowConnectionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktf/provider-postgresql.database.Database.property.connectionLimitInput"></a>

```typescript
public readonly connectionLimitInput: number;
```

- *Type:* number

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-postgresql.database.Database.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.database.Database.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isTemplateInput`<sup>Optional</sup> <a name="isTemplateInput" id="@cdktf/provider-postgresql.database.Database.property.isTemplateInput"></a>

```typescript
public readonly isTemplateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lcCollateInput`<sup>Optional</sup> <a name="lcCollateInput" id="@cdktf/provider-postgresql.database.Database.property.lcCollateInput"></a>

```typescript
public readonly lcCollateInput: string;
```

- *Type:* string

---

##### `lcCtypeInput`<sup>Optional</sup> <a name="lcCtypeInput" id="@cdktf/provider-postgresql.database.Database.property.lcCtypeInput"></a>

```typescript
public readonly lcCtypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-postgresql.database.Database.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-postgresql.database.Database.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `tablespaceNameInput`<sup>Optional</sup> <a name="tablespaceNameInput" id="@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput"></a>

```typescript
public readonly tablespaceNameInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-postgresql.database.Database.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `allowConnections`<sup>Required</sup> <a name="allowConnections" id="@cdktf/provider-postgresql.database.Database.property.allowConnections"></a>

```typescript
public readonly allowConnections: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.database.Database.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-postgresql.database.Database.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isTemplate`<sup>Required</sup> <a name="isTemplate" id="@cdktf/provider-postgresql.database.Database.property.isTemplate"></a>

```typescript
public readonly isTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lcCollate`<sup>Required</sup> <a name="lcCollate" id="@cdktf/provider-postgresql.database.Database.property.lcCollate"></a>

```typescript
public readonly lcCollate: string;
```

- *Type:* string

---

##### `lcCtype`<sup>Required</sup> <a name="lcCtype" id="@cdktf/provider-postgresql.database.Database.property.lcCtype"></a>

```typescript
public readonly lcCtype: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.database.Database.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.database.Database.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `tablespaceName`<sup>Required</sup> <a name="tablespaceName" id="@cdktf/provider-postgresql.database.Database.property.tablespaceName"></a>

```typescript
public readonly tablespaceName: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-postgresql.database.Database.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.database.Database.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-postgresql.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.database.DatabaseConfig.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-postgresql'

const databaseConfig: database.DatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.name">name</a></code> | <code>string</code> | The PostgreSQL database name to connect to. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections">allowConnections</a></code> | <code>boolean \| cdktf.IResolvable</code> | If false then no one can connect to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | How many concurrent connections can be made to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding">encoding</a></code> | <code>string</code> | Character set encoding to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate">isTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, then this database can be cloned by any user with CREATEDB privileges. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate">lcCollate</a></code> | <code>string</code> | Collation order (LC_COLLATE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype">lcCtype</a></code> | <code>string</code> | Character classification (LC_CTYPE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.owner">owner</a></code> | <code>string</code> | The ROLE which owns the database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName">tablespaceName</a></code> | <code>string</code> | The name of the tablespace that will be associated with the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.template">template</a></code> | <code>string</code> | The name of the template from which to create the new database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The PostgreSQL database name to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#name Database#name}

---

##### `allowConnections`<sup>Optional</sup> <a name="allowConnections" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections"></a>

```typescript
public readonly allowConnections: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If false then no one can connect to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#allow_connections Database#allow_connections}

---

##### `connectionLimit`<sup>Optional</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

How many concurrent connections can be made to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#connection_limit Database#connection_limit}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Character set encoding to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#encoding Database#encoding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTemplate`<sup>Optional</sup> <a name="isTemplate" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate"></a>

```typescript
public readonly isTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, then this database can be cloned by any user with CREATEDB privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#is_template Database#is_template}

---

##### `lcCollate`<sup>Optional</sup> <a name="lcCollate" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate"></a>

```typescript
public readonly lcCollate: string;
```

- *Type:* string

Collation order (LC_COLLATE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#lc_collate Database#lc_collate}

---

##### `lcCtype`<sup>Optional</sup> <a name="lcCtype" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype"></a>

```typescript
public readonly lcCtype: string;
```

- *Type:* string

Character classification (LC_CTYPE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#lc_ctype Database#lc_ctype}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The ROLE which owns the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#owner Database#owner}

---

##### `tablespaceName`<sup>Optional</sup> <a name="tablespaceName" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName"></a>

```typescript
public readonly tablespaceName: string;
```

- *Type:* string

The name of the tablespace that will be associated with the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#tablespace_name Database#tablespace_name}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

The name of the template from which to create the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/database#template Database#template}

---



