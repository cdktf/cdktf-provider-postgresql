# `postgresql_role`

Refer to the Terraform Registory for docs: [`postgresql_role`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role).

# `role` Submodule <a name="`role` Submodule" id="@cdktf/provider-postgresql.role"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Role <a name="Role" id="@cdktf/provider-postgresql.role.Role"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role postgresql_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.role.Role.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.role.Role;

Role.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .assumeRole(java.lang.String)
//  .bypassRowLevelSecurity(java.lang.Boolean)
//  .bypassRowLevelSecurity(IResolvable)
//  .connectionLimit(java.lang.Number)
//  .createDatabase(java.lang.Boolean)
//  .createDatabase(IResolvable)
//  .createRole(java.lang.Boolean)
//  .createRole(IResolvable)
//  .encrypted(java.lang.String)
//  .encryptedPassword(java.lang.Boolean)
//  .encryptedPassword(IResolvable)
//  .id(java.lang.String)
//  .idleInTransactionSessionTimeout(java.lang.Number)
//  .inherit(java.lang.Boolean)
//  .inherit(IResolvable)
//  .login(java.lang.Boolean)
//  .login(IResolvable)
//  .password(java.lang.String)
//  .replication(java.lang.Boolean)
//  .replication(IResolvable)
//  .roles(java.util.List<java.lang.String>)
//  .searchPath(java.util.List<java.lang.String>)
//  .skipDropRole(java.lang.Boolean)
//  .skipDropRole(IResolvable)
//  .skipReassignOwned(java.lang.Boolean)
//  .skipReassignOwned(IResolvable)
//  .statementTimeout(java.lang.Number)
//  .superuser(java.lang.Boolean)
//  .superuser(IResolvable)
//  .validUntil(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.assumeRole">assumeRole</a></code> | <code>java.lang.String</code> | Role to switch to at login. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.bypassRowLevelSecurity">bypassRowLevelSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether a role bypasses every row-level security (RLS) policy. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | How many concurrent connections can be made with this role. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.createDatabase">createDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Define a role's ability to create databases. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.createRole">createRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether this role will be permitted to create new roles. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.encrypted">encrypted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#encrypted Role#encrypted}. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.encryptedPassword">encryptedPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Control whether the password is stored encrypted in the system catalogs. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#id Role#id}. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>java.lang.Number</code> | Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.inherit">inherit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether a role "inherits" the privileges of roles it is a member of. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.login">login</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether a role is allowed to log in. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Sets the role's password. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.replication">replication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Role(s) to grant to this new role. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.searchPath">searchPath</a></code> | <code>java.util.List<java.lang.String></code> | Sets the role's search path. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.skipDropRole">skipDropRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.skipReassignOwned">skipReassignOwned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.statementTimeout">statementTimeout</a></code> | <code>java.lang.Number</code> | Abort any statement that takes more than the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.superuser">superuser</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether the new role is a "superuser". |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.validUntil">validUntil</a></code> | <code>java.lang.String</code> | Sets a date and time after which the role's password is no longer valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#name Role#name}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.assumeRole"></a>

- *Type:* java.lang.String

Role to switch to at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#assume_role Role#assume_role}

---

##### `bypassRowLevelSecurity`<sup>Optional</sup> <a name="bypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.bypassRowLevelSecurity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether a role bypasses every row-level security (RLS) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#bypass_row_level_security Role#bypass_row_level_security}

---

##### `connectionLimit`<sup>Optional</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.connectionLimit"></a>

- *Type:* java.lang.Number

How many concurrent connections can be made with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#connection_limit Role#connection_limit}

---

##### `createDatabase`<sup>Optional</sup> <a name="createDatabase" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.createDatabase"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Define a role's ability to create databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#create_database Role#create_database}

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.createRole"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether this role will be permitted to create new roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#create_role Role#create_role}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.encrypted"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#encrypted Role#encrypted}.

---

##### `encryptedPassword`<sup>Optional</sup> <a name="encryptedPassword" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.encryptedPassword"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Control whether the password is stored encrypted in the system catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#encrypted_password Role#encrypted_password}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.idleInTransactionSessionTimeout"></a>

- *Type:* java.lang.Number

Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}

---

##### `inherit`<sup>Optional</sup> <a name="inherit" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.inherit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether a role "inherits" the privileges of roles it is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#inherit Role#inherit}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.login"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether a role is allowed to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#login Role#login}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Sets the role's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#password Role#password}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.replication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#replication Role#replication}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.roles"></a>

