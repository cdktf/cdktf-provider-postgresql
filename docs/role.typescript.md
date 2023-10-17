# `postgresql_role`

Refer to the Terraform Registory for docs: [`postgresql_role`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role).

# `role` Submodule <a name="`role` Submodule" id="@cdktf/provider-postgresql.role"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Role <a name="Role" id="@cdktf/provider-postgresql.role.Role"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role postgresql_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.role.Role.Initializer"></a>

```typescript
import { role } from '@cdktf/provider-postgresql'

new role.Role(scope: Construct, id: string, config: RoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-postgresql.role.RoleConfig">RoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.role.RoleConfig">RoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetBypassRowLevelSecurity">resetBypassRowLevelSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetConnectionLimit">resetConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetCreateDatabase">resetCreateDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetCreateRole">resetCreateRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetEncryptedPassword">resetEncryptedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout">resetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetInherit">resetInherit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetReplication">resetReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSearchPath">resetSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSkipDropRole">resetSkipDropRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSkipReassignOwned">resetSkipReassignOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetStatementTimeout">resetStatementTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSuperuser">resetSuperuser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetValidUntil">resetValidUntil</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.role.Role.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.role.Role.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.role.Role.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.role.Role.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.role.Role.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-postgresql.role.Role.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.role.Role.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-postgresql.role.Role.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.Role.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-postgresql.role.Role.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.role.Role.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.role.Role.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/provider-postgresql.role.Role.resetAssumeRole"></a>

```typescript
public resetAssumeRole(): void
```

##### `resetBypassRowLevelSecurity` <a name="resetBypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.Role.resetBypassRowLevelSecurity"></a>

```typescript
public resetBypassRowLevelSecurity(): void
```

##### `resetConnectionLimit` <a name="resetConnectionLimit" id="@cdktf/provider-postgresql.role.Role.resetConnectionLimit"></a>

```typescript
public resetConnectionLimit(): void
```

##### `resetCreateDatabase` <a name="resetCreateDatabase" id="@cdktf/provider-postgresql.role.Role.resetCreateDatabase"></a>

```typescript
public resetCreateDatabase(): void
```

##### `resetCreateRole` <a name="resetCreateRole" id="@cdktf/provider-postgresql.role.Role.resetCreateRole"></a>

```typescript
public resetCreateRole(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-postgresql.role.Role.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetEncryptedPassword` <a name="resetEncryptedPassword" id="@cdktf/provider-postgresql.role.Role.resetEncryptedPassword"></a>

```typescript
public resetEncryptedPassword(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.role.Role.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdleInTransactionSessionTimeout` <a name="resetIdleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout"></a>

```typescript
public resetIdleInTransactionSessionTimeout(): void
```

##### `resetInherit` <a name="resetInherit" id="@cdktf/provider-postgresql.role.Role.resetInherit"></a>

```typescript
public resetInherit(): void
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-postgresql.role.Role.resetLogin"></a>

```typescript
public resetLogin(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-postgresql.role.Role.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetReplication` <a name="resetReplication" id="@cdktf/provider-postgresql.role.Role.resetReplication"></a>

```typescript
public resetReplication(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-postgresql.role.Role.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetSearchPath` <a name="resetSearchPath" id="@cdktf/provider-postgresql.role.Role.resetSearchPath"></a>

```typescript
public resetSearchPath(): void
```

##### `resetSkipDropRole` <a name="resetSkipDropRole" id="@cdktf/provider-postgresql.role.Role.resetSkipDropRole"></a>

```typescript
public resetSkipDropRole(): void
```

##### `resetSkipReassignOwned` <a name="resetSkipReassignOwned" id="@cdktf/provider-postgresql.role.Role.resetSkipReassignOwned"></a>

```typescript
public resetSkipReassignOwned(): void
```

##### `resetStatementTimeout` <a name="resetStatementTimeout" id="@cdktf/provider-postgresql.role.Role.resetStatementTimeout"></a>

```typescript
public resetStatementTimeout(): void
```

##### `resetSuperuser` <a name="resetSuperuser" id="@cdktf/provider-postgresql.role.Role.resetSuperuser"></a>

```typescript
public resetSuperuser(): void
```

##### `resetValidUntil` <a name="resetValidUntil" id="@cdktf/provider-postgresql.role.Role.resetValidUntil"></a>

```typescript
public resetValidUntil(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.role.Role.isConstruct"></a>

```typescript
import { role } from '@cdktf/provider-postgresql'

role.Role.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.role.Role.isTerraformElement"></a>

```typescript
import { role } from '@cdktf/provider-postgresql'

role.Role.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.role.Role.isTerraformResource"></a>

```typescript
import { role } from '@cdktf/provider-postgresql'

role.Role.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport"></a>

```typescript
import { role } from '@cdktf/provider-postgresql'

role.Role.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Role to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Role that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.Role.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Role to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRoleInput">assumeRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput">bypassRowLevelSecurityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimitInput">connectionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabaseInput">createDatabaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRoleInput">createRoleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedInput">encryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput">encryptedPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput">idleInTransactionSessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inheritInput">inheritInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.loginInput">loginInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replicationInput">replicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPathInput">searchPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput">skipDropRoleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput">skipReassignOwnedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput">statementTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuserInput">superuserInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntilInput">validUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity">bypassRowLevelSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabase">createDatabase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRole">createRole</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encrypted">encrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPassword">encryptedPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inherit">inherit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.login">login</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replication">replication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPath">searchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRole">skipDropRole</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwned">skipReassignOwned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeout">statementTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuser">superuser</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntil">validUntil</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.role.Role.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.role.Role.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.role.Role.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.role.Role.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.role.Role.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.role.Role.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.role.Role.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.role.Role.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.role.Role.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.Role.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.role.Role.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/provider-postgresql.role.Role.property.assumeRoleInput"></a>

```typescript
public readonly assumeRoleInput: string;
```

- *Type:* string

---

##### `bypassRowLevelSecurityInput`<sup>Optional</sup> <a name="bypassRowLevelSecurityInput" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput"></a>

```typescript
public readonly bypassRowLevelSecurityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktf/provider-postgresql.role.Role.property.connectionLimitInput"></a>

```typescript
public readonly connectionLimitInput: number;
```

- *Type:* number

---

##### `createDatabaseInput`<sup>Optional</sup> <a name="createDatabaseInput" id="@cdktf/provider-postgresql.role.Role.property.createDatabaseInput"></a>

```typescript
public readonly createDatabaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createRoleInput`<sup>Optional</sup> <a name="createRoleInput" id="@cdktf/provider-postgresql.role.Role.property.createRoleInput"></a>

```typescript
public readonly createRoleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-postgresql.role.Role.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: string;
```

- *Type:* string

---

##### `encryptedPasswordInput`<sup>Optional</sup> <a name="encryptedPasswordInput" id="@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput"></a>

```typescript
public readonly encryptedPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.role.Role.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="idleInTransactionSessionTimeoutInput" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput"></a>

```typescript
public readonly idleInTransactionSessionTimeoutInput: number;
```

- *Type:* number

---

##### `inheritInput`<sup>Optional</sup> <a name="inheritInput" id="@cdktf/provider-postgresql.role.Role.property.inheritInput"></a>

```typescript
public readonly inheritInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-postgresql.role.Role.property.loginInput"></a>

```typescript
public readonly loginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-postgresql.role.Role.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-postgresql.role.Role.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `replicationInput`<sup>Optional</sup> <a name="replicationInput" id="@cdktf/provider-postgresql.role.Role.property.replicationInput"></a>

```typescript
public readonly replicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-postgresql.role.Role.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `searchPathInput`<sup>Optional</sup> <a name="searchPathInput" id="@cdktf/provider-postgresql.role.Role.property.searchPathInput"></a>

```typescript
public readonly searchPathInput: string[];
```

- *Type:* string[]

---

##### `skipDropRoleInput`<sup>Optional</sup> <a name="skipDropRoleInput" id="@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput"></a>

```typescript
public readonly skipDropRoleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipReassignOwnedInput`<sup>Optional</sup> <a name="skipReassignOwnedInput" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput"></a>

```typescript
public readonly skipReassignOwnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statementTimeoutInput`<sup>Optional</sup> <a name="statementTimeoutInput" id="@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput"></a>

```typescript
public readonly statementTimeoutInput: number;
```

- *Type:* number

---

##### `superuserInput`<sup>Optional</sup> <a name="superuserInput" id="@cdktf/provider-postgresql.role.Role.property.superuserInput"></a>

```typescript
public readonly superuserInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validUntilInput`<sup>Optional</sup> <a name="validUntilInput" id="@cdktf/provider-postgresql.role.Role.property.validUntilInput"></a>

```typescript
public readonly validUntilInput: string;
```

- *Type:* string

---

##### `assumeRole`<sup>Required</sup> <a name="assumeRole" id="@cdktf/provider-postgresql.role.Role.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `bypassRowLevelSecurity`<sup>Required</sup> <a name="bypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity"></a>

```typescript
public readonly bypassRowLevelSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.role.Role.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

---

##### `createDatabase`<sup>Required</sup> <a name="createDatabase" id="@cdktf/provider-postgresql.role.Role.property.createDatabase"></a>

```typescript
public readonly createDatabase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createRole`<sup>Required</sup> <a name="createRole" id="@cdktf/provider-postgresql.role.Role.property.createRole"></a>

```typescript
public readonly createRole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-postgresql.role.Role.property.encrypted"></a>

```typescript
public readonly encrypted: string;
```

- *Type:* string

---

##### `encryptedPassword`<sup>Required</sup> <a name="encryptedPassword" id="@cdktf/provider-postgresql.role.Role.property.encryptedPassword"></a>

```typescript
public readonly encryptedPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idleInTransactionSessionTimeout`<sup>Required</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout"></a>

```typescript
public readonly idleInTransactionSessionTimeout: number;
```

- *Type:* number

---

##### `inherit`<sup>Required</sup> <a name="inherit" id="@cdktf/provider-postgresql.role.Role.property.inherit"></a>

```typescript
public readonly inherit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-postgresql.role.Role.property.login"></a>

```typescript
public readonly login: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.role.Role.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-postgresql.role.Role.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-postgresql.role.Role.property.replication"></a>

```typescript
public readonly replication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-postgresql.role.Role.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `searchPath`<sup>Required</sup> <a name="searchPath" id="@cdktf/provider-postgresql.role.Role.property.searchPath"></a>

```typescript
public readonly searchPath: string[];
```

- *Type:* string[]

---

##### `skipDropRole`<sup>Required</sup> <a name="skipDropRole" id="@cdktf/provider-postgresql.role.Role.property.skipDropRole"></a>

```typescript
public readonly skipDropRole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipReassignOwned`<sup>Required</sup> <a name="skipReassignOwned" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwned"></a>

```typescript
public readonly skipReassignOwned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statementTimeout`<sup>Required</sup> <a name="statementTimeout" id="@cdktf/provider-postgresql.role.Role.property.statementTimeout"></a>

```typescript
public readonly statementTimeout: number;
```

- *Type:* number

---

##### `superuser`<sup>Required</sup> <a name="superuser" id="@cdktf/provider-postgresql.role.Role.property.superuser"></a>

```typescript
public readonly superuser: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktf/provider-postgresql.role.Role.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.role.Role.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RoleConfig <a name="RoleConfig" id="@cdktf/provider-postgresql.role.RoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.role.RoleConfig.Initializer"></a>

```typescript
import { role } from '@cdktf/provider-postgresql'

const roleConfig: role.RoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.name">name</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole">assumeRole</a></code> | <code>string</code> | Role to switch to at login. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity">bypassRowLevelSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine whether a role bypasses every row-level security (RLS) policy. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | How many concurrent connections can be made with this role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase">createDatabase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Define a role's ability to create databases. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createRole">createRole</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine whether this role will be permitted to create new roles. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encrypted">encrypted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#encrypted Role#encrypted}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword">encryptedPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Control whether the password is stored encrypted in the system catalogs. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#id Role#id}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>number</code> | Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.inherit">inherit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine whether a role "inherits" the privileges of roles it is a member of. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.login">login</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine whether a role is allowed to log in. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.password">password</a></code> | <code>string</code> | Sets the role's password. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.replication">replication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.roles">roles</a></code> | <code>string[]</code> | Role(s) to grant to this new role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.searchPath">searchPath</a></code> | <code>string[]</code> | Sets the role's search path. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole">skipDropRole</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned">skipReassignOwned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout">statementTimeout</a></code> | <code>number</code> | Abort any statement that takes more than the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.superuser">superuser</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine whether the new role is a "superuser". |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.validUntil">validUntil</a></code> | <code>string</code> | Sets a date and time after which the role's password is no longer valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.role.RoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.role.RoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.role.RoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.RoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.role.RoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.role.RoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#name Role#name}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

Role to switch to at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#assume_role Role#assume_role}

---

##### `bypassRowLevelSecurity`<sup>Optional</sup> <a name="bypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity"></a>

```typescript
public readonly bypassRowLevelSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine whether a role bypasses every row-level security (RLS) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#bypass_row_level_security Role#bypass_row_level_security}

---

##### `connectionLimit`<sup>Optional</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

How many concurrent connections can be made with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#connection_limit Role#connection_limit}

---

##### `createDatabase`<sup>Optional</sup> <a name="createDatabase" id="@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase"></a>

```typescript
public readonly createDatabase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Define a role's ability to create databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#create_database Role#create_database}

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.createRole"></a>

```typescript
public readonly createRole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine whether this role will be permitted to create new roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#create_role Role#create_role}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-postgresql.role.RoleConfig.property.encrypted"></a>

```typescript
public readonly encrypted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#encrypted Role#encrypted}.

---

##### `encryptedPassword`<sup>Optional</sup> <a name="encryptedPassword" id="@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword"></a>

```typescript
public readonly encryptedPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Control whether the password is stored encrypted in the system catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#encrypted_password Role#encrypted_password}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.role.RoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout"></a>

```typescript
public readonly idleInTransactionSessionTimeout: number;
```

- *Type:* number

Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}

---

##### `inherit`<sup>Optional</sup> <a name="inherit" id="@cdktf/provider-postgresql.role.RoleConfig.property.inherit"></a>

```typescript
public readonly inherit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine whether a role "inherits" the privileges of roles it is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#inherit Role#inherit}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-postgresql.role.RoleConfig.property.login"></a>

```typescript
public readonly login: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine whether a role is allowed to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#login Role#login}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.role.RoleConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Sets the role's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#password Role#password}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-postgresql.role.RoleConfig.property.replication"></a>

```typescript
public readonly replication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#replication Role#replication}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-postgresql.role.RoleConfig.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Role(s) to grant to this new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#roles Role#roles}

---

##### `searchPath`<sup>Optional</sup> <a name="searchPath" id="@cdktf/provider-postgresql.role.RoleConfig.property.searchPath"></a>

```typescript
public readonly searchPath: string[];
```

- *Type:* string[]

Sets the role's search path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#search_path Role#search_path}

---

##### `skipDropRole`<sup>Optional</sup> <a name="skipDropRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole"></a>

```typescript
public readonly skipDropRole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#skip_drop_role Role#skip_drop_role}

---

##### `skipReassignOwned`<sup>Optional</sup> <a name="skipReassignOwned" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned"></a>

```typescript
public readonly skipReassignOwned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#skip_reassign_owned Role#skip_reassign_owned}

---

##### `statementTimeout`<sup>Optional</sup> <a name="statementTimeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout"></a>

```typescript
public readonly statementTimeout: number;
```

- *Type:* number

Abort any statement that takes more than the specified number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#statement_timeout Role#statement_timeout}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.role.RoleConfig.property.superuser"></a>

```typescript
public readonly superuser: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine whether the new role is a "superuser".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#superuser Role#superuser}

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/provider-postgresql.role.RoleConfig.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

Sets a date and time after which the role's password is no longer valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#valid_until Role#valid_until}

---



