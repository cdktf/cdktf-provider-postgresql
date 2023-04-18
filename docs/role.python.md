# `role` Submodule <a name="`role` Submodule" id="@cdktf/provider-postgresql.role"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Role <a name="Role" id="@cdktf/provider-postgresql.role.Role"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role postgresql_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.role.Role.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import role

role.Role(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  assume_role: str = None,
  bypass_row_level_security: typing.Union[bool, IResolvable] = None,
  connection_limit: typing.Union[int, float] = None,
  create_database: typing.Union[bool, IResolvable] = None,
  create_role: typing.Union[bool, IResolvable] = None,
  encrypted: str = None,
  encrypted_password: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_in_transaction_session_timeout: typing.Union[int, float] = None,
  inherit: typing.Union[bool, IResolvable] = None,
  login: typing.Union[bool, IResolvable] = None,
  password: str = None,
  replication: typing.Union[bool, IResolvable] = None,
  roles: typing.List[str] = None,
  search_path: typing.List[str] = None,
  skip_drop_role: typing.Union[bool, IResolvable] = None,
  skip_reassign_owned: typing.Union[bool, IResolvable] = None,
  statement_timeout: typing.Union[int, float] = None,
  superuser: typing.Union[bool, IResolvable] = None,
  valid_until: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.assumeRole">assume_role</a></code> | <code>str</code> | Role to switch to at login. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.bypassRowLevelSecurity">bypass_row_level_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether a role bypasses every row-level security (RLS) policy. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | How many concurrent connections can be made with this role. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.createDatabase">create_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Define a role's ability to create databases. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.createRole">create_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether this role will be permitted to create new roles. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.encrypted">encrypted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#encrypted Role#encrypted}. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.encryptedPassword">encrypted_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Control whether the password is stored encrypted in the system catalogs. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#id Role#id}. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.idleInTransactionSessionTimeout">idle_in_transaction_session_timeout</a></code> | <code>typing.Union[int, float]</code> | Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.inherit">inherit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether a role "inherits" the privileges of roles it is a member of. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.login">login</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether a role is allowed to log in. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.password">password</a></code> | <code>str</code> | Sets the role's password. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.replication">replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | Role(s) to grant to this new role. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.searchPath">search_path</a></code> | <code>typing.List[str]</code> | Sets the role's search path. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.skipDropRole">skip_drop_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.skipReassignOwned">skip_reassign_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.statementTimeout">statement_timeout</a></code> | <code>typing.Union[int, float]</code> | Abort any statement that takes more than the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.superuser">superuser</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether the new role is a "superuser". |
| <code><a href="#@cdktf/provider-postgresql.role.Role.Initializer.parameter.validUntil">valid_until</a></code> | <code>str</code> | Sets a date and time after which the role's password is no longer valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.name"></a>

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#name Role#name}

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.assumeRole"></a>

- *Type:* str

Role to switch to at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#assume_role Role#assume_role}

---

##### `bypass_row_level_security`<sup>Optional</sup> <a name="bypass_row_level_security" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.bypassRowLevelSecurity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether a role bypasses every row-level security (RLS) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#bypass_row_level_security Role#bypass_row_level_security}

---

##### `connection_limit`<sup>Optional</sup> <a name="connection_limit" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.connectionLimit"></a>

- *Type:* typing.Union[int, float]

How many concurrent connections can be made with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#connection_limit Role#connection_limit}

---

##### `create_database`<sup>Optional</sup> <a name="create_database" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.createDatabase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Define a role's ability to create databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#create_database Role#create_database}

---

##### `create_role`<sup>Optional</sup> <a name="create_role" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.createRole"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether this role will be permitted to create new roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#create_role Role#create_role}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.encrypted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#encrypted Role#encrypted}.

---

##### `encrypted_password`<sup>Optional</sup> <a name="encrypted_password" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.encryptedPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Control whether the password is stored encrypted in the system catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#encrypted_password Role#encrypted_password}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_in_transaction_session_timeout`<sup>Optional</sup> <a name="idle_in_transaction_session_timeout" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.idleInTransactionSessionTimeout"></a>

- *Type:* typing.Union[int, float]

Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}

---

##### `inherit`<sup>Optional</sup> <a name="inherit" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.inherit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether a role "inherits" the privileges of roles it is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#inherit Role#inherit}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.login"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether a role is allowed to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#login Role#login}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.password"></a>

- *Type:* str

Sets the role's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#password Role#password}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.replication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#replication Role#replication}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

Role(s) to grant to this new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#roles Role#roles}

---

##### `search_path`<sup>Optional</sup> <a name="search_path" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.searchPath"></a>

