# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-postgresql.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlProvider <a name="PostgresqlProvider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.provider.PostgresqlProvider;

PostgresqlProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .awsRdsIamAuth(java.lang.Boolean|IResolvable)
//  .awsRdsIamProfile(java.lang.String)
//  .awsRdsIamProviderRoleArn(java.lang.String)
//  .awsRdsIamRegion(java.lang.String)
//  .azureIdentityAuth(java.lang.Boolean|IResolvable)
//  .azureTenantId(java.lang.String)
//  .clientcert(PostgresqlProviderClientcert)
//  .connectTimeout(java.lang.Number)
//  .database(java.lang.String)
//  .databaseUsername(java.lang.String)
//  .expectedVersion(java.lang.String)
//  .gcpIamImpersonateServiceAccount(java.lang.String)
//  .host(java.lang.String)
//  .maxConnections(java.lang.Number)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .scheme(java.lang.String)
//  .sslmode(java.lang.String)
//  .sslMode(java.lang.String)
//  .sslrootcert(java.lang.String)
//  .superuser(java.lang.Boolean|IResolvable)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamAuth">awsRdsIamAuth</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamProfile">awsRdsIamProfile</a></code> | <code>java.lang.String</code> | AWS profile to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamProviderRoleArn">awsRdsIamProviderRoleArn</a></code> | <code>java.lang.String</code> | AWS IAM role to assume for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamRegion">awsRdsIamRegion</a></code> | <code>java.lang.String</code> | AWS region to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.azureIdentityAuth">azureIdentityAuth</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use MS Azure identity OAuth token (see: https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-sign-in-azure-ad-authentication). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | MS Azure tenant ID (see: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config.html). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.clientcert">clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | clientcert block. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The name of the database to connect to in order to connect to (defaults to `postgres`). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.databaseUsername">databaseUsername</a></code> | <code>java.lang.String</code> | Database username associated to the connected user (for user name maps). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.expectedVersion">expectedVersion</a></code> | <code>java.lang.String</code> | Specify the expected version of PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.gcpIamImpersonateServiceAccount">gcpIamImpersonateServiceAccount</a></code> | <code>java.lang.String</code> | Service account to impersonate when using GCP IAM authentication. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Name of PostgreSQL server address to connect to. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | Maximum number of connections to establish to the database. Zero means unlimited. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password to be used if the PostgreSQL server demands password authentication. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#scheme PostgresqlProvider#scheme}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslmode">sslmode</a></code> | <code>java.lang.String</code> | This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#ssl_mode PostgresqlProvider#ssl_mode}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslrootcert">sslrootcert</a></code> | <code>java.lang.String</code> | The SSL server root certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.superuser">superuser</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | PostgreSQL user name to connect as. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#alias PostgresqlProvider#alias}

---

##### `awsRdsIamAuth`<sup>Optional</sup> <a name="awsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamAuth"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_auth PostgresqlProvider#aws_rds_iam_auth}

---

##### `awsRdsIamProfile`<sup>Optional</sup> <a name="awsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamProfile"></a>

- *Type:* java.lang.String

AWS profile to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_profile PostgresqlProvider#aws_rds_iam_profile}

---

##### `awsRdsIamProviderRoleArn`<sup>Optional</sup> <a name="awsRdsIamProviderRoleArn" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamProviderRoleArn"></a>

- *Type:* java.lang.String

AWS IAM role to assume for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_provider_role_arn PostgresqlProvider#aws_rds_iam_provider_role_arn}

---

##### `awsRdsIamRegion`<sup>Optional</sup> <a name="awsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.awsRdsIamRegion"></a>

- *Type:* java.lang.String

AWS region to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_region PostgresqlProvider#aws_rds_iam_region}

---

##### `azureIdentityAuth`<sup>Optional</sup> <a name="azureIdentityAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.azureIdentityAuth"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use MS Azure identity OAuth token (see: https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-sign-in-azure-ad-authentication).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#azure_identity_auth PostgresqlProvider#azure_identity_auth}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.azureTenantId"></a>

