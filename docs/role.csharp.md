# `postgresql_role`

Refer to the Terraform Registory for docs: [`postgresql_role`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role).

# `role` Submodule <a name="`role` Submodule" id="@cdktf/provider-postgresql.role"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Role <a name="Role" id="@cdktf/provider-postgresql.role.Role"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role postgresql_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.role.Role.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new Role(Construct Scope, string Id, RoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-postgresql.role.RoleConfig">RoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.role.RoleConfig">RoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetAssumeRole">ResetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetBypassRowLevelSecurity">ResetBypassRowLevelSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetConnectionLimit">ResetConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetCreateDatabase">ResetCreateDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetCreateRole">ResetCreateRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetEncryptedPassword">ResetEncryptedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout">ResetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetInherit">ResetInherit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetReplication">ResetReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSearchPath">ResetSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSkipDropRole">ResetSkipDropRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSkipReassignOwned">ResetSkipReassignOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetStatementTimeout">ResetStatementTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSuperuser">ResetSuperuser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetValidUntil">ResetValidUntil</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-postgresql.role.Role.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-postgresql.role.Role.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-postgresql.role.Role.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-postgresql.role.Role.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-postgresql.role.Role.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktf/provider-postgresql.role.Role.resetAssumeRole"></a>

```csharp
private void ResetAssumeRole()
```

##### `ResetBypassRowLevelSecurity` <a name="ResetBypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.Role.resetBypassRowLevelSecurity"></a>

```csharp
private void ResetBypassRowLevelSecurity()
```

##### `ResetConnectionLimit` <a name="ResetConnectionLimit" id="@cdktf/provider-postgresql.role.Role.resetConnectionLimit"></a>

```csharp
private void ResetConnectionLimit()
```

##### `ResetCreateDatabase` <a name="ResetCreateDatabase" id="@cdktf/provider-postgresql.role.Role.resetCreateDatabase"></a>

```csharp
private void ResetCreateDatabase()
```

##### `ResetCreateRole` <a name="ResetCreateRole" id="@cdktf/provider-postgresql.role.Role.resetCreateRole"></a>

```csharp
private void ResetCreateRole()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-postgresql.role.Role.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetEncryptedPassword` <a name="ResetEncryptedPassword" id="@cdktf/provider-postgresql.role.Role.resetEncryptedPassword"></a>

```csharp
private void ResetEncryptedPassword()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-postgresql.role.Role.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdleInTransactionSessionTimeout` <a name="ResetIdleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout"></a>

```csharp
private void ResetIdleInTransactionSessionTimeout()
```

##### `ResetInherit` <a name="ResetInherit" id="@cdktf/provider-postgresql.role.Role.resetInherit"></a>

```csharp
private void ResetInherit()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-postgresql.role.Role.resetLogin"></a>

```csharp
private void ResetLogin()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-postgresql.role.Role.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetReplication` <a name="ResetReplication" id="@cdktf/provider-postgresql.role.Role.resetReplication"></a>

```csharp
private void ResetReplication()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-postgresql.role.Role.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetSearchPath` <a name="ResetSearchPath" id="@cdktf/provider-postgresql.role.Role.resetSearchPath"></a>

```csharp
private void ResetSearchPath()
```

##### `ResetSkipDropRole` <a name="ResetSkipDropRole" id="@cdktf/provider-postgresql.role.Role.resetSkipDropRole"></a>

```csharp
private void ResetSkipDropRole()
```

##### `ResetSkipReassignOwned` <a name="ResetSkipReassignOwned" id="@cdktf/provider-postgresql.role.Role.resetSkipReassignOwned"></a>

```csharp
private void ResetSkipReassignOwned()
```

##### `ResetStatementTimeout` <a name="ResetStatementTimeout" id="@cdktf/provider-postgresql.role.Role.resetStatementTimeout"></a>

```csharp
private void ResetStatementTimeout()
```

##### `ResetSuperuser` <a name="ResetSuperuser" id="@cdktf/provider-postgresql.role.Role.resetSuperuser"></a>

```csharp
private void ResetSuperuser()
```

##### `ResetValidUntil` <a name="ResetValidUntil" id="@cdktf/provider-postgresql.role.Role.resetValidUntil"></a>

```csharp
private void ResetValidUntil()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-postgresql.role.Role.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