- *Type:* typing.List[str]

Sets the role's search path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#search_path Role#search_path}

---

##### `skip_drop_role`<sup>Optional</sup> <a name="skip_drop_role" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.skipDropRole"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#skip_drop_role Role#skip_drop_role}

---

##### `skip_reassign_owned`<sup>Optional</sup> <a name="skip_reassign_owned" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.skipReassignOwned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#skip_reassign_owned Role#skip_reassign_owned}

---

##### `statement_timeout`<sup>Optional</sup> <a name="statement_timeout" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.statementTimeout"></a>

- *Type:* typing.Union[int, float]

Abort any statement that takes more than the specified number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#statement_timeout Role#statement_timeout}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.superuser"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether the new role is a "superuser".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#superuser Role#superuser}

---

##### `valid_until`<sup>Optional</sup> <a name="valid_until" id="@cdktf/provider-postgresql.role.Role.Initializer.parameter.validUntil"></a>

- *Type:* str

Sets a date and time after which the role's password is no longer valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#valid_until Role#valid_until}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetAssumeRole">reset_assume_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetBypassRowLevelSecurity">reset_bypass_row_level_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetConnectionLimit">reset_connection_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetCreateDatabase">reset_create_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetCreateRole">reset_create_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetEncryptedPassword">reset_encrypted_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout">reset_idle_in_transaction_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetInherit">reset_inherit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetLogin">reset_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetReplication">reset_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSearchPath">reset_search_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSkipDropRole">reset_skip_drop_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSkipReassignOwned">reset_skip_reassign_owned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetStatementTimeout">reset_statement_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetSuperuser">reset_superuser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.resetValidUntil">reset_valid_until</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.role.Role.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.role.Role.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.role.Role.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.role.Role.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.role.Role.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.role.Role.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.role.Role.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.role.Role.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_assume_role` <a name="reset_assume_role" id="@cdktf/provider-postgresql.role.Role.resetAssumeRole"></a>

```python
def reset_assume_role() -> None
```

##### `reset_bypass_row_level_security` <a name="reset_bypass_row_level_security" id="@cdktf/provider-postgresql.role.Role.resetBypassRowLevelSecurity"></a>

```python
def reset_bypass_row_level_security() -> None
```

##### `reset_connection_limit` <a name="reset_connection_limit" id="@cdktf/provider-postgresql.role.Role.resetConnectionLimit"></a>

```python
def reset_connection_limit() -> None
```

##### `reset_create_database` <a name="reset_create_database" id="@cdktf/provider-postgresql.role.Role.resetCreateDatabase"></a>

```python
def reset_create_database() -> None
```

##### `reset_create_role` <a name="reset_create_role" id="@cdktf/provider-postgresql.role.Role.resetCreateRole"></a>

```python
def reset_create_role() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-postgresql.role.Role.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_encrypted_password` <a name="reset_encrypted_password" id="@cdktf/provider-postgresql.role.Role.resetEncryptedPassword"></a>

```python
def reset_encrypted_password() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.role.Role.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_in_transaction_session_timeout` <a name="reset_idle_in_transaction_session_timeout" id="@cdktf/provider-postgresql.role.Role.resetIdleInTransactionSessionTimeout"></a>

```python
def reset_idle_in_transaction_session_timeout() -> None
```

##### `reset_inherit` <a name="reset_inherit" id="@cdktf/provider-postgresql.role.Role.resetInherit"></a>

```python
def reset_inherit() -> None
```

##### `reset_login` <a name="reset_login" id="@cdktf/provider-postgresql.role.Role.resetLogin"></a>

```python
def reset_login() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-postgresql.role.Role.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_replication` <a name="reset_replication" id="@cdktf/provider-postgresql.role.Role.resetReplication"></a>

```python
def reset_replication() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-postgresql.role.Role.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_search_path` <a name="reset_search_path" id="@cdktf/provider-postgresql.role.Role.resetSearchPath"></a>

```python
def reset_search_path() -> None
```

##### `reset_skip_drop_role` <a name="reset_skip_drop_role" id="@cdktf/provider-postgresql.role.Role.resetSkipDropRole"></a>

```python
def reset_skip_drop_role() -> None
```

##### `reset_skip_reassign_owned` <a name="reset_skip_reassign_owned" id="@cdktf/provider-postgresql.role.Role.resetSkipReassignOwned"></a>

```python
def reset_skip_reassign_owned() -> None
```

##### `reset_statement_timeout` <a name="reset_statement_timeout" id="@cdktf/provider-postgresql.role.Role.resetStatementTimeout"></a>

```python
def reset_statement_timeout() -> None
```

