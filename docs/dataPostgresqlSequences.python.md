# `dataPostgresqlSequences` Submodule <a name="`dataPostgresqlSequences` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlSequences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlSequences <a name="DataPostgresqlSequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences postgresql_sequences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_sequences

dataPostgresqlSequences.DataPostgresqlSequences(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  id: str = None,
  like_all_patterns: typing.List[str] = None,
  like_any_patterns: typing.List[str] = None,
  not_like_all_patterns: typing.List[str] = None,
  regex_pattern: str = None,
  schemas: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.database">database</a></code> | <code>str</code> | The PostgreSQL database which will be queried for sequence names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.likeAllPatterns">like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.likeAnyPatterns">like_any_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.notLikeAllPatterns">not_like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.regexPattern">regex_pattern</a></code> | <code>str</code> | Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.database"></a>

- *Type:* str

The PostgreSQL database which will be queried for sequence names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#database DataPostgresqlSequences#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like_all_patterns`<sup>Optional</sup> <a name="like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.likeAllPatterns"></a>

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#like_all_patterns DataPostgresqlSequences#like_all_patterns}

---

##### `like_any_patterns`<sup>Optional</sup> <a name="like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.likeAnyPatterns"></a>

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#like_any_patterns DataPostgresqlSequences#like_any_patterns}

---

##### `not_like_all_patterns`<sup>Optional</sup> <a name="not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.notLikeAllPatterns"></a>

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#not_like_all_patterns DataPostgresqlSequences#not_like_all_patterns}

---

##### `regex_pattern`<sup>Optional</sup> <a name="regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.regexPattern"></a>

- *Type:* str

Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#regex_pattern DataPostgresqlSequences#regex_pattern}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#schemas DataPostgresqlSequences#schemas}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAllPatterns">reset_like_all_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAnyPatterns">reset_like_any_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetNotLikeAllPatterns">reset_not_like_all_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetRegexPattern">reset_regex_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetSchemas">reset_schemas</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_like_all_patterns` <a name="reset_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAllPatterns"></a>

```python
def reset_like_all_patterns() -> None
```

##### `reset_like_any_patterns` <a name="reset_like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAnyPatterns"></a>

```python
def reset_like_any_patterns() -> None
```

##### `reset_not_like_all_patterns` <a name="reset_not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetNotLikeAllPatterns"></a>

```python
def reset_not_like_all_patterns() -> None
```

##### `reset_regex_pattern` <a name="reset_regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetRegexPattern"></a>

```python
def reset_regex_pattern() -> None
```

##### `reset_schemas` <a name="reset_schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetSchemas"></a>

```python
def reset_schemas() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPostgresqlSequences resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_sequences

dataPostgresqlSequences.DataPostgresqlSequences.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_sequences

dataPostgresqlSequences.DataPostgresqlSequences.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_sequences

dataPostgresqlSequences.DataPostgresqlSequences.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_sequences

dataPostgresqlSequences.DataPostgresqlSequences.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPostgresqlSequences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPostgresqlSequences to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPostgresqlSequences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPostgresqlSequences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.sequences">sequences</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList">DataPostgresqlSequencesSequencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatternsInput">like_all_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatternsInput">like_any_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatternsInput">not_like_all_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPatternInput">regex_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatterns">like_all_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatterns">like_any_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatterns">not_like_all_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPattern">regex_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `sequences`<sup>Required</sup> <a name="sequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.sequences"></a>

```python
sequences: DataPostgresqlSequencesSequencesList
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList">DataPostgresqlSequencesSequencesList</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `like_all_patterns_input`<sup>Optional</sup> <a name="like_all_patterns_input" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatternsInput"></a>

```python
like_all_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `like_any_patterns_input`<sup>Optional</sup> <a name="like_any_patterns_input" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatternsInput"></a>

```python
like_any_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_like_all_patterns_input`<sup>Optional</sup> <a name="not_like_all_patterns_input" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatternsInput"></a>

```python
not_like_all_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regex_pattern_input`<sup>Optional</sup> <a name="regex_pattern_input" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPatternInput"></a>

```python
regex_pattern_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like_all_patterns`<sup>Required</sup> <a name="like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatterns"></a>

```python
like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `like_any_patterns`<sup>Required</sup> <a name="like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatterns"></a>

```python
like_any_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_like_all_patterns`<sup>Required</sup> <a name="not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatterns"></a>

```python
not_like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regex_pattern`<sup>Required</sup> <a name="regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPattern"></a>

```python
regex_pattern: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlSequencesConfig <a name="DataPostgresqlSequencesConfig" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_sequences

dataPostgresqlSequences.DataPostgresqlSequencesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  id: str = None,
  like_all_patterns: typing.List[str] = None,
  like_any_patterns: typing.List[str] = None,
  not_like_all_patterns: typing.List[str] = None,
  regex_pattern: str = None,
  schemas: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.database">database</a></code> | <code>str</code> | The PostgreSQL database which will be queried for sequence names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAllPatterns">like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAnyPatterns">like_any_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.notLikeAllPatterns">not_like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.regexPattern">regex_pattern</a></code> | <code>str</code> | Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The PostgreSQL database which will be queried for sequence names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#database DataPostgresqlSequences#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like_all_patterns`<sup>Optional</sup> <a name="like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAllPatterns"></a>

```python
like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#like_all_patterns DataPostgresqlSequences#like_all_patterns}

---

##### `like_any_patterns`<sup>Optional</sup> <a name="like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAnyPatterns"></a>

```python
like_any_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#like_any_patterns DataPostgresqlSequences#like_any_patterns}

---

##### `not_like_all_patterns`<sup>Optional</sup> <a name="not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.notLikeAllPatterns"></a>

```python
not_like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#not_like_all_patterns DataPostgresqlSequences#not_like_all_patterns}

---

##### `regex_pattern`<sup>Optional</sup> <a name="regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.regexPattern"></a>

```python
regex_pattern: str
```

- *Type:* str

Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#regex_pattern DataPostgresqlSequences#regex_pattern}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/sequences#schemas DataPostgresqlSequences#schemas}

---

### DataPostgresqlSequencesSequences <a name="DataPostgresqlSequencesSequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_sequences

dataPostgresqlSequences.DataPostgresqlSequencesSequences()
```


## Classes <a name="Classes" id="Classes"></a>

### DataPostgresqlSequencesSequencesList <a name="DataPostgresqlSequencesSequencesList" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_sequences

dataPostgresqlSequences.DataPostgresqlSequencesSequencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPostgresqlSequencesSequencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPostgresqlSequencesSequencesOutputReference <a name="DataPostgresqlSequencesSequencesOutputReference" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_sequences

dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.objectName">object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences">DataPostgresqlSequencesSequences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.internalValue"></a>

```python
internal_value: DataPostgresqlSequencesSequences
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences">DataPostgresqlSequencesSequences</a>

---



