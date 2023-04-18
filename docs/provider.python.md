# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-postgresql.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlProvider <a name="PostgresqlProvider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import provider

provider.PostgresqlProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  aws_rds_iam_auth: typing.Union[bool, IResolvable] = None,
  aws_rds_iam_profile: str = None,
  aws_rds_iam_region: str = None,
  clientcert: PostgresqlProviderClientcert = None,
  connect_timeout: typing.Union[int, float] = None,
  database: str = None,
  database_username: str = None,
  expected_version: str = None,
  host: str = None,
  max_connections: typing.Union[int, float] = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  scheme: str = None,
  sslmode: str = None,
  ssl_mode: str = None,
  sslrootcert: str = None,
  superuser: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamAuth">aws_rds_iam_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamProfile">aws_rds_iam_profile</a></code> | <code>str</code> | AWS profile to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamRegion">aws_rds_iam_region</a></code> | <code>str</code> | AWS region to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.clientcert">clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | clientcert block. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.database">database</a></code> | <code>str</code> | The name of the database to connect to in order to conenct to (defaults to `postgres`). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.databaseUsername">database_username</a></code> | <code>str</code> | Database username associated to the connected user (for user name maps). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.expectedVersion">expected_version</a></code> | <code>str</code> | Specify the expected version of PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.host">host</a></code> | <code>str</code> | Name of PostgreSQL server address to connect to. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of connections to establish to the database. Zero means unlimited. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | Password to be used if the PostgreSQL server demands password authentication. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#scheme PostgresqlProvider#scheme}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslmode">sslmode</a></code> | <code>str</code> | This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#ssl_mode PostgresqlProvider#ssl_mode}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslrootcert">sslrootcert</a></code> | <code>str</code> | The SSL server root certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.superuser">superuser</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.username">username</a></code> | <code>str</code> | PostgreSQL user name to connect as. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#alias PostgresqlProvider#alias}

---

##### `aws_rds_iam_auth`<sup>Optional</sup> <a name="aws_rds_iam_auth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#aws_rds_iam_auth PostgresqlProvider#aws_rds_iam_auth}

---

##### `aws_rds_iam_profile`<sup>Optional</sup> <a name="aws_rds_iam_profile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamProfile"></a>

- *Type:* str

AWS profile to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#aws_rds_iam_profile PostgresqlProvider#aws_rds_iam_profile}

---

##### `aws_rds_iam_region`<sup>Optional</sup> <a name="aws_rds_iam_region" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamRegion"></a>

- *Type:* str

AWS region to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#aws_rds_iam_region PostgresqlProvider#aws_rds_iam_region}

---

##### `clientcert`<sup>Optional</sup> <a name="clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.clientcert"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

clientcert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#clientcert PostgresqlProvider#clientcert}

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.connectTimeout"></a>

- *Type:* typing.Union[int, float]

Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#connect_timeout PostgresqlProvider#connect_timeout}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.database"></a>

- *Type:* str

