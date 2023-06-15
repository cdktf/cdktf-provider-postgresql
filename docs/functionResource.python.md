# `postgresql_function`

Refer to the Terraform Registory for docs: [`postgresql_function`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function).

# `functionResource` Submodule <a name="`functionResource` Submodule" id="@cdktf/provider-postgresql.functionResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionResource <a name="FunctionResource" id="@cdktf/provider-postgresql.functionResource.FunctionResource"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function postgresql_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import function_resource

functionResource.FunctionResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  body: str,
  name: str,
  arg: typing.Union[IResolvable, typing.List[FunctionResourceArg]] = None,
  database: str = None,
  drop_cascade: typing.Union[bool, IResolvable] = None,
  id: str = None,
  language: str = None,
  returns: str = None,
  schema: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.body">body</a></code> | <code>str</code> | Body of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.arg">arg</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]]</code> | arg block. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.database">database</a></code> | <code>str</code> | The database where the function is located. If not specified, the provider default database is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.dropCascade">drop_cascade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.language">language</a></code> | <code>str</code> | Language of theof the function. One of: internal, sql, c, plpgsql. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.returns">returns</a></code> | <code>str</code> | Function return type. If not specified, it will be calculated based on the output arguments. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.schema">schema</a></code> | <code>str</code> | Schema where the function is located. If not specified, the provider default schema is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.body"></a>

- *Type:* str

Body of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#body FunctionResource#body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.name"></a>

- *Type:* str

Name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#name FunctionResource#name}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.arg"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]]

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#arg FunctionResource#arg}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.database"></a>

- *Type:* str

The database where the function is located. If not specified, the provider default database is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#database FunctionResource#database}

---

##### `drop_cascade`<sup>Optional</sup> <a name="drop_cascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.dropCascade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#drop_cascade FunctionResource#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.language"></a>

- *Type:* str

Language of theof the function. One of: internal, sql, c, plpgsql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#language FunctionResource#language}

---

##### `returns`<sup>Optional</sup> <a name="returns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.returns"></a>

- *Type:* str

Function return type. If not specified, it will be calculated based on the output arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#returns FunctionResource#returns}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.schema"></a>

- *Type:* str

Schema where the function is located. If not specified, the provider default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#schema FunctionResource#schema}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.putArg">put_arg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetArg">reset_arg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetDropCascade">reset_drop_cascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetLanguage">reset_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetReturns">reset_returns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_arg` <a name="put_arg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg"></a>

```python
def put_arg(
  value: typing.Union[IResolvable, typing.List[FunctionResourceArg]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]]

---

##### `reset_arg` <a name="reset_arg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetArg"></a>

```python
def reset_arg() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_drop_cascade` <a name="reset_drop_cascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDropCascade"></a>

```python
def reset_drop_cascade() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetLanguage"></a>

```python
def reset_language() -> None
```

##### `reset_returns` <a name="reset_returns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetReturns"></a>

```python
def reset_returns() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetSchema"></a>

```python
def reset_schema() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import function_resource

functionResource.FunctionResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import function_resource

functionResource.FunctionResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_postgresql import function_resource

functionResource.FunctionResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg">arg</a></code> | <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput">arg_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput">drop_cascade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput">returns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade">drop_cascade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns">returns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arg`<sup>Required</sup> <a name="arg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg"></a>

```python
arg: FunctionResourceArgList
```

- *Type:* <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a>

---

##### `arg_input`<sup>Optional</sup> <a name="arg_input" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput"></a>

```python
arg_input: typing.Union[IResolvable, typing.List[FunctionResourceArg]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]]

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `drop_cascade_input`<sup>Optional</sup> <a name="drop_cascade_input" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput"></a>

```python
drop_cascade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `returns_input`<sup>Optional</sup> <a name="returns_input" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput"></a>

```python
returns_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `drop_cascade`<sup>Required</sup> <a name="drop_cascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade"></a>

```python
drop_cascade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `returns`<sup>Required</sup> <a name="returns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns"></a>

```python
returns: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionResourceArg <a name="FunctionResourceArg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import function_resource

functionResource.FunctionResourceArg(
  type: str,
  default: str = None,
  mode: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type">type</a></code> | <code>str</code> | The argument type. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default">default</a></code> | <code>str</code> | An expression to be used as default value if the parameter is not specified. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode">mode</a></code> | <code>str</code> | The argument mode. One of: IN, OUT, INOUT, or VARIADIC. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name">name</a></code> | <code>str</code> | The argument name. The name may be required for some languages or depending on the argument mode. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type"></a>

```python
type: str
```

- *Type:* str

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#type FunctionResource#type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default"></a>

```python
default: str
```

- *Type:* str

An expression to be used as default value if the parameter is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#default FunctionResource#default}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode"></a>

```python
mode: str
```

- *Type:* str

The argument mode. One of: IN, OUT, INOUT, or VARIADIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#mode FunctionResource#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name"></a>

```python
name: str
```

- *Type:* str

The argument name. The name may be required for some languages or depending on the argument mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#name FunctionResource#name}

---

### FunctionResourceConfig <a name="FunctionResourceConfig" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import function_resource

functionResource.FunctionResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  body: str,
  name: str,
  arg: typing.Union[IResolvable, typing.List[FunctionResourceArg]] = None,
  database: str = None,
  drop_cascade: typing.Union[bool, IResolvable] = None,
  id: str = None,
  language: str = None,
  returns: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body">body</a></code> | <code>str</code> | Body of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name">name</a></code> | <code>str</code> | Name of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg">arg</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]]</code> | arg block. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database">database</a></code> | <code>str</code> | The database where the function is located. If not specified, the provider default database is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade">drop_cascade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language">language</a></code> | <code>str</code> | Language of theof the function. One of: internal, sql, c, plpgsql. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns">returns</a></code> | <code>str</code> | Function return type. If not specified, it will be calculated based on the output arguments. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema">schema</a></code> | <code>str</code> | Schema where the function is located. If not specified, the provider default schema is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Body of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#body FunctionResource#body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#name FunctionResource#name}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg"></a>

```python
arg: typing.Union[IResolvable, typing.List[FunctionResourceArg]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]]

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#arg FunctionResource#arg}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database where the function is located. If not specified, the provider default database is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#database FunctionResource#database}

---

##### `drop_cascade`<sup>Optional</sup> <a name="drop_cascade" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade"></a>

```python
drop_cascade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#drop_cascade FunctionResource#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language"></a>

```python
language: str
```

- *Type:* str

Language of theof the function. One of: internal, sql, c, plpgsql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#language FunctionResource#language}

---

##### `returns`<sup>Optional</sup> <a name="returns" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns"></a>

```python
returns: str
```

- *Type:* str

Function return type. If not specified, it will be calculated based on the output arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#returns FunctionResource#returns}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Schema where the function is located. If not specified, the provider default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/function#schema FunctionResource#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionResourceArgList <a name="FunctionResourceArgList" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import function_resource

functionResource.FunctionResourceArgList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionResourceArgOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionResourceArg]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]]

---


### FunctionResourceArgOutputReference <a name="FunctionResourceArgOutputReference" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import function_resource

functionResource.FunctionResourceArgOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionResourceArg]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>]

---