Role.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.role.Role.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-postgresql.role.Role.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

Role.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.role.Role.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-postgresql.role.Role.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

Role.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-postgresql.role.Role.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRoleInput">AssumeRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput">BypassRowLevelSecurityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabaseInput">CreateDatabaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRoleInput">CreateRoleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedInput">EncryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput">EncryptedPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput">IdleInTransactionSessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inheritInput">InheritInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.loginInput">LoginInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replicationInput">ReplicationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPathInput">SearchPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput">SkipDropRoleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput">SkipReassignOwnedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput">StatementTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuserInput">SuperuserInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntilInput">ValidUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRole">AssumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity">BypassRowLevelSecurity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabase">CreateDatabase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRole">CreateRole</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encrypted">Encrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPassword">EncryptedPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inherit">Inherit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.login">Login</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replication">Replication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPath">SearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRole">SkipDropRole</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwned">SkipReassignOwned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeout">StatementTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuser">Superuser</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntil">ValidUntil</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-postgresql.role.Role.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-postgresql.role.Role.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-postgresql.role.Role.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-postgresql.role.Role.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.role.Role.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.role.Role.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.role.Role.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.role.Role.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.role.Role.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.role.Role.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.role.Role.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktf/provider-postgresql.role.Role.property.assumeRoleInput"></a>

```csharp
public string AssumeRoleInput { get; }
```

- *Type:* string

---

##### `BypassRowLevelSecurityInput`<sup>Optional</sup> <a name="BypassRowLevelSecurityInput" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput"></a>

```csharp
public object BypassRowLevelSecurityInput { get; }
```

- *Type:* object

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktf/provider-postgresql.role.Role.property.connectionLimitInput"></a>

```csharp
public double ConnectionLimitInput { get; }
```

- *Type:* double

---

##### `CreateDatabaseInput`<sup>Optional</sup> <a name="CreateDatabaseInput" id="@cdktf/provider-postgresql.role.Role.property.createDatabaseInput"></a>

```csharp
public object CreateDatabaseInput { get; }
```

- *Type:* object

---

##### `CreateRoleInput`<sup>Optional</sup> <a name="CreateRoleInput" id="@cdktf/provider-postgresql.role.Role.property.createRoleInput"></a>

```csharp
public object CreateRoleInput { get; }
```

- *Type:* object

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-postgresql.role.Role.property.encryptedInput"></a>

```csharp
public string EncryptedInput { get; }
```

- *Type:* string

---

##### `EncryptedPasswordInput`<sup>Optional</sup> <a name="EncryptedPasswordInput" id="@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput"></a>

