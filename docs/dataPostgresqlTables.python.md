# `data_postgresql_tables`

Refer to the Terraform Registory for docs: [`data_postgresql_tables`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables).

# `dataPostgresqlTables` Submodule <a name="`dataPostgresqlTables` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlTables <a name="DataPostgresqlTables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables postgresql_tables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_tables

dataPostgresqlTables.DataPostgresqlTables(
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
  id: str = None,
  like_all_patterns: typing.List[str] = None,
  like_any_patterns: typing.List[str] = None,
  not_like_all_patterns: typing.List[str] = None,
  regex_pattern: str = None,
  schemas: typing.List[str] = None,
  table_types: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.database">database</a></code> | <code>str</code> | The PostgreSQL database which will be queried for table names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.likeAllPatterns">like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.likeAnyPatterns">like_any_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.notLikeAllPatterns">not_like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.regexPattern">regex_pattern</a></code> | <code>str</code> | Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.tableTypes">table_types</a></code> | <code>typing.List[str]</code> | The PostgreSQL table types which will be queried for table names. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.database"></a>

- *Type:* str

The PostgreSQL database which will be queried for table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#database DataPostgresqlTables#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like_all_patterns`<sup>Optional</sup> <a name="like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.likeAllPatterns"></a>

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_all_patterns DataPostgresqlTables#like_all_patterns}

---

##### `like_any_patterns`<sup>Optional</sup> <a name="like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.likeAnyPatterns"></a>

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_any_patterns DataPostgresqlTables#like_any_patterns}

---

##### `not_like_all_patterns`<sup>Optional</sup> <a name="not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.notLikeAllPatterns"></a>

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#not_like_all_patterns DataPostgresqlTables#not_like_all_patterns}

---

##### `regex_pattern`<sup>Optional</sup> <a name="regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.regexPattern"></a>

- *Type:* str

Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#regex_pattern DataPostgresqlTables#regex_pattern}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#schemas DataPostgresqlTables#schemas}

---

##### `table_types`<sup>Optional</sup> <a name="table_types" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.tableTypes"></a>

- *Type:* typing.List[str]

The PostgreSQL table types which will be queried for table names.

Includes all table types by default. Use 'BASE TABLE' for normal tables only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#table_types DataPostgresqlTables#table_types}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAllPatterns">reset_like_all_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAnyPatterns">reset_like_any_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetNotLikeAllPatterns">reset_not_like_all_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetRegexPattern">reset_regex_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetSchemas">reset_schemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetTableTypes">reset_table_types</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_like_all_patterns` <a name="reset_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAllPatterns"></a>

```python
def reset_like_all_patterns() -> None
```

##### `reset_like_any_patterns` <a name="reset_like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAnyPatterns"></a>

```python
def reset_like_any_patterns() -> None
```

##### `reset_not_like_all_patterns` <a name="reset_not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetNotLikeAllPatterns"></a>

```python
def reset_not_like_all_patterns() -> None
```

##### `reset_regex_pattern` <a name="reset_regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetRegexPattern"></a>

```python
def reset_regex_pattern() -> None
```

##### `reset_schemas` <a name="reset_schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetSchemas"></a>

```python
def reset_schemas() -> None
```

##### `reset_table_types` <a name="reset_table_types" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetTableTypes"></a>

```python
def reset_table_types() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_tables

dataPostgresqlTables.DataPostgresqlTables.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_tables

dataPostgresqlTables.DataPostgresqlTables.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_tables

dataPostgresqlTables.DataPostgresqlTables.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tables">tables</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList">DataPostgresqlTablesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatternsInput">like_all_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatternsInput">like_any_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatternsInput">not_like_all_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPatternInput">regex_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypesInput">table_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatterns">like_all_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatterns">like_any_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatterns">not_like_all_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPattern">regex_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypes">table_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tables"></a>

```python
tables: DataPostgresqlTablesTablesList
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList">DataPostgresqlTablesTablesList</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `like_all_patterns_input`<sup>Optional</sup> <a name="like_all_patterns_input" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatternsInput"></a>

```python
like_all_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `like_any_patterns_input`<sup>Optional</sup> <a name="like_any_patterns_input" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatternsInput"></a>

```python
like_any_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_like_all_patterns_input`<sup>Optional</sup> <a name="not_like_all_patterns_input" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatternsInput"></a>

```python
not_like_all_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regex_pattern_input`<sup>Optional</sup> <a name="regex_pattern_input" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPatternInput"></a>

```python
regex_pattern_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_types_input`<sup>Optional</sup> <a name="table_types_input" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypesInput"></a>

```python
table_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like_all_patterns`<sup>Required</sup> <a name="like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatterns"></a>

```python
like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `like_any_patterns`<sup>Required</sup> <a name="like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatterns"></a>

```python
like_any_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_like_all_patterns`<sup>Required</sup> <a name="not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatterns"></a>

```python
not_like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regex_pattern`<sup>Required</sup> <a name="regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPattern"></a>

```python
regex_pattern: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_types`<sup>Required</sup> <a name="table_types" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypes"></a>

```python
table_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlTablesConfig <a name="DataPostgresqlTablesConfig" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_tables

dataPostgresqlTables.DataPostgresqlTablesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  id: str = None,
  like_all_patterns: typing.List[str] = None,
  like_any_patterns: typing.List[str] = None,
  not_like_all_patterns: typing.List[str] = None,
  regex_pattern: str = None,
  schemas: typing.List[str] = None,
  table_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.database">database</a></code> | <code>str</code> | The PostgreSQL database which will be queried for table names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAllPatterns">like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAnyPatterns">like_any_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.notLikeAllPatterns">not_like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.regexPattern">regex_pattern</a></code> | <code>str</code> | Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.tableTypes">table_types</a></code> | <code>typing.List[str]</code> | The PostgreSQL table types which will be queried for table names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The PostgreSQL database which will be queried for table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#database DataPostgresqlTables#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like_all_patterns`<sup>Optional</sup> <a name="like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAllPatterns"></a>

```python
like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_all_patterns DataPostgresqlTables#like_all_patterns}

---

##### `like_any_patterns`<sup>Optional</sup> <a name="like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAnyPatterns"></a>

```python
like_any_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_any_patterns DataPostgresqlTables#like_any_patterns}

---

##### `not_like_all_patterns`<sup>Optional</sup> <a name="not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.notLikeAllPatterns"></a>

```python
not_like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#not_like_all_patterns DataPostgresqlTables#not_like_all_patterns}

---

##### `regex_pattern`<sup>Optional</sup> <a name="regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.regexPattern"></a>

```python
regex_pattern: str
```

- *Type:* str

Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#regex_pattern DataPostgresqlTables#regex_pattern}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#schemas DataPostgresqlTables#schemas}

---

##### `table_types`<sup>Optional</sup> <a name="table_types" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.tableTypes"></a>

```python
table_types: typing.List[str]
```

- *Type:* typing.List[str]

The PostgreSQL table types which will be queried for table names.

Includes all table types by default. Use 'BASE TABLE' for normal tables only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#table_types DataPostgresqlTables#table_types}

---

### DataPostgresqlTablesTables <a name="DataPostgresqlTablesTables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_tables

dataPostgresqlTables.DataPostgresqlTablesTables()
```


## Classes <a name="Classes" id="Classes"></a>

### DataPostgresqlTablesTablesList <a name="DataPostgresqlTablesTablesList" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_tables

dataPostgresqlTables.DataPostgresqlTablesTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPostgresqlTablesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPostgresqlTablesTablesOutputReference <a name="DataPostgresqlTablesTablesOutputReference" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_tables

dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.objectName">object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.tableType">table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables">DataPostgresqlTablesTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_type`<sup>Required</sup> <a name="table_type" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.internalValue"></a>

```python
internal_value: DataPostgresqlTablesTables
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables">DataPostgresqlTablesTables</a>

---