- *Type:* java.util.List<java.lang.String>

Role(s) to grant to this new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#roles Role#roles}

---

##### `searchPath`<sup>Optional</sup> <a name="searchPath" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.searchPath"></a>

- *Type:* java.util.List<java.lang.String>

Sets the role's search path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#search_path Role#search_path}

---

##### `skipDropRole`<sup>Optional</sup> <a name="skipDropRole" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.skipDropRole"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#skip_drop_role Role#skip_drop_role}

---

##### `skipReassignOwned`<sup>Optional</sup> <a name="skipReassignOwned" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.skipReassignOwned"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#skip_reassign_owned Role#skip_reassign_owned}

---

##### `statementTimeout`<sup>Optional</sup> <a name="statementTimeout" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.statementTimeout"></a>

- *Type:* java.lang.Number

Abort any statement that takes more than the specified number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#statement_timeout Role#statement_timeout}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.superuser"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether the new role is a "superuser".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#superuser Role#superuser}

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.validUntil"></a>

- *Type:* java.lang.String

Sets a date and time after which the role's password is no longer valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#valid_until Role#valid_until}

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
| <code><a href="#@cdktf/provider-postgresql.role.Role.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.role.Role.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.role.Role.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.role.Role.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.role.Role.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/provider-postgresql.role.Role.resetAssumeRole"></a>

```java
public void resetAssumeRole()
```

##### `resetBypassRowLevelSecurity` <a name="resetBypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.Role.resetBypassRowLevelSecurity"></a>

```java
public void resetBypassRowLevelSecurity()
```

##### `resetConnectionLimit` <a name="resetConnectionLimit" id="@cdktf/provider-postgresql.role.Role.resetConnectionLimit"></a>

```java
public void resetConnectionLimit()
```

##### `resetCreateDatabase` <a name="resetCreateDatabase" id="@cdktf/provider-postgresql.role.Role.resetCreateDatabase"></a>

```java
public void resetCreateDatabase()
```

##### `resetCreateRole` <a name="resetCreateRole" id="@cdktf/provider-postgresql.role.Role.resetCreateRole"></a>

```java
public void resetCreateRole()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-postgresql.role.Role.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetEncryptedPassword` <a name="resetEncryptedPassword" id="@cdktf/provider-postgresql.role.Role.resetEncryptedPassword"></a>

```java
public void resetEncryptedPassword()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.role.Role.resetId"></a>

```java
public void resetId()
```

##### `resetIdleInTransactionSessionTimeout` <a name="resetIdleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout"></a>

```java
public void resetIdleInTransactionSessionTimeout()
```

##### `resetInherit` <a name="resetInherit" id="@cdktf/provider-postgresql.role.Role.resetInherit"></a>

```java
public void resetInherit()
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-postgresql.role.Role.resetLogin"></a>

```java
public void resetLogin()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-postgresql.role.Role.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetReplication` <a name="resetReplication" id="@cdktf/provider-postgresql.role.Role.resetReplication"></a>

```java
public void resetReplication()
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-postgresql.role.Role.resetRoles"></a>

```java
public void resetRoles()
```

##### `resetSearchPath` <a name="resetSearchPath" id="@cdktf/provider-postgresql.role.Role.resetSearchPath"></a>

```java
public void resetSearchPath()
```

##### `resetSkipDropRole` <a name="resetSkipDropRole" id="@cdktf/provider-postgresql.role.Role.resetSkipDropRole"></a>

```java
public void resetSkipDropRole()
```

##### `resetSkipReassignOwned` <a name="resetSkipReassignOwned" id="@cdktf/provider-postgresql.role.Role.resetSkipReassignOwned"></a>

```java
public void resetSkipReassignOwned()
```

##### `resetStatementTimeout` <a name="resetStatementTimeout" id="@cdktf/provider-postgresql.role.Role.resetStatementTimeout"></a>

```java
public void resetStatementTimeout()
```

##### `resetSuperuser` <a name="resetSuperuser" id="@cdktf/provider-postgresql.role.Role.resetSuperuser"></a>

```java
public void resetSuperuser()
```

##### `resetValidUntil` <a name="resetValidUntil" id="@cdktf/provider-postgresql.role.Role.resetValidUntil"></a>

```java
public void resetValidUntil()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.role.Role.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.role.Role;

Role.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.role.Role.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.role.Role;

Role.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.role.Role.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.role.Role;