```csharp
public object EncryptedPasswordInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-postgresql.role.Role.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeoutInput" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput"></a>

```csharp
public double IdleInTransactionSessionTimeoutInput { get; }
```

- *Type:* double

---

##### `InheritInput`<sup>Optional</sup> <a name="InheritInput" id="@cdktf/provider-postgresql.role.Role.property.inheritInput"></a>

```csharp
public object InheritInput { get; }
```

- *Type:* object

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-postgresql.role.Role.property.loginInput"></a>

```csharp
public object LoginInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-postgresql.role.Role.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-postgresql.role.Role.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ReplicationInput`<sup>Optional</sup> <a name="ReplicationInput" id="@cdktf/provider-postgresql.role.Role.property.replicationInput"></a>

```csharp
public object ReplicationInput { get; }
```

- *Type:* object

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-postgresql.role.Role.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `SearchPathInput`<sup>Optional</sup> <a name="SearchPathInput" id="@cdktf/provider-postgresql.role.Role.property.searchPathInput"></a>

```csharp
public string[] SearchPathInput { get; }
```

- *Type:* string[]

---

##### `SkipDropRoleInput`<sup>Optional</sup> <a name="SkipDropRoleInput" id="@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput"></a>

```csharp
public object SkipDropRoleInput { get; }
```

- *Type:* object

---

##### `SkipReassignOwnedInput`<sup>Optional</sup> <a name="SkipReassignOwnedInput" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput"></a>

```csharp
public object SkipReassignOwnedInput { get; }
```

- *Type:* object

---

##### `StatementTimeoutInput`<sup>Optional</sup> <a name="StatementTimeoutInput" id="@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput"></a>

```csharp
public double StatementTimeoutInput { get; }
```

- *Type:* double

---

##### `SuperuserInput`<sup>Optional</sup> <a name="SuperuserInput" id="@cdktf/provider-postgresql.role.Role.property.superuserInput"></a>

```csharp
public object SuperuserInput { get; }
```

- *Type:* object

---

##### `ValidUntilInput`<sup>Optional</sup> <a name="ValidUntilInput" id="@cdktf/provider-postgresql.role.Role.property.validUntilInput"></a>

```csharp
public string ValidUntilInput { get; }
```

- *Type:* string

---

##### `AssumeRole`<sup>Required</sup> <a name="AssumeRole" id="@cdktf/provider-postgresql.role.Role.property.assumeRole"></a>

```csharp
public string AssumeRole { get; }
```

- *Type:* string

---

##### `BypassRowLevelSecurity`<sup>Required</sup> <a name="BypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity"></a>

```csharp
public object BypassRowLevelSecurity { get; }
```

- *Type:* object

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-postgresql.role.Role.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; }
```

- *Type:* double

---

##### `CreateDatabase`<sup>Required</sup> <a name="CreateDatabase" id="@cdktf/provider-postgresql.role.Role.property.createDatabase"></a>

```csharp
public object CreateDatabase { get; }
```

- *Type:* object

---

##### `CreateRole`<sup>Required</sup> <a name="CreateRole" id="@cdktf/provider-postgresql.role.Role.property.createRole"></a>

```csharp
public object CreateRole { get; }
```

- *Type:* object

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-postgresql.role.Role.property.encrypted"></a>

```csharp
public string Encrypted { get; }
```

- *Type:* string

---

##### `EncryptedPassword`<sup>Required</sup> <a name="EncryptedPassword" id="@cdktf/provider-postgresql.role.Role.property.encryptedPassword"></a>

```csharp
public object EncryptedPassword { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-postgresql.role.Role.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdleInTransactionSessionTimeout`<sup>Required</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout"></a>

```csharp
public double IdleInTransactionSessionTimeout { get; }
```

- *Type:* double

---

##### `Inherit`<sup>Required</sup> <a name="Inherit" id="@cdktf/provider-postgresql.role.Role.property.inherit"></a>

```csharp
public object Inherit { get; }
```

- *Type:* object

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-postgresql.role.Role.property.login"></a>

