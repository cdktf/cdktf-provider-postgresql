# `grant` Submodule <a name="`grant` Submodule" id="@cdktf/provider-postgresql.grant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Grant <a name="Grant" id="@cdktf/provider-postgresql.grant.Grant"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant postgresql_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.grant.Grant.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import grant

grant.Grant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  object_type: str,
  privileges: typing.List[str],
  role: str,
  columns: typing.List[str] = None,
  id: str = None,
  objects: typing.List[str] = None,
  schema: str = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.database">database</a></code> | <code>str</code> | The database to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence, table, foreign_data_wrapper, foreign_server, column). |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.privileges">privileges</a></code> | <code>typing.List[str]</code> | The list of privileges to grant. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.role">role</a></code> | <code>str</code> | The name of the role to grant privileges on. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.columns">columns</a></code> | <code>typing.List[str]</code> | The specific columns to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#id Grant#id}. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.objects">objects</a></code> | <code>typing.List[str]</code> | The specific objects to grant privileges on for this role (empty means all objects of the requested type). |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The database schema to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Permit the grant recipient to grant it to others. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.database"></a>

- *Type:* str

The database to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#database Grant#database}

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.objectType"></a>

- *Type:* str

The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence, table, foreign_data_wrapper, foreign_server, column).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#object_type Grant#object_type}

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.privileges"></a>

- *Type:* typing.List[str]

The list of privileges to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#privileges Grant#privileges}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.role"></a>

- *Type:* str

The name of the role to grant privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#role Grant#role}

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.columns"></a>

- *Type:* typing.List[str]

The specific columns to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#columns Grant#columns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#id Grant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.objects"></a>

- *Type:* typing.List[str]

The specific objects to grant privileges on for this role (empty means all objects of the requested type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#objects Grant#objects}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.schema"></a>

- *Type:* str

The database schema to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#schema Grant#schema}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.withGrantOption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#with_grant_option Grant#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetColumns">reset_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetObjects">reset_objects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetWithGrantOption">reset_with_grant_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.grant.Grant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.grant.Grant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.grant.Grant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.grant.Grant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.grant.Grant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.grant.Grant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.grant.Grant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.grant.Grant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.grant.Grant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-postgresql.grant.Grant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-postgresql.grant.Grant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.grant.Grant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.grant.Grant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.grant.Grant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.grant.Grant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.grant.Grant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.grant.Grant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-postgresql.grant.Grant.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-postgresql.grant.Grant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.Grant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.grant.Grant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.grant.Grant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-postgresql.grant.Grant.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-postgresql.grant.Grant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-postgresql.grant.Grant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.grant.Grant.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-postgresql.grant.Grant.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_columns` <a name="reset_columns" id="@cdktf/provider-postgresql.grant.Grant.resetColumns"></a>

```python
def reset_columns() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.grant.Grant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_objects` <a name="reset_objects" id="@cdktf/provider-postgresql.grant.Grant.resetObjects"></a>

```python
def reset_objects() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-postgresql.grant.Grant.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_with_grant_option` <a name="reset_with_grant_option" id="@cdktf/provider-postgresql.grant.Grant.resetWithGrantOption"></a>

```python
def reset_with_grant_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.grant.Grant.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import grant

grant.Grant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.grant.Grant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.grant.Grant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import grant

grant.Grant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.grant.Grant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-postgresql.grant.Grant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_postgresql import grant

grant.Grant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.grant.Grant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_postgresql import grant

grant.Grant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Grant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Grant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Grant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.columnsInput">columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.objectsInput">objects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.privilegesInput">privileges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.withGrantOptionInput">with_grant_option_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.objects">objects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.grant.Grant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.grant.Grant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.grant.Grant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.grant.Grant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.grant.Grant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.grant.Grant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.grant.Grant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.grant.Grant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.grant.Grant.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.grant.Grant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.grant.Grant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.grant.Grant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.Grant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.grant.Grant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktf/provider-postgresql.grant.Grant.property.columnsInput"></a>

```python
columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-postgresql.grant.Grant.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.grant.Grant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `objects_input`<sup>Optional</sup> <a name="objects_input" id="@cdktf/provider-postgresql.grant.Grant.property.objectsInput"></a>

```python
objects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-postgresql.grant.Grant.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `privileges_input`<sup>Optional</sup> <a name="privileges_input" id="@cdktf/provider-postgresql.grant.Grant.property.privilegesInput"></a>

```python
privileges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-postgresql.grant.Grant.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-postgresql.grant.Grant.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `with_grant_option_input`<sup>Optional</sup> <a name="with_grant_option_input" id="@cdktf/provider-postgresql.grant.Grant.property.withGrantOptionInput"></a>

```python
with_grant_option_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-postgresql.grant.Grant.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.grant.Grant.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `objects`<sup>Required</sup> <a name="objects" id="@cdktf/provider-postgresql.grant.Grant.property.objects"></a>

```python
objects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-postgresql.grant.Grant.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.grant.Grant.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.grant.Grant.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-postgresql.grant.Grant.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `with_grant_option`<sup>Required</sup> <a name="with_grant_option" id="@cdktf/provider-postgresql.grant.Grant.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.grant.Grant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GrantConfig <a name="GrantConfig" id="@cdktf/provider-postgresql.grant.GrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.grant.GrantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import grant

grant.GrantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  object_type: str,
  privileges: typing.List[str],
  role: str,
  columns: typing.List[str] = None,
  id: str = None,
  objects: typing.List[str] = None,
  schema: str = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.database">database</a></code> | <code>str</code> | The database to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.objectType">object_type</a></code> | <code>str</code> | The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence, table, foreign_data_wrapper, foreign_server, column). |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | The list of privileges to grant. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.role">role</a></code> | <code>str</code> | The name of the role to grant privileges on. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.columns">columns</a></code> | <code>typing.List[str]</code> | The specific columns to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#id Grant#id}. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.objects">objects</a></code> | <code>typing.List[str]</code> | The specific objects to grant privileges on for this role (empty means all objects of the requested type). |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.schema">schema</a></code> | <code>str</code> | The database schema to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Permit the grant recipient to grant it to others. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.grant.GrantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.grant.GrantConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.grant.GrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.grant.GrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.grant.GrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.GrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.grant.GrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.grant.GrantConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#database Grant#database}

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-postgresql.grant.GrantConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence, table, foreign_data_wrapper, foreign_server, column).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#object_type Grant#object_type}

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.grant.GrantConfig.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

The list of privileges to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#privileges Grant#privileges}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.grant.GrantConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The name of the role to grant privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#role Grant#role}

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-postgresql.grant.GrantConfig.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

The specific columns to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#columns Grant#columns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.grant.GrantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#id Grant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-postgresql.grant.GrantConfig.property.objects"></a>

```python
objects: typing.List[str]
```

- *Type:* typing.List[str]

The specific objects to grant privileges on for this role (empty means all objects of the requested type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#objects Grant#objects}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.grant.GrantConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The database schema to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#schema Grant#schema}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-postgresql.grant.GrantConfig.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/grant#with_grant_option Grant#with_grant_option}

---