Role.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRoleInput">assumeRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput">bypassRowLevelSecurityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimitInput">connectionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabaseInput">createDatabaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRoleInput">createRoleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput">encryptedPasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput">idleInTransactionSessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inheritInput">inheritInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.loginInput">loginInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replicationInput">replicationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPathInput">searchPathInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput">skipDropRoleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput">skipReassignOwnedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput">statementTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuserInput">superuserInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntilInput">validUntilInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRole">assumeRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity">bypassRowLevelSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabase">createDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRole">createRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encrypted">encrypted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPassword">encryptedPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inherit">inherit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.login">login</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replication">replication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPath">searchPath</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRole">skipDropRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwned">skipReassignOwned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeout">statementTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuser">superuser</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntil">validUntil</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.role.Role.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.role.Role.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.role.Role.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.role.Role.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.role.Role.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.role.Role.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.role.Role.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.role.Role.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.role.Role.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.Role.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.role.Role.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/provider-postgresql.role.Role.property.assumeRoleInput"></a>

```java
public java.lang.String getAssumeRoleInput();
```

- *Type:* java.lang.String

---

##### `bypassRowLevelSecurityInput`<sup>Optional</sup> <a name="bypassRowLevelSecurityInput" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput"></a>

```java
public java.lang.Object getBypassRowLevelSecurityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktf/provider-postgresql.role.Role.property.connectionLimitInput"></a>

```java
public java.lang.Number getConnectionLimitInput();
```

- *Type:* java.lang.Number

---

##### `createDatabaseInput`<sup>Optional</sup> <a name="createDatabaseInput" id="@cdktf/provider-postgresql.role.Role.property.createDatabaseInput"></a>

```java
public java.lang.Object getCreateDatabaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createRoleInput`<sup>Optional</sup> <a name="createRoleInput" id="@cdktf/provider-postgresql.role.Role.property.createRoleInput"></a>

```java
public java.lang.Object getCreateRoleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-postgresql.role.Role.property.encryptedInput"></a>

```java
public java.lang.String getEncryptedInput();
```

- *Type:* java.lang.String

---

##### `encryptedPasswordInput`<sup>Optional</sup> <a name="encryptedPasswordInput" id="@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput"></a>

```java
public java.lang.Object getEncryptedPasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.role.Role.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="idleInTransactionSessionTimeoutInput" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput"></a>

```java
public java.lang.Number getIdleInTransactionSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `inheritInput`<sup>Optional</sup> <a name="inheritInput" id="@cdktf/provider-postgresql.role.Role.property.inheritInput"></a>

```java
public java.lang.Object getInheritInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-postgresql.role.Role.property.loginInput"></a>

```java
public java.lang.Object getLoginInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-postgresql.role.Role.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-postgresql.role.Role.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `replicationInput`<sup>Optional</sup> <a name="replicationInput" id="@cdktf/provider-postgresql.role.Role.property.replicationInput"></a>

```java
public java.lang.Object getReplicationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-postgresql.role.Role.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchPathInput`<sup>Optional</sup> <a name="searchPathInput" id="@cdktf/provider-postgresql.role.Role.property.searchPathInput"></a>

```java
public java.util.List<java.lang.String> getSearchPathInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipDropRoleInput`<sup>Optional</sup> <a name="skipDropRoleInput" id="@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput"></a>

```java
public java.lang.Object getSkipDropRoleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipReassignOwnedInput`<sup>Optional</sup> <a name="skipReassignOwnedInput" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput"></a>

```java
public java.lang.Object getSkipReassignOwnedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statementTimeoutInput`<sup>Optional</sup> <a name="statementTimeoutInput" id="@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput"></a>

```java
public java.lang.Number getStatementTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `superuserInput`<sup>Optional</sup> <a name="superuserInput" id="@cdktf/provider-postgresql.role.Role.property.superuserInput"></a>

```java
public java.lang.Object getSuperuserInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validUntilInput`<sup>Optional</sup> <a name="validUntilInput" id="@cdktf/provider-postgresql.role.Role.property.validUntilInput"></a>

```java
public java.lang.String getValidUntilInput();
```

- *Type:* java.lang.String

---

##### `assumeRole`<sup>Required</sup> <a name="assumeRole" id="@cdktf/provider-postgresql.role.Role.property.assumeRole"></a>

```java
public java.lang.String getAssumeRole();
```

- *Type:* java.lang.String

---

##### `bypassRowLevelSecurity`<sup>Required</sup> <a name="bypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity"></a>

```java
public java.lang.Object getBypassRowLevelSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.role.Role.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `createDatabase`<sup>Required</sup> <a name="createDatabase" id="@cdktf/provider-postgresql.role.Role.property.createDatabase"></a>