```csharp
public object Login { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.role.Role.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-postgresql.role.Role.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-postgresql.role.Role.property.replication"></a>

```csharp
public object Replication { get; }
```

- *Type:* object

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-postgresql.role.Role.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `SearchPath`<sup>Required</sup> <a name="SearchPath" id="@cdktf/provider-postgresql.role.Role.property.searchPath"></a>

```csharp
public string[] SearchPath { get; }
```

- *Type:* string[]

---

##### `SkipDropRole`<sup>Required</sup> <a name="SkipDropRole" id="@cdktf/provider-postgresql.role.Role.property.skipDropRole"></a>

```csharp
public object SkipDropRole { get; }
```

- *Type:* object

---

##### `SkipReassignOwned`<sup>Required</sup> <a name="SkipReassignOwned" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwned"></a>

```csharp
public object SkipReassignOwned { get; }
```

- *Type:* object

---

##### `StatementTimeout`<sup>Required</sup> <a name="StatementTimeout" id="@cdktf/provider-postgresql.role.Role.property.statementTimeout"></a>

```csharp
public double StatementTimeout { get; }
```

- *Type:* double

---

##### `Superuser`<sup>Required</sup> <a name="Superuser" id="@cdktf/provider-postgresql.role.Role.property.superuser"></a>

```csharp
public object Superuser { get; }
```

- *Type:* object

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktf/provider-postgresql.role.Role.property.validUntil"></a>

```csharp
public string ValidUntil { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-postgresql.role.Role.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RoleConfig <a name="RoleConfig" id="@cdktf/provider-postgresql.role.RoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.role.RoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Postgresql;

new RoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string AssumeRole = null,
    object BypassRowLevelSecurity = null,
    double ConnectionLimit = null,
    object CreateDatabase = null,
    object CreateRole = null,
    string Encrypted = null,
    object EncryptedPassword = null,
    string Id = null,
    double IdleInTransactionSessionTimeout = null,
    object Inherit = null,
    object Login = null,
    string Password = null,
    object Replication = null,
    string[] Roles = null,
    string[] SearchPath = null,
    object SkipDropRole = null,
    object SkipReassignOwned = null,
    double StatementTimeout = null,
    object Superuser = null,
    string ValidUntil = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.name">Name</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole">AssumeRole</a></code> | <code>string</code> | Role to switch to at login. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity">BypassRowLevelSecurity</a></code> | <code>object</code> | Determine whether a role bypasses every row-level security (RLS) policy. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | How many concurrent connections can be made with this role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase">CreateDatabase</a></code> | <code>object</code> | Define a role's ability to create databases. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createRole">CreateRole</a></code> | <code>object</code> | Determine whether this role will be permitted to create new roles. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encrypted">Encrypted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#encrypted Role#encrypted}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword">EncryptedPassword</a></code> | <code>object</code> | Control whether the password is stored encrypted in the system catalogs. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#id Role#id}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>double</code> | Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.inherit">Inherit</a></code> | <code>object</code> | Determine whether a role "inherits" the privileges of roles it is a member of. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.login">Login</a></code> | <code>object</code> | Determine whether a role is allowed to log in. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.password">Password</a></code> | <code>string</code> | Sets the role's password. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.replication">Replication</a></code> | <code>object</code> | Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.roles">Roles</a></code> | <code>string[]</code> | Role(s) to grant to this new role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.searchPath">SearchPath</a></code> | <code>string[]</code> | Sets the role's search path. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole">SkipDropRole</a></code> | <code>object</code> | Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned">SkipReassignOwned</a></code> | <code>object</code> | Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout">StatementTimeout</a></code> | <code>double</code> | Abort any statement that takes more than the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.superuser">Superuser</a></code> | <code>object</code> | Determine whether the new role is a "superuser". |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.validUntil">ValidUntil</a></code> | <code>string</code> | Sets a date and time after which the role's password is no longer valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-postgresql.role.RoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-postgresql.role.RoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-postgresql.role.RoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-postgresql.role.RoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-postgresql.role.RoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-postgresql.role.RoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#name Role#name}

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole"></a>

```csharp
public string AssumeRole { get; set; }
```

- *Type:* string

Role to switch to at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#assume_role Role#assume_role}

---

##### `BypassRowLevelSecurity`<sup>Optional</sup> <a name="BypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity"></a>

```csharp
public object BypassRowLevelSecurity { get; set; }
```

- *Type:* object

Determine whether a role bypasses every row-level security (RLS) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#bypass_row_level_security Role#bypass_row_level_security}

---

##### `ConnectionLimit`<sup>Optional</sup> <a name="ConnectionLimit" id="@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; set; }
```

- *Type:* double

How many concurrent connections can be made with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#connection_limit Role#connection_limit}

---

##### `CreateDatabase`<sup>Optional</sup> <a name="CreateDatabase" id="@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase"></a>

```csharp
public object CreateDatabase { get; set; }
```

- *Type:* object

Define a role's ability to create databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#create_database Role#create_database}

---

##### `CreateRole`<sup>Optional</sup> <a name="CreateRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.createRole"></a>

```csharp
public object CreateRole { get; set; }
```

- *Type:* object

Determine whether this role will be permitted to create new roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#create_role Role#create_role}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-postgresql.role.RoleConfig.property.encrypted"></a>

```csharp
public string Encrypted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#encrypted Role#encrypted}.

---

##### `EncryptedPassword`<sup>Optional</sup> <a name="EncryptedPassword" id="@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword"></a>

```csharp
public object EncryptedPassword { get; set; }
```

- *Type:* object

Control whether the password is stored encrypted in the system catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#encrypted_password Role#encrypted_password}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-postgresql.role.RoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleInTransactionSessionTimeout`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout"></a>

```csharp
public double IdleInTransactionSessionTimeout { get; set; }
```

- *Type:* double

Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}