The name of the database to connect to in order to conenct to (defaults to `postgres`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#database PostgresqlProvider#database}

---

##### `database_username`<sup>Optional</sup> <a name="database_username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.databaseUsername"></a>

- *Type:* str

Database username associated to the connected user (for user name maps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#database_username PostgresqlProvider#database_username}

---

##### `expected_version`<sup>Optional</sup> <a name="expected_version" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.expectedVersion"></a>

- *Type:* str

Specify the expected version of PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#expected_version PostgresqlProvider#expected_version}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.host"></a>

- *Type:* str

Name of PostgreSQL server address to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#host PostgresqlProvider#host}

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.maxConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of connections to establish to the database. Zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#max_connections PostgresqlProvider#max_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.password"></a>

- *Type:* str

Password to be used if the PostgreSQL server demands password authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#password PostgresqlProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#port PostgresqlProvider#port}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scheme"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#scheme PostgresqlProvider#scheme}.

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslmode"></a>

- *Type:* str

This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#sslmode PostgresqlProvider#sslmode}

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#ssl_mode PostgresqlProvider#ssl_mode}.

---

##### `sslrootcert`<sup>Optional</sup> <a name="sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslrootcert"></a>

- *Type:* str

The SSL server root certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#sslrootcert PostgresqlProvider#sslrootcert}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.superuser"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#superuser PostgresqlProvider#superuser}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.username"></a>

- *Type:* str

PostgreSQL user name to connect as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#username PostgresqlProvider#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamAuth">reset_aws_rds_iam_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProfile">reset_aws_rds_iam_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamRegion">reset_aws_rds_iam_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetClientcert">reset_clientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabaseUsername">reset_database_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetExpectedVersion">reset_expected_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetMaxConnections">reset_max_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslmode">reset_sslmode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslMode">reset_ssl_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslrootcert">reset_sslrootcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSuperuser">reset_superuser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_aws_rds_iam_auth` <a name="reset_aws_rds_iam_auth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamAuth"></a>

```python
def reset_aws_rds_iam_auth() -> None
```

##### `reset_aws_rds_iam_profile` <a name="reset_aws_rds_iam_profile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProfile"></a>

```python
def reset_aws_rds_iam_profile() -> None
```

##### `reset_aws_rds_iam_region` <a name="reset_aws_rds_iam_region" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamRegion"></a>

```python
def reset_aws_rds_iam_region() -> None
```

##### `reset_clientcert` <a name="reset_clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetClientcert"></a>

```python
def reset_clientcert() -> None
```

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_database_username` <a name="reset_database_username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabaseUsername"></a>

```python
def reset_database_username() -> None
```

##### `reset_expected_version` <a name="reset_expected_version" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetExpectedVersion"></a>

```python
def reset_expected_version() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_max_connections` <a name="reset_max_connections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetMaxConnections"></a>

```python
def reset_max_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_sslmode` <a name="reset_sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslmode"></a>

```python
def reset_sslmode() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```

##### `reset_sslrootcert` <a name="reset_sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslrootcert"></a>

```python
def reset_sslrootcert() -> None
```

##### `reset_superuser` <a name="reset_superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSuperuser"></a>

```python
def reset_superuser() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import provider

provider.PostgresqlProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import provider

provider.PostgresqlProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_postgresql import provider

provider.PostgresqlProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput">aws_rds_iam_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput">aws_rds_iam_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput">aws_rds_iam_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput">clientcert_input</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput">database_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput">expected_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput">sslmode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput">sslrootcert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuserInput">superuser_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth">aws_rds_iam_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile">aws_rds_iam_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion">aws_rds_iam_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcert">clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername">database_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion">expected_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmode">sslmode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert">sslrootcert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuser">superuser</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `aws_rds_iam_auth_input`<sup>Optional</sup> <a name="aws_rds_iam_auth_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput"></a>

```python
aws_rds_iam_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_rds_iam_profile_input`<sup>Optional</sup> <a name="aws_rds_iam_profile_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput"></a>

```python
aws_rds_iam_profile_input: str
```

- *Type:* str

---

##### `aws_rds_iam_region_input`<sup>Optional</sup> <a name="aws_rds_iam_region_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput"></a>

```python
aws_rds_iam_region_input: str
```

- *Type:* str

---

##### `clientcert_input`<sup>Optional</sup> <a name="clientcert_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput"></a>

```python
clientcert_input: PostgresqlProviderClientcert
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput"></a>

```python
connect_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `database_username_input`<sup>Optional</sup> <a name="database_username_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput"></a>

```python
database_username_input: str
```

- *Type:* str

---

##### `expected_version_input`<sup>Optional</sup> <a name="expected_version_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput"></a>

```python
expected_version_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `sslmode_input`<sup>Optional</sup> <a name="sslmode_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput"></a>

```python
sslmode_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `sslrootcert_input`<sup>Optional</sup> <a name="sslrootcert_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput"></a>

```python
sslrootcert_input: str
```

- *Type:* str

---

##### `superuser_input`<sup>Optional</sup> <a name="superuser_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuserInput"></a>

```python
superuser_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `aws_rds_iam_auth`<sup>Optional</sup> <a name="aws_rds_iam_auth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth"></a>

```python
aws_rds_iam_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_rds_iam_profile`<sup>Optional</sup> <a name="aws_rds_iam_profile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile"></a>

```python
aws_rds_iam_profile: str
```

- *Type:* str

---

##### `aws_rds_iam_region`<sup>Optional</sup> <a name="aws_rds_iam_region" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion"></a>

```python
aws_rds_iam_region: str
```

- *Type:* str

---

##### `clientcert`<sup>Optional</sup> <a name="clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcert"></a>

```python
clientcert: PostgresqlProviderClientcert
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `database_username`<sup>Optional</sup> <a name="database_username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername"></a>

```python
database_username: str
```

- *Type:* str

---

##### `expected_version`<sup>Optional</sup> <a name="expected_version" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion"></a>

```python
expected_version: str
```

- *Type:* str

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmode"></a>

```python
sslmode: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `sslrootcert`<sup>Optional</sup> <a name="sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert"></a>

```python
sslrootcert: str
```

- *Type:* str

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuser"></a>

```python
superuser: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlProviderClientcert <a name="PostgresqlProviderClientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import provider

provider.PostgresqlProviderClientcert(
  cert: str,
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert">cert</a></code> | <code>str</code> | The SSL client certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.key">key</a></code> | <code>str</code> | The SSL client certificate private key file path. The file must contain PEM encoded data. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert"></a>

```python
cert: str
```

- *Type:* str

The SSL client certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#cert PostgresqlProvider#cert}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.key"></a>

```python
key: str
```

- *Type:* str

The SSL client certificate private key file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#key PostgresqlProvider#key}

---

### PostgresqlProviderConfig <a name="PostgresqlProviderConfig" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import provider

provider.PostgresqlProviderConfig(
  alias: str = None,
  aws_rds_iam_auth: typing.Union[bool, IResolvable] = None,
  aws_rds_iam_profile: str = None,
  aws_rds_iam_region: str = None,
  clientcert: PostgresqlProviderClientcert = None,
  connect_timeout: typing.Union[int, float] = None,
  database: str = None,
  database_username: str = None,
  expected_version: str = None,
  host: str = None,
  max_connections: typing.Union[int, float] = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  scheme: str = None,
  sslmode: str = None,
  ssl_mode: str = None,
  sslrootcert: str = None,
  superuser: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth">aws_rds_iam_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile">aws_rds_iam_profile</a></code> | <code>str</code> | AWS profile to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion">aws_rds_iam_region</a></code> | <code>str</code> | AWS region to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert">clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | clientcert block. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.database">database</a></code> | <code>str</code> | The name of the database to connect to in order to conenct to (defaults to `postgres`). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername">database_username</a></code> | <code>str</code> | Database username associated to the connected user (for user name maps). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion">expected_version</a></code> | <code>str</code> | Specify the expected version of PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.host">host</a></code> | <code>str</code> | Name of PostgreSQL server address to connect to. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of connections to establish to the database. Zero means unlimited. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.password">password</a></code> | <code>str</code> | Password to be used if the PostgreSQL server demands password authentication. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#scheme PostgresqlProvider#scheme}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode">sslmode</a></code> | <code>str</code> | This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#ssl_mode PostgresqlProvider#ssl_mode}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert">sslrootcert</a></code> | <code>str</code> | The SSL server root certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser">superuser</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.username">username</a></code> | <code>str</code> | PostgreSQL user name to connect as. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#alias PostgresqlProvider#alias}

---

##### `aws_rds_iam_auth`<sup>Optional</sup> <a name="aws_rds_iam_auth" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth"></a>

```python
aws_rds_iam_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#aws_rds_iam_auth PostgresqlProvider#aws_rds_iam_auth}

---

##### `aws_rds_iam_profile`<sup>Optional</sup> <a name="aws_rds_iam_profile" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile"></a>

```python
aws_rds_iam_profile: str
```

- *Type:* str

AWS profile to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#aws_rds_iam_profile PostgresqlProvider#aws_rds_iam_profile}

---

##### `aws_rds_iam_region`<sup>Optional</sup> <a name="aws_rds_iam_region" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion"></a>

```python
aws_rds_iam_region: str
```

- *Type:* str

AWS region to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#aws_rds_iam_region PostgresqlProvider#aws_rds_iam_region}

---

##### `clientcert`<sup>Optional</sup> <a name="clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert"></a>

```python
clientcert: PostgresqlProviderClientcert
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

clientcert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#clientcert PostgresqlProvider#clientcert}

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#connect_timeout PostgresqlProvider#connect_timeout}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The name of the database to connect to in order to conenct to (defaults to `postgres`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#database PostgresqlProvider#database}

---

##### `database_username`<sup>Optional</sup> <a name="database_username" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername"></a>

```python
database_username: str
```

- *Type:* str

Database username associated to the connected user (for user name maps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#database_username PostgresqlProvider#database_username}

---

##### `expected_version`<sup>Optional</sup> <a name="expected_version" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion"></a>

```python
expected_version: str
```

- *Type:* str

Specify the expected version of PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#expected_version PostgresqlProvider#expected_version}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Name of PostgreSQL server address to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#host PostgresqlProvider#host}

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of connections to establish to the database. Zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#max_connections PostgresqlProvider#max_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password to be used if the PostgreSQL server demands password authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#password PostgresqlProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#port PostgresqlProvider#port}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#scheme PostgresqlProvider#scheme}.

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode"></a>

```python
sslmode: str
```

- *Type:* str

This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#sslmode PostgresqlProvider#sslmode}

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#ssl_mode PostgresqlProvider#ssl_mode}.

---

##### `sslrootcert`<sup>Optional</sup> <a name="sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert"></a>

```python
sslrootcert: str
```

- *Type:* str

The SSL server root certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#sslrootcert PostgresqlProvider#sslrootcert}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser"></a>

```python
superuser: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#superuser PostgresqlProvider#superuser}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.username"></a>

```python
username: str
```

- *Type:* str

PostgreSQL user name to connect as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs#username PostgresqlProvider#username}

---



