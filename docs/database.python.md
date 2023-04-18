# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-postgresql.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-postgresql.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database postgresql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.database.Database.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import database

database.Database(
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
  allow_connections: typing.Union[bool, IResolvable] = None,
  connection_limit: typing.Union[int, float] = None,
  encoding: str = None,
  id: str = None,
  is_template: typing.Union[bool, IResolvable] = None,
  lc_collate: str = None,
  lc_ctype: str = None,
  owner: str = None,
  tablespace_name: str = None,
  template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.name">name</a></code> | <code>str</code> | The PostgreSQL database name to connect to. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.allowConnections">allow_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If false then no one can connect to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | How many concurrent connections can be made to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.encoding">encoding</a></code> | <code>str</code> | Character set encoding to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.isTemplate">is_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then this database can be cloned by any user with CREATEDB privileges. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.lcCollate">lc_collate</a></code> | <code>str</code> | Collation order (LC_COLLATE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.lcCtype">lc_ctype</a></code> | <code>str</code> | Character classification (LC_CTYPE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.owner">owner</a></code> | <code>str</code> | The ROLE which owns the database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.tablespaceName">tablespace_name</a></code> | <code>str</code> | The name of the tablespace that will be associated with the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.template">template</a></code> | <code>str</code> | The name of the template from which to create the new database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.name"></a>

- *Type:* str

The PostgreSQL database name to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#name Database#name}

---

##### `allow_connections`<sup>Optional</sup> <a name="allow_connections" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.allowConnections"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If false then no one can connect to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#allow_connections Database#allow_connections}

---

##### `connection_limit`<sup>Optional</sup> <a name="connection_limit" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.connectionLimit"></a>

- *Type:* typing.Union[int, float]

How many concurrent connections can be made to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#connection_limit Database#connection_limit}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.encoding"></a>

- *Type:* str

Character set encoding to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#encoding Database#encoding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_template`<sup>Optional</sup> <a name="is_template" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.isTemplate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then this database can be cloned by any user with CREATEDB privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#is_template Database#is_template}

---

##### `lc_collate`<sup>Optional</sup> <a name="lc_collate" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.lcCollate"></a>

- *Type:* str

Collation order (LC_COLLATE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#lc_collate Database#lc_collate}

---

##### `lc_ctype`<sup>Optional</sup> <a name="lc_ctype" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.lcCtype"></a>

- *Type:* str

Character classification (LC_CTYPE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#lc_ctype Database#lc_ctype}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.owner"></a>

- *Type:* str

The ROLE which owns the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#owner Database#owner}

---

##### `tablespace_name`<sup>Optional</sup> <a name="tablespace_name" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.tablespaceName"></a>

- *Type:* str

The name of the tablespace that will be associated with the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#tablespace_name Database#tablespace_name}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.template"></a>

- *Type:* str

The name of the template from which to create the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#template Database#template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetAllowConnections">reset_allow_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetConnectionLimit">reset_connection_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetIsTemplate">reset_is_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetLcCollate">reset_lc_collate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetLcCtype">reset_lc_ctype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetTablespaceName">reset_tablespace_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetTemplate">reset_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.database.Database.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.database.Database.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.database.Database.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.database.Database.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allow_connections` <a name="reset_allow_connections" id="@cdktf/provider-postgresql.database.Database.resetAllowConnections"></a>

```python
def reset_allow_connections() -> None
```

##### `reset_connection_limit` <a name="reset_connection_limit" id="@cdktf/provider-postgresql.database.Database.resetConnectionLimit"></a>

```python
def reset_connection_limit() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-postgresql.database.Database.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.database.Database.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_template` <a name="reset_is_template" id="@cdktf/provider-postgresql.database.Database.resetIsTemplate"></a>

```python
def reset_is_template() -> None
```

##### `reset_lc_collate` <a name="reset_lc_collate" id="@cdktf/provider-postgresql.database.Database.resetLcCollate"></a>

```python
def reset_lc_collate() -> None
```

##### `reset_lc_ctype` <a name="reset_lc_ctype" id="@cdktf/provider-postgresql.database.Database.resetLcCtype"></a>

```python
def reset_lc_ctype() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-postgresql.database.Database.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_tablespace_name` <a name="reset_tablespace_name" id="@cdktf/provider-postgresql.database.Database.resetTablespaceName"></a>

```python
def reset_tablespace_name() -> None
```

##### `reset_template` <a name="reset_template" id="@cdktf/provider-postgresql.database.Database.resetTemplate"></a>

```python
def reset_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.database.Database.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import database

database.Database.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.database.Database.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import database

database.Database.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-postgresql.database.Database.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_postgresql import database

database.Database.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput">allow_connections_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimitInput">connection_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplateInput">is_template_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollateInput">lc_collate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtypeInput">lc_ctype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput">tablespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnections">allow_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplate">is_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollate">lc_collate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtype">lc_ctype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceName">tablespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.template">template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.database.Database.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.database.Database.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.database.Database.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.database.Database.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.database.Database.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.database.Database.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.database.Database.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.database.Database.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.database.Database.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.Database.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.database.Database.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_connections_input`<sup>Optional</sup> <a name="allow_connections_input" id="@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput"></a>

```python
allow_connections_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_limit_input`<sup>Optional</sup> <a name="connection_limit_input" id="@cdktf/provider-postgresql.database.Database.property.connectionLimitInput"></a>

```python
connection_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-postgresql.database.Database.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.database.Database.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_template_input`<sup>Optional</sup> <a name="is_template_input" id="@cdktf/provider-postgresql.database.Database.property.isTemplateInput"></a>

```python
is_template_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lc_collate_input`<sup>Optional</sup> <a name="lc_collate_input" id="@cdktf/provider-postgresql.database.Database.property.lcCollateInput"></a>

```python
lc_collate_input: str
```

- *Type:* str

---

##### `lc_ctype_input`<sup>Optional</sup> <a name="lc_ctype_input" id="@cdktf/provider-postgresql.database.Database.property.lcCtypeInput"></a>

```python
lc_ctype_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-postgresql.database.Database.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-postgresql.database.Database.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `tablespace_name_input`<sup>Optional</sup> <a name="tablespace_name_input" id="@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput"></a>

```python
tablespace_name_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-postgresql.database.Database.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `allow_connections`<sup>Required</sup> <a name="allow_connections" id="@cdktf/provider-postgresql.database.Database.property.allowConnections"></a>

```python
allow_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktf/provider-postgresql.database.Database.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-postgresql.database.Database.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_template`<sup>Required</sup> <a name="is_template" id="@cdktf/provider-postgresql.database.Database.property.isTemplate"></a>

```python
is_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lc_collate`<sup>Required</sup> <a name="lc_collate" id="@cdktf/provider-postgresql.database.Database.property.lcCollate"></a>

```python
lc_collate: str
```

- *Type:* str

---

##### `lc_ctype`<sup>Required</sup> <a name="lc_ctype" id="@cdktf/provider-postgresql.database.Database.property.lcCtype"></a>

```python
lc_ctype: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.database.Database.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.database.Database.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `tablespace_name`<sup>Required</sup> <a name="tablespace_name" id="@cdktf/provider-postgresql.database.Database.property.tablespaceName"></a>

```python
tablespace_name: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-postgresql.database.Database.property.template"></a>

```python
template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.database.Database.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-postgresql.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.database.DatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import database

database.DatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  allow_connections: typing.Union[bool, IResolvable] = None,
  connection_limit: typing.Union[int, float] = None,
  encoding: str = None,
  id: str = None,
  is_template: typing.Union[bool, IResolvable] = None,
  lc_collate: str = None,
  lc_ctype: str = None,
  owner: str = None,
  tablespace_name: str = None,
  template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.name">name</a></code> | <code>str</code> | The PostgreSQL database name to connect to. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections">allow_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If false then no one can connect to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | How many concurrent connections can be made to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding">encoding</a></code> | <code>str</code> | Character set encoding to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate">is_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then this database can be cloned by any user with CREATEDB privileges. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate">lc_collate</a></code> | <code>str</code> | Collation order (LC_COLLATE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype">lc_ctype</a></code> | <code>str</code> | Character classification (LC_CTYPE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.owner">owner</a></code> | <code>str</code> | The ROLE which owns the database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName">tablespace_name</a></code> | <code>str</code> | The name of the tablespace that will be associated with the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.template">template</a></code> | <code>str</code> | The name of the template from which to create the new database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The PostgreSQL database name to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#name Database#name}

---

##### `allow_connections`<sup>Optional</sup> <a name="allow_connections" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections"></a>

```python
allow_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If false then no one can connect to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#allow_connections Database#allow_connections}

---

##### `connection_limit`<sup>Optional</sup> <a name="connection_limit" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many concurrent connections can be made to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#connection_limit Database#connection_limit}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Character set encoding to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#encoding Database#encoding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_template`<sup>Optional</sup> <a name="is_template" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate"></a>

```python
is_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then this database can be cloned by any user with CREATEDB privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#is_template Database#is_template}

---

##### `lc_collate`<sup>Optional</sup> <a name="lc_collate" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate"></a>

```python
lc_collate: str
```

- *Type:* str

Collation order (LC_COLLATE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#lc_collate Database#lc_collate}

---

##### `lc_ctype`<sup>Optional</sup> <a name="lc_ctype" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype"></a>

```python
lc_ctype: str
```

- *Type:* str

Character classification (LC_CTYPE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#lc_ctype Database#lc_ctype}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

The ROLE which owns the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#owner Database#owner}

---

##### `tablespace_name`<sup>Optional</sup> <a name="tablespace_name" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName"></a>

```python
tablespace_name: str
```

- *Type:* str

The name of the tablespace that will be associated with the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#tablespace_name Database#tablespace_name}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.template"></a>

```python
template: str
```

- *Type:* str

The name of the template from which to create the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/database#template Database#template}

---



