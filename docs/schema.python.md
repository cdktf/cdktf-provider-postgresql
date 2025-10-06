# `schema` Submodule <a name="`schema` Submodule" id="@cdktf/provider-postgresql.schema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schema <a name="Schema" id="@cdktf/provider-postgresql.schema.Schema"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema postgresql_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.schema.Schema.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import schema

schema.Schema(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  database: str = None,
  drop_cascade: bool | IResolvable = None,
  id: str = None,
  if_not_exists: bool | IResolvable = None,
  owner: str = None,
  policy: IResolvable | typing.List[SchemaPolicy] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the schema. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.database">database</a></code> | <code>str</code> | The database name to alter schema. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.dropCascade">drop_cascade</a></code> | <code>bool \| cdktf.IResolvable</code> | When true, will also drop all the objects that are contained in the schema. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#id Schema#id}. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.ifNotExists">if_not_exists</a></code> | <code>bool \| cdktf.IResolvable</code> | When true, use the existing schema if it exists. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.owner">owner</a></code> | <code>str</code> | The ROLE name who owns the schema. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.policy">policy</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>]</code> | policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.name"></a>

- *Type:* str

The name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#name Schema#name}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.database"></a>

- *Type:* str

The database name to alter schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#database Schema#database}

---

##### `drop_cascade`<sup>Optional</sup> <a name="drop_cascade" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.dropCascade"></a>

- *Type:* bool | cdktf.IResolvable

When true, will also drop all the objects that are contained in the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#drop_cascade Schema#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#id Schema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `if_not_exists`<sup>Optional</sup> <a name="if_not_exists" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.ifNotExists"></a>

- *Type:* bool | cdktf.IResolvable

When true, use the existing schema if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#if_not_exists Schema#if_not_exists}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.owner"></a>

- *Type:* str

The ROLE name who owns the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#owner Schema#owner}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-postgresql.schema.Schema.Initializer.parameter.policy"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#policy Schema#policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.resetDropCascade">reset_drop_cascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.resetIfNotExists">reset_if_not_exists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.resetPolicy">reset_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.schema.Schema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.schema.Schema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.schema.Schema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.schema.Schema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.schema.Schema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.schema.Schema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.schema.Schema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-postgresql.schema.Schema.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.schema.Schema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.schema.Schema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-postgresql.schema.Schema.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-postgresql.schema.Schema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.schema.Schema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.schema.Schema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.schema.Schema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.schema.Schema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.schema.Schema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.schema.Schema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.schema.Schema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.schema.Schema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.schema.Schema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-postgresql.schema.Schema.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-postgresql.schema.Schema.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.schema.Schema.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.schema.Schema.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.schema.Schema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.Schema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-postgresql.schema.Schema.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.schema.Schema.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-postgresql.schema.Schema.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-postgresql.schema.Schema.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.schema.Schema.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-postgresql.schema.Schema.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.schema.Schema.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy` <a name="put_policy" id="@cdktf/provider-postgresql.schema.Schema.putPolicy"></a>

```python
def put_policy(
  value: IResolvable | typing.List[SchemaPolicy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.schema.Schema.putPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>]

---

##### `reset_database` <a name="reset_database" id="@cdktf/provider-postgresql.schema.Schema.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_drop_cascade` <a name="reset_drop_cascade" id="@cdktf/provider-postgresql.schema.Schema.resetDropCascade"></a>

```python
def reset_drop_cascade() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.schema.Schema.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_if_not_exists` <a name="reset_if_not_exists" id="@cdktf/provider-postgresql.schema.Schema.resetIfNotExists"></a>

```python
def reset_if_not_exists() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-postgresql.schema.Schema.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-postgresql.schema.Schema.resetPolicy"></a>

```python
def reset_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Schema resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.schema.Schema.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import schema

schema.Schema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.schema.Schema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.schema.Schema.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import schema

schema.Schema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.schema.Schema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-postgresql.schema.Schema.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_postgresql import schema

schema.Schema.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.schema.Schema.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-postgresql.schema.Schema.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_postgresql import schema

schema.Schema.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Schema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.schema.Schema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-postgresql.schema.Schema.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Schema to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-postgresql.schema.Schema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Schema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.schema.Schema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Schema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList">SchemaPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.dropCascadeInput">drop_cascade_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.ifNotExistsInput">if_not_exists_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.policyInput">policy_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.dropCascade">drop_cascade</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.ifNotExists">if_not_exists</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.owner">owner</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.schema.Schema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.schema.Schema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.schema.Schema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.schema.Schema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.schema.Schema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.schema.Schema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.schema.Schema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.schema.Schema.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.schema.Schema.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.schema.Schema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.schema.Schema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.schema.Schema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.schema.Schema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.schema.Schema.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-postgresql.schema.Schema.property.policy"></a>

```python
policy: SchemaPolicyList
```

- *Type:* <a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList">SchemaPolicyList</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-postgresql.schema.Schema.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `drop_cascade_input`<sup>Optional</sup> <a name="drop_cascade_input" id="@cdktf/provider-postgresql.schema.Schema.property.dropCascadeInput"></a>

```python
drop_cascade_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.schema.Schema.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `if_not_exists_input`<sup>Optional</sup> <a name="if_not_exists_input" id="@cdktf/provider-postgresql.schema.Schema.property.ifNotExistsInput"></a>

```python
if_not_exists_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-postgresql.schema.Schema.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-postgresql.schema.Schema.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-postgresql.schema.Schema.property.policyInput"></a>

```python
policy_input: IResolvable | typing.List[SchemaPolicy]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.schema.Schema.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `drop_cascade`<sup>Required</sup> <a name="drop_cascade" id="@cdktf/provider-postgresql.schema.Schema.property.dropCascade"></a>

```python
drop_cascade: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.schema.Schema.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `if_not_exists`<sup>Required</sup> <a name="if_not_exists" id="@cdktf/provider-postgresql.schema.Schema.property.ifNotExists"></a>

```python
if_not_exists: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.schema.Schema.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.schema.Schema.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.Schema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.schema.Schema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SchemaConfig <a name="SchemaConfig" id="@cdktf/provider-postgresql.schema.SchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.schema.SchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import schema

schema.SchemaConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  database: str = None,
  drop_cascade: bool | IResolvable = None,
  id: str = None,
  if_not_exists: bool | IResolvable = None,
  owner: str = None,
  policy: IResolvable | typing.List[SchemaPolicy] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.name">name</a></code> | <code>str</code> | The name of the schema. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.database">database</a></code> | <code>str</code> | The database name to alter schema. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.dropCascade">drop_cascade</a></code> | <code>bool \| cdktf.IResolvable</code> | When true, will also drop all the objects that are contained in the schema. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#id Schema#id}. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.ifNotExists">if_not_exists</a></code> | <code>bool \| cdktf.IResolvable</code> | When true, use the existing schema if it exists. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.owner">owner</a></code> | <code>str</code> | The ROLE name who owns the schema. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaConfig.property.policy">policy</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>]</code> | policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#name Schema#name}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database name to alter schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#database Schema#database}

---

##### `drop_cascade`<sup>Optional</sup> <a name="drop_cascade" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.dropCascade"></a>

```python
drop_cascade: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When true, will also drop all the objects that are contained in the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#drop_cascade Schema#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#id Schema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `if_not_exists`<sup>Optional</sup> <a name="if_not_exists" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.ifNotExists"></a>

```python
if_not_exists: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When true, use the existing schema if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#if_not_exists Schema#if_not_exists}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

The ROLE name who owns the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#owner Schema#owner}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-postgresql.schema.SchemaConfig.property.policy"></a>

```python
policy: IResolvable | typing.List[SchemaPolicy]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#policy Schema#policy}

---

### SchemaPolicy <a name="SchemaPolicy" id="@cdktf/provider-postgresql.schema.SchemaPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.schema.SchemaPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import schema

schema.SchemaPolicy(
  create: bool | IResolvable = None,
  create_with_grant: bool | IResolvable = None,
  role: str = None,
  usage: bool | IResolvable = None,
  usage_with_grant: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicy.property.create">create</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, allow the specified ROLEs to CREATE new objects within the schema(s). |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicy.property.createWithGrant">create_with_grant</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, allow the specified ROLEs to CREATE new objects within the schema(s) and GRANT the same CREATE privilege to different ROLEs. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicy.property.role">role</a></code> | <code>str</code> | ROLE who will receive this policy (default: PUBLIC). |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicy.property.usage">usage</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, allow the specified ROLEs to use objects within the schema(s). |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicy.property.usageWithGrant">usage_with_grant</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, allow the specified ROLEs to use objects within the schema(s) and GRANT the same USAGE privilege to different ROLEs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-postgresql.schema.SchemaPolicy.property.create"></a>

```python
create: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, allow the specified ROLEs to CREATE new objects within the schema(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#create Schema#create}

---

##### `create_with_grant`<sup>Optional</sup> <a name="create_with_grant" id="@cdktf/provider-postgresql.schema.SchemaPolicy.property.createWithGrant"></a>

```python
create_with_grant: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, allow the specified ROLEs to CREATE new objects within the schema(s) and GRANT the same CREATE privilege to different ROLEs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#create_with_grant Schema#create_with_grant}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-postgresql.schema.SchemaPolicy.property.role"></a>

```python
role: str
```

- *Type:* str

ROLE who will receive this policy (default: PUBLIC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#role Schema#role}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-postgresql.schema.SchemaPolicy.property.usage"></a>

```python
usage: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, allow the specified ROLEs to use objects within the schema(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#usage Schema#usage}

---

##### `usage_with_grant`<sup>Optional</sup> <a name="usage_with_grant" id="@cdktf/provider-postgresql.schema.SchemaPolicy.property.usageWithGrant"></a>

```python
usage_with_grant: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, allow the specified ROLEs to use objects within the schema(s) and GRANT the same USAGE privilege to different ROLEs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/resources/schema#usage_with_grant Schema#usage_with_grant}

---

## Classes <a name="Classes" id="Classes"></a>

### SchemaPolicyList <a name="SchemaPolicyList" id="@cdktf/provider-postgresql.schema.SchemaPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import schema

schema.SchemaPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-postgresql.schema.SchemaPolicyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SchemaPolicy]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>]

---


### SchemaPolicyOutputReference <a name="SchemaPolicyOutputReference" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import schema

schema.SchemaPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetCreateWithGrant">reset_create_with_grant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetUsage">reset_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetUsageWithGrant">reset_usage_with_grant</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_create_with_grant` <a name="reset_create_with_grant" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetCreateWithGrant"></a>

```python
def reset_create_with_grant() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_usage` <a name="reset_usage" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetUsage"></a>

```python
def reset_usage() -> None
```

##### `reset_usage_with_grant` <a name="reset_usage_with_grant" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.resetUsageWithGrant"></a>

```python
def reset_usage_with_grant() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.createInput">create_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.createWithGrantInput">create_with_grant_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageInput">usage_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageWithGrantInput">usage_with_grant_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.create">create</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.createWithGrant">create_with_grant</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.usage">usage</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageWithGrant">usage_with_grant</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.createInput"></a>

```python
create_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `create_with_grant_input`<sup>Optional</sup> <a name="create_with_grant_input" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.createWithGrantInput"></a>

```python
create_with_grant_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `usage_input`<sup>Optional</sup> <a name="usage_input" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageInput"></a>

```python
usage_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `usage_with_grant_input`<sup>Optional</sup> <a name="usage_with_grant_input" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageWithGrantInput"></a>

```python
usage_with_grant_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.create"></a>

```python
create: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `create_with_grant`<sup>Required</sup> <a name="create_with_grant" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.createWithGrant"></a>

```python
create_with_grant: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.usage"></a>

```python
usage: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `usage_with_grant`<sup>Required</sup> <a name="usage_with_grant" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.usageWithGrant"></a>

```python
usage_with_grant: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-postgresql.schema.SchemaPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchemaPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-postgresql.schema.SchemaPolicy">SchemaPolicy</a>

---



