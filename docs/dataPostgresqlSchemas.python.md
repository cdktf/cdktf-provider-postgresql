# `dataPostgresqlSchemas` Submodule <a name="`dataPostgresqlSchemas` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlSchemas <a name="DataPostgresqlSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas postgresql_schemas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_schemas

dataPostgresqlSchemas.DataPostgresqlSchemas(
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
  include_system_schemas: typing.Union[bool, IResolvable] = None,
  like_all_patterns: typing.List[str] = None,
  like_any_patterns: typing.List[str] = None,
  not_like_all_patterns: typing.List[str] = None,
  regex_pattern: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.database">database</a></code> | <code>str</code> | The PostgreSQL database which will be queried for schema names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.includeSystemSchemas">include_system_schemas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.likeAllPatterns">like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.likeAnyPatterns">like_any_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.notLikeAllPatterns">not_like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.regexPattern">regex_pattern</a></code> | <code>str</code> | Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.database"></a>

- *Type:* str

The PostgreSQL database which will be queried for schema names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#database DataPostgresqlSchemas#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_system_schemas`<sup>Optional</sup> <a name="include_system_schemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.includeSystemSchemas"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#include_system_schemas DataPostgresqlSchemas#include_system_schemas}

---

##### `like_all_patterns`<sup>Optional</sup> <a name="like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.likeAllPatterns"></a>

- *Type:* typing.List[str]

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#like_all_patterns DataPostgresqlSchemas#like_all_patterns}

---

##### `like_any_patterns`<sup>Optional</sup> <a name="like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.likeAnyPatterns"></a>

- *Type:* typing.List[str]

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#like_any_patterns DataPostgresqlSchemas#like_any_patterns}

---

##### `not_like_all_patterns`<sup>Optional</sup> <a name="not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.notLikeAllPatterns"></a>

- *Type:* typing.List[str]

Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#not_like_all_patterns DataPostgresqlSchemas#not_like_all_patterns}

---

##### `regex_pattern`<sup>Optional</sup> <a name="regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.regexPattern"></a>

- *Type:* str

Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#regex_pattern DataPostgresqlSchemas#regex_pattern}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetIncludeSystemSchemas">reset_include_system_schemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAllPatterns">reset_like_all_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAnyPatterns">reset_like_any_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetNotLikeAllPatterns">reset_not_like_all_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetRegexPattern">reset_regex_pattern</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_system_schemas` <a name="reset_include_system_schemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetIncludeSystemSchemas"></a>

```python
def reset_include_system_schemas() -> None
```

##### `reset_like_all_patterns` <a name="reset_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAllPatterns"></a>

```python
def reset_like_all_patterns() -> None
```

##### `reset_like_any_patterns` <a name="reset_like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAnyPatterns"></a>

```python
def reset_like_any_patterns() -> None
```

##### `reset_not_like_all_patterns` <a name="reset_not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetNotLikeAllPatterns"></a>

```python
def reset_not_like_all_patterns() -> None
```

##### `reset_regex_pattern` <a name="reset_regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetRegexPattern"></a>

```python
def reset_regex_pattern() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPostgresqlSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_schemas

dataPostgresqlSchemas.DataPostgresqlSchemas.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_schemas

dataPostgresqlSchemas.DataPostgresqlSchemas.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_schemas

dataPostgresqlSchemas.DataPostgresqlSchemas.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_schemas

dataPostgresqlSchemas.DataPostgresqlSchemas.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPostgresqlSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPostgresqlSchemas to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPostgresqlSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPostgresqlSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput">include_system_schemas_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput">like_all_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput">like_any_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput">not_like_all_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput">regex_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas">include_system_schemas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns">like_all_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns">like_any_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns">not_like_all_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern">regex_pattern</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_system_schemas_input`<sup>Optional</sup> <a name="include_system_schemas_input" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput"></a>

```python
include_system_schemas_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `like_all_patterns_input`<sup>Optional</sup> <a name="like_all_patterns_input" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput"></a>

```python
like_all_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `like_any_patterns_input`<sup>Optional</sup> <a name="like_any_patterns_input" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput"></a>

```python
like_any_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_like_all_patterns_input`<sup>Optional</sup> <a name="not_like_all_patterns_input" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput"></a>

```python
not_like_all_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regex_pattern_input`<sup>Optional</sup> <a name="regex_pattern_input" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput"></a>

```python
regex_pattern_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_system_schemas`<sup>Required</sup> <a name="include_system_schemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas"></a>

```python
include_system_schemas: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `like_all_patterns`<sup>Required</sup> <a name="like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns"></a>

```python
like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `like_any_patterns`<sup>Required</sup> <a name="like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns"></a>

```python
like_any_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_like_all_patterns`<sup>Required</sup> <a name="not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns"></a>

```python
not_like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regex_pattern`<sup>Required</sup> <a name="regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern"></a>

```python
regex_pattern: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlSchemasConfig <a name="DataPostgresqlSchemasConfig" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import data_postgresql_schemas

dataPostgresqlSchemas.DataPostgresqlSchemasConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  id: str = None,
  include_system_schemas: typing.Union[bool, IResolvable] = None,
  like_all_patterns: typing.List[str] = None,
  like_any_patterns: typing.List[str] = None,
  not_like_all_patterns: typing.List[str] = None,
  regex_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database">database</a></code> | <code>str</code> | The PostgreSQL database which will be queried for schema names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas">include_system_schemas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns">like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns">like_any_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns">not_like_all_patterns</a></code> | <code>typing.List[str]</code> | Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern">regex_pattern</a></code> | <code>str</code> | Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The PostgreSQL database which will be queried for schema names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#database DataPostgresqlSchemas#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_system_schemas`<sup>Optional</sup> <a name="include_system_schemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas"></a>

```python
include_system_schemas: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#include_system_schemas DataPostgresqlSchemas#include_system_schemas}

---

##### `like_all_patterns`<sup>Optional</sup> <a name="like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns"></a>

```python
like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#like_all_patterns DataPostgresqlSchemas#like_all_patterns}

---

##### `like_any_patterns`<sup>Optional</sup> <a name="like_any_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns"></a>

```python
like_any_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#like_any_patterns DataPostgresqlSchemas#like_any_patterns}

---

##### `not_like_all_patterns`<sup>Optional</sup> <a name="not_like_all_patterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns"></a>

```python
not_like_all_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#not_like_all_patterns DataPostgresqlSchemas#not_like_all_patterns}

---

##### `regex_pattern`<sup>Optional</sup> <a name="regex_pattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern"></a>

```python
regex_pattern: str
```

- *Type:* str

Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/schemas#regex_pattern DataPostgresqlSchemas#regex_pattern}

---