---

##### `Inherit`<sup>Optional</sup> <a name="Inherit" id="@cdktf/provider-postgresql.role.RoleConfig.property.inherit"></a>

```csharp
public object Inherit { get; set; }
```

- *Type:* object

Determine whether a role "inherits" the privileges of roles it is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#inherit Role#inherit}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-postgresql.role.RoleConfig.property.login"></a>

```csharp
public object Login { get; set; }
```

- *Type:* object

Determine whether a role is allowed to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#login Role#login}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-postgresql.role.RoleConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Sets the role's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#password Role#password}

---

##### `Replication`<sup>Optional</sup> <a name="Replication" id="@cdktf/provider-postgresql.role.RoleConfig.property.replication"></a>

```csharp
public object Replication { get; set; }
```

- *Type:* object

Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#replication Role#replication}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-postgresql.role.RoleConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Role(s) to grant to this new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#roles Role#roles}

---

##### `SearchPath`<sup>Optional</sup> <a name="SearchPath" id="@cdktf/provider-postgresql.role.RoleConfig.property.searchPath"></a>

```csharp
public string[] SearchPath { get; set; }
```

- *Type:* string[]

Sets the role's search path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#search_path Role#search_path}

---

##### `SkipDropRole`<sup>Optional</sup> <a name="SkipDropRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole"></a>

```csharp
public object SkipDropRole { get; set; }
```

- *Type:* object

Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#skip_drop_role Role#skip_drop_role}

---

##### `SkipReassignOwned`<sup>Optional</sup> <a name="SkipReassignOwned" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned"></a>

```csharp
public object SkipReassignOwned { get; set; }
```

- *Type:* object

Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#skip_reassign_owned Role#skip_reassign_owned}

---

##### `StatementTimeout`<sup>Optional</sup> <a name="StatementTimeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout"></a>

```csharp
public double StatementTimeout { get; set; }
```

- *Type:* double

Abort any statement that takes more than the specified number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#statement_timeout Role#statement_timeout}

---

##### `Superuser`<sup>Optional</sup> <a name="Superuser" id="@cdktf/provider-postgresql.role.RoleConfig.property.superuser"></a>

```csharp
public object Superuser { get; set; }
```

- *Type:* object

Determine whether the new role is a "superuser".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#superuser Role#superuser}

---

##### `ValidUntil`<sup>Optional</sup> <a name="ValidUntil" id="@cdktf/provider-postgresql.role.RoleConfig.property.validUntil"></a>

```csharp
public string ValidUntil { get; set; }
```

- *Type:* string

Sets a date and time after which the role's password is no longer valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/role#valid_until Role#valid_until}

---