```java
public java.lang.Object getCreateDatabase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createRole`<sup>Required</sup> <a name="createRole" id="@cdktf/provider-postgresql.role.Role.property.createRole"></a>

```java
public java.lang.Object getCreateRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-postgresql.role.Role.property.encrypted"></a>

```java
public java.lang.String getEncrypted();
```

- *Type:* java.lang.String

---

##### `encryptedPassword`<sup>Required</sup> <a name="encryptedPassword" id="@cdktf/provider-postgresql.role.Role.property.encryptedPassword"></a>

```java
public java.lang.Object getEncryptedPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleInTransactionSessionTimeout`<sup>Required</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout"></a>

```java
public java.lang.Number getIdleInTransactionSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `inherit`<sup>Required</sup> <a name="inherit" id="@cdktf/provider-postgresql.role.Role.property.inherit"></a>

```java
public java.lang.Object getInherit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-postgresql.role.Role.property.login"></a>

```java
public java.lang.Object getLogin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.role.Role.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-postgresql.role.Role.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-postgresql.role.Role.property.replication"></a>

```java
public java.lang.Object getReplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-postgresql.role.Role.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchPath`<sup>Required</sup> <a name="searchPath" id="@cdktf/provider-postgresql.role.Role.property.searchPath"></a>

```java
public java.util.List<java.lang.String> getSearchPath();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipDropRole`<sup>Required</sup> <a name="skipDropRole" id="@cdktf/provider-postgresql.role.Role.property.skipDropRole"></a>

```java
public java.lang.Object getSkipDropRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipReassignOwned`<sup>Required</sup> <a name="skipReassignOwned" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwned"></a>

```java
public java.lang.Object getSkipReassignOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statementTimeout`<sup>Required</sup> <a name="statementTimeout" id="@cdktf/provider-postgresql.role.Role.property.statementTimeout"></a>

```java
public java.lang.Number getStatementTimeout();
```

- *Type:* java.lang.Number

---

##### `superuser`<sup>Required</sup> <a name="superuser" id="@cdktf/provider-postgresql.role.Role.property.superuser"></a>

```java
public java.lang.Object getSuperuser();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktf/provider-postgresql.role.Role.property.validUntil"></a>

```java
public java.lang.String getValidUntil();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.role.Role.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RoleConfig <a name="RoleConfig" id="@cdktf/provider-postgresql.role.RoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.role.RoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.role.RoleConfig;

RoleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .assumeRole(java.lang.String)
//  .bypassRowLevelSecurity(java.lang.Boolean)
//  .bypassRowLevelSecurity(IResolvable)
//  .connectionLimit(java.lang.Number)
//  .createDatabase(java.lang.Boolean)
//  .createDatabase(IResolvable)
//  .createRole(java.lang.Boolean)
//  .createRole(IResolvable)
//  .encrypted(java.lang.String)
//  .encryptedPassword(java.lang.Boolean)
//  .encryptedPassword(IResolvable)
//  .id(java.lang.String)
//  .idleInTransactionSessionTimeout(java.lang.Number)
//  .inherit(java.lang.Boolean)
//  .inherit(IResolvable)
//  .login(java.lang.Boolean)
//  .login(IResolvable)
//  .password(java.lang.String)
//  .replication(java.lang.Boolean)
//  .replication(IResolvable)
//  .roles(java.util.List<java.lang.String>)
//  .searchPath(java.util.List<java.lang.String>)
//  .skipDropRole(java.lang.Boolean)
//  .skipDropRole(IResolvable)
//  .skipReassignOwned(java.lang.Boolean)
//  .skipReassignOwned(IResolvable)
//  .statementTimeout(java.lang.Number)
//  .superuser(java.lang.Boolean)
//  .superuser(IResolvable)
//  .validUntil(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole">assumeRole</a></code> | <code>java.lang.String</code> | Role to switch to at login. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity">bypassRowLevelSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether a role bypasses every row-level security (RLS) policy. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | How many concurrent connections can be made with this role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase">createDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Define a role's ability to create databases. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createRole">createRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether this role will be permitted to create new roles. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encrypted">encrypted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#encrypted Role#encrypted}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword">encryptedPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Control whether the password is stored encrypted in the system catalogs. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#id Role#id}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>java.lang.Number</code> | Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.inherit">inherit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether a role "inherits" the privileges of roles it is a member of. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.login">login</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether a role is allowed to log in. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.password">password</a></code> | <code>java.lang.String</code> | Sets the role's password. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.replication">replication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Role(s) to grant to this new role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.searchPath">searchPath</a></code> | <code>java.util.List<java.lang.String></code> | Sets the role's search path. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole">skipDropRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned">skipReassignOwned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout">statementTimeout</a></code> | <code>java.lang.Number</code> | Abort any statement that takes more than the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.superuser">superuser</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine whether the new role is a "superuser". |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.validUntil">validUntil</a></code> | <code>java.lang.String</code> | Sets a date and time after which the role's password is no longer valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.role.RoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.role.RoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.role.RoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.RoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.role.RoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.role.RoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#name Role#name}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole"></a>