- *Type:* java.lang.String

MS Azure tenant ID (see: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#azure_tenant_id PostgresqlProvider#azure_tenant_id}

---

##### `clientcert`<sup>Optional</sup> <a name="clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.clientcert"></a>

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

clientcert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#clientcert PostgresqlProvider#clientcert}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.connectTimeout"></a>

- *Type:* java.lang.Number

Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#connect_timeout PostgresqlProvider#connect_timeout}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The name of the database to connect to in order to connect to (defaults to `postgres`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#database PostgresqlProvider#database}

---

##### `databaseUsername`<sup>Optional</sup> <a name="databaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.databaseUsername"></a>

- *Type:* java.lang.String

Database username associated to the connected user (for user name maps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#database_username PostgresqlProvider#database_username}

---

##### `expectedVersion`<sup>Optional</sup> <a name="expectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.expectedVersion"></a>

- *Type:* java.lang.String

Specify the expected version of PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#expected_version PostgresqlProvider#expected_version}

---

##### `gcpIamImpersonateServiceAccount`<sup>Optional</sup> <a name="gcpIamImpersonateServiceAccount" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.gcpIamImpersonateServiceAccount"></a>

- *Type:* java.lang.String

Service account to impersonate when using GCP IAM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#gcp_iam_impersonate_service_account PostgresqlProvider#gcp_iam_impersonate_service_account}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Name of PostgreSQL server address to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#host PostgresqlProvider#host}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.maxConnections"></a>

- *Type:* java.lang.Number

Maximum number of connections to establish to the database. Zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#max_connections PostgresqlProvider#max_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password to be used if the PostgreSQL server demands password authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#password PostgresqlProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#port PostgresqlProvider#port}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.scheme"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#scheme PostgresqlProvider#scheme}.

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslmode"></a>

- *Type:* java.lang.String

This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#sslmode PostgresqlProvider#sslmode}

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#ssl_mode PostgresqlProvider#ssl_mode}.

---

##### `sslrootcert`<sup>Optional</sup> <a name="sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.sslrootcert"></a>

- *Type:* java.lang.String

The SSL server root certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#sslrootcert PostgresqlProvider#sslrootcert}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.superuser"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#superuser PostgresqlProvider#superuser}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.Initializer.parameter.username"></a>

- *Type:* java.lang.String

PostgreSQL user name to connect as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#username PostgresqlProvider#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamAuth">resetAwsRdsIamAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProfile">resetAwsRdsIamProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProviderRoleArn">resetAwsRdsIamProviderRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamRegion">resetAwsRdsIamRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAzureIdentityAuth">resetAzureIdentityAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetClientcert">resetClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabaseUsername">resetDatabaseUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetExpectedVersion">resetExpectedVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetGcpIamImpersonateServiceAccount">resetGcpIamImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslmode">resetSslmode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslrootcert">resetSslrootcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSuperuser">resetSuperuser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAwsRdsIamAuth` <a name="resetAwsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamAuth"></a>

```java
public void resetAwsRdsIamAuth()
```

##### `resetAwsRdsIamProfile` <a name="resetAwsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProfile"></a>

```java
public void resetAwsRdsIamProfile()
```

##### `resetAwsRdsIamProviderRoleArn` <a name="resetAwsRdsIamProviderRoleArn" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamProviderRoleArn"></a>

```java
public void resetAwsRdsIamProviderRoleArn()
```

##### `resetAwsRdsIamRegion` <a name="resetAwsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAwsRdsIamRegion"></a>

```java
public void resetAwsRdsIamRegion()
```

##### `resetAzureIdentityAuth` <a name="resetAzureIdentityAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAzureIdentityAuth"></a>

```java
public void resetAzureIdentityAuth()
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetAzureTenantId"></a>

```java
public void resetAzureTenantId()
```

##### `resetClientcert` <a name="resetClientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetClientcert"></a>

```java
public void resetClientcert()
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDatabaseUsername` <a name="resetDatabaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetDatabaseUsername"></a>

```java
public void resetDatabaseUsername()
```

##### `resetExpectedVersion` <a name="resetExpectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetExpectedVersion"></a>

```java
public void resetExpectedVersion()
```

##### `resetGcpIamImpersonateServiceAccount` <a name="resetGcpIamImpersonateServiceAccount" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetGcpIamImpersonateServiceAccount"></a>

```java
public void resetGcpIamImpersonateServiceAccount()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetHost"></a>

```java
public void resetHost()
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetMaxConnections"></a>

```java
public void resetMaxConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetPort"></a>

```java
public void resetPort()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetScheme"></a>

```java
public void resetScheme()
```

##### `resetSslmode` <a name="resetSslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslmode"></a>

```java
public void resetSslmode()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslMode"></a>

```java
public void resetSslMode()
```

##### `resetSslrootcert` <a name="resetSslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSslrootcert"></a>

```java
public void resetSslrootcert()
```

##### `resetSuperuser` <a name="resetSuperuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetSuperuser"></a>

```java
public void resetSuperuser()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.provider.PostgresqlProvider;

PostgresqlProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.provider.PostgresqlProvider;

PostgresqlProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.provider.PostgresqlProvider;

PostgresqlProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.provider.PostgresqlProvider;

PostgresqlProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresqlProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PostgresqlProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresqlProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresqlProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput">awsRdsIamAuthInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput">awsRdsIamProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProviderRoleArnInput">awsRdsIamProviderRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput">awsRdsIamRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuthInput">azureIdentityAuthInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput">clientcertInput</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput">databaseUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput">expectedVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.gcpIamImpersonateServiceAccountInput">gcpIamImpersonateServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput">sslmodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput">sslrootcertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuserInput">superuserInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth">awsRdsIamAuth</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile">awsRdsIamProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProviderRoleArn">awsRdsIamProviderRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion">awsRdsIamRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuth">azureIdentityAuth</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcert">clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername">databaseUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion">expectedVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.gcpIamImpersonateServiceAccount">gcpIamImpersonateServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmode">sslmode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert">sslrootcert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuser">superuser</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `awsRdsIamAuthInput`<sup>Optional</sup> <a name="awsRdsIamAuthInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuthInput"></a>

```java
public java.lang.Boolean|IResolvable getAwsRdsIamAuthInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsRdsIamProfileInput`<sup>Optional</sup> <a name="awsRdsIamProfileInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfileInput"></a>

```java
public java.lang.String getAwsRdsIamProfileInput();
```

- *Type:* java.lang.String

---

##### `awsRdsIamProviderRoleArnInput`<sup>Optional</sup> <a name="awsRdsIamProviderRoleArnInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProviderRoleArnInput"></a>

```java
public java.lang.String getAwsRdsIamProviderRoleArnInput();
```

- *Type:* java.lang.String

---

##### `awsRdsIamRegionInput`<sup>Optional</sup> <a name="awsRdsIamRegionInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegionInput"></a>

```java
public java.lang.String getAwsRdsIamRegionInput();
```

- *Type:* java.lang.String

---

##### `azureIdentityAuthInput`<sup>Optional</sup> <a name="azureIdentityAuthInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuthInput"></a>

```java
public java.lang.Boolean|IResolvable getAzureIdentityAuthInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureTenantIdInput"></a>

```java
public java.lang.String getAzureTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientcertInput`<sup>Optional</sup> <a name="clientcertInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcertInput"></a>

```java
public PostgresqlProviderClientcert getClientcertInput();
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeoutInput"></a>

```java
public java.lang.Number getConnectTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `databaseUsernameInput`<sup>Optional</sup> <a name="databaseUsernameInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsernameInput"></a>

```java
public java.lang.String getDatabaseUsernameInput();
```

- *Type:* java.lang.String

---

##### `expectedVersionInput`<sup>Optional</sup> <a name="expectedVersionInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersionInput"></a>

```java
public java.lang.String getExpectedVersionInput();
```

- *Type:* java.lang.String

---

##### `gcpIamImpersonateServiceAccountInput`<sup>Optional</sup> <a name="gcpIamImpersonateServiceAccountInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.gcpIamImpersonateServiceAccountInput"></a>

```java
public java.lang.String getGcpIamImpersonateServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnectionsInput"></a>

```java
public java.lang.Number getMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `sslmodeInput`<sup>Optional</sup> <a name="sslmodeInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmodeInput"></a>

```java
public java.lang.String getSslmodeInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `sslrootcertInput`<sup>Optional</sup> <a name="sslrootcertInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcertInput"></a>

```java
public java.lang.String getSslrootcertInput();
```

- *Type:* java.lang.String

---

##### `superuserInput`<sup>Optional</sup> <a name="superuserInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuserInput"></a>

```java
public java.lang.Boolean|IResolvable getSuperuserInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `awsRdsIamAuth`<sup>Optional</sup> <a name="awsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamAuth"></a>

```java
public java.lang.Boolean|IResolvable getAwsRdsIamAuth();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsRdsIamProfile`<sup>Optional</sup> <a name="awsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProfile"></a>

```java
public java.lang.String getAwsRdsIamProfile();
```

- *Type:* java.lang.String

---

##### `awsRdsIamProviderRoleArn`<sup>Optional</sup> <a name="awsRdsIamProviderRoleArn" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamProviderRoleArn"></a>

```java
public java.lang.String getAwsRdsIamProviderRoleArn();
```

- *Type:* java.lang.String

---

##### `awsRdsIamRegion`<sup>Optional</sup> <a name="awsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.awsRdsIamRegion"></a>

```java
public java.lang.String getAwsRdsIamRegion();
```

- *Type:* java.lang.String

---

##### `azureIdentityAuth`<sup>Optional</sup> <a name="azureIdentityAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureIdentityAuth"></a>

```java
public java.lang.Boolean|IResolvable getAzureIdentityAuth();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `clientcert`<sup>Optional</sup> <a name="clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.clientcert"></a>

```java
public PostgresqlProviderClientcert getClientcert();
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `databaseUsername`<sup>Optional</sup> <a name="databaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.databaseUsername"></a>

```java
public java.lang.String getDatabaseUsername();
```

- *Type:* java.lang.String

---

##### `expectedVersion`<sup>Optional</sup> <a name="expectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.expectedVersion"></a>

```java
public java.lang.String getExpectedVersion();
```

- *Type:* java.lang.String

---

##### `gcpIamImpersonateServiceAccount`<sup>Optional</sup> <a name="gcpIamImpersonateServiceAccount" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.gcpIamImpersonateServiceAccount"></a>

```java
public java.lang.String getGcpIamImpersonateServiceAccount();
```

- *Type:* java.lang.String

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslmode"></a>

```java
public java.lang.String getSslmode();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `sslrootcert`<sup>Optional</sup> <a name="sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.sslrootcert"></a>

```java
public java.lang.String getSslrootcert();
```

- *Type:* java.lang.String

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.superuser"></a>

```java
public java.lang.Boolean|IResolvable getSuperuser();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.provider.PostgresqlProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlProviderClientcert <a name="PostgresqlProviderClientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.provider.PostgresqlProviderClientcert;

PostgresqlProviderClientcert.builder()
    .cert(java.lang.String)
    .key(java.lang.String)
//  .sslinline(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert">cert</a></code> | <code>java.lang.String</code> | The SSL client certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.key">key</a></code> | <code>java.lang.String</code> | The SSL client certificate private key file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.sslinline">sslinline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Must be set to true if you are inlining the cert/key instead of using a file path. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

The SSL client certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#cert PostgresqlProvider#cert}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The SSL client certificate private key file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#key PostgresqlProvider#key}

---

##### `sslinline`<sup>Optional</sup> <a name="sslinline" id="@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert.property.sslinline"></a>

```java
public java.lang.Boolean|IResolvable getSslinline();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Must be set to true if you are inlining the cert/key instead of using a file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#sslinline PostgresqlProvider#sslinline}

---

### PostgresqlProviderConfig <a name="PostgresqlProviderConfig" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.provider.PostgresqlProviderConfig;

PostgresqlProviderConfig.builder()
//  .alias(java.lang.String)
//  .awsRdsIamAuth(java.lang.Boolean|IResolvable)
//  .awsRdsIamProfile(java.lang.String)
//  .awsRdsIamProviderRoleArn(java.lang.String)
//  .awsRdsIamRegion(java.lang.String)
//  .azureIdentityAuth(java.lang.Boolean|IResolvable)
//  .azureTenantId(java.lang.String)
//  .clientcert(PostgresqlProviderClientcert)
//  .connectTimeout(java.lang.Number)
//  .database(java.lang.String)
//  .databaseUsername(java.lang.String)
//  .expectedVersion(java.lang.String)
//  .gcpIamImpersonateServiceAccount(java.lang.String)
//  .host(java.lang.String)
//  .maxConnections(java.lang.Number)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .scheme(java.lang.String)
//  .sslmode(java.lang.String)
//  .sslMode(java.lang.String)
//  .sslrootcert(java.lang.String)
//  .superuser(java.lang.Boolean|IResolvable)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth">awsRdsIamAuth</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile">awsRdsIamProfile</a></code> | <code>java.lang.String</code> | AWS profile to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProviderRoleArn">awsRdsIamProviderRoleArn</a></code> | <code>java.lang.String</code> | AWS IAM role to assume for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion">awsRdsIamRegion</a></code> | <code>java.lang.String</code> | AWS region to use for IAM auth. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.azureIdentityAuth">azureIdentityAuth</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use MS Azure identity OAuth token (see: https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-sign-in-azure-ad-authentication). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | MS Azure tenant ID (see: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config.html). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert">clientcert</a></code> | <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a></code> | clientcert block. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.database">database</a></code> | <code>java.lang.String</code> | The name of the database to connect to in order to connect to (defaults to `postgres`). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername">databaseUsername</a></code> | <code>java.lang.String</code> | Database username associated to the connected user (for user name maps). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion">expectedVersion</a></code> | <code>java.lang.String</code> | Specify the expected version of PostgreSQL. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.gcpIamImpersonateServiceAccount">gcpIamImpersonateServiceAccount</a></code> | <code>java.lang.String</code> | Service account to impersonate when using GCP IAM authentication. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.host">host</a></code> | <code>java.lang.String</code> | Name of PostgreSQL server address to connect to. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | Maximum number of connections to establish to the database. Zero means unlimited. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password to be used if the PostgreSQL server demands password authentication. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#scheme PostgresqlProvider#scheme}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode">sslmode</a></code> | <code>java.lang.String</code> | This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#ssl_mode PostgresqlProvider#ssl_mode}. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert">sslrootcert</a></code> | <code>java.lang.String</code> | The SSL server root certificate file path. The file must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser">superuser</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres). |
| <code><a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.username">username</a></code> | <code>java.lang.String</code> | PostgreSQL user name to connect as. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#alias PostgresqlProvider#alias}

---

##### `awsRdsIamAuth`<sup>Optional</sup> <a name="awsRdsIamAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamAuth"></a>

```java
public java.lang.Boolean|IResolvable getAwsRdsIamAuth();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use rds_iam instead of password authentication (see: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_auth PostgresqlProvider#aws_rds_iam_auth}

---

##### `awsRdsIamProfile`<sup>Optional</sup> <a name="awsRdsIamProfile" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProfile"></a>

```java
public java.lang.String getAwsRdsIamProfile();
```

- *Type:* java.lang.String

AWS profile to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_profile PostgresqlProvider#aws_rds_iam_profile}

---

##### `awsRdsIamProviderRoleArn`<sup>Optional</sup> <a name="awsRdsIamProviderRoleArn" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamProviderRoleArn"></a>

```java
public java.lang.String getAwsRdsIamProviderRoleArn();
```

- *Type:* java.lang.String

AWS IAM role to assume for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_provider_role_arn PostgresqlProvider#aws_rds_iam_provider_role_arn}

---

##### `awsRdsIamRegion`<sup>Optional</sup> <a name="awsRdsIamRegion" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.awsRdsIamRegion"></a>

```java
public java.lang.String getAwsRdsIamRegion();
```

- *Type:* java.lang.String

AWS region to use for IAM auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#aws_rds_iam_region PostgresqlProvider#aws_rds_iam_region}

---

##### `azureIdentityAuth`<sup>Optional</sup> <a name="azureIdentityAuth" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.azureIdentityAuth"></a>

```java
public java.lang.Boolean|IResolvable getAzureIdentityAuth();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use MS Azure identity OAuth token (see: https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-sign-in-azure-ad-authentication).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#azure_identity_auth PostgresqlProvider#azure_identity_auth}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

MS Azure tenant ID (see: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#azure_tenant_id PostgresqlProvider#azure_tenant_id}

---

##### `clientcert`<sup>Optional</sup> <a name="clientcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.clientcert"></a>

```java
public PostgresqlProviderClientcert getClientcert();
```

- *Type:* <a href="#@cdktf/provider-postgresql.provider.PostgresqlProviderClientcert">PostgresqlProviderClientcert</a>

clientcert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#clientcert PostgresqlProvider#clientcert}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#connect_timeout PostgresqlProvider#connect_timeout}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The name of the database to connect to in order to connect to (defaults to `postgres`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#database PostgresqlProvider#database}

---

##### `databaseUsername`<sup>Optional</sup> <a name="databaseUsername" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.databaseUsername"></a>

```java
public java.lang.String getDatabaseUsername();
```

- *Type:* java.lang.String

Database username associated to the connected user (for user name maps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#database_username PostgresqlProvider#database_username}

---

##### `expectedVersion`<sup>Optional</sup> <a name="expectedVersion" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.expectedVersion"></a>

```java
public java.lang.String getExpectedVersion();
```

- *Type:* java.lang.String

Specify the expected version of PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#expected_version PostgresqlProvider#expected_version}

---

##### `gcpIamImpersonateServiceAccount`<sup>Optional</sup> <a name="gcpIamImpersonateServiceAccount" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.gcpIamImpersonateServiceAccount"></a>

```java
public java.lang.String getGcpIamImpersonateServiceAccount();
```

- *Type:* java.lang.String

Service account to impersonate when using GCP IAM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#gcp_iam_impersonate_service_account PostgresqlProvider#gcp_iam_impersonate_service_account}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Name of PostgreSQL server address to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#host PostgresqlProvider#host}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

Maximum number of connections to establish to the database. Zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#max_connections PostgresqlProvider#max_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password to be used if the PostgreSQL server demands password authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#password PostgresqlProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#port PostgresqlProvider#port}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#scheme PostgresqlProvider#scheme}.

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslmode"></a>

```java
public java.lang.String getSslmode();
```

- *Type:* java.lang.String

This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#sslmode PostgresqlProvider#sslmode}

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#ssl_mode PostgresqlProvider#ssl_mode}.

---

##### `sslrootcert`<sup>Optional</sup> <a name="sslrootcert" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.sslrootcert"></a>

```java
public java.lang.String getSslrootcert();
```

- *Type:* java.lang.String

The SSL server root certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#sslrootcert PostgresqlProvider#sslrootcert}

---

##### `superuser`<sup>Optional</sup> <a name="superuser" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.superuser"></a>

```java
public java.lang.Boolean|IResolvable getSuperuser();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#superuser PostgresqlProvider#superuser}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-postgresql.provider.PostgresqlProviderConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

PostgreSQL user name to connect as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs#username PostgresqlProvider#username}

---