##### `reset_superuser` <a name="reset_superuser" id="@cdktf/provider-postgresql.role.Role.resetSuperuser"></a>

```python
def reset_superuser() -> None
```

##### `reset_valid_until` <a name="reset_valid_until" id="@cdktf/provider-postgresql.role.Role.resetValidUntil"></a>

```python
def reset_valid_until() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.role.Role.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import role

role.Role.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.role.Role.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import role

role.Role.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-postgresql.role.Role.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_postgresql import role

role.Role.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.role.Role.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRoleInput">assume_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput">bypass_row_level_security_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimitInput">connection_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabaseInput">create_database_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRoleInput">create_role_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedInput">encrypted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput">encrypted_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput">idle_in_transaction_session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inheritInput">inherit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.loginInput">login_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replicationInput">replication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPathInput">search_path_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput">skip_drop_role_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput">skip_reassign_owned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput">statement_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuserInput">superuser_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntilInput">valid_until_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.assumeRole">assume_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity">bypass_row_level_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createDatabase">create_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.createRole">create_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encrypted">encrypted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.encryptedPassword">encrypted_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout">idle_in_transaction_session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.inherit">inherit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.login">login</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.replication">replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.searchPath">search_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipDropRole">skip_drop_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.skipReassignOwned">skip_reassign_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.statementTimeout">statement_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.superuser">superuser</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.validUntil">valid_until</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.role.Role.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.role.Role.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.role.Role.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.role.Role.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.role.Role.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.role.Role.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.role.Role.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.role.Role.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.role.Role.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.role.Role.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.role.Role.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.role.Role.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.Role.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.role.Role.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assume_role_input`<sup>Optional</sup> <a name="assume_role_input" id="@cdktf/provider-postgresql.role.Role.property.assumeRoleInput"></a>

```python
assume_role_input: str
```

- *Type:* str

---

##### `bypass_row_level_security_input`<sup>Optional</sup> <a name="bypass_row_level_security_input" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurityInput"></a>

```python
bypass_row_level_security_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_limit_input`<sup>Optional</sup> <a name="connection_limit_input" id="@cdktf/provider-postgresql.role.Role.property.connectionLimitInput"></a>

```python
connection_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_database_input`<sup>Optional</sup> <a name="create_database_input" id="@cdktf/provider-postgresql.role.Role.property.createDatabaseInput"></a>

```python
create_database_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_role_input`<sup>Optional</sup> <a name="create_role_input" id="@cdktf/provider-postgresql.role.Role.property.createRoleInput"></a>

```python
create_role_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-postgresql.role.Role.property.encryptedInput"></a>

```python
encrypted_input: str
```

- *Type:* str

---

##### `encrypted_password_input`<sup>Optional</sup> <a name="encrypted_password_input" id="@cdktf/provider-postgresql.role.Role.property.encryptedPasswordInput"></a>

```python
encrypted_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.role.Role.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_in_transaction_session_timeout_input`<sup>Optional</sup> <a name="idle_in_transaction_session_timeout_input" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeoutInput"></a>

```python
idle_in_transaction_session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inherit_input`<sup>Optional</sup> <a name="inherit_input" id="@cdktf/provider-postgresql.role.Role.property.inheritInput"></a>

```python
inherit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-postgresql.role.Role.property.loginInput"></a>

```python
login_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-postgresql.role.Role.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-postgresql.role.Role.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `replication_input`<sup>Optional</sup> <a name="replication_input" id="@cdktf/provider-postgresql.role.Role.property.replicationInput"></a>

```python
replication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-postgresql.role.Role.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_path_input`<sup>Optional</sup> <a name="search_path_input" id="@cdktf/provider-postgresql.role.Role.property.searchPathInput"></a>

```python
search_path_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_drop_role_input`<sup>Optional</sup> <a name="skip_drop_role_input" id="@cdktf/provider-postgresql.role.Role.property.skipDropRoleInput"></a>

```python
skip_drop_role_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_reassign_owned_input`<sup>Optional</sup> <a name="skip_reassign_owned_input" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwnedInput"></a>

```python
skip_reassign_owned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statement_timeout_input`<sup>Optional</sup> <a name="statement_timeout_input" id="@cdktf/provider-postgresql.role.Role.property.statementTimeoutInput"></a>

```python
statement_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `superuser_input`<sup>Optional</sup> <a name="superuser_input" id="@cdktf/provider-postgresql.role.Role.property.superuserInput"></a>

```python
superuser_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_until_input`<sup>Optional</sup> <a name="valid_until_input" id="@cdktf/provider-postgresql.role.Role.property.validUntilInput"></a>

```python
valid_until_input: str
```

- *Type:* str

---

