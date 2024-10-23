# `publication` Submodule <a name="`publication` Submodule" id="@cdktf/provider-postgresql.publication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Publication <a name="Publication" id="@cdktf/provider-postgresql.publication.Publication"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication postgresql_publication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.publication.Publication.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import publication

publication.Publication(
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
  all_tables: typing.Union[bool, IResolvable] = None,
  database: str = None,
  drop_cascade: typing.Union[bool, IResolvable] = None,
  id: str = None,
  owner: str = None,
  publish_param: typing.List[str] = None,
  publish_via_partition_root_param: typing.Union[bool, IResolvable] = None,
  tables: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#name Publication#name}. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.allTables">all_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Sets the tables list to publish to ALL tables. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.database">database</a></code> | <code>str</code> | Sets the database to add the publication for. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.dropCascade">drop_cascade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, will also drop all the objects that depend on the publication, and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#id Publication#id}. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Sets the owner of the publication. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.publishParam">publish_param</a></code> | <code>typing.List[str]</code> | Sets which DML operations will be published. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.publishViaPartitionRootParam">publish_via_partition_root_param</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Sets whether changes in a partitioned table using the identity and schema of the partitioned table. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.tables">tables</a></code> | <code>typing.List[str]</code> | Sets the tables list to publish. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#name Publication#name}.

---

##### `all_tables`<sup>Optional</sup> <a name="all_tables" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.allTables"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Sets the tables list to publish to ALL tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#all_tables Publication#all_tables}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.database"></a>

- *Type:* str

Sets the database to add the publication for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#database Publication#database}

---

##### `drop_cascade`<sup>Optional</sup> <a name="drop_cascade" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.dropCascade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, will also drop all the objects that depend on the publication, and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#drop_cascade Publication#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#id Publication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.owner"></a>

- *Type:* str

Sets the owner of the publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#owner Publication#owner}

---

##### `publish_param`<sup>Optional</sup> <a name="publish_param" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.publishParam"></a>

- *Type:* typing.List[str]

Sets which DML operations will be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#publish_param Publication#publish_param}

---

##### `publish_via_partition_root_param`<sup>Optional</sup> <a name="publish_via_partition_root_param" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.publishViaPartitionRootParam"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Sets whether changes in a partitioned table using the identity and schema of the partitioned table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#publish_via_partition_root_param Publication#publish_via_partition_root_param}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktf/provider-postgresql.publication.Publication.Initializer.parameter.tables"></a>

- *Type:* typing.List[str]

Sets the tables list to publish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#tables Publication#tables}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetAllTables">reset_all_tables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetDropCascade">reset_drop_cascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetPublishParam">reset_publish_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetPublishViaPartitionRootParam">reset_publish_via_partition_root_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.resetTables">reset_tables</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.publication.Publication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.publication.Publication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.publication.Publication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.publication.Publication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.publication.Publication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.publication.Publication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.publication.Publication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-postgresql.publication.Publication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.publication.Publication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.publication.Publication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-postgresql.publication.Publication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-postgresql.publication.Publication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.publication.Publication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.publication.Publication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.publication.Publication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.publication.Publication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.publication.Publication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.publication.Publication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-postgresql.publication.Publication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-postgresql.publication.Publication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.publication.Publication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.publication.Publication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.publication.Publication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.publication.Publication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-postgresql.publication.Publication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.publication.Publication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-postgresql.publication.Publication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-postgresql.publication.Publication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.publication.Publication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-postgresql.publication.Publication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.publication.Publication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_all_tables` <a name="reset_all_tables" id="@cdktf/provider-postgresql.publication.Publication.resetAllTables"></a>

```python
def reset_all_tables() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-postgresql.publication.Publication.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_drop_cascade` <a name="reset_drop_cascade" id="@cdktf/provider-postgresql.publication.Publication.resetDropCascade"></a>

```python
def reset_drop_cascade() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.publication.Publication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-postgresql.publication.Publication.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_publish_param` <a name="reset_publish_param" id="@cdktf/provider-postgresql.publication.Publication.resetPublishParam"></a>

```python
def reset_publish_param() -> None
```

##### `reset_publish_via_partition_root_param` <a name="reset_publish_via_partition_root_param" id="@cdktf/provider-postgresql.publication.Publication.resetPublishViaPartitionRootParam"></a>

```python
def reset_publish_via_partition_root_param() -> None
```

##### `reset_tables` <a name="reset_tables" id="@cdktf/provider-postgresql.publication.Publication.resetTables"></a>

```python
def reset_tables() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Publication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.publication.Publication.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import publication

publication.Publication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.publication.Publication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.publication.Publication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import publication

publication.Publication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.publication.Publication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-postgresql.publication.Publication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_postgresql import publication

publication.Publication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.publication.Publication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-postgresql.publication.Publication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_postgresql import publication

publication.Publication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Publication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.publication.Publication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-postgresql.publication.Publication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Publication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-postgresql.publication.Publication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Publication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.publication.Publication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Publication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.allTablesInput">all_tables_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.dropCascadeInput">drop_cascade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.publishParamInput">publish_param_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.publishViaPartitionRootParamInput">publish_via_partition_root_param_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.tablesInput">tables_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.allTables">all_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.dropCascade">drop_cascade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.publishParam">publish_param</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.publishViaPartitionRootParam">publish_via_partition_root_param</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.tables">tables</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.publication.Publication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.publication.Publication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.publication.Publication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.publication.Publication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.publication.Publication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.publication.Publication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.publication.Publication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.publication.Publication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.publication.Publication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.publication.Publication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.publication.Publication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.publication.Publication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.publication.Publication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.publication.Publication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_tables_input`<sup>Optional</sup> <a name="all_tables_input" id="@cdktf/provider-postgresql.publication.Publication.property.allTablesInput"></a>

```python
all_tables_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-postgresql.publication.Publication.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `drop_cascade_input`<sup>Optional</sup> <a name="drop_cascade_input" id="@cdktf/provider-postgresql.publication.Publication.property.dropCascadeInput"></a>

```python
drop_cascade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.publication.Publication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-postgresql.publication.Publication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-postgresql.publication.Publication.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `publish_param_input`<sup>Optional</sup> <a name="publish_param_input" id="@cdktf/provider-postgresql.publication.Publication.property.publishParamInput"></a>

```python
publish_param_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publish_via_partition_root_param_input`<sup>Optional</sup> <a name="publish_via_partition_root_param_input" id="@cdktf/provider-postgresql.publication.Publication.property.publishViaPartitionRootParamInput"></a>

```python
publish_via_partition_root_param_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tables_input`<sup>Optional</sup> <a name="tables_input" id="@cdktf/provider-postgresql.publication.Publication.property.tablesInput"></a>

```python
tables_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_tables`<sup>Required</sup> <a name="all_tables" id="@cdktf/provider-postgresql.publication.Publication.property.allTables"></a>

```python
all_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.publication.Publication.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `drop_cascade`<sup>Required</sup> <a name="drop_cascade" id="@cdktf/provider-postgresql.publication.Publication.property.dropCascade"></a>

```python
drop_cascade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.publication.Publication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.publication.Publication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.publication.Publication.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `publish_param`<sup>Required</sup> <a name="publish_param" id="@cdktf/provider-postgresql.publication.Publication.property.publishParam"></a>

```python
publish_param: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publish_via_partition_root_param`<sup>Required</sup> <a name="publish_via_partition_root_param" id="@cdktf/provider-postgresql.publication.Publication.property.publishViaPartitionRootParam"></a>

```python
publish_via_partition_root_param: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-postgresql.publication.Publication.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.Publication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.publication.Publication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PublicationConfig <a name="PublicationConfig" id="@cdktf/provider-postgresql.publication.PublicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.publication.PublicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import publication

publication.PublicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  all_tables: typing.Union[bool, IResolvable] = None,
  database: str = None,
  drop_cascade: typing.Union[bool, IResolvable] = None,
  id: str = None,
  owner: str = None,
  publish_param: typing.List[str] = None,
  publish_via_partition_root_param: typing.Union[bool, IResolvable] = None,
  tables: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#name Publication#name}. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.allTables">all_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Sets the tables list to publish to ALL tables. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.database">database</a></code> | <code>str</code> | Sets the database to add the publication for. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.dropCascade">drop_cascade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, will also drop all the objects that depend on the publication, and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#id Publication#id}. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.owner">owner</a></code> | <code>str</code> | Sets the owner of the publication. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.publishParam">publish_param</a></code> | <code>typing.List[str]</code> | Sets which DML operations will be published. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.publishViaPartitionRootParam">publish_via_partition_root_param</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Sets whether changes in a partitioned table using the identity and schema of the partitioned table. |
| <code><a href="#@cdktf/provider-postgresql.publication.PublicationConfig.property.tables">tables</a></code> | <code>typing.List[str]</code> | Sets the tables list to publish. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#name Publication#name}.

---

##### `all_tables`<sup>Optional</sup> <a name="all_tables" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.allTables"></a>

```python
all_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Sets the tables list to publish to ALL tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#all_tables Publication#all_tables}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.database"></a>

```python
database: str
```

- *Type:* str

Sets the database to add the publication for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#database Publication#database}

---

##### `drop_cascade`<sup>Optional</sup> <a name="drop_cascade" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.dropCascade"></a>

```python
drop_cascade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, will also drop all the objects that depend on the publication, and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#drop_cascade Publication#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#id Publication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Sets the owner of the publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#owner Publication#owner}

---

##### `publish_param`<sup>Optional</sup> <a name="publish_param" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.publishParam"></a>

```python
publish_param: typing.List[str]
```

- *Type:* typing.List[str]

Sets which DML operations will be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#publish_param Publication#publish_param}

---

##### `publish_via_partition_root_param`<sup>Optional</sup> <a name="publish_via_partition_root_param" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.publishViaPartitionRootParam"></a>

```python
publish_via_partition_root_param: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Sets whether changes in a partitioned table using the identity and schema of the partitioned table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#publish_via_partition_root_param Publication#publish_via_partition_root_param}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktf/provider-postgresql.publication.PublicationConfig.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

Sets the tables list to publish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/publication#tables Publication#tables}

---