```java
public java.lang.String getAssumeRole();
```

- *Type:* java.lang.String

Role to switch to at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#assume_role Role#assume_role}

---

##### `bypassRowLevelSecurity`<sup>Optional</sup> <a name="bypassRowLevelSecurity" id="@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity"></a>

```java
public java.lang.Object getBypassRowLevelSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether a role bypasses every row-level security (RLS) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#bypass_row_level_security Role#bypass_row_level_security}

---

##### `connectionLimit`<sup>Optional</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

How many concurrent connections can be made with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#connection_limit Role#connection_limit}

---

##### `createDatabase`<sup>Optional</sup> <a name="createDatabase" id="@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase"></a>

```java
public java.lang.Object getCreateDatabase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Define a role's ability to create databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#create_database Role#create_database}

---

##### `createRole`<sup>Optional</sup> <a name="createRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.createRole"></a>

```java
public java.lang.Object getCreateRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether this role will be permitted to create new roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#create_role Role#create_role}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-postgresql.role.RoleConfig.property.encrypted"></a>

```java
public java.lang.String getEncrypted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#encrypted Role#encrypted}.

---

##### `encryptedPassword`<sup>Optional</sup> <a name="encryptedPassword" id="@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword"></a>

```java
public java.lang.Object getEncryptedPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Control whether the password is stored encrypted in the system catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#encrypted_password Role#encrypted_password}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.role.RoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout"></a>

```java
public java.lang.Number getIdleInTransactionSessionTimeout();
```

- *Type:* java.lang.Number

Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}

---

##### `inherit`<sup>Optional</sup> <a name="inherit" id="@cdktf/provider-postgresql.role.RoleConfig.property.inherit"></a>

```java
public java.lang.Object getInherit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether a role "inherits" the privileges of roles it is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#inherit Role#inherit}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-postgresql.role.RoleConfig.property.login"></a>

```java
public java.lang.Object getLogin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether a role is allowed to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#login Role#login}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.role.RoleConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Sets the role's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#password Role#password}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-postgresql.role.RoleConfig.property.replication"></a>

```java
public java.lang.Object getReplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#replication Role#replication}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-postgresql.role.RoleConfig.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Role(s) to grant to this new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#roles Role#roles}

---

##### `searchPath`<sup>Optional</sup> <a name="searchPath" id="@cdktf/provider-postgresql.role.RoleConfig.property.searchPath"></a>

```java
public java.util.List<java.lang.String> getSearchPath();
```

- *Type:* java.util.List<java.lang.String>

Sets the role's search path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#search_path Role#search_path}

---

##### `skipDropRole`<sup>Optional</sup> <a name="skipDropRole" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole"></a>

```java
public java.lang.Object getSkipDropRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#skip_drop_role Role#skip_drop_role}

---

##### `skipReassignOwned`<sup>Optional</sup> <a name="skipReassignOwned" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned"></a>

```java
public java.lang.Object getSkipReassignOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#skip_reassign_owned Role#skip_reassign_owned}

---

##### `statementTimeout`<sup>Optional</sup> <a name="statementTimeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout"></a>

```java
public java.lang.Number getStatementTimeout();
```

- *Type:* java.lang.Number

Abort any statement that takes more than the specified number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#statement_timeout Role#statement_timeout}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.role.RoleConfig.property.superuser"></a>

```java
public java.lang.Object getSuperuser();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine whether the new role is a "superuser".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#superuser Role#superuser}

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/provider-postgresql.role.RoleConfig.property.validUntil"></a>

```java
public java.lang.String getValidUntil();
```

- *Type:* java.lang.String

Sets a date and time after which the role's password is no longer valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.20.0/docs/resources/role#valid_until Role#valid_until}

---