##### `assume_role`<sup>Required</sup> <a name="assume_role" id="@cdktf/provider-postgresql.role.Role.property.assumeRole"></a>

```python
assume_role: str
```

- *Type:* str

---

##### `bypass_row_level_security`<sup>Required</sup> <a name="bypass_row_level_security" id="@cdktf/provider-postgresql.role.Role.property.bypassRowLevelSecurity"></a>

```python
bypass_row_level_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktf/provider-postgresql.role.Role.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_database`<sup>Required</sup> <a name="create_database" id="@cdktf/provider-postgresql.role.Role.property.createDatabase"></a>

```python
create_database: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_role`<sup>Required</sup> <a name="create_role" id="@cdktf/provider-postgresql.role.Role.property.createRole"></a>

```python
create_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-postgresql.role.Role.property.encrypted"></a>

```python
encrypted: str
```

- *Type:* str

---

##### `encrypted_password`<sup>Required</sup> <a name="encrypted_password" id="@cdktf/provider-postgresql.role.Role.property.encryptedPassword"></a>

```python
encrypted_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.role.Role.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_in_transaction_session_timeout`<sup>Required</sup> <a name="idle_in_transaction_session_timeout" id="@cdktf/provider-postgresql.role.Role.property.idleInTransactionSessionTimeout"></a>

```python
idle_in_transaction_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inherit`<sup>Required</sup> <a name="inherit" id="@cdktf/provider-postgresql.role.Role.property.inherit"></a>

```python
inherit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-postgresql.role.Role.property.login"></a>

```python
login: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.role.Role.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-postgresql.role.Role.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-postgresql.role.Role.property.replication"></a>

```python
replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-postgresql.role.Role.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_path`<sup>Required</sup> <a name="search_path" id="@cdktf/provider-postgresql.role.Role.property.searchPath"></a>

```python
search_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_drop_role`<sup>Required</sup> <a name="skip_drop_role" id="@cdktf/provider-postgresql.role.Role.property.skipDropRole"></a>

```python
skip_drop_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_reassign_owned`<sup>Required</sup> <a name="skip_reassign_owned" id="@cdktf/provider-postgresql.role.Role.property.skipReassignOwned"></a>

```python
skip_reassign_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statement_timeout`<sup>Required</sup> <a name="statement_timeout" id="@cdktf/provider-postgresql.role.Role.property.statementTimeout"></a>

```python
statement_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `superuser`<sup>Required</sup> <a name="superuser" id="@cdktf/provider-postgresql.role.Role.property.superuser"></a>

```python
superuser: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_until`<sup>Required</sup> <a name="valid_until" id="@cdktf/provider-postgresql.role.Role.property.validUntil"></a>

```python
valid_until: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.Role.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.role.Role.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RoleConfig <a name="RoleConfig" id="@cdktf/provider-postgresql.role.RoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.role.RoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import role

role.RoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  assume_role: str = None,
  bypass_row_level_security: typing.Union[bool, IResolvable] = None,
  connection_limit: typing.Union[int, float] = None,
  create_database: typing.Union[bool, IResolvable] = None,
  create_role: typing.Union[bool, IResolvable] = None,
  encrypted: str = None,
  encrypted_password: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_in_transaction_session_timeout: typing.Union[int, float] = None,
  inherit: typing.Union[bool, IResolvable] = None,
  login: typing.Union[bool, IResolvable] = None,
  password: str = None,
  replication: typing.Union[bool, IResolvable] = None,
  roles: typing.List[str] = None,
  search_path: typing.List[str] = None,
  skip_drop_role: typing.Union[bool, IResolvable] = None,
  skip_reassign_owned: typing.Union[bool, IResolvable] = None,
  statement_timeout: typing.Union[int, float] = None,
  superuser: typing.Union[bool, IResolvable] = None,
  valid_until: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.name">name</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole">assume_role</a></code> | <code>str</code> | Role to switch to at login. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity">bypass_row_level_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether a role bypasses every row-level security (RLS) policy. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | How many concurrent connections can be made with this role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase">create_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Define a role's ability to create databases. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.createRole">create_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether this role will be permitted to create new roles. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encrypted">encrypted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#encrypted Role#encrypted}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword">encrypted_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Control whether the password is stored encrypted in the system catalogs. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#id Role#id}. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout">idle_in_transaction_session_timeout</a></code> | <code>typing.Union[int, float]</code> | Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.inherit">inherit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether a role "inherits" the privileges of roles it is a member of. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.login">login</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether a role is allowed to log in. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.password">password</a></code> | <code>str</code> | Sets the role's password. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.replication">replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | Role(s) to grant to this new role. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.searchPath">search_path</a></code> | <code>typing.List[str]</code> | Sets the role's search path. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole">skip_drop_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned">skip_reassign_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout">statement_timeout</a></code> | <code>typing.Union[int, float]</code> | Abort any statement that takes more than the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.superuser">superuser</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine whether the new role is a "superuser". |
| <code><a href="#@cdktf/provider-postgresql.role.RoleConfig.property.validUntil">valid_until</a></code> | <code>str</code> | Sets a date and time after which the role's password is no longer valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.role.RoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.role.RoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.role.RoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.role.RoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.role.RoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.role.RoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.role.RoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.role.RoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#name Role#name}

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktf/provider-postgresql.role.RoleConfig.property.assumeRole"></a>

```python
assume_role: str
```

- *Type:* str

Role to switch to at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#assume_role Role#assume_role}

---

##### `bypass_row_level_security`<sup>Optional</sup> <a name="bypass_row_level_security" id="@cdktf/provider-postgresql.role.RoleConfig.property.bypassRowLevelSecurity"></a>

```python
bypass_row_level_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether a role bypasses every row-level security (RLS) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#bypass_row_level_security Role#bypass_row_level_security}

---

##### `connection_limit`<sup>Optional</sup> <a name="connection_limit" id="@cdktf/provider-postgresql.role.RoleConfig.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many concurrent connections can be made with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#connection_limit Role#connection_limit}

---

##### `create_database`<sup>Optional</sup> <a name="create_database" id="@cdktf/provider-postgresql.role.RoleConfig.property.createDatabase"></a>

```python
create_database: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Define a role's ability to create databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#create_database Role#create_database}

---

##### `create_role`<sup>Optional</sup> <a name="create_role" id="@cdktf/provider-postgresql.role.RoleConfig.property.createRole"></a>

```python
create_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether this role will be permitted to create new roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#create_role Role#create_role}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-postgresql.role.RoleConfig.property.encrypted"></a>

```python
encrypted: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#encrypted Role#encrypted}.

---

##### `encrypted_password`<sup>Optional</sup> <a name="encrypted_password" id="@cdktf/provider-postgresql.role.RoleConfig.property.encryptedPassword"></a>

```python
encrypted_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Control whether the password is stored encrypted in the system catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#encrypted_password Role#encrypted_password}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.role.RoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_in_transaction_session_timeout`<sup>Optional</sup> <a name="idle_in_transaction_session_timeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.idleInTransactionSessionTimeout"></a>

```python
idle_in_transaction_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}

---

##### `inherit`<sup>Optional</sup> <a name="inherit" id="@cdktf/provider-postgresql.role.RoleConfig.property.inherit"></a>

```python
inherit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether a role "inherits" the privileges of roles it is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#inherit Role#inherit}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-postgresql.role.RoleConfig.property.login"></a>

```python
login: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether a role is allowed to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#login Role#login}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.role.RoleConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Sets the role's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#password Role#password}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-postgresql.role.RoleConfig.property.replication"></a>

```python
replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#replication Role#replication}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-postgresql.role.RoleConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Role(s) to grant to this new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#roles Role#roles}

---

##### `search_path`<sup>Optional</sup> <a name="search_path" id="@cdktf/provider-postgresql.role.RoleConfig.property.searchPath"></a>

```python
search_path: typing.List[str]
```

- *Type:* typing.List[str]

Sets the role's search path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#search_path Role#search_path}

---

##### `skip_drop_role`<sup>Optional</sup> <a name="skip_drop_role" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipDropRole"></a>

```python
skip_drop_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#skip_drop_role Role#skip_drop_role}

---

##### `skip_reassign_owned`<sup>Optional</sup> <a name="skip_reassign_owned" id="@cdktf/provider-postgresql.role.RoleConfig.property.skipReassignOwned"></a>

```python
skip_reassign_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#skip_reassign_owned Role#skip_reassign_owned}

---

##### `statement_timeout`<sup>Optional</sup> <a name="statement_timeout" id="@cdktf/provider-postgresql.role.RoleConfig.property.statementTimeout"></a>

```python
statement_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Abort any statement that takes more than the specified number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#statement_timeout Role#statement_timeout}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.role.RoleConfig.property.superuser"></a>

```python
superuser: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine whether the new role is a "superuser".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#superuser Role#superuser}

---

##### `valid_until`<sup>Optional</sup> <a name="valid_until" id="@cdktf/provider-postgresql.role.RoleConfig.property.validUntil"></a>

```python
valid_until: str
```

- *Type:* str

Sets a date and time after which the role's password is no longer valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/role#valid_until Role#valid_until}

---



